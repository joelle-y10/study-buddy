export type Grade = 10 | 11 | 12

export type ProvinceCode =
  | 'AB' | 'BC' | 'SK' | 'MB' | 'ON' | 'QC' | 'NB' | 'NS' | 'PE' | 'NL' | 'YT' | 'NT' | 'NU'

export type SubjectId =
  | 'math'
  | 'science'
  | 'physics'
  | 'chemistry'
  | 'biology'
  | 'ela'
  | 'social'
  | 'cs'
  | 'sportsmed'

export interface Flashcard {
  id: string
  front: string
  back: string
  /** concept tag this card belongs to, e.g. "tan-ratio" */
  concept: string
}

export type Difficulty = 1 | 2 | 3

export interface QuizQuestion {
  id: string
  /** concept tag, e.g. "tan-ratio" — used for adaptive weighting and struggle matching */
  concept: string
  difficulty: Difficulty
  prompt: string
  /** exactly 4 options for multiple choice */
  options: [string, string, string, string]
  /** index into options */
  answer: number
  /** shown after answering — explain WHY, briefly */
  explanation: string
}

export interface Concept {
  id: string
  /** human-friendly name, e.g. "Tangent ratio" */
  name: string
  /** extra keywords used to match free-text struggle input, lowercase */
  keywords: string[]
}

export interface Unit {
  id: string
  name: string
  /** short blurb about the unit */
  description: string
  /** curriculum learning outcomes ("students will be able to ...") */
  outcomes: string[]
  concepts: Concept[]
  flashcards: Flashcard[]
  questions: QuizQuestion[]
}

export interface Course {
  id: string
  province: ProvinceCode
  grade: Grade
  subject: SubjectId
  /** official course name, e.g. "Mathematics 10C" or "Pre-Calculus 11" */
  name: string
  /** short code shown in UI, e.g. "Math 10C" */
  shortName: string
  description: string
  units: Unit[]
}

// ---------- learning center ----------

export interface LessonSection {
  heading: string
  /** plain text; paragraphs separated by blank lines, bullet lines start with "• " */
  body: string
  /** optional highlighted teaching tip shown as a callout under the section */
  tip?: string
}

export interface LessonTrick {
  /** short name, e.g. "BEDMAS" */
  name: string
  /** the hack itself, e.g. what each letter stands for and how to use it */
  trick: string
}

export interface Lesson {
  id: string
  subject: SubjectId
  /** which grade this is usually taught in */
  grade: Grade
  title: string
  emoji: string
  /** 1-2 sentence hook: what you'll be able to do after this lesson */
  summary: string
  sections: LessonSection[]
  /** memory hacks & mnemonics, e.g. BEDMAS, SOH CAH TOA */
  tricks: LessonTrick[]
  /** compact formula sheet lines (omit for non-formula subjects) */
  formulas?: string[]
}

// ---------- user state ----------

export interface Profile {
  name: string
  grade: Grade
  province: ProvinceCode
}

/** per-concept stats accumulated from answering questions */
export interface ConceptStat {
  attempts: number
  correct: number
  /** timestamp of last attempt */
  lastAt: number
}

export interface StruggleEntry {
  id: string
  courseId: string
  unitId: string
  /** matched concept ids */
  concepts: string[]
  /** what the student typed */
  text: string
  createdAt: number
  resolved: boolean
}

export type SessionKind = 'quiz' | 'unit-test' | 'final'

export interface SessionRecord {
  id: string
  kind: SessionKind
  courseId: string
  /** unitId, or 'all' for finals */
  unitId: string
  total: number
  correct: number
  /** per-concept correct/total for this session */
  byConcept: Record<string, { correct: number; total: number }>
  /** 1-5 self rating of understanding vs before; 0 = skipped */
  rating: number
  finishedAt: number
}

export type CardBucket = 'know' | 'learning'

export type EventKind = 'quiz' | 'unit-test' | 'final' | 'assignment' | 'study'

export interface CalendarEvent {
  id: string
  /** ISO date yyyy-mm-dd */
  date: string
  kind: EventKind
  title: string
  courseId?: string
  unitId?: string
}
