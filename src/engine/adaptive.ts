import type {
  CardBucket, Concept, ConceptStat, QuizQuestion, StruggleEntry, Unit,
} from '../types'

export interface EngineContext {
  /** conceptId -> stats, already scoped to the course */
  stats: Record<string, ConceptStat>
  /** unresolved struggles scoped to the course */
  struggles: StruggleEntry[]
}

/** 0..1 accuracy; unattempted concepts count as 0.5 (unknown) */
export function conceptAccuracy(stat: ConceptStat | undefined): number {
  if (!stat || stat.attempts === 0) return 0.5
  return stat.correct / stat.attempts
}

export function struggledConceptIds(struggles: StruggleEntry[]): Set<string> {
  const set = new Set<string>()
  for (const s of struggles) {
    if (!s.resolved) for (const c of s.concepts) set.add(c)
  }
  return set
}

/**
 * Weight for how much a concept needs practice.
 * Struggles the student reported count heavily; low accuracy counts too.
 */
export function conceptNeed(conceptId: string, ctx: EngineContext): number {
  const acc = conceptAccuracy(ctx.stats[conceptId])
  let need = 1 + (1 - acc) * 2 // 1..3 from accuracy
  if (struggledConceptIds(ctx.struggles).has(conceptId)) need += 2.5
  return need
}

function weightedSampleWithoutReplacement<T>(
  items: T[],
  weightOf: (item: T) => number,
  n: number,
): T[] {
  const pool = [...items]
  const picked: T[] = []
  while (picked.length < n && pool.length > 0) {
    const weights = pool.map(weightOf)
    const total = weights.reduce((a, b) => a + b, 0)
    let r = Math.random() * total
    let idx = 0
    for (let i = 0; i < pool.length; i++) {
      r -= weights[i]
      if (r <= 0) { idx = i; break }
      idx = i
    }
    picked.push(pool[idx])
    pool.splice(idx, 1)
  }
  return picked
}

/**
 * Adaptive question picker: weights questions toward struggled and weak concepts.
 * For concepts the student is strong in, harder questions are preferred so
 * practice stays challenging.
 */
export function pickQuestions(units: Unit[], n: number, ctx: EngineContext): QuizQuestion[] {
  const all = units.flatMap((u) => u.questions)
  const picked = weightedSampleWithoutReplacement(
    all,
    (q) => {
      const need = conceptNeed(q.concept, ctx)
      const acc = conceptAccuracy(ctx.stats[q.concept])
      // strong concept -> favour hard questions; weak -> favour easy/medium first
      const difficultyFit = acc >= 0.75 ? q.difficulty / 3 : (4 - q.difficulty) / 3
      return need * (0.6 + 0.8 * difficultyFit)
    },
    Math.min(n, all.length),
  )
  // light shuffle so struggled concepts aren't clumped at the start
  return picked.sort(() => Math.random() - 0.5)
}

/** Match free-text struggle input to concept tags using names + keywords. */
export function matchStruggleText(text: string, concepts: Concept[]): string[] {
  const lower = text.toLowerCase()
  const matched: string[] = []
  for (const c of concepts) {
    const terms = [
      ...c.keywords,
      ...c.name.toLowerCase().split(/[^a-z0-9]+/).filter((w) => w.length > 3),
    ]
    if (terms.some((t) => t && lower.includes(t))) matched.push(c.id)
  }
  return matched
}

/** 0..1 mastery for a unit combining flashcards known and question accuracy. */
export function unitMastery(
  unit: Unit,
  stats: Record<string, ConceptStat>,
  buckets: Record<string, CardBucket>,
): number {
  const known = unit.flashcards.filter((f) => buckets[f.id] === 'know').length
  const cardScore = unit.flashcards.length > 0 ? known / unit.flashcards.length : 0

  let attempts = 0
  let correct = 0
  for (const c of unit.concepts) {
    const s = stats[c.id]
    if (s) { attempts += s.attempts; correct += s.correct }
  }
  const quizScore = attempts > 0 ? correct / attempts : 0
  const coverage = Math.min(1, attempts / Math.max(6, unit.concepts.length * 2))

  return 0.35 * cardScore + 0.65 * quizScore * coverage
}

export function courseMastery(
  units: Unit[],
  stats: Record<string, ConceptStat>,
  buckets: Record<string, CardBucket>,
): number {
  if (units.length === 0) return 0
  return units.reduce((sum, u) => sum + unitMastery(u, stats, buckets), 0) / units.length
}

/** Current calendar streak (consecutive days ending today or yesterday). */
export function streakDays(activeDays: string[]): number {
  const set = new Set(activeDays)
  const day = new Date()
  const iso = (d: Date) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
  // streak may end today or yesterday (still "alive")
  if (!set.has(iso(day))) day.setDate(day.getDate() - 1)
  let streak = 0
  while (set.has(iso(day))) {
    streak++
    day.setDate(day.getDate() - 1)
  }
  return streak
}
