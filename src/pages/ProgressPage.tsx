import { useApp } from '../store/AppContext'
import { coursesFor } from '../data/catalog'
import { SUBJECTS } from '../data/meta'
import {
  conceptAccuracy, courseMastery, streakDays, unitMastery,
} from '../engine/adaptive'
import { Card, Chip, PageHeader, ProgressBar, StarRating } from '../components/ui'

export default function ProgressPage() {
  const app = useApp()
  const profile = app.profile!
  const courses = coursesFor(profile.province, profile.grade)
  const streak = streakDays(app.activeDays)

  const rated = app.sessions.filter((s) => s.rating > 0)
  const avgRating = rated.length > 0 ? rated.reduce((a, s) => a + s.rating, 0) / rated.length : 0
  const totalAnswered = app.sessions.reduce((a, s) => a + s.total, 0)
  const totalCorrect = app.sessions.reduce((a, s) => a + s.correct, 0)
  const openStruggles = app.struggles.filter((s) => !s.resolved)
  const conquered = app.struggles.filter((s) => s.resolved)

  return (
    <div className="animate-fade-up">
      <PageHeader title="📈 Your Progress" subtitle="Mastery, ratings and streaks — watch the bars fill up." />

      {/* stat tiles */}
      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Card className="p-4 text-center">
          <div className="text-3xl">🔥</div>
          <div className="mt-1 font-display text-2xl font-extrabold text-ink-900 dark:text-white">{streak}</div>
          <div className="text-xs font-semibold text-ink-400">day streak</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl">🎯</div>
          <div className="mt-1 font-display text-2xl font-extrabold text-ink-900 dark:text-white">
            {totalAnswered > 0 ? `${Math.round((totalCorrect / totalAnswered) * 100)}%` : '—'}
          </div>
          <div className="text-xs font-semibold text-ink-400">overall accuracy</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl">🧠</div>
          <div className="mt-1 font-display text-2xl font-extrabold text-ink-900 dark:text-white">{totalAnswered}</div>
          <div className="text-xs font-semibold text-ink-400">questions answered</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-3xl">⭐</div>
          <div className="mt-1 font-display text-2xl font-extrabold text-ink-900 dark:text-white">
            {avgRating > 0 ? avgRating.toFixed(1) : '—'}
          </div>
          <div className="text-xs font-semibold text-ink-400">avg self-rating</div>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* per-course mastery */}
        <div className="space-y-5 lg:col-span-2">
          {courses.map((course) => {
            const meta = SUBJECTS[course.subject]
            const stats = app.conceptStats[course.id] ?? {}
            const buckets = app.cardBuckets[course.id] ?? {}
            const mastery = courseMastery(course.units, stats, buckets)
            return (
              <Card key={course.id} className="p-5">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">
                    {meta.emoji} {course.shortName}
                  </h3>
                  <Chip tone={mastery >= 0.7 ? 'good' : mastery >= 0.35 ? 'warn' : 'neutral'}>
                    {Math.round(mastery * 100)}% mastered
                  </Chip>
                </div>
                <div className="space-y-3">
                  {course.units.map((unit) => {
                    const m = unitMastery(unit, stats, buckets)
                    return (
                      <div key={unit.id}>
                        <ProgressBar value={m} barClass={meta.bar} label={unit.name} />
                        {/* concept heat chips */}
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {unit.concepts.map((c) => {
                            const s = stats[c.id]
                            if (!s || s.attempts === 0) return null
                            const acc = conceptAccuracy(s)
                            return (
                              <span
                                key={c.id}
                                title={`${c.name}: ${s.correct}/${s.attempts}`}
                                className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${
                                  acc >= 0.8
                                    ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                                    : acc >= 0.5
                                      ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300'
                                      : 'bg-rose-500/15 text-rose-700 dark:text-rose-300'
                                }`}
                              >
                                {c.name}
                              </span>
                            )
                          })}
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            )
          })}
        </div>

        {/* right rail */}
        <div className="space-y-5">
          <Card className="p-5">
            <h3 className="mb-3 font-display font-bold text-ink-900 dark:text-white">⭐ Understanding over time</h3>
            {rated.length === 0 ? (
              <p className="text-sm text-ink-400">Rate your understanding after quizzes and your trend will appear here.</p>
            ) : (
              <div className="flex h-28 items-end gap-1.5">
                {rated.slice(-12).map((s) => (
                  <div
                    key={s.id}
                    title={`${s.kind} · ${new Date(s.finishedAt).toLocaleDateString()} · ${s.rating}/5`}
                    className="flex-1 rounded-t-md bg-gradient-to-t from-brand-500 to-violet-400"
                    style={{ height: `${(s.rating / 5) * 100}%` }}
                  />
                ))}
              </div>
            )}
          </Card>

          <Card className="p-5">
            <h3 className="mb-3 font-display font-bold text-ink-900 dark:text-white">🎯 Struggle list</h3>
            {openStruggles.length === 0 && conquered.length === 0 && (
              <p className="text-sm text-ink-400">Tell StudyBuddy what you find hard before a quiz — it tracks it here until you conquer it.</p>
            )}
            <ul className="space-y-2">
              {openStruggles.map((s) => (
                <li key={s.id} className="flex items-start gap-2 text-sm">
                  <span>🔴</span>
                  <span className="text-ink-600 dark:text-ink-200">{s.text}</span>
                </li>
              ))}
              {conquered.slice(-5).map((s) => (
                <li key={s.id} className="flex items-start gap-2 text-sm opacity-60">
                  <span>✅</span>
                  <span className="text-ink-500 line-through dark:text-ink-300">{s.text}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-5">
            <h3 className="mb-2 font-display font-bold text-ink-900 dark:text-white">Session history</h3>
            <ul className="max-h-72 space-y-2 overflow-y-auto">
              {[...app.sessions].sort((a, b) => b.finishedAt - a.finishedAt).slice(0, 15).map((s) => (
                <li key={s.id} className="flex items-center gap-2 text-sm">
                  <span>{s.kind === 'quiz' ? '⚡' : s.kind === 'unit-test' ? '📝' : '🏁'}</span>
                  <span className="flex-1 text-xs text-ink-500 dark:text-ink-300">
                    {new Date(s.finishedAt).toLocaleDateString()}
                  </span>
                  <Chip tone={s.correct / s.total >= 0.8 ? 'good' : s.correct / s.total >= 0.5 ? 'warn' : 'bad'}>
                    {s.correct}/{s.total}
                  </Chip>
                  {s.rating > 0 && <StarRating value={s.rating} size="text-[10px]" />}
                </li>
              ))}
              {app.sessions.length === 0 && <p className="text-sm text-ink-400">No sessions yet — go take a quiz!</p>}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
