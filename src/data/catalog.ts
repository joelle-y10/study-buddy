import type { Course, Grade, ProvinceCode, Unit } from '../types'
import { albertaCourses } from './courses/ab'
import { bcCourses } from './courses/bc'
import { skCourses } from './courses/sk'
import { mbCourses } from './courses/mb'
import { onCourses } from './courses/on'
import { qcCourses } from './courses/qc'
import { FALLBACK_PROVINCE, PROVINCES } from './meta'

const ALL_COURSES: Course[] = [
  ...albertaCourses,
  ...bcCourses,
  ...skCourses,
  ...mbCourses,
  ...onCourses,
  ...qcCourses,
]

/**
 * The province whose curriculum is actually served: the selection itself when
 * supported, the curriculum its schools really follow for territories
 * (YT uses BC; NT/NU use AB), otherwise the Alberta fallback.
 */
export function curriculumProvince(selected: ProvinceCode): ProvinceCode {
  const p = PROVINCES.find((x) => x.code === selected)
  if (p?.supported) return selected
  if (p?.usesCurriculumOf) return p.usesCurriculumOf
  return FALLBACK_PROVINCE
}

export function coursesFor(province: ProvinceCode, grade: Grade): Course[] {
  const p = curriculumProvince(province)
  return ALL_COURSES.filter((c) => c.province === p && c.grade === grade)
}

export function allCoursesFor(province: ProvinceCode): Course[] {
  const p = curriculumProvince(province)
  return ALL_COURSES.filter((c) => c.province === p)
}

export function getCourse(id: string): Course | undefined {
  return ALL_COURSES.find((c) => c.id === id)
}

export function getUnit(courseId: string, unitId: string): Unit | undefined {
  return getCourse(courseId)?.units.find((u) => u.id === unitId)
}
