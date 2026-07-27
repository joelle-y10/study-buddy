import { useSearchParams } from 'react-router-dom'
import { ALL_LESSONS, getLesson } from '../data/lessons'
import { SUBJECTS } from '../data/meta'
import { Card, Chip, EmptyState, PageHeader } from '../components/ui'
import type { Grade, SubjectId } from '../types'

/** Renders lesson body text: blank-line paragraphs, "• " bullet lines. */
function Body({ text }: { text: string }) {
  return (
    <div className="space-y-2">
      {text.split('\n\n').map((block, i) => {
        const lines = block.split('\n')
        const bullets = lines.filter((l) => l.startsWith('• '))
        const rest = lines.filter((l) => !l.startsWith('• ')).join(' ').trim()
        return (
          <div key={i}>
            {rest && <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-200">{rest}</p>}
            {bullets.length > 0 && (
              <ul className="mt-1.5 space-y-1.5">
                {bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm leading-relaxed text-ink-600 dark:text-ink-200">
                    <span className="text-brand-500">▸</span>
                    <span>{b.slice(2)}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default function LearnPage() {
  const [params, setParams] = useSearchParams()
  const subject = (params.get('subject') as SubjectId) ?? null
  const grade = params.get('grade') ? (Number(params.get('grade')) as Grade) : null
  const lessonId = params.get('lesson')
  const lesson = lessonId ? getLesson(lessonId) : undefined

  const setFilter = (next: { subject?: SubjectId | null; grade?: Grade | null }) => {
    const p: Record<string, string> = {}
    const s = next.subject === undefined ? subject : next.subject
    const g = next.grade === undefined ? grade : next.grade
    if (s) p.subject = s
    if (g) p.grade = String(g)
    setParams(p)
  }

  // ---------- lesson reader ----------
  if (lesson) {
    const meta = SUBJECTS[lesson.subject]
    return (
      <div className="animate-fade-up mx-auto max-w-3xl">
        <button
          type="button"
          onClick={() => setParams({ subject: lesson.subject })}
          className="mb-4 text-sm font-bold text-brand-500 hover:underline"
        >
          ← Back to {meta.name}
        </button>

        <div className="mb-6 rounded-3xl bg-gradient-to-r from-brand-600 to-violet-500 p-6 text-white sm:p-8">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{lesson.emoji}</span>
            <div>
              <h1 className="font-display text-2xl font-extrabold sm:text-3xl">{lesson.title}</h1>
              <p className="mt-1 text-sm text-white/85">
                {meta.emoji} {meta.name} · usually Grade {lesson.grade}
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/90">{lesson.summary}</p>
        </div>

        <div className="space-y-4">
          {lesson.sections.map((s, i) => (
            <Card key={s.heading} className="p-6">
              <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-ink-900 dark:text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500/10 text-sm font-bold text-brand-600 dark:text-brand-300">
                  {i + 1}
                </span>
                {s.heading}
              </h2>
              <Body text={s.body} />
              {s.tip && (
                <div className="mt-4 rounded-xl bg-amber-500/10 p-3.5 text-sm text-amber-800 dark:text-amber-200">
                  💡 <b>Watch out:</b> {s.tip}
                </div>
              )}
            </Card>
          ))}

          {lesson.tricks.length > 0 && (
            <Card className="border-2 border-violet-300/50 p-6 dark:border-violet-700/50">
              <h2 className="mb-3 font-display text-lg font-bold text-ink-900 dark:text-white">
                ⚡ Brain hacks
              </h2>
              <div className="space-y-3">
                {lesson.tricks.map((t) => (
                  <div key={t.name} className="rounded-xl bg-violet-500/10 p-4">
                    <div className="font-display font-bold text-violet-700 dark:text-violet-300">{t.name}</div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-600 dark:text-ink-200">{t.trick}</p>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {lesson.formulas && lesson.formulas.length > 0 && (
            <Card className="p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-ink-900 dark:text-white">📋 Formula sheet</h2>
              <ul className="space-y-2">
                {lesson.formulas.map((f) => (
                  <li key={f} className="rounded-lg bg-ink-50 px-3 py-2 font-mono text-sm text-ink-700 dark:bg-ink-900 dark:text-ink-100">
                    {f}
                  </li>
                ))}
              </ul>
            </Card>
          )}
        </div>
      </div>
    )
  }

  // ---------- browser ----------
  const filtered = ALL_LESSONS.filter(
    (l) => (!subject || l.subject === subject) && (!grade || l.grade === grade),
  )

  return (
    <div className="animate-fade-up">
      <PageHeader
        title="🏛️ Learning Center"
        subtitle="StudyBuddy University — every topic retaught: brief, clear, and packed with memory hacks."
      />

      {/* subject picker */}
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setFilter({ subject: null })}
          className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
            !subject ? 'bg-brand-500 text-white shadow-md' : 'bg-white text-ink-500 hover:bg-ink-100 dark:bg-ink-800 dark:text-ink-300'
          }`}
        >
          ✨ All subjects
        </button>
        {Object.values(SUBJECTS).map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setFilter({ subject: s.id })}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
              subject === s.id ? 'bg-brand-500 text-white shadow-md' : 'bg-white text-ink-500 hover:bg-ink-100 dark:bg-ink-800 dark:text-ink-300'
            }`}
          >
            {s.emoji} {s.name}
          </button>
        ))}
      </div>

      {/* grade filter */}
      <div className="mb-6 flex gap-2">
        <button
          type="button"
          onClick={() => setFilter({ grade: null })}
          className={`rounded-full px-3 py-1 text-xs font-bold ${
            !grade ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-900' : 'bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-300'
          }`}
        >
          All grades
        </button>
        {([10, 11, 12] as Grade[]).map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setFilter({ grade: g })}
            className={`rounded-full px-3 py-1 text-xs font-bold ${
              grade === g ? 'bg-ink-900 text-white dark:bg-white dark:text-ink-900' : 'bg-ink-100 text-ink-500 dark:bg-ink-800 dark:text-ink-300'
            }`}
          >
            Grade {g}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <EmptyState emoji="🏗️" title="Lessons coming soon" hint="This wing of StudyBuddy University is still being built." />
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((l) => {
            const meta = SUBJECTS[l.subject]
            return (
              <Card
                key={l.id}
                className="flex flex-col p-5"
                onClick={() => setParams({ ...(subject ? { subject } : {}), ...(grade ? { grade: String(grade) } : {}), lesson: l.id })}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex h-11 w-11 items-center justify-center rounded-2xl text-2xl ring-1 ${meta.softBg}`}>
                    {l.emoji}
                  </span>
                  <div className="min-w-0">
                    <div className="truncate font-display font-bold text-ink-900 dark:text-white">{l.title}</div>
                    <div className={`text-xs font-semibold ${meta.color}`}>{meta.name} · Gr {l.grade}</div>
                  </div>
                </div>
                <p className="mt-3 line-clamp-3 flex-1 text-sm text-ink-500 dark:text-ink-300">{l.summary}</p>
                <div className="mt-3 flex gap-2">
                  <Chip tone="brand">⚡ {l.tricks.length} hack{l.tricks.length !== 1 ? 's' : ''}</Chip>
                  <Chip>{l.sections.length} parts</Chip>
                </div>
              </Card>
            )
          })}
        </div>
      )}
    </div>
  )
}
