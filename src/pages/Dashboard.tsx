import { Link, useNavigate } from 'react-router-dom'
import { useApp } from '../store/AppContext'
import { coursesFor } from '../data/catalog'
import { SUBJECTS } from '../data/meta'
import { courseMastery, streakDays } from '../engine/adaptive'
import { Card, Chip, ProgressBar } from '../components/ui'

function daysUntil(iso: string): number {
  const [y, m, d] = iso.split('-').map(Number)
  const target = new Date(y, m - 1, d)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  return Math.round((target.getTime() - now.getTime()) / 86400000)
}

const EVENT_EMOJI: Record<string, string> = {
  quiz: '⚡', 'unit-test': '📝', final: '🏁', assignment: '📎', study: '📖',
}

export default function Dashboard() {
  const app = useApp()
  const navigate = useNavigate()
  const profile = app.profile!
  const courses = coursesFor(profile.province, profile.grade)
  const streak = streakDays(app.activeDays)

  const upcoming = app.events
    .filter((e) => daysUntil(e.date) >= 0)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 4)

  const openStruggles = app.struggles.filter((s) => !s.resolved)
  const recentSessions = [...app.sessions].sort((a, b) => b.finishedAt - a.finishedAt).slice(0, 3)

  return (
    <div className="animate-fade-up space-y-8">
      {/* Hero */}
      <div className="rounded-3xl bg-gradient-to-r from-brand-600 to-violet-500 p-6 text-white sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl font-extrabold sm:text-3xl">
              Hey {profile.name}! 👋
            </h1>
            <p className="mt-1 text-sm text-white/80">
              Ready to level up? Pick a course below or jump straight into a quiz.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl bg-white/15 px-4 py-3">
            <span className="text-3xl">🔥</span>
            <div>
              <div className="font-display text-2xl font-extrabold leading-none">{streak}</div>
              <div className="text-xs text-white/80">day streak</div>
            </div>
          </div>
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <Link to="/session/quiz" className="rounded-xl bg-white px-4 py-2 text-sm font-bold text-brand-600 transition-transform hover:scale-105">
            ⚡ Quick quiz
          </Link>
          <Link to="/flashcards" className="rounded-xl bg-white/20 px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105">
            🃏 Flashcards
          </Link>
          <Link to="/calendar" className="rounded-xl bg-white/20 px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105">
            📅 Plan my week
          </Link>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Courses overview */}
        <section className="lg:col-span-2">
          <h2 className="mb-3 font-display text-lg font-bold text-ink-900 dark:text-white">
            Your Grade {profile.grade} courses
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {courses.map((course) => {
              const meta = SUBJECTS[course.subject]
              const mastery = courseMastery(
                course.units,
                app.conceptStats[course.id] ?? {},
                app.cardBuckets[course.id] ?? {},
              )
              return (
                <Card
                  key={course.id}
                  className="p-4"
                  onClick={() => {
                    app.setSelectedCourse(course.id)
                    navigate(`/courses/${course.id}`)
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span className={`flex h-10 w-10 items-center justify-center rounded-xl text-xl ring-1 ${meta.softBg}`}>
                      {meta.emoji}
                    </span>
                    <div className="min-w-0">
                      <div className="truncate font-display font-bold text-ink-900 dark:text-white">{course.shortName}</div>
                      <div className="text-xs text-ink-400">{course.units.length} units</div>
                    </div>
                  </div>
                  <ProgressBar value={mastery} barClass={meta.bar} className="mt-3" label="Mastery" />
                </Card>
              )
            })}
          </div>
        </section>

        {/* Right rail */}
        <div className="space-y-6">
          <section>
            <div className="mb-3 flex items-center justify-between">
              <h2 className="font-display text-lg font-bold text-ink-900 dark:text-white">Coming up</h2>
              <Link to="/calendar" className="text-xs font-bold text-brand-500 hover:underline">View calendar →</Link>
            </div>
            <Card className="divide-y divide-ink-100 p-0 dark:divide-ink-700">
              {upcoming.length === 0 && (
                <p className="p-4 text-sm text-ink-400">
                  Nothing scheduled. Add your next quiz or test in the calendar so we can help you prep!
                </p>
              )}
              {upcoming.map((e) => {
                const dd = daysUntil(e.date)
                return (
                  <div key={e.id} className="flex items-center gap-3 p-3">
                    <span className="text-xl">{EVENT_EMOJI[e.kind]}</span>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold text-ink-800 dark:text-ink-100">{e.title}</div>
                      <div className="text-xs text-ink-400">{e.date}</div>
                    </div>
                    <Chip tone={dd <= 2 ? 'bad' : dd <= 7 ? 'warn' : 'neutral'}>
                      {dd === 0 ? 'Today!' : dd === 1 ? 'Tomorrow' : `${dd} days`}
                    </Chip>
                  </div>
                )
              })}
            </Card>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-bold text-ink-900 dark:text-white">Focus areas</h2>
            <Card className="p-4">
              {openStruggles.length === 0 ? (
                <p className="text-sm text-ink-400">
                  No trouble spots logged. Before a quiz, tell StudyBuddy what you&apos;re struggling
                  with and it will target those concepts. 🎯
                </p>
              ) : (
                <ul className="space-y-2">
                  {openStruggles.slice(0, 4).map((s) => (
                    <li key={s.id} className="flex items-start gap-2 text-sm">
                      <span>🎯</span>
                      <span className="text-ink-600 dark:text-ink-200">&ldquo;{s.text}&rdquo;</span>
                    </li>
                  ))}
                </ul>
              )}
            </Card>
          </section>

          <section>
            <h2 className="mb-3 font-display text-lg font-bold text-ink-900 dark:text-white">Recent sessions</h2>
            <Card className="divide-y divide-ink-100 p-0 dark:divide-ink-700">
              {recentSessions.length === 0 && (
                <p className="p-4 text-sm text-ink-400">Your quiz and test results will show up here.</p>
              )}
              {recentSessions.map((s) => (
                <div key={s.id} className="flex items-center gap-3 p-3">
                  <span className="text-xl">{EVENT_EMOJI[s.kind]}</span>
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-semibold capitalize text-ink-800 dark:text-ink-100">
                      {s.kind.replace('-', ' ')}
                    </div>
                    <div className="text-xs text-ink-400">
                      {new Date(s.finishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  <Chip tone={s.correct / s.total >= 0.8 ? 'good' : s.correct / s.total >= 0.5 ? 'warn' : 'bad'}>
                    {s.correct}/{s.total}
                  </Chip>
                </div>
              ))}
            </Card>
          </section>

        </div>
      </div>
    </div>
  )
}
