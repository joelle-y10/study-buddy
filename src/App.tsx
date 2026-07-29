import { useState } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { AppProvider, useApp } from './store/AppContext'
import Layout from './components/Layout'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import { CoursesPage, CourseDetailPage } from './pages/CoursesPage'
import FlashcardsPage from './pages/FlashcardsPage'
import LearnPage from './pages/LearnPage'
import CodeLabPage from './pages/CodeLabPage'
import SessionPage from './pages/SessionPage'
import NotesPage from './pages/NotesPage'
import CalendarPage from './pages/CalendarPage'
import ProgressPage from './pages/ProgressPage'
import SettingsPage from './pages/SettingsPage'

/** Shown when the user arrives from a password-reset email link. */
function PasswordRecoveryOverlay() {
  const app = useApp()
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)

  if (!app.passwordRecovery) return null

  const submit = async () => {
    if (pw.length < 6) {
      setError('Password needs at least 6 characters.')
      return
    }
    if (pw !== pw2) {
      setError("Those passwords don't match.")
      return
    }
    setBusy(true)
    setError(null)
    const err = await app.completeRecovery(pw)
    setBusy(false)
    if (err) setError(err)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink-950/60 p-4 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl dark:bg-ink-900">
        <h2 className="font-display text-xl font-extrabold text-ink-900 dark:text-white">🔑 Choose a new password</h2>
        <p className="mt-1 text-sm text-ink-400">
          You followed a reset link — set the new password for your account here.
        </p>
        <div className="mt-4 space-y-2">
          <input
            type="password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="New password (6+ characters)"
            autoComplete="new-password"
            className="w-full rounded-xl border border-ink-200 px-3 py-2 dark:border-ink-700 dark:bg-ink-800 dark:text-white"
          />
          <input
            type="password"
            value={pw2}
            onChange={(e) => setPw2(e.target.value)}
            placeholder="Repeat new password"
            autoComplete="new-password"
            className="w-full rounded-xl border border-ink-200 px-3 py-2 dark:border-ink-700 dark:bg-ink-800 dark:text-white"
          />
        </div>
        {error && <p className="mt-2 text-sm font-semibold text-rose-500">{error}</p>}
        <button
          type="button"
          disabled={busy}
          onClick={submit}
          className="mt-4 w-full rounded-xl bg-brand-500 px-4 py-2.5 font-bold text-white hover:bg-brand-600 disabled:opacity-50"
        >
          {busy ? 'Saving…' : 'Save new password'}
        </button>
      </div>
    </div>
  )
}

function Routed() {
  const { profile } = useApp()

  if (!profile) {
    return (
      <Routes>
        <Route path="*" element={<Onboarding />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/courses/:courseId" element={<CourseDetailPage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/codelab" element={<CodeLabPage />} />
        <Route path="/flashcards" element={<FlashcardsPage />} />
        <Route path="/session/:kind" element={<SessionPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <Routed />
        <PasswordRecoveryOverlay />
      </HashRouter>
    </AppProvider>
  )
}
