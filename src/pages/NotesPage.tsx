import { useState } from 'react'
import { NOTE_METHODS } from '../data/notesMethods'
import { Card, Chip, PageHeader } from '../components/ui'

export default function NotesPage() {
  const [activeId, setActiveId] = useState(NOTE_METHODS[0].id)
  const method = NOTE_METHODS.find((m) => m.id === activeId)!

  return (
    <div className="animate-fade-up">
      <PageHeader
        title="✍️ Note-Taking Academy"
        subtitle="Six proven systems. Pick the one that matches the class — great notes are half the studying."
      />

      <div className="mb-5 flex flex-wrap gap-2">
        {NOTE_METHODS.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActiveId(m.id)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-all ${
              m.id === activeId
                ? 'bg-brand-500 text-white shadow-md'
                : 'bg-white text-ink-500 hover:bg-ink-100 dark:bg-ink-800 dark:text-ink-300'
            }`}
          >
            {m.emoji} {m.name}
          </button>
        ))}
      </div>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card className="animate-pop-in p-6" key={method.id}>
          <h2 className="font-display text-2xl font-extrabold text-ink-900 dark:text-white">
            {method.emoji} {method.name}
          </h2>
          <p className="mt-1 text-sm font-medium text-brand-500">{method.tagline}</p>

          <h3 className="mt-5 text-xs font-bold uppercase tracking-wide text-ink-400">Best for</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {method.bestFor.map((b) => <Chip key={b} tone="brand">{b}</Chip>)}
          </div>

          <h3 className="mt-5 text-xs font-bold uppercase tracking-wide text-ink-400">How to do it</h3>
          <ol className="mt-2 space-y-2">
            {method.steps.map((s, i) => (
              <li key={s} className="flex gap-3 text-sm text-ink-600 dark:text-ink-200">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-500/10 text-xs font-bold text-brand-600 dark:text-brand-300">
                  {i + 1}
                </span>
                {s}
              </li>
            ))}
          </ol>

          <div className="mt-5 rounded-xl bg-amber-500/10 p-4 text-sm text-amber-800 dark:text-amber-200">
            💡 <b>Pro tip:</b> {method.tips}
          </div>
        </Card>

        <Card className="flex flex-col p-6">
          <h3 className="text-xs font-bold uppercase tracking-wide text-ink-400">Page template</h3>
          <pre className="mt-3 flex-1 overflow-x-auto rounded-xl bg-ink-900 p-5 font-mono text-xs leading-relaxed text-emerald-300 dark:bg-ink-950">
            {method.template}
          </pre>
          <p className="mt-3 text-xs text-ink-400">
            Sketch this layout in your notebook before class starts — the structure does the organizing for you.
          </p>
        </Card>
      </div>
    </div>
  )
}
