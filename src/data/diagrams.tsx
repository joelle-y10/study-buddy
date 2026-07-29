import type { ReactNode } from 'react'
import {
  FunctionGraph, RightTriangle, MotionGraphs, ProjectileScene, Molecule,
  BoxModel, PlotArc, PoliticalSpectrum, EnergyPyramid, CellDiagram, Figure,
} from '../components/diagrams'

export interface DiagramEntry {
  id: string
  title: string
  caption: string
  node: ReactNode
  /** attribution line for openly-licensed images (source + license). */
  credit?: string
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
  'anatomy-directional': {
    id: 'anatomy-directional',
    title: 'Anatomical position and directional terms',
    caption: 'Every directional term assumes this pose: standing, facing forward, palms forward. Superior/inferior run up–down, anterior/posterior are front/back, medial/lateral relate to the midline, and proximal/distal measure distance from where a limb attaches.',
    node: <Figure src="images/anatomy/directional-terms.jpg" alt="Human body in anatomical position with directional terms labeled" />,
    credit: 'OpenStax Anatomy & Physiology, via Wikimedia Commons — CC BY 3.0',
  },
  'anatomy-planes': {
    id: 'anatomy-planes',
    title: 'The three planes of the body',
    caption: 'The sagittal plane splits left/right, the frontal (coronal) plane splits front/back, and the transverse plane splits top/bottom. Movements and imaging are always described relative to these planes.',
    node: <Figure src="images/anatomy/planes.jpg" alt="Sagittal, frontal, and transverse planes through a human body" />,
    credit: 'OpenStax Anatomy & Physiology, via Wikimedia Commons — CC BY 4.0',
  },
  skeleton: {
    id: 'skeleton',
    title: 'The human skeleton',
    caption: 'The axial skeleton (skull, spine, ribs) forms the core; the appendicular skeleton (arms, legs, girdles) hangs off it. Knowing bone names is the foundation for describing injuries.',
    node: <Figure src="images/anatomy/skeleton-front.svg" alt="Labeled front view of the human skeleton" maxW="max-w-sm" />,
    credit: 'Mariana Ruiz (LadyofHats), via Wikimedia Commons — Public domain',
  },
  muscles: {
    id: 'muscles',
    title: 'The major muscles (anterior and posterior)',
    caption: 'Superficial muscles you can name and palpate: deltoid, biceps and triceps, pectorals, quadriceps, hamstrings, gastrocnemius. Most sports injuries involve one of these or the tendon attaching it.',
    node: <Figure src="images/anatomy/muscles.jpg" alt="Labeled anterior and posterior views of the major muscles of the body" maxW="max-w-sm" />,
    credit: 'OpenStax Anatomy & Physiology, via Wikimedia Commons — CC BY 4.0',
  },
  photosynthesis: {
    id: 'photosynthesis',
    title: 'Photosynthesis overview',
    caption: 'Light reactions capture sunlight to make ATP and NADPH; the Calvin cycle uses them to build sugar from CO₂. Inputs: light, water, CO₂. Outputs: glucose and oxygen.',
    node: <Figure src="images/science/photosynthesis.svg" alt="Diagram of photosynthesis: light reactions feeding the Calvin cycle" />,
    credit: 'Daniel Mayer & Yerpo, via Wikimedia Commons — CC BY-SA 4.0',
  },
  'cell-photo': {
    id: 'cell-photo',
    title: 'A simple animal cell',
    caption: 'The cell membrane holds in the cytoplasm; the nucleus stores DNA; mitochondria release energy. A clean reference for the parts you name most often.',
    node: <Figure src="images/science/animal-cell.svg" alt="Labeled diagram of a simple animal cell" />,
    credit: 'domdomegg, via Wikimedia Commons — CC BY 4.0',
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
  'radical-graph': {
    id: 'radical-graph',
    title: 'The radical function y = √x',
    caption: 'You can\'t square-root a negative, so the domain is x ≥ 0 — the curve literally starts at (0, 0) and only goes right. It keeps rising forever, just slower and slower, so the range is y ≥ 0.',
    node: <FunctionGraph xMin={-1} xMax={9} yMin={-1} yMax={4} fns={[{ f: (x) => Math.sqrt(x), label: 'y = √x', color: '#3b82f6' }]} points={[{ x: 0, y: 0, label: 'starts here' }]} />,
  },
  'rational-graph': {
    id: 'rational-graph',
    title: 'The rational function y = 1/x',
    caption: 'Division by zero is undefined, so the graph splits into two branches that never touch x = 0 (a vertical asymptote) — and since 1/x never equals zero, they never touch y = 0 either. The curve gets endlessly closer to both axes without ever arriving.',
    node: <FunctionGraph xMin={-5} xMax={5} yMin={-5} yMax={5} fns={[{ f: (x) => 1 / x, label: 'y = 1/x', color: '#8b5cf6' }]} />,
  },
  'absolute-graph': {
    id: 'absolute-graph',
    title: 'The absolute value V',
    caption: 'y = |x − 1| takes whatever x − 1 gives and flips any negative part up above the axis — that fold is what makes the V. The corner (vertex) sits where the inside equals zero: x = 1.',
    node: <FunctionGraph xMin={-4} xMax={6} yMin={-1} yMax={5} fns={[{ f: (x) => Math.abs(x - 1), label: 'y = |x − 1|', color: '#3b82f6' }]} points={[{ x: 1, y: 0, label: 'vertex (1, 0)' }]} />,
  },
  'exp-growth-decay': {
    id: 'exp-growth-decay',
    title: 'Exponential growth vs. decay',
    caption: 'y = 2ˣ doubles as x steps right (growth); y = (½)ˣ halves instead (decay) — they\'re mirror images across the y-axis. Both pass through (0, 1), because anything to the power 0 is 1, and both hug the x-axis without ever reaching it.',
    node: <FunctionGraph xMin={-4} xMax={4} yMin={-1} yMax={8} fns={[{ f: (x) => 2 ** x, label: 'y = 2ˣ', color: '#10b981' }, { f: (x) => 0.5 ** x, label: 'y = (½)ˣ', color: '#f59e0b' }]} points={[{ x: 0, y: 1, label: 'both hit (0, 1)' }]} />,
  },
  'sine-cosine': {
    id: 'sine-cosine',
    title: 'Sine and cosine waves',
    caption: 'Both waves repeat every 2π ≈ 6.28 and stay between −1 and 1. Cosine is just sine slid left by π/2: sine starts at 0 and rises, cosine starts at its peak of 1. Same wave, different starting point.',
    node: <FunctionGraph xMin={-7} xMax={7} yMin={-2} yMax={2} fns={[{ f: (x) => Math.sin(x), label: 'y = sin x', color: '#3b82f6' }, { f: (x) => Math.cos(x), label: 'y = cos x', color: '#f43f5e' }]} />,
  },
  'cubic-graph': {
    id: 'cubic-graph',
    title: 'A cubic and its turning points',
    caption: 'y = x³ − 3x rises, turns at the local max (−1, 2), falls to the local min (1, −2), then rises again — the classic S-shape of an odd-degree polynomial. Degree 3 means at most 3 x-intercepts and at most 2 turning points, and this one uses them all.',
    node: <FunctionGraph xMin={-3} xMax={3} yMin={-5} yMax={5} fns={[{ f: (x) => x ** 3 - 3 * x, label: 'y = x³ − 3x', color: '#8b5cf6' }]} points={[{ x: -1, y: 2, label: 'max (−1, 2)' }, { x: 1, y: -2, label: 'min (1, −2)', color: '#10b981' }]} />,
  },
  'transform-shift': {
    id: 'transform-shift',
    title: 'Translating a graph',
    caption: 'Same parabola, new address: y = (x − 2)² + 1 is y = x² slid 2 right and 1 up, moving the vertex from (0, 0) to (2, 1). Watch the signs — "x − 2" inside means right 2, and the +1 outside means up 1.',
    node: <FunctionGraph xMin={-4} xMax={6} yMin={-2} yMax={8} fns={[{ f: (x) => x * x, label: 'y = x²', color: '#3b82f6' }, { f: (x) => (x - 2) ** 2 + 1, label: 'y = (x−2)² + 1', color: '#f59e0b' }]} points={[{ x: 0, y: 0, label: 'vertex (0, 0)' }, { x: 2, y: 1, label: 'vertex (2, 1)', color: '#f59e0b' }]} />,
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
  'ab-math20-1:radicals': ['radical-graph'],
  'ab-math20-1:rationals': ['rational-graph'],
  'ab-math20-1:absolute-reciprocal': ['absolute-graph'],
  'ab-math30-1:trig-functions': ['trig-triangle', 'sine-cosine'],
  'ab-math30-1:exponents-logarithms': ['exp-growth-decay'],
  'ab-math30-1:polynomials': ['cubic-graph'],
  'ab-math30-1:transformations': ['transform-shift'],
  'ab-math30-1:radical-rational-functions': ['radical-graph', 'rational-graph'],
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
  'ab-bio20:photosynthesis-respiration': ['photosynthesis', 'cell-diagram'],
  'ab-bio20:ecosystems-populations': ['energy-pyramid'],
  'ab-science10:living-systems': ['cell-photo', 'cell-diagram'],
  // sports med — real, openly-licensed anatomy
  'ab-sportsmed15:anatomical-foundations': ['anatomy-directional', 'anatomy-planes', 'skeleton', 'muscles'],
  'ab-sportsmed15:musculoskeletal-basics': ['skeleton', 'muscles'],
  'ab-sportsmed35:biomechanics': ['skeleton', 'muscles'],
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

// ---------------------------------------------------------------- taping guides
// Hosted instructional photos in /public/images/taping (no external clinic links).

export interface TapeGuide {
  id: string
  name: string
  emoji: string
  /** when and why it's used */
  use: string
  steps: string[]
  /** local photo in /public */
  image: { src: string; alt: string; credit: string }
}

const ANKLE: TapeGuide = {
  id: 'ankle',
  name: 'Ankle — closed basketweave',
  emoji: '🦶',
  use: 'Alberta Sports Med / REC classic: limits inversion after (or to help prevent) a lateral ankle sprain. Foot held at 90° the whole time.',
  steps: [
    'Prep: clean & dry skin; shave if needed; adhesive/tough skin if used; underwrap plus heel/lace pads. Keep the ankle at 90°.',
    'Anchors: one above the ankle, plus one across the top of the foot behind the metatarsal heads.',
    'Basketweave: alternate stirrups (medial → under heel → lateral) with horseshoe strips, overlapping about half each pass.',
    'Figure-6 / half figure-8, then a pair of heel locks.',
    'Close loose ends with anchors, conform the tape, and check toes for colour, warmth, and sensation.',
  ],
  image: {
    src: 'images/taping/ankle-basketweave.png',
    alt: 'Closed basketweave ankle tape with white athletic tape on a foot held at 90 degrees',
    credit: 'StudyBuddy instructional photo (hosted on this site)',
  },
}
const WRIST: TapeGuide = {
  id: 'wrist',
  name: 'Wrist — hyperextension',
  emoji: '✋',
  use: 'Alberta REC wrist tape: limits painful hyperextension after a sprain.',
  steps: [
    'Hand up and wide open; spray adhesive and pro-wrap (thumb hole) as taught.',
    'Forearm anchor, then a second anchor just below the knuckles (do not cover the knuckles).',
    'Center strip plus diagonal X strips across the wrist; repeat overlapping layers.',
    'Test that painful motion is limited, then close/lock the X strips.',
    'Check fingers stay pink and warm with normal sensation.',
  ],
  image: {
    src: 'images/taping/wrist-tape.png',
    alt: 'Wrist athletic tape with anchors and X support strips on a hand and forearm',
    credit: 'StudyBuddy instructional photo (hosted on this site)',
  },
}
const THUMB: TapeGuide = {
  id: 'thumb',
  name: 'Thumb — spica',
  emoji: '👍',
  use: 'Alberta REC thumb spica for UCL / skier’s or goalkeeper’s thumb support.',
  steps: [
    'Hand in a comfortable “C” position; clean skin / adherent as taught.',
    'Anchors on the thumb and wrist.',
    'Overlapping spica / figure-8 loops around the thumb MCP back to the wrist.',
    'Finish on the wrist and check thumb-tip circulation.',
  ],
  image: {
    src: 'images/taping/thumb-spica.png',
    alt: 'Thumb spica athletic tape with figure-8 loops around the thumb and wrist',
    credit: 'StudyBuddy instructional photo (hosted on this site)',
  },
}
const ELBOW: TapeGuide = {
  id: 'elbow',
  name: 'Elbow — hyperextension',
  emoji: '💪',
  use: 'Blocks the last painful degrees of elbow extension while still allowing flexion.',
  steps: [
    'Elbow in slight flexion (~15–20°); contract biceps/forearm when applying anchors.',
    'Anchors on upper arm and mid-forearm.',
    'Fan / X checkrein strips across the front of the elbow crease.',
    'Lock with closing anchors; check hand colour, warmth, and sensation.',
  ],
  image: {
    src: 'images/taping/elbow-tape.png',
    alt: 'Elbow hyperextension tape with anchors and fan strips across the front of the elbow',
    credit: 'StudyBuddy instructional photo (hosted on this site)',
  },
}
const BUDDY: TapeGuide = {
  id: 'buddy',
  name: 'Buddy taping (fingers)',
  emoji: '🖐️',
  use: 'Splints a jammed or mildly sprained finger to its neighbour. Not for an obviously broken finger.',
  steps: [
    'Gauze or foam between the fingers so skin doesn’t rub.',
    'Tape above and below the injured joint — never directly over a swollen joint.',
    'Leave fingertips free; check colour and warmth.',
  ],
  image: {
    src: 'images/taping/buddy-fingers.png',
    alt: 'Buddy taping: two fingers taped together with gauze between them',
    credit: 'StudyBuddy instructional photo (hosted on this site)',
  },
}
const KNEE: TapeGuide = {
  id: 'knee',
  name: 'Knee — collateral support',
  emoji: '🦵',
  use: 'Sports Med 15 basic: light collateral support with X strips over the joint line.',
  steps: [
    'Knee slightly flexed; clean skin / underwrap as needed.',
    'Anchors above and below the joint line.',
    'X strips crossing the collateral side of the joint line.',
    'Close lightly and check toe circulation.',
  ],
  image: {
    src: 'images/taping/knee-collateral.png',
    alt: 'Collateral knee support with white athletic tape anchors and X strips',
    credit: 'StudyBuddy instructional photo (hosted on this site)',
  },
}
const PATELLA: TapeGuide = {
  id: 'patella',
  name: 'Patella (kneecap) tape',
  emoji: '🟡',
  use: 'Guides or unloads the kneecap for patellofemoral pain patterns — not for a fractured kneecap.',
  steps: [
    'Knee slightly flexed; assess which correction feels better with your instructor.',
    'Apply a rigid strip that holds the corrected patella position.',
    'Cover with locking strips; recheck comfort.',
  ],
  image: {
    src: 'images/taping/patella-tape.png',
    alt: 'Patella taping strips on the front of the knee guiding the kneecap',
    credit: 'StudyBuddy instructional photo (hosted on this site)',
  },
}
const SHOULDER: TapeGuide = {
  id: 'shoulder',
  name: 'Shoulder — spica',
  emoji: '🏋️',
  use: 'Large-area chest-to-arm spica for mild instability support. A brace is often more reliable.',
  steps: [
    'Anchors on trunk/chest and upper arm.',
    'Overlapping spica loops from chest around the shoulder onto the arm.',
    'Close and check hand colour and sensation.',
  ],
  image: {
    src: 'images/taping/shoulder-spica.png',
    alt: 'Shoulder spica athletic tape looping from chest around the shoulder to the upper arm',
    credit: 'StudyBuddy instructional photo (hosted on this site)',
  },
}
const AC_JOINT: TapeGuide = {
  id: 'ac-joint',
  name: 'AC joint support',
  emoji: '🦴',
  use: 'Temporary support for a mild AC sprain. Higher grades need medical care.',
  steps: [
    'Support strips over the distal clavicle / AC joint.',
    'Lock with chest/shoulder anchors.',
    'Refer for deformity, severe pain, or inability to use the arm.',
  ],
  image: {
    src: 'images/taping/ac-joint-tape.png',
    alt: 'AC joint support tape over the top of the shoulder and clavicle',
    credit: 'StudyBuddy instructional photo (hosted on this site)',
  },
}
const HIP_GROIN: TapeGuide = {
  id: 'hip-groin',
  name: 'Hip / groin wrap',
  emoji: '🪢',
  use: 'Cloth or elastic wrap for a mild groin/adductor or hip flexor strain.',
  steps: [
    'Injured side slightly flexed and adducted (pain-free).',
    'Spiral or figure from thigh toward pelvis, overlapping by half.',
    'Lock the end; recheck after walking a few steps.',
  ],
  image: {
    src: 'images/taping/hip-groin-wrap.png',
    alt: 'Hip and groin wrap spiraling from the thigh to the pelvis',
    credit: 'StudyBuddy instructional photo (hosted on this site)',
  },
}
const ARCH: TapeGuide = {
  id: 'arch',
  name: 'Longitudinal arch / plantar',
  emoji: '🦶',
  use: 'Supports the medial longitudinal arch and can unload plantar fascia stress.',
  steps: [
    'Anchors near the ball of the foot and/or heel.',
    'Longitudinal strips under the arch.',
    'Close lightly; check toes.',
  ],
  image: {
    src: 'images/taping/arch-tape.png',
    alt: 'Longitudinal arch athletic tape under the medial arch of the foot',
    credit: 'StudyBuddy instructional photo (hosted on this site)',
  },
}

/** Basics → Sports Med 15. Intermediate → 25. Advanced large-joint / clinical → 35. */
const TAPING: Record<string, TapeGuide[]> = {
  'ab-sportsmed15:basic-taping': [ANKLE, WRIST, THUMB, ELBOW, BUDDY, KNEE, PATELLA],
  'ab-sportsmed25:taping-techniques': [SHOULDER, HIP_GROIN, ARCH, KNEE],
  'ab-sportsmed35:advanced-taping': [SHOULDER, AC_JOINT, PATELLA],
}

export function tapingForUnit(courseId: string, unitId: string): TapeGuide[] {
  return TAPING[`${courseId}:${unitId}`] ?? []
}
