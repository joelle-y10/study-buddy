import { useRef, useState } from 'react'
import { useApp } from '../store/AppContext'
import { PROVINCES } from '../data/meta'
import { Card, PageHeader } from '../components/ui'
import Avatar, { fileToAvatarDataUrl } from '../components/Avatar'
import type { Grade, ProvinceCode } from '../types'

const inputCls =
  'w-full rounded-xl border border-ink-200 px-3 py-2 dark:border-ink-700 dark:bg-ink-800 dark:text-white'
const primaryBtn =
  'rounded-xl bg-brand-500 px-4 py-2 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50'
const softBtn =
  'rounded-xl bg-ink-100 px-4 py-2 text-sm font-bold text-ink-600 disabled:opacity-50 dark:bg-ink-700 dark:text-ink-100'

type Msg = { kind: 'error' | 'info'; text: string } | null

function Feedback({ msg }: { msg: Msg }) {
  if (!msg) return null
  return (
    <p className={`text-sm font-semibold ${msg.kind === 'error' ? 'text-rose-500' : 'text-emerald-600 dark:text-emerald-400'}`}>
      {msg.text}
    </p>
  )
}

// ---------------------------------------------------------------- avatar picker

const AVATAR_EMOJIS = ['😀', '😎', '🤓', '🦊', '🐼', '🐨', '🐸', '🦄', '🐯', '🦁', '🐵', '🐧', '🌟', '⚡', '📚', '🧠']
const AVATAR_COLORS = ['#ef4444', '#f97316', '#f59e0b', '#10b981', '#06b6d4', '#3b82f6', '#6366f1', '#8b5cf6', '#ec4899', '#64748b']

