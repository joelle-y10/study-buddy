import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { useApp } from '../store/AppContext'
import { coursesFor, getCourse } from '../data/catalog'
import { SUBJECTS } from '../data/meta'
import { matchStruggleText, pickQuestions, struggledConceptIds } from '../engine/adaptive'
import { Card, Chip, EmptyState, PageHeader, ProgressBar, StarRating } from '../components/ui'
import type { QuizQuestion, SessionKind, Unit } from '../types'

const KIND_CONFIG: Record<SessionKind, {
  title: string
  emoji: string
  blurb: string
  count: number
  secondsPerQ: number | null
}> = {
  quiz: {
    title: 'Quick Quiz', emoji: '⚡',
    blurb: 'A short, adaptive practice round. Tell StudyBuddy what you\u2019re struggling with and it will target those concepts.',
    count: 8, secondsPerQ: null,
  },
  'unit-test': {
    title: 'Unit Test', emoji: '📝',
    blurb: 'A longer, timed, exam-style test on one unit — just like the real thing.',
    count: 15, secondsPerQ: 90,
  },
  final: {
    title: 'Final Exam', emoji: '🏁',
    blurb: 'Everything mode: questions from every unit in the course, weighted toward your weak spots.',
    count: 25, secondsPerQ: 75,
  },
}

