import type { ReactNode } from 'react'

export function ProgressBar({
  value, barClass = 'bg-brand-500', className = '', label,
}: {
  value: number // 0..1
  barClass?: string
  className?: string
  label?: string
}) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100)
  return (
    <div className={className}>
      {label && (
        <div className="mb-1 flex items-center justify-between text-xs font-medium text-ink-500 dark:text-ink-300">
          <span>{label}</span>
          <span>{pct}%</span>
        </div>
      )}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
        <div
          className={`h-full rounded-full transition-all duration-700 ${barClass}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}

export function StarRating({
  value, onChange, size = 'text-3xl',
}: {
  value: number
  onChange?: (v: number) => void
  size?: string
}) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((n) => (
        <button
          key={n}
          type="button"
          disabled={!onChange}
          onClick={() => onChange?.(n)}
          className={`${size} transition-transform ${onChange ? 'cursor-pointer hover:scale-125' : ''} ${
            n <= value ? 'grayscale-0' : 'opacity-30 grayscale'
          }`}
          aria-label={`${n} star${n > 1 ? 's' : ''}`}
        >
          ⭐
        </button>
      ))}
    </div>
  )
}

export function Card({
  children, className = '', onClick,
}: {
  children: ReactNode
  className?: string
  onClick?: () => void
}) {
  const base =
    'rounded-2xl border border-ink-100 bg-white shadow-sm dark:border-ink-700 dark:bg-ink-800'
  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} text-left transition-all hover:-translate-y-0.5 hover:shadow-md ${className}`}
      >
        {children}
      </button>
    )
  }
  return <div className={`${base} ${className}`}>{children}</div>
}

export function PageHeader({
  title, subtitle, right,
}: {
  title: string
  subtitle?: string
  right?: ReactNode
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink-900 sm:text-3xl dark:text-white">
          {title}
        </h1>
        {subtitle && <p className="mt-1 text-sm text-ink-500 dark:text-ink-300">{subtitle}</p>}
      </div>
      {right}
    </div>
  )
}

export function Chip({
  children, tone = 'neutral', className = '',
}: {
  children: ReactNode
  tone?: 'neutral' | 'good' | 'warn' | 'bad' | 'brand'
  className?: string
}) {
  const tones: Record<string, string> = {
    neutral: 'bg-ink-100 text-ink-600 dark:bg-ink-700 dark:text-ink-200',
    good: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
    warn: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
    bad: 'bg-rose-500/15 text-rose-700 dark:text-rose-300',
    brand: 'bg-brand-500/15 text-brand-700 dark:text-brand-300',
  }
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${tones[tone]} ${className}`}>
      {children}
    </span>
  )
}

export function EmptyState({ emoji, title, hint }: { emoji: string; title: string; hint?: string }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-ink-200 py-16 text-center dark:border-ink-700">
      <div className="text-5xl">{emoji}</div>
      <p className="mt-3 font-display text-lg font-semibold text-ink-700 dark:text-ink-100">{title}</p>
      {hint && <p className="mt-1 max-w-sm text-sm text-ink-400 dark:text-ink-300">{hint}</p>}
    </div>
  )
}
