import type { ReactNode } from 'react'
import {
  FunctionGraph, RightTriangle, MotionGraphs, ProjectileScene, Molecule,
  BoxModel, PlotArc, PoliticalSpectrum, EnergyPyramid, CellDiagram, Figure,
} from '../components/diagrams'
import { ANKLE_STEP_DIAGRAMS, ANKLE_STEP_PHOTOS } from '../components/ankleTapeSteps'
import { THUMB_STEP_DIAGRAMS } from '../components/thumbTapeSteps'
import {
  WRIST_STEP_DIAGRAMS,
  ELBOW_STEP_DIAGRAMS,
  BUDDY_STEP_DIAGRAMS,
  KNEE_STEP_DIAGRAMS,
  PATELLA_STEP_DIAGRAMS,
  SHOULDER_STEP_DIAGRAMS,
  HIP_STEP_DIAGRAMS,
  ARCH_STEP_DIAGRAMS,
  AC_STEP_DIAGRAMS,
} from '../components/basicTapeSteps'

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
  /** short materials line shown under the use blurb */
  materials?: string
  /** concise step titles (shown bold) */
  steps: string[]
  /** detailed teaching notes — same length as steps */
  stepNotes?: string[]
  /** optional per-step placement diagrams (same length as steps) */
  stepDiagrams?: ReactNode[]
  /** optional classroom photos under specific steps */
  stepPhotos?: Array<{ src: string; alt: string; credit: string } | null>
  /** local photo in /public — finished example */
  image: { src: string; alt: string; credit: string }
}