export default function SessionPage() {
  const { kind: kindParam } = useParams()
  const kind = (kindParam ?? 'quiz') as SessionKind
  const cfg = KIND_CONFIG[kind]
  const app = useApp()
  const profile = app.profile!
  const [params, setParams] = useSearchParams()
  const courses = coursesFor(profile.province, profile.grade)

  const courseId = params.get('course') ?? app.selectedCourseId ?? courses[0]?.id ?? ''
  const course = getCourse(courseId)
  const unitId = params.get('unit') ?? course?.units[0]?.id ?? ''
  const unit = course?.units.find((u) => u.id === unitId)

  const units: Unit[] = useMemo(() => {
    if (!course) return []
    return kind === 'final' ? course.units : unit ? [unit] : []
  }, [course, unit, kind])

  const allConcepts = useMemo(() => units.flatMap((u) => u.concepts), [units])
  const courseStruggles = app.struggles.filter(
    (s) => s.courseId === courseId && !s.resolved,
  )

  // ---------- phases ----------
  const [phase, setPhase] = useState<'setup' | 'run' | 'done'>('setup')
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [qIndex, setQIndex] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [answers, setAnswers] = useState<{ q: QuizQuestion; correct: boolean }[]>([])
  const [struggleText, setStruggleText] = useState('')
  const [checkedConcepts, setCheckedConcepts] = useState<Set<string>>(new Set())
  const [secondsLeft, setSecondsLeft] = useState<number | null>(null)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [rating, setRating] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const finishRef = useRef<(() => void) | null>(null)

  useEffect(() => {
    setPhase('setup')
    setStruggleText('')
    setCheckedConcepts(new Set())
  }, [courseId, unitId, kind])

  useEffect(() => () => { if (timerRef.current) clearInterval(timerRef.current) }, [])

  if (!course || units.length === 0) {
    return <EmptyState emoji="🤔" title="No content for this selection yet" />
  }
  const meta = SUBJECTS[course.subject]

  const start = () => {
    // record struggles: free text (matched to concepts) + explicitly checked concepts
    const matched = struggleText.trim()
      ? matchStruggleText(struggleText, allConcepts)
      : []
    const conceptSet = new Set([...matched, ...checkedConcepts])
    if (struggleText.trim() || conceptSet.size > 0) {
      app.addStruggle({
        courseId: course.id,
        unitId: kind === 'final' ? 'all' : unitId,
        concepts: [...conceptSet],
        text: struggleText.trim() || [...conceptSet]
          .map((id) => allConcepts.find((c) => c.id === id)?.name)
          .filter(Boolean)
          .join(', '),
      })
    }

    const ctx = {
      stats: app.conceptStats[course.id] ?? {},
      struggles: [
        ...courseStruggles,
        // include this session's fresh struggles even before state updates
        {
          id: 'pending', courseId: course.id, unitId, concepts: [...conceptSet],
          text: '', createdAt: Date.now(), resolved: false,
        },
      ],
    }
    const qs = pickQuestions(units, cfg.count, ctx)
    setQuestions(qs)
    setQIndex(0)
    setChoice(null)
    setAnswers([])
    setRating(0)
    setSessionId(null)
    setPhase('run')

    if (cfg.secondsPerQ) {
      const total = qs.length * cfg.secondsPerQ
      setSecondsLeft(total)
      if (timerRef.current) clearInterval(timerRef.current)
      timerRef.current = setInterval(() => {
        setSecondsLeft((s) => {
          if (s === null) return s
          if (s <= 1) {
            if (timerRef.current) clearInterval(timerRef.current)
            finishRef.current?.()
            return 0
          }
          return s - 1
        })
      }, 1000)
    } else {
      setSecondsLeft(null)
    }
  }

  const finish = (finalAnswers?: { q: QuizQuestion; correct: boolean }[]) => {
    if (timerRef.current) clearInterval(timerRef.current)
    const list = finalAnswers ?? answers
    const byConcept: Record<string, { correct: number; total: number }> = {}
    for (const a of list) {
      const b = byConcept[a.q.concept] ?? { correct: 0, total: 0 }
      b.total += 1
      if (a.correct) b.correct += 1
      byConcept[a.q.concept] = b
    }
    const id = app.addSession({
      kind,
      courseId: course.id,
      unitId: kind === 'final' ? 'all' : unitId,
      total: questions.length,
      correct: list.filter((a) => a.correct).length,
      byConcept,
      rating: 0,
    })
    setSessionId(id)
    setPhase('done')
  }
  finishRef.current = () => finish()

  const pick = (idx: number) => {
    if (choice !== null) return
    const q = questions[qIndex]
    const correct = idx === q.answer
    setChoice(idx)
    app.recordAnswer(course.id, q.concept, correct)
    setAnswers((a) => [...a, { q, correct }])
  }

  const next = () => {
    if (qIndex + 1 >= questions.length) {
      finish()
    } else {
      setQIndex((i) => i + 1)
      setChoice(null)
    }
  }

  // ---------- render ----------
  const q = questions[qIndex]
  const correctCount = answers.filter((a) => a.correct).length
  const struggledSet = struggledConceptIds(courseStruggles)

  // per-concept results for this session, used by the verdict + breakdown cards
  const conceptResults = Object.entries(
    answers.reduce<Record<string, { correct: number; total: number }>>((acc, a) => {
      const b = acc[a.q.concept] ?? { correct: 0, total: 0 }
      b.total++; if (a.correct) b.correct++
      acc[a.q.concept] = b
      return acc
    }, {}),
  ).map(([cid, r]) => ({
    cid,
    name: allConcepts.find((c) => c.id === cid)?.name ?? cid,
    ...r,
    acc: r.correct / r.total,
  }))
  // tie-break toward the concept with more questions (stronger signal)
  const strongest = [...conceptResults].sort((a, b) => b.acc - a.acc || b.total - a.total)[0]
  const weakest = [...conceptResults].sort((a, b) => a.acc - b.acc || b.total - a.total)[0]
  const weakestUnit = weakest ? units.find((u) => u.concepts.some((c) => c.id === weakest.cid)) : undefined

  return (
    <div className="animate-fade-up">
      <PageHeader
        title={`${cfg.emoji} ${cfg.title}`}
        subtitle={`${course.shortName}${kind !== 'final' && unit ? ` · ${unit.name}` : ' · all units'}`}
      />

      {phase === 'setup' && (
        <div className="mx-auto max-w-2xl space-y-5">
          <Card className="space-y-4 p-6">
            <p className="text-sm text-ink-500 dark:text-ink-300">{cfg.blurb}</p>
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="sess-course" className="mb-1 block text-xs font-bold uppercase tracking-wide text-ink-400">Course</label>
                <select
                  id="sess-course"
                  value={courseId}
                  onChange={(e) => setParams({ course: e.target.value })}
                  className="w-full rounded-lg border border-ink-200 bg-white px-2.5 py-2 text-sm font-semibold dark:border-ink-700 dark:bg-ink-800 dark:text-white"
                >
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>{SUBJECTS[c.subject].emoji} {c.shortName}</option>
                  ))}
                </select>
              </div>
              {kind !== 'final' && (
                <div>
                  <label htmlFor="sess-unit" className="mb-1 block text-xs font-bold uppercase tracking-wide text-ink-400">Unit</label>
                  <select
                    id="sess-unit"
                    value={unitId}
                    onChange={(e) => setParams({ course: courseId, unit: e.target.value })}
                    className="w-full rounded-lg border border-ink-200 bg-white px-2.5 py-2 text-sm font-semibold dark:border-ink-700 dark:bg-ink-800 dark:text-white"
                  >
                    {course.units.map((u) => (
                      <option key={u.id} value={u.id}>{u.name}</option>
                    ))}
                  </select>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-ink-400">
              <Chip>{Math.min(cfg.count, units.flatMap((u) => u.questions).length)} questions</Chip>
              <Chip>{cfg.secondsPerQ ? `⏱️ timed (${cfg.secondsPerQ}s/question)` : '🐢 untimed'}</Chip>
              <Chip tone="brand">🎯 adapts to your weak spots</Chip>
            </div>
          </Card>

          <Card className="space-y-3 p-6">
            <h3 className="font-display font-bold text-ink-900 dark:text-white">
              🎯 What are you struggling with? <span className="font-sans text-xs font-semibold text-ink-400">(optional)</span>
            </h3>
            <textarea
              value={struggleText}
              onChange={(e) => setStruggleText(e.target.value)}
              placeholder={'e.g. "I really have problems with the tan function in triangles"'}
              rows={2}
              className="w-full rounded-xl border border-ink-200 px-3 py-2 text-sm outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-200 dark:border-ink-700 dark:bg-ink-800 dark:text-white"
            />
            <div className="flex flex-wrap gap-2">
              {allConcepts.map((c) => {
                const on = checkedConcepts.has(c.id) || (struggleText.trim() !== '' && matchStruggleText(struggleText, [c]).length > 0)
                const wasStruggling = struggledSet.has(c.id)
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCheckedConcepts((s) => {
                      const n = new Set(s)
                      if (n.has(c.id)) n.delete(c.id); else n.add(c.id)
                      return n
                    })}
                    className={`rounded-full border px-3 py-1 text-xs font-semibold transition-colors ${
                      on
                        ? 'border-brand-500 bg-brand-500/15 text-brand-600 dark:text-brand-300'
                        : wasStruggling
                          ? 'border-amber-400 bg-amber-500/10 text-amber-700 dark:text-amber-300'
                          : 'border-ink-200 text-ink-500 hover:border-ink-400 dark:border-ink-700 dark:text-ink-300'
                    }`}
                  >
                    {wasStruggling && !on ? '🎯 ' : ''}{c.name}
                  </button>
                )
              })}
            </div>
            {struggledSet.size > 0 && (
              <p className="text-xs text-ink-400">
                🎯 = you flagged this before. StudyBuddy is already serving extra questions on it.
              </p>
            )}
          </Card>

          <button
            type="button"
            onClick={start}
            className="w-full rounded-2xl bg-brand-500 py-3.5 font-display text-lg font-bold text-white transition-all hover:bg-brand-600"
          >
            {cfg.emoji} Start {cfg.title.toLowerCase()}
          </button>
        </div>
      )}

      {phase === 'run' && q && (
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 flex items-center justify-between gap-3">
            <ProgressBar value={qIndex / questions.length} barClass={meta.bar} className="flex-1" />
            <span className="text-sm font-bold text-ink-500 dark:text-ink-300">
              {qIndex + 1}/{questions.length}
            </span>
            {secondsLeft !== null && (
              <Chip tone={secondsLeft < 60 ? 'bad' : 'neutral'}>
                ⏱️ {Math.floor(secondsLeft / 60)}:{String(secondsLeft % 60).padStart(2, '0')}
              </Chip>
            )}
          </div>

          <Card className="p-6">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <Chip tone="brand">
                {allConcepts.find((c) => c.id === q.concept)?.name ?? q.concept}
              </Chip>
              <Chip>{'★'.repeat(q.difficulty)}{'☆'.repeat(3 - q.difficulty)}</Chip>
              {struggledSet.has(q.concept) && <Chip tone="warn">🎯 your focus area</Chip>}
            </div>
            <p className="font-display text-lg font-bold text-ink-900 dark:text-white">{q.prompt}</p>

            <div className="mt-5 space-y-2.5">
              {q.options.map((opt, i) => {
                let style = 'border-ink-200 hover:border-brand-400 hover:bg-brand-500/5 dark:border-ink-700'
                if (choice !== null) {
                  if (i === q.answer) style = 'border-emerald-500 bg-emerald-500/10'
                  else if (i === choice) style = 'border-rose-500 bg-rose-500/10'
                  else style = 'border-ink-100 opacity-50 dark:border-ink-800'
                }
                return (
                  <button
                    key={i}
                    type="button"
                    disabled={choice !== null}
                    onClick={() => pick(i)}
                    className={`flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left text-sm font-semibold text-ink-800 transition-all dark:text-ink-100 ${style}`}
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink-100 text-xs font-bold text-ink-500 dark:bg-ink-700 dark:text-ink-200">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {opt}
                    {choice !== null && i === q.answer && <span className="ml-auto">✅</span>}
                    {choice !== null && i === choice && i !== q.answer && <span className="ml-auto">❌</span>}
                  </button>
                )
              })}
            </div>

            {choice !== null && (
              <div className="mt-4 animate-pop-in rounded-xl bg-ink-50 p-4 dark:bg-ink-900">
                <p className="text-sm text-ink-600 dark:text-ink-200">
                  <b>{choice === q.answer ? '✅ Nailed it! ' : '📚 Here\u2019s the idea: '}</b>
                  {q.explanation}
                </p>
                <button
                  type="button"
                  onClick={next}
                  className="mt-3 w-full rounded-xl bg-brand-500 py-2.5 font-bold text-white hover:bg-brand-600"
                >
                  {qIndex + 1 >= questions.length ? 'See my results →' : 'Next question →'}
                </button>
              </div>
            )}
          </Card>
        </div>
      )}

      {phase === 'done' && (
        <div className="mx-auto max-w-2xl space-y-5">
          <Card className="animate-pop-in p-8 text-center">
            <div className="text-6xl">
              {correctCount / Math.max(1, answers.length) >= 0.8 ? '🏆' : correctCount / Math.max(1, answers.length) >= 0.5 ? '💪' : '🌱'}
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold text-ink-900 dark:text-white">
              {correctCount} / {questions.length}
            </h2>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
              {answers.length < questions.length
                ? `Time ran out with ${questions.length - answers.length} unanswered.`
                : correctCount === questions.length
                  ? 'Perfect score. Absolutely legendary.'
                  : 'Every question you miss now is one you\u2019ll get right on the real thing.'}
            </p>
          </Card>

          {strongest && weakest && strongest.cid !== weakest.cid && (
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="border-2 border-emerald-300/60 p-5 dark:border-emerald-700/60">
                <div className="text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
                  💪 Strongest on this {kind === 'quiz' ? 'quiz' : 'test'}
                </div>
                <div className="mt-1.5 font-display text-lg font-extrabold text-ink-900 dark:text-white">
                  {strongest.name}
                </div>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
                  {strongest.correct}/{strongest.total} correct{strongest.acc === 1 ? ' — flawless. Keep it up!' : ' — this one\u2019s clicking for you.'}
                </p>
              </Card>
              <Card className="border-2 border-rose-300/60 p-5 dark:border-rose-700/60">
                <div className="text-xs font-bold uppercase tracking-wide text-rose-600 dark:text-rose-400">
                  🎯 Needs work
                </div>
                <div className="mt-1.5 font-display text-lg font-extrabold text-ink-900 dark:text-white">
                  {weakest.name}
                </div>
                <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">
                  {weakest.correct}/{weakest.total} correct
                  {weakest.acc >= 0.8
                    ? ' — honestly still solid. No real weak spots today.'
                    : ' — worth a review before the real thing.'}
                </p>
                {weakestUnit && weakest.acc < 0.8 && (
                  <Link
                    to={`/learn?course=${course.id}&unit=${weakestUnit.id}`}
                    className="mt-3 inline-block rounded-lg bg-rose-500/10 px-3 py-1.5 text-xs font-bold text-rose-600 hover:bg-rose-500/20 dark:text-rose-300"
                  >
                    📖 Relearn {weakest.name}
                  </Link>
                )}
              </Card>
            </div>
          )}

          <Card className="p-6">
            <h3 className="mb-3 font-display font-bold text-ink-900 dark:text-white">Concept breakdown</h3>
            <div className="space-y-3">
              {[...conceptResults].sort((a, b) => b.acc - a.acc).map((r) => (
                <div key={r.cid}>
                  <div className="mb-1 flex justify-between text-sm">
                    <span className="font-semibold text-ink-700 dark:text-ink-100">
                      {r.name} {struggledSet.has(r.cid) && '🎯'}
                    </span>
                    <span className="text-ink-400">{r.correct}/{r.total}</span>
                  </div>
                  <ProgressBar
                    value={r.acc}
                    barClass={r.acc >= 0.8 ? 'bg-emerald-500' : r.acc >= 0.5 ? 'bg-amber-500' : 'bg-rose-500'}
                  />
                </div>
              ))}
            </div>
          </Card>

          {courseStruggles.length > 0 && (
            <Card className="p-6">
              <h3 className="mb-2 font-display font-bold text-ink-900 dark:text-white">🎯 Your focus areas</h3>
              <p className="mb-3 text-xs text-ink-400">Feeling confident about one of these now? Mark it conquered.</p>
              <ul className="space-y-2">
                {courseStruggles.map((s) => (
                  <li key={s.id} className="flex items-center justify-between gap-3 text-sm">
                    <span className="text-ink-600 dark:text-ink-200">&ldquo;{s.text}&rdquo;</span>
                    <button
                      type="button"
                      onClick={() => app.resolveStruggle(s.id)}
                      className="shrink-0 rounded-lg bg-emerald-500/10 px-3 py-1 text-xs font-bold text-emerald-700 hover:bg-emerald-500/20 dark:text-emerald-300"
                    >
                      ✅ Conquered it
                    </button>
                  </li>
                ))}
              </ul>
            </Card>
          )}

          <Card className="p-6 text-center">
            <h3 className="font-display font-bold text-ink-900 dark:text-white">
              How is your understanding now, compared to before?
            </h3>
            <div className="mt-3 flex justify-center">
              <StarRating
                value={rating}
                onChange={(v) => {
                  setRating(v)
                  if (sessionId) app.rateSession(sessionId, v)
                }}
              />
            </div>
            <p className="mt-2 text-xs text-ink-400">1 = still lost · 5 = way better</p>
          </Card>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={() => setPhase('setup')}
              className="rounded-xl bg-brand-500 px-5 py-2.5 font-bold text-white hover:bg-brand-600"
            >
              🔁 Go again
            </button>
            <Link
              to="/progress"
              className="rounded-xl bg-ink-100 px-5 py-2.5 font-bold text-ink-600 hover:bg-ink-200 dark:bg-ink-700 dark:text-ink-100"
            >
              📈 See my progress
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
