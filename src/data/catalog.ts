import type { Course, Grade, ProvinceCode, Unit } from '../types'
import { albertaCourses } from './courses/ab'
import { bcCourses } from './courses/bc'
import { FALLBACK_PROVINCE, isSupported } from './meta'

const ALL_COURSES: Course[] = [...albertaCourses, ...bcCourses]

/** The province whose curriculum is actually served (falls back to Alberta). */
export function curriculumProvince(selected: ProvinceCode): ProvinceCode {
  return isSupported(selected) ? selected : FALLBACK_PROVINCE
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
