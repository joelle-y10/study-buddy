import type { Lesson } from '../../types'
import { mathLessons } from './math'
import { biologyLessons } from './biology'
import { physicsLessons } from './physics'
import { chemistryLessons } from './chemistry'
import { scienceLessons } from './science'
import { elaLessons } from './ela'
import { socialLessons } from './social'

export const ALL_LESSONS: Lesson[] = [
  ...mathLessons,
  ...scienceLessons,
  ...physicsLessons,
  ...chemistryLessons,
  ...biologyLessons,
  ...elaLessons,
  ...socialLessons,
]

export function getLesson(id: string): Lesson | undefined {
  return ALL_LESSONS.find((l) => l.id === id)
}
