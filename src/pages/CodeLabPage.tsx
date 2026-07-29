import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useApp } from '../store/AppContext'
import { getCourse } from '../data/catalog'
import { getChallenges } from '../data/challenges'
import { explainError, outputMatches, runPython } from '../lib/python'
import { Card, Chip, EmptyState, PageHeader } from '../components/ui'

type RunStatus = 'idle' | 'loading-python' | 'running' | 'pass' | 'fail' | 'error'

export default function CodeLabPage() {
  const app = useApp()
  const [params] = useSearchParams()
  const courseId = params.get('course') ?? ''
  const unitId = params.get('unit') ?? ''
  const course = getCourse(courseId)
  const unit = course?.units.find((u) => u.id === unitId)
  const challenges = getChallenges(courseId, unitId)

  const [idx, setIdx] = useState(0)
  const challenge = challenges[idx]
  const [code, setCode] = useState(challenge?.starter ?? '')
  const [status, setStatus] = useState<RunStatus>('idle')
  const [output, setOutput] = useState('')
  const [errorMsg, setErrorMsg] = useState<string | null>(null)
  const [showHint, setShowHint] = useState(false)
  const [showSolution, setShowSolution] = useState(false)
  const editorRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    setCode(challenge?.starter ?? '')
    setStatus('idle')
    setOutput('')
    setErrorMsg(null)
    setShowHint(false)
    setShowSolution(false)
  }, [idx, challenge?.starter])

  if (!course || !unit || challenges.length === 0) {
    return <EmptyState emoji="⌨️" title="No code challenges here yet" hint="Pick a programming unit from a Computer Science course." />
  }

  const done = (id: string) => app.completedChallenges[id] !== undefined
  const solvedCount = challenges.filter((c) => done(c.id)).length

  const run = async () => {
    setStatus('loading-python')
    setErrorMsg(null)
    try {
      const full = challenge.harness ? `${code}\n\n${challenge.harness}` : code
      setStatus('running')
      const res = await runPython(full)
      setOutput(res.output)
      if (res.error) {
        setErrorMsg(res.error)
        setStatus('error')
      } else if (outputMatches(res.output, challenge.expectedOutput)) {
        setStatus('pass')
        if (!done(challenge.id)) {
          app.markChallengeDone(challenge.id)
          app.recordAnswer(course.id, challenge.concept, true)
        }
      } else {
        setStatus('fail')
      }
    } catch (e) {
      setErrorMsg(e instanceof Error ? e.message : String(e))
      setStatus('error')
    }
  }

  // Tab inserts spaces instead of leaving the editor
  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      const el = editorRef.current
      if (!el) return
      const start = el.selectionStart
      const end = el.selectionEnd
      const next = code.slice(0, start) + '    ' + code.slice(end)
      setCode(next)
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = start + 4
      })
    }
  }

  const reveal = () => {
    setShowSolution(true)
    // giving up counts as a miss for the adaptive engine (only if not already solved)
    if (!done(challenge.id)) app.recordAnswer(course.id, challenge.concept, false)
  }

  return (
    <div className="animate-fade-up mx-auto max-w-3xl">
      <PageHeader
        title="⌨️ Code Lab"
        subtitle={`${course.shortName} · ${unit.name} — write it, run it, fix it until it works.`}
      />

      {/* challenge picker */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        {challenges.map((c, i) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setIdx(i)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-bold transition-all ${
              i === idx
                ? 'bg-cyan-600 text-white shadow-md'
                : done(c.id)
                  ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300'
                  : 'bg-white text-ink-500 hover:bg-ink-100 dark:bg-ink-800 dark:text-ink-300'
            }`}
          >
            {done(c.id) ? '✅ ' : ''}{i + 1}. {c.title}
          </button>
        ))}
        <span className="ml-auto text-xs font-bold text-ink-400">{solvedCount}/{challenges.length} solved</span>
      </div>

      {/* task */}
      <Card className="mb-4 p-6">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <Chip tone="brand">{unit.concepts.find((c) => c.id === challenge.concept)?.name ?? challenge.concept}</Chip>
          <Chip>{'★'.repeat(challenge.difficulty)}{'☆'.repeat(3 - challenge.difficulty)}</Chip>
          {done(challenge.id) && <Chip tone="good">✅ solved</Chip>}
        </div>
        <h2 className="font-display text-lg font-bold text-ink-900 dark:text-white">{challenge.title}</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-ink-200">{challenge.task}</p>
        <div className="mt-3 rounded-lg bg-ink-50 px-3 py-2 font-mono text-xs text-ink-500 dark:bg-ink-900 dark:text-ink-300">
          Expected output:
          <pre className="mt-1 whitespace-pre-wrap text-sm text-ink-800 dark:text-ink-100">{challenge.expectedOutput}</pre>
        </div>
        {challenge.hint && (
          <div className="mt-3">
            {showHint ? (
              <p className="rounded-xl bg-amber-500/10 p-3 text-sm text-amber-800 dark:text-amber-200">💡 {challenge.hint}</p>
            ) : (
              <button type="button" onClick={() => setShowHint(true)} className="text-sm font-bold text-amber-600 hover:underline dark:text-amber-400">
                💡 Show hint
              </button>
            )}
          </div>
        )}
      </Card>

      {/* editor */}
      <Card className="mb-4 overflow-hidden">
        <div className="flex items-center justify-between border-b border-ink-100 bg-ink-50 px-4 py-2 dark:border-ink-800 dark:bg-ink-900">
          <span className="font-mono text-xs font-bold text-ink-400">main.py</span>
          <button
            type="button"
            onClick={() => { setCode(challenge.starter); setStatus('idle'); setOutput(''); setErrorMsg(null) }}
            className="text-xs font-bold text-ink-400 hover:text-ink-600 dark:hover:text-ink-200"
          >
            ↺ Reset code
          </button>
        </div>
        <textarea
          ref={editorRef}
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyDown={onKeyDown}
          rows={Math.max(8, code.split('\n').length + 2)}
          spellCheck={false}
          autoCapitalize="off"
          autoComplete="off"
          className="w-full resize-y bg-white px-4 py-3 font-mono text-sm leading-relaxed text-ink-900 outline-none dark:bg-ink-950 dark:text-ink-50"
        />
      </Card>

      <div className="mb-4 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={run}
          disabled={status === 'running' || status === 'loading-python'}
          className="rounded-xl bg-cyan-600 px-6 py-2.5 font-display font-bold text-white transition-all hover:bg-cyan-700 disabled:opacity-60"
        >
          {status === 'loading-python' ? '⏳ Loading Python…' : status === 'running' ? '⚙️ Running…' : '▶ Run my code'}
        </button>
        <button
          type="button"
          onClick={reveal}
          className="rounded-xl bg-ink-100 px-4 py-2.5 text-sm font-bold text-ink-500 hover:bg-ink-200 dark:bg-ink-800 dark:text-ink-300"
        >
          🏳️ Show solution
        </button>
        {idx + 1 < challenges.length && status === 'pass' && (
          <button
            type="button"
            onClick={() => setIdx(idx + 1)}
            className="ml-auto rounded-xl bg-emerald-500 px-5 py-2.5 font-bold text-white hover:bg-emerald-600"
          >
            Next challenge →
          </button>
        )}
      </div>

      {/* results */}
      {status === 'pass' && (
        <Card className="animate-pop-in border-2 border-emerald-400/60 p-5">
          <p className="font-display text-lg font-bold text-emerald-600 dark:text-emerald-400">🎉 It works! Challenge solved.</p>
          <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-ink-50 px-3 py-2 font-mono text-sm text-ink-800 dark:bg-ink-900 dark:text-ink-100">{output}</pre>
        </Card>
      )}
      {status === 'fail' && (
        <Card className="border-2 border-amber-400/60 p-5">
          <p className="font-display font-bold text-amber-700 dark:text-amber-400">Almost — it ran, but the output doesn’t match yet. Compare and adjust:</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-400">Your output</div>
              <pre className="min-h-12 whitespace-pre-wrap rounded-lg bg-ink-50 px-3 py-2 font-mono text-sm text-rose-600 dark:bg-ink-900 dark:text-rose-400">{output || '(nothing was printed)'}</pre>
            </div>
            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-400">Expected</div>
              <pre className="min-h-12 whitespace-pre-wrap rounded-lg bg-ink-50 px-3 py-2 font-mono text-sm text-emerald-700 dark:bg-ink-900 dark:text-emerald-400">{challenge.expectedOutput}</pre>
            </div>
          </div>
        </Card>
      )}
      {status === 'error' && (
        <Card className="border-2 border-rose-400/60 p-5">
          <p className="font-display font-bold text-rose-600 dark:text-rose-400">🐞 Python hit an error — read it, find the line, fix it, run again:</p>
          <pre className="mt-2 whitespace-pre-wrap rounded-lg bg-ink-50 px-3 py-2 font-mono text-sm text-rose-600 dark:bg-ink-900 dark:text-rose-400">{errorMsg}</pre>
          {errorMsg && explainError(errorMsg) && (
            <div className="mt-3 rounded-xl bg-sky-500/10 p-3.5 text-sm leading-relaxed text-sky-800 dark:text-sky-200">
              🧭 <b>What this usually means:</b> {explainError(errorMsg)}
            </div>
          )}
          {output && (
            <>
              <div className="mt-2 text-xs font-bold uppercase tracking-wide text-ink-400">Printed before the error</div>
              <pre className="mt-1 whitespace-pre-wrap rounded-lg bg-ink-50 px-3 py-2 font-mono text-sm text-ink-700 dark:bg-ink-900 dark:text-ink-200">{output}</pre>
            </>
          )}
        </Card>
      )}

      {showSolution && (
        <Card className="mt-4 p-5">
          <p className="mb-2 font-display font-bold text-ink-900 dark:text-white">One way to solve it</p>
          <pre className="whitespace-pre-wrap rounded-lg bg-ink-50 px-3 py-2 font-mono text-sm text-ink-800 dark:bg-ink-900 dark:text-ink-100">{challenge.solution}</pre>
          <p className="mt-2 text-xs text-ink-400">Type it out yourself rather than copy-pasting — your fingers learn syntax faster than your eyes do.</p>
        </Card>
      )}

      <p className="mt-6 text-center text-xs text-ink-400">
        Python runs entirely in your browser. First run downloads the runtime (~10 MB), then it’s fast. Avoid infinite loops — they’ll freeze the page.
      </p>
    </div>
  )
}
