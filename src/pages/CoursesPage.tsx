import { useNavigate, useParams } from 'react-router-dom'
import { useApp } from '../store/AppContext'
import { unitHasChallenges } from '../data/challenges'
import { coursesFor, getCourse } from '../data/catalog'
import { SUBJECTS, provinceName } from '../data/meta'
import { curriculumProvince } from '../data/catalog'
import { conceptAccuracy, unitMastery } from '../engine/adaptive'
import { Card, Chip, EmptyState, PageHeader, ProgressBar } from '../components/ui'

export function CoursesPage() {
  const app = useApp()
  const navigate = useNavigate()
  const profile = app.profile!
  const courses = coursesFor(profile.province, profile.grade)
  const p = curriculumProvince(profile.province)

  return (
    <div className="animate-fade-up">
      <PageHeader
        title="Courses"
        subtitle={`Grade ${profile.grade} · ${provinceName(p)} Program of Studies`}
      />
      {courses.length === 0 ? (
        <EmptyState emoji="🚧" title="No courses yet" hint="Course content for this grade is being added." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const meta = SUBJECTS[course.subject]
            return (
              <Card key={course.id} className="flex flex-col p-5" onClick={() => {
                app.setSelectedCourse(course.id)
                navigate(`/courses/${course.id}`)
              }}>
                <div className="flex items-center gap-3">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl text-2xl ring-1 ${meta.softBg}`}>
                    {meta.emoji}
                  </span>
                  <div>
                    <div className="font-display text-lg font-bold text-ink-900 dark:text-white">{course.shortName}</div>
                    <div className={`text-xs font-semibold ${meta.color}`}>{meta.name}</div>
                  </div>
                </div>
                <p className="mt-3 line-clamp-3 flex-1 text-sm text-ink-500 dark:text-ink-300">{course.description}</p>
                <div className="mt-4 flex items-center justify-between text-xs font-semibold text-ink-400">
                  <span>{course.units.length} units</span>
                  <span>
                    {course.units.reduce((n, u) => n + u.questions.length, 0)} questions ·{' '}
                    {course.units.reduce((n, u) => n + u.flashcards.length, 0)} cards
                  </span>
                </div>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}

export function CourseDetailPage() {
  const { courseId } = useParams()
  const app = useApp()
  const navigate = useNavigate()
  const course = getCourse(courseId!)

  if (!course) return <EmptyState emoji="🤔" title="Course not found" />

  const meta = SUBJECTS[course.subject]
  const stats = app.conceptStats[course.id] ?? {}
  const buckets = app.cardBuckets[course.id] ?? {}

  return (
    <div className="animate-fade-up">
      <PageHeader
        title={`${meta.emoji} ${course.name}`}
        subtitle={course.description}
        right={
          <button
            type="button"
            onClick={() => {
              app.setSelectedCourse(course.id)
              navigate(`/session/final?course=${course.id}`)
            }}
            className="rounded-xl bg-ink-900 px-4 py-2 text-sm font-bold text-white transition-transform hover:scale-105 dark:bg-white dark:text-ink-900"
          >
            🏁 Final exam mode
          </button>
        }
      />

      <div className="space-y-4">
        {course.units.map((unit, i) => {
          const mastery = unitMastery(unit, stats, buckets)
          const weakest = [...unit.concepts]
            .map((c) => ({ c, acc: conceptAccuracy(stats[c.id]) }))
            .filter((x) => stats[x.c.id] && x.acc < 0.7)
            .sort((a, b) => a.acc - b.acc)[0]
          return (
            <Card key={unit.id} className="p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-100 font-display text-sm font-bold text-ink-500 dark:bg-ink-700 dark:text-ink-200">
                      {i + 1}
                    </span>
                    <h3 className="font-display text-lg font-bold text-ink-900 dark:text-white">{unit.name}</h3>
                    {weakest && <Chip tone="warn">Needs work: {weakest.c.name}</Chip>}
                  </div>
                  <p className="mt-1.5 text-sm text-ink-500 dark:text-ink-300">{unit.description}</p>

                  <details className="mt-3">
                    <summary className="cursor-pointer text-xs font-bold uppercase tracking-wide text-brand-500">
                      Curriculum outcomes
                    </summary>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-ink-600 dark:text-ink-200">
                      {unit.outcomes.map((o) => <li key={o}>{o}</li>)}
                    </ul>
                  </details>
                </div>
                <div className="w-full sm:w-56">
                  <ProgressBar value={mastery} barClass={meta.bar} label="Unit mastery" />
                  <div className="mt-3 flex flex-wrap gap-2">
                    <button
                      type="button"
                      onClick={() => navigate(`/learn?course=${course.id}&unit=${unit.id}`)}
                      className="rounded-lg bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-600 hover:bg-emerald-500/20 dark:text-emerald-300"
                    >
                      📖 Learn
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate(`/flashcards?course=${course.id}&unit=${unit.id}`)}
                      className="rounded-lg bg-ink-100 px-3 py-1.5 text-xs font-bold text-ink-600 hover:bg-ink-200 dark:bg-ink-700 dark:text-ink-100"
                    >
                      🃏 Cards
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate(`/session/quiz?course=${course.id}&unit=${unit.id}`)}
                      className="rounded-lg bg-brand-500/10 px-3 py-1.5 text-xs font-bold text-brand-600 hover:bg-brand-500/20 dark:text-brand-300"
                    >
                      ⚡ Quiz
                    </button>
                    <button
                      type="button"
                      onClick={() => navigate(`/session/unit-test?course=${course.id}&unit=${unit.id}`)}
                      className="rounded-lg bg-violet-500/10 px-3 py-1.5 text-xs font-bold text-violet-600 hover:bg-violet-500/20 dark:text-violet-300"
                    >
                      📝 Unit test
                    </button>
                    {unitHasChallenges(course.id, unit.id) && (
                      <button
                        type="button"
                        onClick={() => navigate(`/codelab?course=${course.id}&unit=${unit.id}`)}
                        className="rounded-lg bg-cyan-500/10 px-3 py-1.5 text-xs font-bold text-cyan-600 hover:bg-cyan-500/20 dark:text-cyan-300"
                      >
                        ⌨️ Code lab
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
