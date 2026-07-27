import type { Course } from '../../../types'
import { onMath10 } from './math10'
import { onScience10 } from './science10'
import { onEnglish10 } from './english10'
import { onHistory10 } from './history10'
import { onFunctions11 } from './functions11'
import { onPhysics11 } from './physics11'
import { onChem11 } from './chem11'
import { onBio11 } from './bio11'
import { onAdvFunctions12 } from './advfunctions12'
import { onPhysics12 } from './physics12'
import { onChem12 } from './chem12'
import { onBio12 } from './bio12'

export const onCourses: Course[] = [
  onMath10,
  onScience10,
  onEnglish10,
  onHistory10,
  onFunctions11,
  onPhysics11,
  onChem11,
  onBio11,
  onAdvFunctions12,
  onPhysics12,
  onChem12,
  onBio12,
]