const ANKLE: TapeGuide = {
  id: 'ankle',
  name: 'Ankle — closed basketweave',
  emoji: '🦶',
  use: 'Limits inversion after (or to help prevent) a lateral ankle sprain. Match the finished photo: foot at 90°, calf + midfoot anchors, woven stirrups/horseshoes, then heel-lock X over the malleolus. Follow blue arrows for pull direction.',
  materials: 'Adhesive spray · underwrap · heel & lace pads · 1½″ white athletic tape',
  steps: [
    'Position & prep (90°)',
    'Calf + midfoot anchors',
    'Stirrups (medial → under heel → lateral)',
    'Horseshoes — weave the basket',
    'Heel locks / figure-8s',
    'Close & circulation check',
  ],
  stepNotes: [
    'Clean and dry the skin; shave if needed. Spray adherent, then underwrap from midfoot to lower calf with heel and lace pads in place. Hold the ankle at 90° (toes up) for the entire job — the finished wrap only works if you tape in this position.',
    'Lay 2–3 overlapping circumferential strips on the lower calf above the malleoli, then a midfoot strip behind the metatarsal heads. Snug, never tourniquet-tight. These anchors are the “rails” every later strip returns to.',
    'Start on the medial (inside) calf anchor, run under the heel, and finish on the lateral (outside) calf anchor — pull against inversion. Repeat 2–3 stirrups, overlapping about half the tape width each pass.',
    'Alternate horizontal U-shaped horseshoes around the heel with the stirrups so they weave together (basketweave). Cover the heel while leaving the toes free, matching the finished photo.',
    'Add figure-6 / half figure-8 strips, then heel locks on each side. Pull each lock strip toward and around the heel (blue arrows in the classroom photo). You should see diagonal X patterns over the lateral malleolus.',
    'Re-anchor any loose ends on the calf and midfoot, rub the tape to conform, and check toes for colour, warmth, and sensation. Pale / numb / tingling = loosen immediately.',
  ],
  stepDiagrams: ANKLE_STEP_DIAGRAMS,
  stepPhotos: ANKLE_STEP_PHOTOS,
  image: {
    src: 'images/taping/ankle-basketweave.png',
    alt: 'Closed basketweave ankle tape with white athletic tape on a foot held at 90 degrees',
    credit: 'Finished example — StudyBuddy instructional photo (hosted on this site)',
  },
}
const WRIST: TapeGuide = {
  id: 'wrist',
  name: 'Wrist — X support',
  emoji: '✋',
  use: 'Matches the finished wrist photo: a firm wrist-band anchor plus a crisp dorsal X that leaves the knuckles free. Limits painful end-range after a sprain.',
  materials: 'Adhesive spray · optional pro-wrap · 1–1½″ white athletic tape',
  steps: [
    'Prep — fingers splayed',
    'Wrist / forearm anchor band',
    'First diagonal through the thumb web',
    'Second diagonal — complete the X',
    'Smooth, test, circulation check',
  ],
  stepNotes: [
    'Hand up, fingers spread wide. Clean skin; spray adherent. Optional thin pro-wrap with a thumb hole. Keep MCP knuckles uncovered for the whole job.',
    'Wrap 2–3 firm turns around the distal forearm / wrist to build the thick white band shown in the photo. Firm support — not so tight that fingers go pale.',
    'From the thumb side of the wrist anchor, pull a strip diagonally across the back of the hand, through the thumb–index web, and back to the opposite side of the wrist anchor.',
    'From the pinky side of the wrist anchor, pull a second diagonal across the dorsum, around the base of the 5th metacarpal, and back to the wrist. The two strips must cross mid-hand to form the X in the photo. Add a second overlapping set if more support is needed.',
    'Rub every edge flat. Have the athlete test the painful motion. Check finger colour, warmth, and sensation — never leave a tourniquet forearm.',
  ],
  stepDiagrams: WRIST_STEP_DIAGRAMS,
  image: {
    src: 'images/taping/wrist-tape.png',
    alt: 'Wrist athletic tape with a wrist-band anchor and X support strips on the back of the hand',
    credit: 'Finished example — StudyBuddy instructional photo (hosted on this site)',
  },
}
const THUMB: TapeGuide = {
  id: 'thumb',
  name: 'Thumb — hyperextension / spica',
  emoji: '👍',
  use: 'Dense thumb job matching the finished photo: wrist anchors, overlapping spica/X strips over the MCP and dorsum, tip free. For UCL / skier’s or goalkeeper’s thumb — not a minimal 2-loop wrap.',
  materials: 'Adherent spray · 1″ (or torn ½″) white athletic tape — usually no pro-wrap',
  steps: [
    'C position & prep',
    'Thumb + wrist anchors (+ web strip)',
    'Overlapping X / pigtail strips',
    'Hood strips (dorsal wrist → palm)',
    'Close & tip check',
  ],
  stepNotes: [
    'Hand in a comfortable “C” / hold-a-cup shape. Mist adherent on thumb, thenar, palm, and wrist. Tape goes on skin for this denser job.',
    'Thin circumferential strip around the proximal thumb phalanx; full strip(s) around the wrist; then a crimped strip through the web space across the palm back to the wrist so circulation isn’t choked.',
    'From the medial then lateral sides of the thumb anchor, run strips to the wrist so they cross over the MCP. Repeat the X about three times with slight overlap — this builds the herringbone look on the back of the hand in the photo.',
    'Add 3–4 hood strips from the dorsal wrist anchor across the thenar / web toward the palm, working toward the thumb. Coverage should reach about the IP joint, leaving the tip free.',
    'Re-anchor thumb and wrist. Recheck the C position. Tip must stay pink and warm with normal sensation.',
  ],
  stepDiagrams: THUMB_STEP_DIAGRAMS,
  image: {
    src: 'images/taping/thumb-spica.png',
    alt: 'Dense thumb hyperextension tape with wrist anchors, X strips, and hood strips covering the base of the thumb',
    credit: 'Finished example — StudyBuddy instructional photo (hosted on this site)',
  },
}
const ELBOW: TapeGuide = {
  id: 'elbow',
  name: 'Elbow — hyperextension X / fan',
  emoji: '💪',
  use: 'Matches the finished photo: upper-arm and forearm anchors with overlapping diagonal X/fan strips crossing the joint line so the arm can bend but painful end-range extension is blocked.',
  materials: 'Adhesive spray · optional underwrap · 1½″ white athletic tape',
  steps: [
    'Slight flexion + muscle fill',
    'Upper-arm & forearm anchors',
    'Overlapping X / fan checkreins',
    'Lock & hand check',
  ],
  stepNotes: [
    'Hold the elbow in slight flexion (~15–20°). Have the athlete gently contract the biceps and forearm while you place anchors so the tape doesn’t loosen when the muscles fill out.',
    'Apply 2+ overlapping circumferential strips on the upper arm (~3″ above the joint) and 2+ on mid-forearm (~3″ below). These match the two white bands in the photo.',
    'Connect the anchors with diagonal strips that cross over the joint line (support side). Fan additional overlapping strips until painful extension is limited. Ends tuck under or are locked by the anchors.',
    'Add closing anchor strips. Flexion should still feel free. Check hand colour, warmth, and sensation.',
  ],
  stepDiagrams: ELBOW_STEP_DIAGRAMS,
  image: {
    src: 'images/taping/elbow-tape.png',
    alt: 'Elbow support with upper and lower anchors and overlapping X strips across the joint',
    credit: 'Finished example — StudyBuddy instructional photo (hosted on this site)',
  },
}
const BUDDY: TapeGuide = {
  id: 'buddy',
  name: 'Buddy taping (fingers)',
  emoji: '🖐️',
  use: 'Classroom photo: neighbour finger acts as a living splint. Foam/gauze BETWEEN the two fingers, then two bands around BOTH — never one finger taped to a big pad alone. Not for an obviously broken or deformed finger.',
  materials: 'Thin foam or gauze spacer · ½–1″ white athletic tape',
  steps: [
    'Spacer between the fingers',
    'Tape around BOTH (above & below the joint)',
    'Tips free · circulation check',
  ],
  stepNotes: [
    'Choose the injured finger and its healthy neighbour. Slide a thin foam or gauze spacer between them from the web toward the tips — padding is a spacer only, not a wrap around one finger.',
    'Wrap one band around both fingers on the proximal phalanges and a second band on the middle phalanges. Stay off swollen joints (leave PIP/DIP free to bend a little). Serrated torn edges are fine.',
    'Fingertips stay uncovered. Check colour and warmth on both digits. Remove if either tip goes pale, blue, or numb.',
  ],
  stepDiagrams: BUDDY_STEP_DIAGRAMS,
  image: {
    src: 'images/taping/buddy-fingers.png',
    alt: 'Buddy taping: two fingers taped together with foam between them and two white tape bands',
    credit: 'Classroom demo photo (hosted on this site)',
  },
}
const KNEE: TapeGuide = {
  id: 'knee',
  name: 'Knee — collateral support',
  emoji: '🦵',
  use: 'Matches the finished photo: broad thigh and calf anchors with a crisp X crossing the collateral joint line. Patella stays uncovered.',
  materials: 'Adhesive spray · optional underwrap · 1½″ white athletic tape',
  steps: [
    'Slight flexion & prep',
    'Thigh + calf anchors',
    'X strips on the injured side',
    'Close & toe check',
  ],
  stepNotes: [
    'Knee slightly flexed. Clean skin (underwrap if taught). Identify the injured collateral side (medial or lateral).',
    'Lay 1–2 overlapping circumferential strips on the lower thigh (~2–3″ above the patella) and 1–2 on the upper calf below the tibial tuberosity — matching the broad white bands in the photo.',
    'Run two diagonals so they cross exactly over the joint line on the injured side (same X logic as wrist/elbow). Add overlapping layers if more support is needed. Keep the kneecap free.',
    'Light closing strips over the anchors. Check toe colour, warmth, and sensation.',
  ],
  stepDiagrams: KNEE_STEP_DIAGRAMS,
  image: {
    src: 'images/taping/knee-collateral.png',
    alt: 'Collateral knee support with white athletic tape anchors and X strips on the side of the knee',
    credit: 'Finished example — StudyBuddy instructional photo (hosted on this site)',
  },
}
const PATELLA: TapeGuide = {
  id: 'patella',
  name: 'Patella — infrapatellar strap',
  emoji: '🟡',
  use: 'Classroom photo: cohesive/elastic tape twisted into a firm cord that presses on the soft patellar tendon just below the kneecap (jumper’s knee / Osgood-type). Not McConnell tracking strips; not for a fractured kneecap.',
  materials: 'Cohesive / elastic bandage (or elastic adhesive) — not rigid zinc oxide for the twisted cord',
  steps: [
    'Slight flexion — find the soft spot',
    'Wrap at tendon level',
    'Twist into a front cord',
    'Flatten at the back & check',
  ],
  stepNotes: [
    'Knee slightly flexed. Palpate the soft groove between the bottom of the patella and the tibial tuberosity — that soft tendon is your target.',
    'Start wrapping the cohesive strip around the knee at that height. Keep tension even; do not tourniquet.',
    'As the strip crosses the front, twist/roll it into a narrow cord so it digs gently into the soft tendon (exactly as in the classroom photo). Keep twisting through the front pass.',
    'Flatten the strip again at the back of the knee to anchor. Ask about comfort, then check distal colour/warmth. Remove if too tight or painful.',
  ],
  stepDiagrams: PATELLA_STEP_DIAGRAMS,
  image: {
    src: 'images/taping/patella-tape.png',
    alt: 'Infrapatellar strap: twisted white cohesive tape pressing on the soft tendon below the kneecap',
    credit: 'Classroom demo photo (hosted on this site)',
  },
}
const SHOULDER: TapeGuide = {
  id: 'shoulder',
  name: 'Shoulder — spica / deltoid lattice',
  emoji: '🏋️',
  use: 'Matches the finished photo: overlapping deltoid lattice, chest-to-acromion strips, then upper-arm anchors locking the ends. Mild instability support only — a brace is often more reliable for return to play.',
  materials: 'Adhesive spray · 1½″ white athletic tape (large coverage)',
  steps: [
    'Prep & arm position',
    'Deltoid lattice (side X net)',
    'Chest → shoulder strips',
    'Upper-arm anchors & hand check',
  ],
  stepNotes: [
    'Athlete standing/seated, arm slightly abducted in a comfortable pain-free position. Clean chest, deltoid, and upper arm thoroughly — hairless contact helps adhesion.',
    'Lay alternating diagonal strips over the lateral deltoid so they weave into a net/X pattern from the top of the shoulder down toward mid-arm. Overlap ~½ each pass.',
    'Add long strips from the upper chest / midline, over the acromion (top of the shoulder), weaving with the lattice. These help pull the joint toward the trunk.',
    'Finish with 2–3 circumferential anchors on the upper arm to lock every loose end (the bands mid-bicep in the photo). Check hand colour and sensation. Remind the athlete tape loosens with sweat/motion.',
  ],
  stepDiagrams: SHOULDER_STEP_DIAGRAMS,
  image: {
    src: 'images/taping/shoulder-spica.png',
    alt: 'Shoulder spica with deltoid lattice and chest-to-shoulder strips locked by upper-arm anchors',
    credit: 'Finished example — StudyBuddy instructional photo (hosted on this site)',
  },
}
const AC_JOINT: TapeGuide = {
  id: 'ac-joint',
  name: 'AC joint support',
  emoji: '🦴',
  use: 'Matches the finished photo: short trap/neck anchor with split tails forming a Y over the AC, crossing on the deltoid and leaving a small diamond of skin on top. Temporary support for a mild sprain only.',
  materials: 'Adhesive spray · 1½″ white athletic tape',
  steps: [
    'Locate AC & screen severity',
    'Upper-trap / neck anchor',
    'Split Y tails over the AC',
    'Lock, check, know referral flags',
  ],
  stepNotes: [
    'Palpate the AC (distal clavicle meeting the acromion). This job is only for mild sprains. Step deformity, severe pain, or inability to use the arm = medical care, not tape.',
    'Place a short horizontal anchor on the upper trapezius near the base of the neck — the rectangular base in the photo.',
    'From that anchor, run two tails (or tear a Y) so one passes slightly posterior over the top of the shoulder and one slightly anterior over the front of the deltoid. They cross on the lateral upper arm. Leave a small diamond of skin over the joint peak.',
    'Smooth all edges. Check hand colour/sensation. Reassess — if pain or dysfunction is high-grade, stop and refer.',
  ],
  stepDiagrams: AC_STEP_DIAGRAMS,
  image: {
    src: 'images/taping/ac-joint-tape.png',
    alt: 'AC joint support with a neck anchor and Y tails crossing over the top of the shoulder',
    credit: 'Finished example — StudyBuddy instructional photo (hosted on this site)',
  },
}
const HIP_GROIN: TapeGuide = {
  id: 'hip-groin',
  name: 'Hip / groin spica wrap',
  emoji: '🪢',
  use: 'Matches the finished photo: thigh base → figure-8 / spica across the hip → waistband lock. For a mild groin/adductor or hip-flexor strain.',
  materials: 'Elastic adhesive bandage or cloth wrap (wider roll)',
  steps: [
    'Pain-free position',
    'Thigh circular base',
    'Spica up across the hip',
    'Waist lock, overlap, recheck',
  ],
  stepNotes: [
    'Injured side slightly flexed and adducted in a pain-free posture (standing or lying as taught).',
    'Start with several circular turns around the mid- to upper-thigh to create the base layers visible in the photo.',
    'From the front/inner thigh, pull the wrap diagonally up across the groin and hip, around the back of the waist, across the lower abdomen, and back down toward the outer thigh — figure-8 / spica that builds the X over the hip.',
    'Repeat 2–3 overlapping passes (half to two-thirds overlap). Finish with a waist or thigh circular lock. Have the athlete walk a few steps and recheck comfort/support.',
  ],
  stepDiagrams: HIP_STEP_DIAGRAMS,
  image: {
    src: 'images/taping/hip-groin-wrap.png',
    alt: 'Hip and groin spica wrap from the thigh across the hip to a waistband lock',
    credit: 'Finished example — StudyBuddy instructional photo (hosted on this site)',
  },
}
const ARCH: TapeGuide = {
  id: 'arch',
  name: 'Longitudinal arch / plantar',
  emoji: '🦶',
  use: 'Matches the finished photo: one main longitudinal strip along the medial arch from heel to the ball of the foot, locked by vertical anchors at each end. Supports the medial longitudinal arch / plantar fascia load.',
  materials: '1½″ white athletic tape',
  steps: [
    'Neutral, non-weight-bearing foot',
    'Longitudinal strip along the medial arch',
    'Heel + MTP vertical anchors',
    'Smooth & toe check',
  ],
  stepNotes: [
    'Foot relaxed off the ground (or lightly resting). Keep a functional 90° at the ankle if taught. Trace the medial arch path from heel to first MTP.',
    'Start at the posterior-medial heel, pull forward with moderate tension along the medial border of the arch, and finish at the medial ball of the foot just behind the big toe. Stay above the weight-bearing sole to avoid wrinkles/blisters.',
    'Lock the rear end with a vertical strip around the heel; lock the front end with a vertical strip at the first MTP wrapping slightly onto the dorsum — matching the photo.',
    'Rub flat. Check toe colour and warmth. Retape if any wrinkle sits under a weight-bearing surface.',
  ],
  stepDiagrams: ARCH_STEP_DIAGRAMS,
  image: {
    src: 'images/taping/arch-tape.png',
    alt: 'Longitudinal arch athletic tape along the medial arch locked by heel and MTP anchors',
    credit: 'Finished example — StudyBuddy instructional photo (hosted on this site)',
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
