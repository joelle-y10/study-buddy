import type { CodeChallenge } from '../../types'
import { cs10Challenges } from './cs10'
import { cs20Challenges } from './cs20'
import { cs30Challenges } from './cs30'

/** courseId -> unitId -> challenges */
const BY_COURSE: Record<string, Record<string, CodeChallenge[]>> = {
  'ab-cs10': cs10Challenges,
  'ab-cs20': cs20Challenges,
  'ab-cs30': cs30Challenges,
}

export function getChallenges(courseId: string, unitId: string): CodeChallenge[] {
  return BY_COURSE[courseId]?.[unitId] ?? []
}

export function unitHasChallenges(courseId: string, unitId: string): boolean {
  return getChallenges(courseId, unitId).length > 0
}
