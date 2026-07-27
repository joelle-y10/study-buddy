/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import type { User } from '@supabase/supabase-js'
import { supabase } from '../lib/supabase'
import type {
  CalendarEvent, CardBucket, ConceptStat, Profile, SessionRecord, StruggleEntry,
} from '../types'

interface PersistedState {
  profile: Profile | null
  theme: 'light' | 'dark'
  selectedCourseId: string | null
  /** courseId -> conceptId -> stats */
  conceptStats: Record<string, Record<string, ConceptStat>>
  struggles: StruggleEntry[]
  sessions: SessionRecord[]
  /** courseId -> cardId -> bucket */
  cardBuckets: Record<string, Record<string, CardBucket>>
  events: CalendarEvent[]
  /** ISO dates (yyyy-mm-dd) with at least one study action, for streaks */
  activeDays: string[]
}

const STORAGE_KEY = 'studybuddy:v1'
/** Timestamp of the last local edit, used to decide local vs cloud on sign-in. */
const UPDATED_KEY = 'studybuddy:updatedAt'

export type SyncStatus = 'off' | 'syncing' | 'synced' | 'error'

const DEFAULT_STATE: PersistedState = {
  profile: null,
  theme: 'light',
  selectedCourseId: null,
  conceptStats: {},
  struggles: [],
  sessions: [],
  cardBuckets: {},
  events: [],
  activeDays: [],
}

function load(): PersistedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_STATE
    return { ...DEFAULT_STATE, ...(JSON.parse(raw) as Partial<PersistedState>) }
  } catch {
    return DEFAULT_STATE
  }
}

