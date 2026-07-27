import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { useApp } from '../store/AppContext'
import { coursesFor } from '../data/catalog'
import { PROVINCES, SUBJECTS, fallbackNote } from '../data/meta'
import Logo from './Logo'
import type { Grade, ProvinceCode } from '../types'

const NAV = [
  { to: '/', label: 'Dashboard', emoji: '🏠' },
  { to: '/courses', label: 'Courses', emoji: '🎓' },
  { to: '/learn', label: 'Learn', emoji: '🏛️' },
  { to: '/flashcards', label: 'Flashcards', emoji: '🃏' },
  { to: '/session/quiz', label: 'Quiz', emoji: '⚡' },
  { to: '/session/unit-test', label: 'Unit Test', emoji: '📝' },
  { to: '/session/final', label: 'Final Exam', emoji: '🏁' },
  { to: '/notes', label: 'Note-Taking', emoji: '✍️' },
  { to: '/calendar', label: 'Calendar', emoji: '📅' },
  { to: '/progress', label: 'Progress', emoji: '📈' },
]

export default function Layout() {
  const app = useApp()
  const navigate = useNavigate()
  const profile = app.profile!
  const courses = coursesFor(profile.province, profile.grade)
  const selected = courses.find((c) => c.id === app.selectedCourseId) ?? courses[0]

  return (
    <div className="flex min-h-screen bg-ink-50 dark:bg-ink-950">
      {/* Sidebar */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-60 flex-col border-r border-ink-100 bg-white px-4 py-6 md:flex dark:border-ink-800 dark:bg-ink-900">
        <button
          type="button"
          onClick={() => navigate('/')}
          className="mb-8 flex items-center gap-2 px-2 text-left"
        >
          <Logo size={34} />
          <span className="font-display text-xl font-extrabold tracking-tight text-ink-900 dark:text-white">
            Study<span className="text-brand-500">Buddy</span>
          </span>
        </button>
        <nav className="flex flex-1 flex-col gap-1">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                  isActive
                    ? 'bg-brand-500/10 text-brand-600 dark:bg-brand-500/20 dark:text-brand-300'
                    : 'text-ink-500 hover:bg-ink-50 hover:text-ink-800 dark:text-ink-300 dark:hover:bg-ink-800 dark:hover:text-white'
                }`
              }
            >
              <span className="text-lg">{item.emoji}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          onClick={() => navigate('/settings')}
          className="mt-4 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink-500 hover:bg-ink-50 dark:text-ink-300 dark:hover:bg-ink-800"
        >
          <span className="text-lg">⚙️</span> Settings
        </button>
      </aside>

      {/* Main column */}
      <div className="flex min-h-screen flex-1 flex-col md:pl-60">
        {/* Topbar */}
        <header className="sticky top-0 z-10 flex flex-wrap items-center gap-3 border-b border-ink-100 bg-white/80 px-4 py-3 backdrop-blur md:px-8 dark:border-ink-800 dark:bg-ink-900/80">
          <span className="flex items-center gap-1.5 font-display text-lg font-extrabold text-ink-900 md:hidden dark:text-white">
            <Logo size={22} /> StudyBuddy
          </span>
          <div className="flex items-center gap-2">
            <label htmlFor="course-switch" className="text-xs font-semibold uppercase tracking-wide text-ink-400">
              Course
            </label>
            <select
              id="course-switch"
              value={selected?.id ?? ''}
              onChange={(e) => app.setSelectedCourse(e.target.value)}
              className="rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 text-sm font-semibold text-ink-800 dark:border-ink-700 dark:bg-ink-800 dark:text-white"
            >
              {courses.map((c) => (
                <option key={c.id} value={c.id}>
                  {SUBJECTS[c.subject].emoji} {c.shortName}
                </option>
              ))}
            </select>
          </div>
          <div className="ml-auto flex items-center gap-3">
            {fallbackNote(profile.province) && (
              <span className="hidden rounded-full bg-amber-500/15 px-3 py-1 text-xs font-semibold text-amber-700 sm:inline dark:text-amber-300">
                {fallbackNote(profile.province)}
              </span>
            )}
            <select
              value={profile.grade}
              onChange={(e) => {
                app.setProfile({ ...profile, grade: Number(e.target.value) as Grade })
                app.setSelectedCourse(null)
              }}
              aria-label="Grade"
              className="cursor-pointer rounded-full border-none bg-brand-500/10 px-3 py-1 text-xs font-bold text-brand-600 dark:text-brand-300"
            >
              {[10, 11, 12].map((g) => <option key={g} value={g}>Grade {g}</option>)}
            </select>
            <select
              value={profile.province}
              onChange={(e) => {
                app.setProfile({ ...profile, province: e.target.value as ProvinceCode })
                app.setSelectedCourse(null)
              }}
              aria-label="Province or territory"
              className="max-w-36 cursor-pointer rounded-full border-none bg-brand-500/10 px-3 py-1 text-xs font-bold text-brand-600 dark:text-brand-300"
            >
              {PROVINCES.map((p) => (
                <option key={p.code} value={p.code}>{p.name}</option>
              ))}
            </select>
            <button
              type="button"
              onClick={() => app.setTheme(app.theme === 'dark' ? 'light' : 'dark')}
              className="rounded-full p-1.5 text-xl transition-transform hover:scale-110"
              aria-label="Toggle dark mode"
            >
              {app.theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>
        </header>

        {/* Mobile nav */}
        <nav className="flex gap-1 overflow-x-auto border-b border-ink-100 bg-white px-2 py-2 md:hidden dark:border-ink-800 dark:bg-ink-900">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-semibold ${
                  isActive
                    ? 'bg-brand-500 text-white'
                    : 'bg-ink-50 text-ink-500 dark:bg-ink-800 dark:text-ink-300'
                }`
              }
            >
              {item.emoji} {item.label}
            </NavLink>
          ))}
        </nav>

        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 md:px-8 md:py-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
