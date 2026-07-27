import type { ProvinceCode, SubjectId } from '../types'

export interface ProvinceMeta {
  code: ProvinceCode
  name: string
  /** true when this province has its own authored curriculum content */
  supported: boolean
  /**
   * Territories don't publish their own curricula: Yukon schools follow BC's,
   * and NWT/Nunavut schools follow Alberta's.
   */
  usesCurriculumOf?: ProvinceCode
}

export const PROVINCES: ProvinceMeta[] = [
  { code: 'AB', name: 'Alberta', supported: true },
  { code: 'BC', name: 'British Columbia', supported: true },
  { code: 'SK', name: 'Saskatchewan', supported: true },
  { code: 'MB', name: 'Manitoba', supported: true },
  { code: 'ON', name: 'Ontario', supported: true },
  { code: 'QC', name: 'Quebec', supported: true },
  { code: 'NB', name: 'New Brunswick', supported: false },
  { code: 'NS', name: 'Nova Scotia', supported: false },
  { code: 'PE', name: 'Prince Edward Island', supported: false },
  { code: 'NL', name: 'Newfoundland and Labrador', supported: false },
  { code: 'YT', name: 'Yukon', supported: false, usesCurriculumOf: 'BC' },
  { code: 'NT', name: 'Northwest Territories', supported: false, usesCurriculumOf: 'AB' },
  { code: 'NU', name: 'Nunavut', supported: false, usesCurriculumOf: 'AB' },
]

export function provinceName(code: ProvinceCode): string {
  return PROVINCES.find((p) => p.code === code)?.name ?? code
}

export function isSupported(code: ProvinceCode): boolean {
  return PROVINCES.find((p) => p.code === code)?.supported ?? false
}

/** Province whose curriculum is used when the selected one isn't supported yet */
export const FALLBACK_PROVINCE: ProvinceCode = 'AB'

/** Short banner text shown when the selected region serves another province's curriculum. */
export function fallbackNote(code: ProvinceCode): string | null {
  const p = PROVINCES.find((x) => x.code === code)
  if (!p || p.supported) return null
  if (p.usesCurriculumOf) {
    return `${p.name} schools follow the ${provinceName(p.usesCurriculumOf)} curriculum`
  }
  return `${p.name} curriculum coming soon — showing ${provinceName(FALLBACK_PROVINCE)} for now`
}

export interface SubjectMeta {
  id: SubjectId
  name: string
  emoji: string
  /** tailwind classes for accents */
  color: string
  softBg: string
  bar: string
}

export const SUBJECTS: Record<SubjectId, SubjectMeta> = {
  math: {
    id: 'math', name: 'Mathematics', emoji: '📐',
    color: 'text-blue-600 dark:text-blue-400',
    softBg: 'bg-blue-500/10 ring-blue-500/30',
    bar: 'bg-blue-500',
  },
  science: {
    id: 'science', name: 'Science', emoji: '🔬',
    color: 'text-teal-600 dark:text-teal-400',
    softBg: 'bg-teal-500/10 ring-teal-500/30',
    bar: 'bg-teal-500',
  },
  physics: {
    id: 'physics', name: 'Physics', emoji: '🌌',
    color: 'text-indigo-600 dark:text-indigo-400',
    softBg: 'bg-indigo-500/10 ring-indigo-500/30',
    bar: 'bg-indigo-500',
  },
  chemistry: {
    id: 'chemistry', name: 'Chemistry', emoji: '⚗️',
    color: 'text-rose-600 dark:text-rose-400',
    softBg: 'bg-rose-500/10 ring-rose-500/30',
    bar: 'bg-rose-500',
  },
  biology: {
    id: 'biology', name: 'Biology', emoji: '🧬',
    color: 'text-emerald-600 dark:text-emerald-400',
    softBg: 'bg-emerald-500/10 ring-emerald-500/30',
    bar: 'bg-emerald-500',
  },
  ela: {
    id: 'ela', name: 'English Language Arts', emoji: '📚',
    color: 'text-amber-600 dark:text-amber-400',
    softBg: 'bg-amber-500/10 ring-amber-500/30',
    bar: 'bg-amber-500',
  },
  social: {
    id: 'social', name: 'Social Studies', emoji: '🌍',
    color: 'text-violet-600 dark:text-violet-400',
    softBg: 'bg-violet-500/10 ring-violet-500/30',
    bar: 'bg-violet-500',
  },
}
