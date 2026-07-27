import { useState } from 'react'
import { useApp } from '../store/AppContext'
import { PROVINCES } from '../data/meta'
import { Card, PageHeader } from '../components/ui'
import type { Grade, ProvinceCode } from '../types'

const inputCls =
  'w-full rounded-xl border border-ink-200 px-3 py-2 dark:border-ink-700 dark:bg-ink-800 dark:text-white'

function AccountCard() {
  const app = useApp()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState(false)
  const [message, setMessage] = useState<{ kind: 'error' | 'info'; text: string } | null>(null)

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

  if (app.user) {
    const statusLabel =
      app.syncStatus === 'syncing' ? '⏳ Syncing…'
      : app.syncStatus === 'error' ? '⚠️ Sync error — will retry on your next change'
      : `✅ Synced${app.lastSyncedAt ? ` · ${new Date(app.lastSyncedAt).toLocaleTimeString()}` : ''}`
    return (
      <Card className="p-6">
        <h3 className="font-display font-bold text-ink-900 dark:text-white">☁️ Account & sync</h3>
        <p className="mt-2 text-sm text-ink-600 dark:text-ink-200">
          Signed in as <b>{app.user.email}</b>. Your progress syncs to the cloud and follows you to any device.
        </p>
        <p className="mt-1 text-sm text-ink-400">{statusLabel}</p>
        <button
          type="button"
          onClick={() => app.signOut()}
          className="mt-3 rounded-xl bg-ink-100 px-4 py-2 text-sm font-bold text-ink-600 dark:bg-ink-700 dark:text-ink-100"
        >
          Sign out
        </button>
      </Card>
    )
  }

  return (
    <Card className="space-y-3 p-6">
      <h3 className="font-display font-bold text-ink-900 dark:text-white">☁️ Account & sync</h3>
      <p className="text-sm text-ink-400">
        Create a free account to back up your progress and sync it across devices. Without one, everything
        stays in this browser only.
      </p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        autoComplete="email"
        className={inputCls}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password (6+ characters)"
        autoComplete="current-password"
        className={inputCls}
      />
      {message && (
        <p className={`text-sm font-semibold ${message.kind === 'error' ? 'text-rose-500' : 'text-emerald-600 dark:text-emerald-400'}`}>
          {message.text}
        </p>
      )}
      <div className="flex gap-2">
        <button
          type="button"
          disabled={busy}
          onClick={() => submit('in')}
          className="rounded-xl bg-brand-500 px-4 py-2 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-50"
        >
          Sign in
        </button>
        <button
          type="button"
          disabled={busy}
          onClick={() => submit('up')}
          className="rounded-xl bg-ink-100 px-4 py-2 text-sm font-bold text-ink-600 disabled:opacity-50 dark:bg-ink-700 dark:text-ink-100"
        >
          Create account
        </button>
      </div>
    </Card>
  )
}

export default function SettingsPage() {
  const app = useApp()
  const profile = app.profile!
  const [name, setName] = useState(profile.name)
  const [confirmReset, setConfirmReset] = useState(false)

  return (
    <div className="animate-fade-up mx-auto max-w-xl">
      <PageHeader title="⚙️ Settings" />

      <div className="mb-5">
        <AccountCard />
      </div>

      <Card className="space-y-5 p-6">
        <div>
          <label htmlFor="set-name" className="mb-1 block text-sm font-bold text-ink-700 dark:text-ink-100">Name</label>
          <input
            id="set-name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => name.trim() && app.setProfile({ ...profile, name: name.trim() })}
            className="w-full rounded-xl border border-ink-200 px-3 py-2 dark:border-ink-700 dark:bg-ink-800 dark:text-white"
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
            className="w-full rounded-xl border border-ink-200 px-3 py-2 dark:border-ink-700 dark:bg-ink-800 dark:text-white"
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
            className="rounded-xl bg-ink-100 px-4 py-2 text-sm font-bold text-ink-600 dark:bg-ink-700 dark:text-ink-100"
          >
            {app.theme === 'dark' ? '☀️ Switch to light' : '🌙 Switch to dark'}
          </button>
        </div>
      </Card>

      <Card className="mt-5 border-rose-200 p-6 dark:border-rose-900">
        <h3 className="font-display font-bold text-rose-600 dark:text-rose-400">Danger zone</h3>
        <p className="mt-1 text-sm text-ink-400">
          Erase all progress, ratings, struggles and calendar events. This cannot be undone.
        </p>
        {confirmReset ? (
          <div className="mt-3 flex gap-2">
            <button
              type="button"
              onClick={() => { app.resetAll(); }}
              className="rounded-xl bg-rose-500 px-4 py-2 text-sm font-bold text-white"
            >
              Yes, erase everything
            </button>
            <button
              type="button"
              onClick={() => setConfirmReset(false)}
              className="rounded-xl bg-ink-100 px-4 py-2 text-sm font-bold text-ink-600 dark:bg-ink-700 dark:text-ink-100"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setConfirmReset(true)}
            className="mt-3 rounded-xl border border-rose-300 px-4 py-2 text-sm font-bold text-rose-600 dark:text-rose-400"
          >
            Reset everything
          </button>
        )}
      </Card>
    </div>
  )
}
