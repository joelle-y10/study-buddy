import type { ReactNode } from 'react'
import {
  FunctionGraph, RightTriangle, MotionGraphs, ProjectileScene, Molecule,
  AnatomicalPosition, AnkleTape, BoxModel, PlotArc, PoliticalSpectrum,
  EnergyPyramid, CellDiagram,
} from '../components/diagrams'

export interface DiagramEntry {
  id: string
  title: string
  caption: string
  node: ReactNode
}

/** Every visual in the app, keyed by id. */
export const DIAGRAMS: Record<string, DiagramEntry> = {
  'linear-graph': {
    id: 'linear-graph',
    title: 'A linear relation on the grid',
    caption: 'y = 2x + 1: the slope 2 means "up 2 for every 1 right," and the +1 is where it crosses the y-axis. Every linear equation is just a slope and a starting point.',
    node: <FunctionGraph fns={[{ f: (x) => 2 * x + 1, label: 'y = 2x + 1', color: '#3b82f6' }, { f: (x) => -x + 3, label: 'y = −x + 3', color: '#f59e0b' }]} points={[{ x: 0, y: 1, label: 'y-int (0, 1)' }]} />,
  },
  'systems-graph': {
    id: 'systems-graph',
    title: 'Solving a system by graphing',
    caption: 'The solution to a system is where the lines cross — the one (x, y) that makes BOTH equations true. Here y = x + 1 and y = −x + 3 intersect at (1, 2): check that 1 + 1 = 2 and −1 + 3 = 2. The intersection point IS the answer.',
    node: <FunctionGraph fns={[{ f: (x) => x + 1, label: 'y = x + 1', color: '#3b82f6' }, { f: (x) => -x + 3, label: 'y = −x + 3', color: '#f59e0b' }]} points={[{ x: 1, y: 2, label: 'solution (1, 2)' }]} />,
  },
  parabola: {
    id: 'parabola',
    title: 'Anatomy of a parabola',
    caption: 'y = (x − 1)² − 4 in vertex form: the vertex sits at (1, −4), the axis of symmetry is x = 1, and the x-intercepts (roots) are where the curve crosses y = 0, at x = −1 and x = 3.',
    node: <FunctionGraph yMin={-5} yMax={5} fns={[{ f: (x) => (x - 1) ** 2 - 4, label: 'y = (x−1)² − 4', color: '#8b5cf6' }]} points={[{ x: 1, y: -4, label: 'vertex (1, −4)' }, { x: -1, y: 0, label: 'root', color: '#10b981' }, { x: 3, y: 0, label: 'root', color: '#10b981' }]} />,
  },
  'trig-triangle': {
    id: 'trig-triangle',
    title: 'The right triangle behind SOH CAH TOA',
    caption: 'Label from the angle you know: opposite is across from θ, adjacent touches it, hypotenuse is always the longest side across from the right angle. Then pick the ratio that uses your two sides.',
    node: <RightTriangle />,
  },
  'tangent-line': {
    id: 'tangent-line',
    title: 'The derivative is a slope',
    caption: 'The tangent line touches y = x² at one point. Its slope IS the derivative there: at x = 1, the slope is 2. Limits let us shrink a secant line down to this exact tangent.',
    node: <FunctionGraph xMin={-3} xMax={3} yMin={-2} yMax={8} fns={[{ f: (x) => x * x, label: 'y = x²', color: '#3b82f6' }, { f: (x) => 2 * x - 1, label: 'tangent at x=1', color: '#f43f5e' }]} points={[{ x: 1, y: 1, label: '(1, 1)' }]} />,
  },
  'area-under-curve': {
    id: 'area-under-curve',
    title: 'The integral is an area',
    caption: 'The definite integral of y = x² from 0 to 2 is the shaded area between the curve and the x-axis: ∫₀² x² dx = 8/3. Integration adds up infinitely many thin rectangles.',
    node: <FunctionGraph xMin={-1} xMax={3} yMin={-1} yMax={7} fns={[{ f: (x) => x * x, label: 'y = x²', color: '#3b82f6' }]} shade={{ f: (x) => x * x, from: 0, to: 2 }} />,
  },
  'motion-const-v': {
    id: 'motion-const-v',
    title: 'Constant velocity: the three graphs',
    caption: 'Uniform motion: d–t is a straight ramp (its slope = velocity), v–t is flat, a–t sits on zero. If you can sketch these three, you can decode any kinematics question.',
    node: <MotionGraphs kind="const-v" />,
  },
  'motion-uniform-a': {
    id: 'motion-uniform-a',
    title: 'Uniform acceleration: the three graphs',
    caption: 'Accelerating motion: d–t curves upward, v–t is a straight ramp (slope = acceleration), a–t is flat. Area under v–t gives displacement; slope of v–t gives acceleration.',
    node: <MotionGraphs kind="uniform-a" />,
  },
  'projectile-scene': {
    id: 'projectile-scene',
    title: 'Sketch the word problem',
    caption: '"A ball is thrown at 12 m/s from a 45 m building..." — before touching a formula, draw it: the building, the height, the launch velocity arrow, and a question mark on what you need. Half of physics is turning words into this picture.',
    node: <ProjectileScene />,
  },
  'molecule-h2o': {
    id: 'molecule-h2o',
    title: 'Water: a bent, polar molecule',
    caption: 'Two O–H covalent bonds plus two lone pairs push the shape into a bend. Oxygen hogs the shared electrons, making water polar — the reason it dissolves so much.',
    node: <Molecule kind="H2O" />,
  },
  'molecule-co2': {
    id: 'molecule-co2',
    title: 'Carbon dioxide: linear and nonpolar',
    caption: 'Two double bonds, no lone pairs on carbon, 180° apart. The bond polarities point in opposite directions and cancel, so CO₂ is nonpolar overall.',
    node: <Molecule kind="CO2" />,
  },
  'molecule-ch4': {
    id: 'molecule-ch4',
    title: 'Methane: tetrahedral',
    caption: 'Four single bonds spread as far apart as possible: 109.5°, a tetrahedron. VSEPR in one sentence — electron pairs repel, so they maximize their angles.',
    node: <Molecule kind="CH4" />,
  },
  'ionic-nacl': {
    id: 'ionic-nacl',
    title: 'Ionic vs. covalent bonding',
    caption: 'In NaCl, sodium transfers its lone valence electron to chlorine; the resulting + and − ions attract. Covalent bonds share electrons instead — transfer vs. share is the whole distinction.',
    node: <Molecule kind="NaCl" />,
  },
  'anatomical-position': {
    id: 'anatomical-position',
    title: 'Anatomical position and directional terms',
    caption: 'Every directional term assumes this pose: standing, facing forward, palms forward. Superior/inferior run up–down, medial/lateral relate to the midline, proximal/distal measure distance from where a limb attaches.',
    node: <AnatomicalPosition />,
  },
  'ankle-tape': {
    id: 'ankle-tape',
    title: 'Closed basketweave ankle tape — the layers',
    caption: 'Order matters: anchors first (around the lower leg), stirrups from medial to lateral pulling the foot outward against inversion sprains, then figure-8 and heel locks to close it up. Ankle stays at 90° the whole time.',
    node: <AnkleTape />,
  },
  'css-box-model': {
    id: 'css-box-model',
    title: 'The CSS box model',
    caption: 'Every HTML element is a box wrapped in four layers. Padding is space inside the border, margin is space outside it. When spacing looks wrong on a page, this diagram is almost always the answer.',
    node: <BoxModel />,
  },
  'plot-arc': {
    id: 'plot-arc',
    title: 'The plot diagram (Freytag pyramid)',
    caption: 'Exposition sets the scene, rising action builds conflict, the climax is the turning point, falling action shows consequences, resolution ties it off. Locate any scene on this arc and you understand its job in the story.',
    node: <PlotArc />,
  },
  'political-spectrum': {
    id: 'political-spectrum',
    title: 'The economic spectrum',
    caption: 'Ideologies sit on a spectrum between collectivism (the group and state come first) and individualism (personal freedom comes first). Social 30 is largely about where societies should sit on this line.',
    node: <PoliticalSpectrum />,
  },
  'energy-pyramid': {
    id: 'energy-pyramid',
    title: 'The energy pyramid',
    caption: 'About 90% of energy is lost as heat at every trophic level, which is why food chains are short and top predators are rare. The 10% rule in one picture.',
    node: <EnergyPyramid />,
  },
  'cell-diagram': {
    id: 'cell-diagram',
    title: 'The cell: where energy is made',
    caption: 'Photosynthesis happens in chloroplasts (plants only); cellular respiration happens in mitochondria (all cells). The two processes are near mirror images of each other.',
    node: <CellDiagram />,
  },
}