export function todayISO(): string {
  const d = new Date()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${m}-${day}`
}

interface CloudState {
  /** null when signed out or sync unavailable */
  user: User | null
  /** false until Supabase credentials are configured */
  syncAvailable: boolean
  syncStatus: SyncStatus
  lastSyncedAt: number | null
}

interface AppActions {
  /** returns an error message, 'CONFIRM_EMAIL', or null on success */
  signUp: (email: string, password: string) => Promise<string | null>
  signIn: (email: string, password: string) => Promise<string | null>
  signOut: () => Promise<void>
  setProfile: (p: Profile) => void
  setTheme: (t: 'light' | 'dark') => void
  setSelectedCourse: (id: string | null) => void
  recordAnswer: (courseId: string, conceptId: string, correct: boolean) => void
  addStruggle: (s: Omit<StruggleEntry, 'id' | 'createdAt' | 'resolved'>) => void
  resolveStruggle: (id: string) => void
  addSession: (s: Omit<SessionRecord, 'id' | 'finishedAt'>) => string
  rateSession: (id: string, rating: number) => void
  setCardBucket: (courseId: string, cardId: string, bucket: CardBucket) => void
  addEvent: (e: Omit<CalendarEvent, 'id'>) => void
  removeEvent: (id: string) => void
  resetAll: () => void
}

const Ctx = createContext<(PersistedState & CloudState & AppActions) | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PersistedState>(load)
  const [user, setUser] = useState<User | null>(null)
  const [syncStatus, setSyncStatus] = useState<SyncStatus>('off')
  const [lastSyncedAt, setLastSyncedAt] = useState<number | null>(null)
  /** set while adopting cloud state so we don't immediately push it back */
  const skipNextPush = useRef(false)

  // --- auth session tracking ---
  useEffect(() => {
    if (!supabase) return
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null))
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  // --- on sign-in: pull cloud state if it's newer than local ---
  useEffect(() => {
    if (!supabase || !user) {
      setSyncStatus('off')
      return
    }
    let cancelled = false
    const client = supabase
    ;(async () => {
      setSyncStatus('syncing')
      const { data, error } = await client
        .from('user_state')
        .select('state, updated_at')
        .eq('user_id', user.id)
        .maybeSingle()
      if (cancelled) return
      if (error) {
        setSyncStatus('error')
        return
      }
      const localAt = Number(localStorage.getItem(UPDATED_KEY) ?? 0)
      if (data && new Date(data.updated_at).getTime() > localAt) {
        skipNextPush.current = true
        setState({ ...DEFAULT_STATE, ...(data.state as Partial<PersistedState>) })
      }
      setSyncStatus('synced')
      setLastSyncedAt(Date.now())
    })()
    return () => {
      cancelled = true
    }
  }, [user])

  // --- persist locally always; push to cloud (debounced) when signed in ---
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    localStorage.setItem(UPDATED_KEY, String(Date.now()))
    if (!supabase || !user) return
    if (skipNextPush.current) {
      skipNextPush.current = false
      return
    }
    const client = supabase
    const uid = user.id
    const t = setTimeout(async () => {
      setSyncStatus('syncing')
      const { error } = await client
        .from('user_state')
        .upsert({ user_id: uid, state, updated_at: new Date().toISOString() })
      setSyncStatus(error ? 'error' : 'synced')
      if (!error) setLastSyncedAt(Date.now())
    }, 1500)
    return () => clearTimeout(t)
  }, [state, user])

  const signUp = useCallback(async (email: string, password: string) => {
    if (!supabase) return 'Cloud sync is not set up yet.'
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) return error.message
    if (!data.session) return 'CONFIRM_EMAIL'
    return null
  }, [])

  const signIn = useCallback(async (email: string, password: string) => {
    if (!supabase) return 'Cloud sync is not set up yet.'
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    return error ? error.message : null
  }, [])

  const signOut = useCallback(async () => {
    // Local progress stays on this device; only the session ends.
    await supabase?.auth.signOut()
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', state.theme === 'dark')
  }, [state.theme])

  const touchToday = (s: PersistedState): PersistedState => {
    const t = todayISO()
    return s.activeDays.includes(t) ? s : { ...s, activeDays: [...s.activeDays, t] }
  }

  const setProfile = useCallback((profile: Profile) => {
    setState((s) => ({ ...s, profile }))
  }, [])

  const setTheme = useCallback((theme: 'light' | 'dark') => {
    setState((s) => ({ ...s, theme }))
  }, [])

  const setSelectedCourse = useCallback((selectedCourseId: string | null) => {
    setState((s) => ({ ...s, selectedCourseId }))
  }, [])

  const recordAnswer = useCallback((courseId: string, conceptId: string, correct: boolean) => {
    setState((s) => {
      const course = s.conceptStats[courseId] ?? {}
      const prev = course[conceptId] ?? { attempts: 0, correct: 0, lastAt: 0 }
      const next: ConceptStat = {
        attempts: prev.attempts + 1,
        correct: prev.correct + (correct ? 1 : 0),
        lastAt: Date.now(),
      }
      return touchToday({
        ...s,
        conceptStats: { ...s.conceptStats, [courseId]: { ...course, [conceptId]: next } },
      })
    })
  }, [])

  const addStruggle = useCallback((partial: Omit<StruggleEntry, 'id' | 'createdAt' | 'resolved'>) => {
    setState((s) => ({
      ...s,
      struggles: [
        ...s.struggles,
        { ...partial, id: crypto.randomUUID(), createdAt: Date.now(), resolved: false },
      ],
    }))
  }, [])

  const resolveStruggle = useCallback((id: string) => {
    setState((s) => ({
      ...s,
      struggles: s.struggles.map((st) => (st.id === id ? { ...st, resolved: true } : st)),
    }))
  }, [])

  const addSession = useCallback((partial: Omit<SessionRecord, 'id' | 'finishedAt'>) => {
    const id = crypto.randomUUID()
    setState((s) =>
      touchToday({
        ...s,
        sessions: [...s.sessions, { ...partial, id, finishedAt: Date.now() }],
      }),
    )
    return id
  }, [])

  const rateSession = useCallback((id: string, rating: number) => {
    setState((s) => ({
      ...s,
      sessions: s.sessions.map((r) => (r.id === id ? { ...r, rating } : r)),
    }))
  }, [])

  const setCardBucket = useCallback((courseId: string, cardId: string, bucket: CardBucket) => {
    setState((s) =>
      touchToday({
        ...s,
        cardBuckets: {
          ...s.cardBuckets,
          [courseId]: { ...(s.cardBuckets[courseId] ?? {}), [cardId]: bucket },
        },
      }),
    )
  }, [])

  const addEvent = useCallback((e: Omit<CalendarEvent, 'id'>) => {
    setState((s) => ({ ...s, events: [...s.events, { ...e, id: crypto.randomUUID() }] }))
  }, [])

  const removeEvent = useCallback((id: string) => {
    setState((s) => ({ ...s, events: s.events.filter((e) => e.id !== id) }))
  }, [])

  const resetAll = useCallback(() => setState(DEFAULT_STATE), [])

  const value = useMemo(
    () => ({
      ...state,
      user, syncAvailable: supabase !== null, syncStatus, lastSyncedAt,
      signUp, signIn, signOut,
      setProfile, setTheme, setSelectedCourse, recordAnswer, addStruggle, resolveStruggle,
      addSession, rateSession, setCardBucket, addEvent, removeEvent, resetAll,
    }),
    [state, user, syncStatus, lastSyncedAt, signUp, signIn, signOut,
      setProfile, setTheme, setSelectedCourse, recordAnswer, addStruggle, resolveStruggle,
      addSession, rateSession, setCardBucket, addEvent, removeEvent, resetAll],
  )

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useApp() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useApp must be used inside AppProvider')
  return ctx
}
