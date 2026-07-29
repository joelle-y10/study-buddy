import { useNavigate, useSearchParams } from 'react-router-dom'
import { ALL_LESSONS, getLesson } from '../data/lessons'
import { allCoursesFor, getCourse } from '../data/catalog'
import { SUBJECTS } from '../data/meta'
import { diagramsForLesson, diagramsForUnit, tapingForUnit, type DiagramEntry, type TapeGuide } from '../data/diagrams'
import { useApp } from '../store/AppContext'
import { Card, Chip, EmptyState, PageHeader } from '../components/ui'
import type { Grade, Lesson, SubjectId } from '../types'

/** A gallery of accurate SVG diagrams for visual learners. */
function DiagramGallery({ entries }: { entries: DiagramEntry[] }) {
  if (entries.length === 0) return null
  return (
    <div className="space-y-4">
      {entries.map((d) => (
        <div key={d.id} className="overflow-hidden rounded-2xl border border-ink-100 dark:border-ink-700">
          {/* keep a light panel in both themes: diagram colors are tuned for it */}
          <div className="flex justify-center bg-white p-4 dark:bg-ink-100">{d.node}</div>
          <div className="border-t border-ink-100 bg-ink-50 px-4 py-3 dark:border-ink-700 dark:bg-ink-800">
            <p className="text-sm font-bold text-ink-800 dark:text-ink-100">{d.title}</p>
            <p className="mt-0.5 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{d.caption}</p>
            {d.credit && <p className="mt-1.5 text-xs text-ink-400 dark:text-ink-500">Image: {d.credit}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}

/** Step-by-step Alberta taping guides with hosted instructional photos. */
function TapingGuides({ guides }: { guides: TapeGuide[] }) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-rose-500/10 p-3.5 text-sm text-rose-800 dark:text-rose-200">
        ⚠️ <b>Theory only — Alberta Sports Med / REC sequences.</b> Practise hands-on with a
        certified athletic therapist or instructor (e.g. Sport Medicine Council of Alberta taping
        credential) before taping for real. Remove tape immediately if you feel numbness, tingling,
        or see any colour change.
      </div>
      {guides.map((g) => (
        <div key={g.id} className="rounded-2xl border border-ink-100 p-5 dark:border-ink-700">
          <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink-900 dark:text-white">
            <span className="text-2xl">{g.emoji}</span> {g.name}
          </h3>
          <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">{g.use}</p>
          {g.materials && (
            <p className="mt-2 text-xs font-medium text-ink-400 dark:text-ink-500">
              Materials: {g.materials}
            </p>
          )}

          <figure className="mt-4">
            <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-ink-400 dark:text-ink-500">
              Finished example — match this look
            </p>
            <img
              src={`${import.meta.env.BASE_URL}${g.image.src}`}
              alt={g.image.alt}
              loading="lazy"
              className="h-auto w-full max-w-md rounded-xl border border-ink-100 object-cover dark:border-ink-700"
            />
            <figcaption className="mt-1.5 text-xs text-ink-400 dark:text-ink-500">
              {g.image.credit}
            </figcaption>
          </figure>

          <ol className="mt-5 space-y-5">
            {g.steps.map((s, i) => (
              <li key={i} className="space-y-2">
                <div className="flex gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-xs font-bold text-brand-600 dark:text-brand-300">
                    {i + 1}
                  </span>
                  <div className="min-w-0 space-y-1">
                    <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">{s}</p>
                    {g.stepNotes?.[i] && (
                      <p className="text-sm leading-relaxed text-ink-600 dark:text-ink-300">
                        {g.stepNotes[i]}
                      </p>
                    )}
                  </div>
                </div>
                {g.stepPhotos?.[i] != null && (
                  <figure className="ml-7">
                    <img
                      src={`${import.meta.env.BASE_URL}${g.stepPhotos[i]!.src}`}
                      alt={g.stepPhotos[i]!.alt}
                      loading="lazy"
                      className="h-auto w-full max-w-md rounded-xl border border-ink-100 object-cover dark:border-ink-700"
                    />
                    <figcaption className="mt-1.5 text-xs text-ink-400 dark:text-ink-500">
                      {g.stepPhotos[i]!.credit}
                    </figcaption>
                  </figure>
                )}
              </li>
            ))}
          </ol>
        </div>
      ))}
    </div>
  )
}

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

function SectionCard({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <Card className="p-6">
      <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-ink-900 dark:text-white">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-500/10 text-sm font-bold text-brand-600 dark:text-brand-300">
          {n}
        </span>
        {title}
      </h2>
      {children}
    </Card>
  )
}

/** Reader for a hand-authored "brain hacks" lesson. */
function AuthoredLesson({ lesson, onBack }: { lesson: Lesson; onBack: () => void }) {
  const meta = SUBJECTS[lesson.subject]
  const visuals = diagramsForLesson(lesson.id)
  return (
    <div className="animate-fade-up mx-auto max-w-3xl">
      <button type="button" onClick={onBack} className="mb-4 text-sm font-bold text-brand-500 hover:underline">
        ← Back to Learning Center
      </button>
      <div className="mb-6 rounded-3xl bg-gradient-to-r from-brand-600 to-violet-500 p-6 text-white sm:p-8">
        <div className="flex items-center gap-3">
          <span className="text-4xl">{lesson.emoji}</span>
          <div>
            <h1 className="font-display text-2xl font-extrabold sm:text-3xl">{lesson.title}</h1>
            <p className="mt-1 text-sm text-white/85">{meta.emoji} {meta.name} · usually Grade {lesson.grade}</p>
          </div>
        </div>
        <p className="mt-4 text-sm leading-relaxed text-white/90">{lesson.summary}</p>
      </div>
      <div className="space-y-4">
        {visuals.length > 0 && (
          <Card className="p-6">
            <h2 className="mb-3 font-display text-lg font-bold text-ink-900 dark:text-white">👀 See it</h2>
            <DiagramGallery entries={visuals} />
          </Card>
        )}
        {lesson.sections.map((s, i) => (
          <SectionCard key={s.heading} n={i + 1} title={s.heading}>
            <Body text={s.body} />
            {s.tip && (
              <div className="mt-4 rounded-xl bg-amber-500/10 p-3.5 text-sm text-amber-800 dark:text-amber-200">
                💡 <b>Watch out:</b> {s.tip}
              </div>
            )}
          </SectionCard>
        ))}
        {lesson.tricks.length > 0 && (
          <Card className="border-2 border-violet-300/50 p-6 dark:border-violet-700/50">
            <h2 className="mb-3 font-display text-lg font-bold text-ink-900 dark:text-white">⚡ Brain hacks</h2>
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

export default function LearnPage() {
  const app = useApp()
  const navigate = useNavigate()
  const profile = app.profile!
  const [params, setParams] = useSearchParams()

  const subject = (params.get('subject') as SubjectId) ?? null
  const lessonId = params.get('lesson')
  const courseId = params.get('course')
  const unitId = params.get('unit')

  const authored = lessonId ? getLesson(lessonId) : undefined
  const course = courseId ? getCourse(courseId) : undefined
  const unit = course && unitId ? course.units.find((u) => u.id === unitId) : undefined

  // ---------- authored "brain hacks" lesson reader ----------
  if (authored) {
    return <AuthoredLesson lesson={authored} onBack={() => setParams(subject ? { subject } : {})} />
  }

  // ---------- curriculum unit lesson (auto-taught from course data) ----------
  if (course && unit) {
    const meta = SUBJECTS[course.subject]
    const related = ALL_LESSONS.filter((l) => l.subject === course.subject).slice(0, 4)
    const examples = [...unit.questions].sort((a, b) => a.difficulty - b.difficulty).slice(0, 3)
    const visuals = diagramsForUnit(course.id, unit.id)
    const tapes = tapingForUnit(course.id, unit.id)
    let sectionN = 0
    return (
      <div className="animate-fade-up mx-auto max-w-3xl">
        <button
          type="button"
          onClick={() => setParams({ course: course.id })}
          className="mb-4 text-sm font-bold text-brand-500 hover:underline"
        >
          ← All {course.shortName} lessons
        </button>

        <div className="mb-6 rounded-3xl bg-gradient-to-r from-brand-600 to-violet-500 p-6 text-white sm:p-8">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{meta.emoji}</span>
            <div>
              <h1 className="font-display text-2xl font-extrabold sm:text-3xl">{unit.name}</h1>
              <p className="mt-1 text-sm text-white/85">{course.name} · Grade {course.grade}</p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/90">{unit.description}</p>
        </div>

        <div className="space-y-4">
          <SectionCard n={++sectionN} title="What you'll learn">
            <ul className="space-y-2">
              {unit.outcomes.map((o) => (
                <li key={o} className="flex gap-2 text-sm leading-relaxed text-ink-600 dark:text-ink-200">
                  <span className="text-emerald-500">✓</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </SectionCard>

          {visuals.length > 0 && (
            <SectionCard n={++sectionN} title="See it — diagrams">
              <DiagramGallery entries={visuals} />
            </SectionCard>
          )}

          {tapes.length > 0 && (
            <SectionCard n={++sectionN} title="Taping techniques, step by step">
              <TapingGuides guides={tapes} />
            </SectionCard>
          )}

          {unit.concepts.map((c) => {
            const cards = unit.flashcards.filter((f) => f.concept === c.id)
            if (cards.length === 0) return null
            return (
              <SectionCard key={c.id} n={++sectionN} title={c.name}>
                <div className="space-y-3">
                  {cards.map((f) => (
                    <div key={f.id} className="rounded-xl bg-ink-50 p-4 dark:bg-ink-900">
                      <p className="text-sm font-bold text-ink-800 dark:text-ink-100">{f.front}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-ink-200">{f.back}</p>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )
          })}

          {examples.length > 0 && (
            <SectionCard n={++sectionN} title="Worked examples">
              <div className="space-y-4">
                {examples.map((q, i) => (
                  <div key={q.id} className="rounded-xl border border-ink-100 p-4 dark:border-ink-700">
                    <div className="mb-1 flex items-center gap-2">
                      <Chip tone="brand">Example {i + 1}</Chip>
                      <Chip>{'★'.repeat(q.difficulty)}{'☆'.repeat(3 - q.difficulty)}</Chip>
                    </div>
                    <p className="text-sm font-semibold text-ink-800 dark:text-ink-100">{q.prompt}</p>
                    <p className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">
                      <b>Answer:</b> {q.options[q.answer]}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                      <b>Why:</b> {q.explanation}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>
          )}

          <Card className="p-6 text-center">
            <h2 className="font-display text-lg font-bold text-ink-900 dark:text-white">Feel ready? Prove it. 💪</h2>
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <button
                type="button"
                onClick={() => navigate(`/flashcards?course=${course.id}&unit=${unit.id}`)}
                className="rounded-xl bg-ink-100 px-5 py-2.5 font-bold text-ink-600 hover:bg-ink-200 dark:bg-ink-700 dark:text-ink-100"
              >
                🃏 Drill the flashcards
              </button>
              <button
                type="button"
                onClick={() => navigate(`/session/quiz?course=${course.id}&unit=${unit.id}`)}
                className="rounded-xl bg-brand-500 px-5 py-2.5 font-bold text-white hover:bg-brand-600"
              >
                ⚡ Quiz me on this unit
              </button>
            </div>
          </Card>

          {related.length > 0 && (
            <Card className="p-6">
              <h2 className="mb-3 font-display text-lg font-bold text-ink-900 dark:text-white">⚡ Related brain hacks</h2>
              <div className="flex flex-wrap gap-2">
                {related.map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => setParams({ lesson: l.id })}
                    className="rounded-full bg-violet-500/10 px-3.5 py-1.5 text-sm font-bold text-violet-700 hover:bg-violet-500/20 dark:text-violet-300"
                  >
                    {l.emoji} {l.title}
                  </button>
                ))}
              </div>
            </Card>
          )}
        </div>
      </div>
    )
  }

  // ---------- course unit list ----------
  if (course) {
    const meta = SUBJECTS[course.subject]
    return (
      <div className="animate-fade-up">
        <button type="button" onClick={() => setParams({})} className="mb-4 text-sm font-bold text-brand-500 hover:underline">
          ← Learning Center
        </button>
        <PageHeader title={`${meta.emoji} ${course.name}`} subtitle={`Grade ${course.grade} · every unit retaught as a lesson`} />
        <div className="grid gap-4 sm:grid-cols-2">
          {course.units.map((u, i) => (
            <Card key={u.id} className="p-5" onClick={() => setParams({ course: course.id, unit: u.id })}>
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-ink-100 font-display text-sm font-bold text-ink-500 dark:bg-ink-700 dark:text-ink-200">
                  {i + 1}
                </span>
                <h3 className="font-display font-bold text-ink-900 dark:text-white">{u.name}</h3>
              </div>
              <p className="mt-2 line-clamp-2 text-sm text-ink-500 dark:text-ink-300">{u.description}</p>
              <div className="mt-3 flex gap-2">
                <Chip tone="brand">📖 {u.outcomes.length} outcomes</Chip>
                <Chip>{u.flashcards.length} key ideas</Chip>
                {diagramsForUnit(course.id, u.id).length > 0 && <Chip tone="good">📊 visuals</Chip>}
                {tapingForUnit(course.id, u.id).length > 0 && <Chip tone="good">🩹 taping guide</Chip>}
              </div>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  // ---------- hub ----------
  const provinceCourses = allCoursesFor(profile.province)
  const hacksFiltered = subject ? ALL_LESSONS.filter((l) => l.subject === subject) : ALL_LESSONS

  return (
    <div className="animate-fade-up">
      <PageHeader
        title="🏛️ Learning Center"
        subtitle="StudyBuddy University — your whole curriculum retaught, unit by unit, plus a library of brain hacks."
      />

      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setParams({})}
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
            onClick={() => setParams({ subject: s.id })}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
              subject === s.id ? 'bg-brand-500 text-white shadow-md' : 'bg-white text-ink-500 hover:bg-ink-100 dark:bg-ink-800 dark:text-ink-300'
            }`}
          >
            {s.emoji} {s.name}
          </button>
        ))}
      </div>

      {([10, 11, 12] as Grade[]).map((g) => {
        const gradeCourses = provinceCourses.filter((c) => c.grade === g && (!subject || c.subject === subject))
        if (gradeCourses.length === 0) return null
        return (
          <section key={g} className="mb-8">
            <h2 className="mb-3 flex items-center gap-2 font-display text-lg font-bold text-ink-900 dark:text-white">
              Grade {g}
              {g === profile.grade && <Chip tone="good">your grade</Chip>}
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {gradeCourses.map((c) => {
                const meta = SUBJECTS[c.subject]
                return (
                  <Card key={c.id} className="p-5" onClick={() => setParams({ course: c.id })}>
                    <div className="flex items-center gap-3">
                      <span className={`flex h-11 w-11 items-center justify-center rounded-2xl text-2xl ring-1 ${meta.softBg}`}>
                        {meta.emoji}
                      </span>
                      <div className="min-w-0">
                        <div className="truncate font-display font-bold text-ink-900 dark:text-white">{c.shortName}</div>
                        <div className={`text-xs font-semibold ${meta.color}`}>{c.units.length} unit lessons</div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>
          </section>
        )
      })}

      <section className="mb-4">
        <h2 className="mb-1 font-display text-lg font-bold text-ink-900 dark:text-white">⚡ Brain hacks library</h2>
        <p className="mb-3 text-sm text-ink-400">
          Bite-size masterclasses with mnemonics like BEDMAS, SOH CAH TOA and OIL RIG.
        </p>
        {hacksFiltered.length === 0 ? (
          <EmptyState emoji="🏗️" title="No hacks for this subject yet" />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hacksFiltered.map((l) => {
              const meta = SUBJECTS[l.subject]
              return (
                <Card
                  key={l.id}
                  className="flex flex-col p-5"
                  onClick={() => setParams({ ...(subject ? { subject } : {}), lesson: l.id })}
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
      </section>
    </div>
  )
}
