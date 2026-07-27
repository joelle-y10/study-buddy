import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useApp } from '../store/AppContext'
import { coursesFor, getCourse } from '../data/catalog'
import { SUBJECTS } from '../data/meta'
import { Card, Chip, EmptyState, PageHeader } from '../components/ui'
import type { Flashcard } from '../types'

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export default function FlashcardsPage() {
  const app = useApp()
  const profile = app.profile!
  const [params, setParams] = useSearchParams()
  const courses = coursesFor(profile.province, profile.grade)

  const courseId = params.get('course') ?? app.selectedCourseId ?? courses[0]?.id ?? ''
  const course = getCourse(courseId)
  const unitId = params.get('unit') ?? course?.units[0]?.id ?? ''
  const unit = course?.units.find((u) => u.id === unitId)

  const [deck, setDeck] = useState<Flashcard[]>([])
  const [pos, setPos] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [sessionResults, setSessionResults] = useState<Record<string, 'know' | 'learning'>>({})

  useEffect(() => {
    setDeck(unit ? shuffle(unit.flashcards) : [])
    setPos(0)
    setFlipped(false)
    setSessionResults({})
  }, [courseId, unitId, unit])

  if (!course || !unit) {
    return <EmptyState emoji="🃏" title="No flashcards yet" hint="Pick a course with content, or check back soon." />
  }

  const meta = SUBJECTS[course.subject]
  const current = deck[pos]
  const done = pos >= deck.length
  const knownCount = Object.values(sessionResults).filter((v) => v === 'know').length
  const learningCards = deck.filter((c) => sessionResults[c.id] === 'learning')

  const mark = (bucket: 'know' | 'learning') => {
    if (!current) return
    app.setCardBucket(course.id, current.id, bucket)
    setSessionResults((r) => ({ ...r, [current.id]: bucket }))
    setFlipped(false)
    setPos((p) => p + 1)
  }

  const restart = (cards: Flashcard[]) => {
    setDeck(shuffle(cards))
    setPos(0)
    setFlipped(false)
    setSessionResults({})
  }

  return (
    <div className="animate-fade-up">
      <PageHeader
        title="Flashcards"
        subtitle="Flip, sort into Know / Still learning, then review what's left."
        right={
          <div className="flex gap-2">
            <select
              value={courseId}
              onChange={(e) => setParams({ course: e.target.value })}
              className="rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 text-sm font-semibold dark:border-ink-700 dark:bg-ink-800 dark:text-white"
            >
              {courses.map((c) => (
                <option key={c.id} value={c.id}>{SUBJECTS[c.subject].emoji} {c.shortName}</option>
              ))}
            </select>
            <select
              value={unitId}
              onChange={(e) => setParams({ course: courseId, unit: e.target.value })}
              className="max-w-48 rounded-lg border border-ink-200 bg-white px-2.5 py-1.5 text-sm font-semibold dark:border-ink-700 dark:bg-ink-800 dark:text-white"
            >
              {course.units.map((u) => (
                <option key={u.id} value={u.id}>{u.name}</option>
              ))}
            </select>
          </div>
        }
      />

      <div className="mx-auto max-w-2xl">
        {/* progress strip */}
        <div className="mb-4 flex items-center justify-between text-sm font-semibold text-ink-500 dark:text-ink-300">
          <span>{Math.min(pos + 1, deck.length)} / {deck.length}</span>
          <div className="flex gap-2">
            <Chip tone="good">✅ {knownCount} know</Chip>
            <Chip tone="warn">🌱 {Object.keys(sessionResults).length - knownCount} learning</Chip>
          </div>
        </div>

        {!done && current && (
          <>
            <button
              type="button"
              onClick={() => setFlipped((f) => !f)}
              className={`flip-card block w-full ${flipped ? 'flipped' : ''}`}
              aria-label="Flip card"
            >
              <div className="flip-card-inner h-72">
                <Card className="flip-face flex h-72 items-center justify-center p-8">
                  <div className="text-center">
                    <Chip tone="brand" className="mb-4">{meta.emoji} {unit.name}</Chip>
                    <p className="font-display text-xl font-bold text-ink-900 sm:text-2xl dark:text-white">
                      {current.front}
                    </p>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-300">tap to flip</p>
                  </div>
                </Card>
                <Card className="flip-face flip-back flex h-72 items-center justify-center bg-brand-500/5 p-8">
                  <p className="text-center text-lg font-medium text-ink-800 dark:text-ink-100">{current.back}</p>
                </Card>
              </div>
            </button>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => mark('learning')}
                className="rounded-xl border-2 border-amber-400/60 bg-amber-500/10 py-3 font-bold text-amber-700 transition-transform hover:scale-[1.02] dark:text-amber-300"
              >
                🌱 Still learning
              </button>
              <button
                type="button"
                onClick={() => mark('know')}
                className="rounded-xl border-2 border-emerald-400/60 bg-emerald-500/10 py-3 font-bold text-emerald-700 transition-transform hover:scale-[1.02] dark:text-emerald-300"
              >
                ✅ I know this
              </button>
            </div>
            <button
              type="button"
              onClick={() => restart(unit.flashcards)}
              className="mt-3 w-full rounded-xl py-2 text-sm font-semibold text-ink-400 hover:text-ink-600 dark:hover:text-ink-200"
            >
              🔀 Shuffle & restart
            </button>
          </>
        )}

        {done && deck.length > 0 && (
          <Card className="animate-pop-in p-8 text-center">
            <div className="text-5xl">{learningCards.length === 0 ? '🏆' : '💪'}</div>
            <h2 className="mt-3 font-display text-2xl font-extrabold text-ink-900 dark:text-white">
              {learningCards.length === 0 ? 'Deck mastered!' : 'Round complete!'}
            </h2>
            <p className="mt-2 text-sm text-ink-500 dark:text-ink-300">
              You knew <b>{knownCount}</b> of <b>{deck.length}</b> cards.
              {learningCards.length > 0 && ` ${learningCards.length} to review.`}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {learningCards.length > 0 && (
                <button
                  type="button"
                  onClick={() => restart(learningCards)}
                  className="rounded-xl bg-brand-500 px-5 py-2.5 font-bold text-white hover:bg-brand-600"
                >
                  🌱 Review the {learningCards.length} I missed
                </button>
              )}
              <button
                type="button"
                onClick={() => restart(unit.flashcards)}
                className="rounded-xl bg-ink-100 px-5 py-2.5 font-bold text-ink-600 hover:bg-ink-200 dark:bg-ink-700 dark:text-ink-100"
              >
                🔀 Full deck again
              </button>
            </div>
          </Card>
        )}

        {deck.length === 0 && (
          <EmptyState emoji="🃏" title="This unit has no flashcards yet" />
        )}
      </div>
    </div>
  )
}
