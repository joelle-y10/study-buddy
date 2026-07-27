import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApp } from '../store/AppContext'
import { PROVINCES } from '../data/meta'
import Logo from '../components/Logo'
import type { Grade, ProvinceCode } from '../types'

export default function Onboarding() {
  const app = useApp()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [grade, setGrade] = useState<Grade | null>(null)
  const [province, setProvince] = useState<ProvinceCode | null>(null)

  const ready = name.trim().length > 0 && grade !== null && province !== null

  const start = () => {
    if (!ready) return
    app.setProfile({ name: name.trim(), grade: grade!, province: province! })
    navigate('/')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-brand-600 via-brand-500 to-violet-500 p-4">
      <div className="w-full max-w-lg animate-pop-in rounded-3xl bg-white p-8 shadow-2xl dark:bg-ink-900">
        <div className="text-center">
          <div className="flex justify-center"><Logo size={76} /></div>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-ink-900 dark:text-white">
            Study<span className="text-brand-500">Buddy</span>
          </h1>
          <p className="mt-2 text-sm text-ink-500 dark:text-ink-300">
            Flashcards, quizzes, unit tests and finals — built on your province&apos;s real curriculum.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          <div>
            <label htmlFor="ob-name" className="mb-1.5 block text-sm font-bold text-ink-700 dark:text-ink-100">
              What should we call you?
            </label>
            <input
              id="ob-name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="w-full rounded-xl border border-ink-200 px-4 py-2.5 text-ink-900 outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-ink-700 dark:bg-ink-800 dark:text-white"
            />
          </div>

          <div>
            <span className="mb-1.5 block text-sm font-bold text-ink-700 dark:text-ink-100">Your grade</span>
            <div className="grid grid-cols-3 gap-2">
              {([10, 11, 12] as Grade[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGrade(g)}
                  className={`rounded-xl border-2 px-4 py-3 font-display text-lg font-bold transition-all ${
                    grade === g
                      ? 'border-brand-500 bg-brand-500/10 text-brand-600 dark:text-brand-300'
                      : 'border-ink-100 text-ink-500 hover:border-ink-300 dark:border-ink-700 dark:text-ink-300'
                  }`}
                >
                  Grade {g}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="ob-prov" className="mb-1.5 block text-sm font-bold text-ink-700 dark:text-ink-100">
              Your province or territory
            </label>
            <select
              id="ob-prov"
              value={province ?? ''}
              onChange={(e) => setProvince(e.target.value as ProvinceCode)}
              className="w-full rounded-xl border border-ink-200 px-4 py-2.5 text-ink-900 outline-none focus:border-brand-400 dark:border-ink-700 dark:bg-ink-800 dark:text-white"
            >
              <option value="" disabled>Choose…</option>
              {PROVINCES.map((p) => (
                <option key={p.code} value={p.code}>
                  {p.name}
                  {p.supported ? '' : p.usesCurriculumOf ? ` (follows ${p.usesCurriculumOf} curriculum)` : ' (coming soon — uses Alberta curriculum)'}
                </option>
              ))}
            </select>
            <p className="mt-1.5 text-xs text-ink-400 dark:text-ink-300">
              Your courses, units and questions follow your province&apos;s program of studies.
              Alberta and BC are fully supported today.
            </p>
          </div>

          <button
            type="button"
            disabled={!ready}
            onClick={start}
            className="w-full rounded-xl bg-brand-500 py-3 font-display text-lg font-bold text-white transition-all hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Start studying →
          </button>
        </div>
      </div>
    </div>
  )
}
