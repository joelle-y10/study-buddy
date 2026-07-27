import { useState } from 'react'
import { useApp } from '../store/AppContext'
import { PROVINCES } from '../data/meta'
import { Card, PageHeader } from '../components/ui'
import type { Grade, ProvinceCode } from '../types'

export default function SettingsPage() {
  const app = useApp()
  const profile = app.profile!
  const [name, setName] = useState(profile.name)
  const [confirmReset, setConfirmReset] = useState(false)

  return (
    <div className="animate-fade-up mx-auto max-w-xl">
      <PageHeader title="⚙️ Settings" />

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
                {p.name}{p.supported ? '' : ' (coming soon — uses Alberta curriculum)'}
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
