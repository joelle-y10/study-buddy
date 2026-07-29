import type { Lesson } from '../../types'
import { mathLessons } from './math'
import { biologyLessons } from './biology'
import { physicsLessons } from './physics'
import { chemistryLessons } from './chemistry'
import { scienceLessons } from './science'
import { elaLessons } from './ela'
import { socialLessons } from './social'
import { csLessons } from './cs'

export const ALL_LESSONS: Lesson[] = [
  ...mathLessons,
  ...scienceLessons,
  ...physicsLessons,
  ...chemistryLessons,
  ...biologyLessons,
  ...elaLessons,
  ...socialLessons,
  ...csLessons,
]

export function getLesson(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id)
}