/** Diagrams shown on a curriculum unit lesson, keyed by `${courseId}:${unitId}`. */
const UNIT_DIAGRAMS: Record<string, string[]> = {
  // math
  'ab-math10c:relations-functions': ['linear-graph'],
  'ab-math10c:linear-functions': ['linear-graph'],
  'ab-math10c:systems': ['systems-graph'],
  'ab-math10c:trigonometry': ['trig-triangle'],
  'ab-math20-1:quadratic-functions': ['parabola'],
  'ab-math20-1:quadratic-equations': ['parabola'],
  'ab-math20-1:trigonometry': ['trig-triangle'],
  'ab-math30-1:trig-functions': ['trig-triangle'],
  'ab-math31:limits': ['tangent-line'],
  'ab-math31:derivatives': ['tangent-line'],
  'ab-math31:integration': ['area-under-curve'],
  'ab-math31:applications-integration': ['area-under-curve'],
  // science / physics
  'ab-science10:technological-systems': ['motion-const-v', 'motion-uniform-a'],
  'ab-physics20:kinematics': ['motion-const-v', 'motion-uniform-a', 'projectile-scene'],
  'ab-physics20:dynamics': ['projectile-scene'],
  // chemistry
  'ab-chem20:bonding': ['molecule-h2o', 'molecule-co2', 'molecule-ch4', 'ionic-nacl'],
  'ab-science10:chemical-change': ['ionic-nacl', 'molecule-h2o'],
  // biology
  'ab-bio20:photosynthesis-respiration': ['cell-diagram'],
  'ab-bio20:ecosystems-populations': ['energy-pyramid'],
  'ab-science10:living-systems': ['cell-diagram'],
  // sports med
  'ab-sportsmed15:anatomical-foundations': ['anatomical-position'],
  'ab-sportsmed25:taping-techniques': ['ankle-tape'],
  'ab-sportsmed15:first-response-taping': ['ankle-tape'],
  // cs
  'ab-cs10:web-html-css': ['css-box-model'],
  // ela / social
  'ab-ela10-1:reading-foundations': ['plot-arc'],
  'ab-social30-1:understanding-ideologies': ['political-spectrum'],
}

/** Diagrams shown inside authored Learning Center lessons, keyed by lesson id. */
const LESSON_DIAGRAMS: Record<string, string[]> = {
  'soc-ideologies': ['political-spectrum'],
  'ela-annotation': ['plot-arc'],
  'cs-syntax-etiquette': ['css-box-model'],
}

export function diagramsForUnit(courseId: string, unitId: string): DiagramEntry[] {
  return (UNIT_DIAGRAMS[`${courseId}:${unitId}`] ?? []).map((id) => DIAGRAMS[id]).filter(Boolean)
}

export function diagramsForLesson(lessonId: string): DiagramEntry[] {
  return (LESSON_DIAGRAMS[lessonId] ?? []).map((id) => DIAGRAMS[id]).filter(Boolean)
}
