import { useState } from 'react'
import { useApp } from '../store/AppContext'
import { coursesFor } from '../data/catalog'
import { SUBJECTS } from '../data/meta'
import { Card, PageHeader } from '../components/ui'
import type { EventKind } from '../types'

const KINDS: { id: EventKind; label: string; emoji: string }[] = [
  { id: 'quiz', label: 'Quiz', emoji: '⚡' },
  { id: 'unit-test', label: 'Unit test', emoji: '📝' },
  { id: 'final', label: 'Final exam', emoji: '🏁' },
  { id: 'assignment', label: 'Assignment', emoji: '📎' },
  { id: 'study', label: 'Study session', emoji: '📖' },
]

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

function iso(y: number, m: number, d: number) {
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
}

export default function CalendarPage() {
  const app = useApp()
  const profile = app.profile!
  const courses = coursesFor(profile.province, profile.grade)

  const now = new Date()
  const [year, setYear] = useState(now.getFullYear())
  const [month, setMonth] = useState(now.getMonth())
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [title, setTitle] = useState('')
  const [kind, setKind] = useState<EventKind>('quiz')
  const [courseId, setCourseId] = useState('')

  const firstWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const todayIso = iso(now.getFullYear(), now.getMonth(), now.getDate())

  const move = (delta: number) => {
    const d = new Date(year, month + delta, 1)
    setYear(d.getFullYear())
    setMonth(d.getMonth())
  }

  const addEvent = () => {
    if (!selectedDate || !title.trim()) return
    app.addEvent({
      date: selectedDate,
      kind,
      title: title.trim(),
      courseId: courseId || undefined,
    })
    setTitle('')
  }

  const dayEvents = (dateIso: string) => app.events.filter((e) => e.date === dateIso)

  return (
    <div className="animate-fade-up">
      <PageHeader
        title="📅 Study Calendar"
        subtitle="Write down every quiz, test and final — StudyBuddy counts down and reminds you to prep."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {/* calendar grid */}
        <Card className="p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <button type="button" onClick={() => move(-1)} className="rounded-lg px-3 py-1.5 font-bold text-ink-500 hover:bg-ink-100 dark:hover:bg-ink-700">←</button>
            <h2 className="font-display text-lg font-bold text-ink-900 dark:text-white">{MONTHS[month]} {year}</h2>
            <button type="button" onClick={() => move(1)} className="rounded-lg px-3 py-1.5 font-bold text-ink-500 hover:bg-ink-100 dark:hover:bg-ink-700">→</button>
          </div>
          <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold uppercase text-ink-400">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => <div key={d} className="py-1">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstWeekday }).map((_, i) => <div key={`pad-${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const d = i + 1
              const dateIso = iso(year, month, d)
              const events = dayEvents(dateIso)
              const isToday = dateIso === todayIso
              const isSelected = dateIso === selectedDate
              return (
                <button
                  key={dateIso}
                  type="button"
                  onClick={() => setSelectedDate(dateIso)}
                  className={`flex min-h-16 flex-col items-center rounded-xl border p-1 transition-colors ${
                    isSelected
                      ? 'border-brand-500 bg-brand-500/10'
                      : isToday
                        ? 'border-brand-300 bg-brand-500/5'
                        : 'border-transparent hover:border-ink-200 dark:hover:border-ink-600'
                  }`}
                >
                  <span className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                    isToday ? 'bg-brand-500 text-white' : 'text-ink-600 dark:text-ink-200'
                  }`}>
                    {d}
                  </span>
                  <div className="mt-0.5 flex flex-wrap justify-center gap-0.5">
                    {events.slice(0, 3).map((e) => (
                      <span key={e.id} className="text-[10px]">{KINDS.find((k) => k.id === e.kind)?.emoji}</span>
                    ))}
                    {events.length > 3 && <span className="text-[9px] font-bold text-ink-400">+{events.length - 3}</span>}
                  </div>
                </button>
              )
            })}
          </div>
        </Card>

        {/* day panel */}
        <div className="space-y-5">
          <Card className="p-5">
            <h3 className="font-display font-bold text-ink-900 dark:text-white">
              {selectedDate ? `📌 ${selectedDate}` : 'Pick a day'}
            </h3>
            {selectedDate ? (
              <div className="mt-3 space-y-3">
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. Trig unit test"
                  className="w-full rounded-xl border border-ink-200 px-3 py-2 text-sm outline-none focus:border-brand-400 dark:border-ink-700 dark:bg-ink-800 dark:text-white"
                />
                <div className="flex flex-wrap gap-1.5">
                  {KINDS.map((k) => (
                    <button
                      key={k.id}
                      type="button"
                      onClick={() => setKind(k.id)}
                      className={`rounded-full px-2.5 py-1 text-xs font-bold ${
                        kind === k.id
                          ? 'bg-brand-500 text-white'
                          : 'bg-ink-100 text-ink-500 dark:bg-ink-700 dark:text-ink-200'
                      }`}
                    >
                      {k.emoji} {k.label}
                    </button>
                  ))}
                </div>
                <select
                  value={courseId}
                  onChange={(e) => setCourseId(e.target.value)}
                  className="w-full rounded-xl border border-ink-200 px-3 py-2 text-sm dark:border-ink-700 dark:bg-ink-800 dark:text-white"
                >
                  <option value="">No course</option>
                  {courses.map((c) => (
                    <option key={c.id} value={c.id}>{SUBJECTS[c.subject].emoji} {c.shortName}</option>
                  ))}
                </select>
                <button
                  type="button"
                  onClick={addEvent}
                  disabled={!title.trim()}
                  className="w-full rounded-xl bg-brand-500 py-2.5 text-sm font-bold text-white hover:bg-brand-600 disabled:opacity-40"
                >
                  + Add to calendar
                </button>

                {dayEvents(selectedDate).length > 0 && (
                  <ul className="space-y-2 border-t border-ink-100 pt-3 dark:border-ink-700">
                    {dayEvents(selectedDate).map((e) => (
                      <li key={e.id} className="flex items-center gap-2 text-sm">
                        <span>{KINDS.find((k) => k.id === e.kind)?.emoji}</span>
                        <span className="flex-1 font-semibold text-ink-700 dark:text-ink-100">{e.title}</span>
                        <button
                          type="button"
                          onClick={() => app.removeEvent(e.id)}
                          className="text-xs text-ink-300 hover:text-rose-500"
                          aria-label="Delete event"
                        >
                          ✕
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <p className="mt-2 text-sm text-ink-400">Click any day on the calendar to add a quiz, test or study session.</p>
            )}
          </Card>

          <Card className="p-5">
            <h3 className="mb-3 font-display font-bold text-ink-900 dark:text-white">All upcoming</h3>
            <ul className="space-y-2">
              {app.events
                .filter((e) => e.date >= todayIso)
                .sort((a, b) => a.date.localeCompare(b.date))
                .slice(0, 8)
                .map((e) => (
                  <li key={e.id} className="flex items-center gap-2 text-sm">
                    <span>{KINDS.find((k) => k.id === e.kind)?.emoji}</span>
                    <span className="flex-1 truncate font-semibold text-ink-700 dark:text-ink-100">{e.title}</span>
                    <span className="text-xs text-ink-400">{e.date.slice(5)}</span>
                  </li>
                ))}
              {app.events.filter((e) => e.date >= todayIso).length === 0 && (
                <p className="text-sm text-ink-400">Nothing scheduled yet.</p>
              )}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}