function AvatarPicker() {
  const app = useApp()
  const profile = app.profile!
  const fileRef = useRef<HTMLInputElement>(null)
  const [uploadError, setUploadError] = useState<string | null>(null)

  const onUpload = async (file: File | undefined) => {
    if (!file) return
    setUploadError(null)
    try {
      const value = await fileToAvatarDataUrl(file)
      app.setProfile({ ...profile, avatar: { kind: 'image', value } })
    } catch {
      setUploadError("Couldn't read that image — try a JPG or PNG.")
    }
  }

  return (
    <div>
      <span className="mb-2 block text-sm font-bold text-ink-700 dark:text-ink-100">Profile picture</span>
      <div className="flex items-start gap-4">
        <Avatar avatar={profile.avatar} name={profile.name} size={64} />
        <div className="min-w-0 flex-1 space-y-2.5">
          <div className="flex flex-wrap gap-1.5">
            {AVATAR_EMOJIS.map((e) => (
              <button
                key={e}
                type="button"
                onClick={() => app.setProfile({ ...profile, avatar: { kind: 'emoji', value: e } })}
                aria-label={`Use ${e} as profile picture`}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-lg transition-transform hover:scale-110 ${
                  profile.avatar?.kind === 'emoji' && profile.avatar.value === e ? 'ring-2 ring-brand-500' : 'bg-ink-50 dark:bg-ink-800'
                }`}
              >
                {e}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-1.5">
            {AVATAR_COLORS.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => app.setProfile({ ...profile, avatar: { kind: 'color', value: c } })}
                aria-label={`Use colour ${c} as profile picture`}
                style={{ backgroundColor: c }}
                className={`h-8 w-8 rounded-full transition-transform hover:scale-110 ${
                  profile.avatar?.kind === 'color' && profile.avatar.value === c ? 'ring-2 ring-offset-2 ring-brand-500 dark:ring-offset-ink-900' : ''
                }`}
              />
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" onClick={() => fileRef.current?.click()} className={softBtn}>
              📷 Upload a photo
            </button>
            {profile.avatar && (
              <button type="button" onClick={() => app.setProfile({ ...profile, avatar: undefined })} className={softBtn}>
                Use my initial
              </button>
            )}
            <input
              ref={fileRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => onUpload(e.target.files?.[0])}
            />
          </div>
          {uploadError && <p className="text-sm font-semibold text-rose-500">{uploadError}</p>}
        </div>
      </div>
    </div>
  )
}

// ---------------------------------------------------------------- account (signed out)

function SignInCard() {
  const app = useApp()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState<Msg>(null)

  const submit = async (mode: 'in' | 'up') => {
    if (!email.trim() || password.length < 6) {
      setMessage({ kind: 'error', text: 'Enter your email and a password of at least 6 characters.' })
      return
    }
    setBusy(true)
    setMessage(null)
    const err = mode === 'in' ? await app.signIn(email.trim(), password) : await app.signUp(email.trim(), password)
    setBusy(false)
    if (err === 'CONFIRM_EMAIL') {
      setMessage({ kind: 'info', text: 'Almost there — check your inbox and click the confirmation link, then sign in.' })
    } else if (err) {
      setMessage({ kind: 'error', text: err })
    }
  }

  const forgot = async () => {
    if (!email.trim()) {
      setMessage({ kind: 'error', text: 'Type your email above first, then click “Forgot password?” again.' })
      return
    }
    setBusy(true)
    setMessage(null)
    const err = await app.forgotPassword(email.trim())
    setBusy(false)
    setMessage(
      err
        ? { kind: 'error', text: err }
        : { kind: 'info', text: `Reset link sent to ${email.trim()}. Open it on this device to choose a new password.` },
    )
  }

  return (
    <Card className="space-y-3 p-6">
      <h3 className="font-display font-bold text-ink-900 dark:text-white">☁️ Account & sync</h3>
      <p className="text-sm text-ink-400">
        Create a free account to back up your progress and sync it across devices. Without one, everything
        stays in this browser only.
      </p>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="email" className={inputCls} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password (6+ characters)" autoComplete="current-password" className={inputCls} />
      <Feedback msg={message} />
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" disabled={busy} onClick={() => submit('in')} className={primaryBtn}>Sign in</button>
        <button type="button" disabled={busy} onClick={() => submit('up')} className={softBtn}>Create account</button>
        <button type="button" disabled={busy} onClick={forgot} className="px-2 text-sm font-bold text-brand-500 hover:underline">
          Forgot password?
        </button>
      </div>
    </Card>
  )
}

// ---------------------------------------------------------------- account (signed in)

function AccountSettingsCard() {
  const app = useApp()
  const [newEmail, setNewEmail] = useState('')
  const [emailMsg, setEmailMsg] = useState<Msg>(null)
  const [curPw, setCurPw] = useState('')
  const [newPw, setNewPw] = useState('')
  const [pwMsg, setPwMsg] = useState<Msg>(null)
  const [busy, setBusy] = useState(false)

  const statusLabel =
    app.syncStatus === 'syncing' ? '⏳ Syncing…'
    : app.syncStatus === 'error' ? '⚠️ Sync error — will retry on your next change'
    : `✅ Synced${app.lastSyncedAt ? ` · ${new Date(app.lastSyncedAt).toLocaleTimeString()}` : ''}`

  const doChangeEmail = async () => {
    if (!newEmail.trim().includes('@')) {
      setEmailMsg({ kind: 'error', text: 'Enter the new email address.' })
      return
    }
    setBusy(true)
    setEmailMsg(null)
    const err = await app.changeEmail(newEmail.trim())
    setBusy(false)
    setEmailMsg(
      err
        ? { kind: 'error', text: err }
        : { kind: 'info', text: 'Confirmation links sent to BOTH your current and new inbox. The change completes after you click both.' },
    )
    if (!err) setNewEmail('')
  }

  const doChangePassword = async () => {
    if (newPw.length < 6) {
      setPwMsg({ kind: 'error', text: 'New password needs at least 6 characters.' })
      return
    }
    setBusy(true)
    setPwMsg(null)
    const err = await app.changePassword(curPw, newPw)
    setBusy(false)
    setPwMsg(err ? { kind: 'error', text: err } : { kind: 'info', text: 'Password updated. Use it next time you sign in.' })
    if (!err) {
      setCurPw('')
      setNewPw('')
    }
  }

  return (
    <Card className="space-y-5 p-6">
      <div>
        <h3 className="font-display font-bold text-ink-900 dark:text-white">☁️ Account & sync</h3>
        <p className="mt-2 text-sm text-ink-600 dark:text-ink-200">
          Signed in as <b>{app.user?.email}</b>. Your progress syncs to the cloud and follows you to any device.
        </p>
        <p className="mt-1 text-sm text-ink-400">{statusLabel}</p>
        <button type="button" onClick={() => app.signOut()} className={`mt-3 ${softBtn}`}>Sign out</button>
      </div>

      <div className="border-t border-ink-100 pt-4 dark:border-ink-700">
        <h4 className="mb-2 text-sm font-bold text-ink-700 dark:text-ink-100">Change email</h4>
        <div className="flex flex-wrap gap-2">
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="New email address"
            autoComplete="email"
            className={`${inputCls} max-w-xs`}
          />
          <button type="button" disabled={busy} onClick={doChangeEmail} className={primaryBtn}>Update email</button>
        </div>
        <p className="mt-1.5 text-xs text-ink-400">
          For safety, a confirmation link goes to your current inbox AND the new one — the switch only happens after both are clicked.
        </p>
        <div className="mt-1.5"><Feedback msg={emailMsg} /></div>
      </div>

      <div className="border-t border-ink-100 pt-4 dark:border-ink-700">
        <h4 className="mb-2 text-sm font-bold text-ink-700 dark:text-ink-100">Change password</h4>
        <div className="grid gap-2 sm:grid-cols-2">
          <input type="password" value={curPw} onChange={(e) => setCurPw(e.target.value)} placeholder="Current password" autoComplete="current-password" className={inputCls} />
          <input type="password" value={newPw} onChange={(e) => setNewPw(e.target.value)} placeholder="New password (6+ characters)" autoComplete="new-password" className={inputCls} />
        </div>
        <button type="button" disabled={busy} onClick={doChangePassword} className={`mt-2 ${primaryBtn}`}>Update password</button>
        <div className="mt-1.5"><Feedback msg={pwMsg} /></div>
      </div>
    </Card>
  )
}

function AccountCard() {
  const app = useApp()
  if (!app.syncAvailable) {
    return (
      <Card className="p-6">
        <h3 className="font-display font-bold text-ink-900 dark:text-white">☁️ Account & sync</h3>
        <p className="mt-1 text-sm text-ink-400">
          Cloud sync is being set up — soon you'll be able to sign in and keep your progress across devices.
          Everything currently saves to this browser.
        </p>
      </Card>
    )
  }
  return app.user ? <AccountSettingsCard /> : <SignInCard />
}

// ---------------------------------------------------------------- danger zone

function DangerZone() {
  const app = useApp()
  const [confirmReset, setConfirmReset] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [deletePw, setDeletePw] = useState('')
  const [deleteMsg, setDeleteMsg] = useState<Msg>(null)
  const [busy, setBusy] = useState(false)

  const doDelete = async () => {
    setBusy(true)
    setDeleteMsg(null)
    const err = await app.deleteAccount(deletePw)
    setBusy(false)
    if (err) {
      setDeleteMsg({ kind: 'error', text: err })
    } else {
      setDeleting(false)
      setDeletePw('')
      setDeleteMsg(null)
    }
  }

  return (
    <Card className="mt-5 border-rose-200 p-6 dark:border-rose-900">
      <h3 className="font-display font-bold text-rose-600 dark:text-rose-400">Danger zone</h3>

      <p className="mt-1 text-sm text-ink-400">
        Erase all progress, ratings, struggles and calendar events on this device. This cannot be undone.
      </p>
      {confirmReset ? (
        <div className="mt-3 flex gap-2">
          <button type="button" onClick={() => { app.resetAll() }} className="rounded-xl bg-rose-500 px-4 py-2 text-sm font-bold text-white">
            Yes, erase everything
          </button>
          <button type="button" onClick={() => setConfirmReset(false)} className={softBtn}>Cancel</button>
        </div>
      ) : (
        <button type="button" onClick={() => setConfirmReset(true)} className="mt-3 rounded-xl border border-rose-300 px-4 py-2 text-sm font-bold text-rose-600 dark:text-rose-400">
          Reset everything
        </button>
      )}

      {app.user && (
        <div className="mt-5 border-t border-rose-200/60 pt-4 dark:border-rose-900/60">
          <p className="text-sm text-ink-400">
            Permanently delete your account and everything stored in the cloud. Progress saved on this device stays until you reset it.
          </p>
          {deleting ? (
            <div className="mt-3 space-y-2">
              <input
                type="password"
                value={deletePw}
                onChange={(e) => setDeletePw(e.target.value)}
                placeholder="Type your password to confirm"
                autoComplete="current-password"
                className={`${inputCls} max-w-xs`}
              />
              <Feedback msg={deleteMsg} />
              <div className="flex gap-2">
                <button
                  type="button"
                  disabled={busy || deletePw.length === 0}
                  onClick={doDelete}
                  className="rounded-xl bg-rose-500 px-4 py-2 text-sm font-bold text-white disabled:opacity-50"
                >
                  {busy ? 'Deleting…' : 'Delete my account forever'}
                </button>
                <button type="button" onClick={() => { setDeleting(false); setDeletePw(''); setDeleteMsg(null) }} className={softBtn}>
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <button type="button" onClick={() => setDeleting(true)} className="mt-3 rounded-xl border border-rose-300 px-4 py-2 text-sm font-bold text-rose-600 dark:text-rose-400">
              Delete account…
            </button>
          )}
        </div>
      )}
    </Card>
  )
}

// ---------------------------------------------------------------- page

export default function SettingsPage() {
  const app = useApp()
  const profile = app.profile!
  const [name, setName] = useState(profile.name)

  return (
    <div className="animate-fade-up mx-auto max-w-xl">
      <PageHeader title="⚙️ Settings" />

      <div className="mb-5">
        <AccountCard />
      </div>

      <Card className="space-y-5 p-6">
        <AvatarPicker />

        <div>
          <label htmlFor="set-name" className="mb-1 block text-sm font-bold text-ink-700 dark:text-ink-100">Name</label>
          <input
            id="set-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => name.trim() && app.setProfile({ ...profile, name: name.trim() })}
            className={inputCls}
          />
        </div>

        <div>
          <span className="mb-1 block text-sm font-bold text-ink-700 dark:text-ink-100">Grade</span>
          <div className="grid grid-cols-3 gap-2">
            {([10, 11, 12] as Grade[]).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => app.setProfile({ ...profile, grade: g })}
                className={`rounded-xl border-2 py-2 font-bold ${
                  profile.grade === g
                    ? 'border-brand-500 bg-brand-500/10 text-brand-600 dark:text-brand-300'
                    : 'border-ink-100 text-ink-500 dark:border-ink-700 dark:text-ink-300'
                }`}
              >
                Grade {g}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="set-prov" className="mb-1 block text-sm font-bold text-ink-700 dark:text-ink-100">Province / territory</label>
          <select
            id="set-prov"
            value={profile.province}
            onChange={(e) => app.setProfile({ ...profile, province: e.target.value as ProvinceCode })}
            className={inputCls}
          >
            {PROVINCES.map((p) => (
              <option key={p.code} value={p.code}>
                {p.name}
                {p.supported ? '' : p.usesCurriculumOf ? ` (follows ${p.usesCurriculumOf} curriculum)` : ' (coming soon — uses Alberta curriculum)'}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-ink-400">
            Switching province switches your entire course list and curriculum content.
          </p>
        </div>

        <div>
          <span className="mb-1 block text-sm font-bold text-ink-700 dark:text-ink-100">Theme</span>
          <button
            type="button"
            onClick={() => app.setTheme(app.theme === 'dark' ? 'light' : 'dark')}
            className={softBtn}
          >
            {app.theme === 'dark' ? '☀️ Switch to light' : '🌙 Switch to dark'}
          </button>
        </div>
      </Card>

      <DangerZone />
    </div>
  )
}
