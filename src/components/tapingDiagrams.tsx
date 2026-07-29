/**
 * Alberta Sports Med / REC-style athletic taping diagrams.
 * Hosted in-app (no external AU clinic photos). Sequence labels follow
 * Alberta CTS Injury Management taping outcomes (closed basketweave, etc.).
 */

const INK = '#64748b'
const INK_SOFT = '#94a3b8'
const SKIN = '#f5d0b0'
const TAPE = '#f8fafc'
const ACCENT = '#0ea5e9'
const ROSE = '#f43f5e'
const EMERALD = '#10b981'
const AMBER = '#f59e0b'
const VIOLET = '#8b5cf6'

const lbl = { fill: INK, fontSize: 10, fontFamily: 'ui-sans-serif, system-ui' } as const
const lblB = { ...lbl, fontWeight: 700 } as const

function Banner({ title }: { title: string }) {
  return (
    <text x={170} y={16} textAnchor="middle" style={{ ...lblB, fontSize: 11, fill: ACCENT }}>
      {title}
    </text>
  )
}

/** Closed basketweave ankle — Alberta Sports Med / REC sequence. */
export function AnkleBasketweaveDiagram() {
  return (
    <svg viewBox="0 0 340 280" className="w-full max-w-md" role="img" aria-label="Closed basketweave ankle tape diagram">
      <Banner title="Alberta · closed basketweave (ankle at 90°)" />
      {/* lower leg + foot silhouette */}
      <path
        d="M150 40 L150 150 L120 150 L95 210 L105 230 L160 230 L175 175 L190 230 L245 230 L255 210 L230 150 L190 150 L190 40 Z"
        fill={SKIN}
        stroke={INK_SOFT}
        strokeWidth={1.5}
      />
      {/* proximal anchor */}
      <rect x={145} y={55} width={50} height={14} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} />
      <text x={258} y={66} style={{ ...lblB, fill: ACCENT }}>1 · proximal anchor</text>
      {/* distal / midfoot anchor */}
      <rect x={115} y={195} width={110} height={12} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} />
      <text x={258} y={204} style={{ ...lblB, fill: ACCENT }}>2 · foot anchor</text>
      {/* stirrup (medial → under heel → lateral) */}
      <path
        d="M155 70 L130 150 L145 210"
        fill="none"
        stroke={EMERALD}
        strokeWidth={5}
        strokeLinecap="round"
        opacity={0.85}
      />
      <path
        d="M185 70 L210 150 L195 210"
        fill="none"
        stroke={EMERALD}
        strokeWidth={5}
        strokeLinecap="round"
        opacity={0.55}
      />
      <text x={20} y={130} style={{ ...lblB, fill: EMERALD }}>3 · stirrups</text>
      <text x={20} y={143} style={{ ...lbl, fill: EMERALD }}>medial → lateral</text>
      {/* horseshoe */}
      <path
        d="M130 120 Q170 105 210 120"
        fill="none"
        stroke={AMBER}
        strokeWidth={4}
        strokeLinecap="round"
      />
      <text x={20} y={112} style={{ ...lblB, fill: AMBER }}>4 · horseshoe</text>
      {/* heel lock hint */}
      <path
        d="M140 165 Q170 195 200 165"
        fill="none"
        stroke={VIOLET}
        strokeWidth={3.5}
        strokeLinecap="round"
      />
      <text x={20} y={178} style={{ ...lblB, fill: VIOLET }}>5 · heel locks</text>
      {/* figure-8 hint */}
      <path
        d="M155 95 Q120 160 170 200 Q220 160 185 95"
        fill="none"
        stroke={ROSE}
        strokeWidth={2.5}
        strokeDasharray="4 3"
        opacity={0.9}
      />
      <text x={20} y={220} style={{ ...lblB, fill: ROSE }}>6 · figure-8</text>
      <text x={20} y={248} style={lbl}>Then close-up strips · check toes</text>
      <text x={20} y={262} style={lbl}>(capillary refill / colour / sensation)</text>
    </svg>
  )
}

/** Wrist hyperextension tape — Alberta REC. */
export function WristTapeDiagram() {
  return (
    <svg viewBox="0 0 340 240" className="w-full max-w-md" role="img" aria-label="Wrist hyperextension tape diagram">
      <Banner title="Alberta · wrist hyperextension tape" />
      {/* forearm + hand */}
      <rect x={40} y={70} width={90} height={50} rx={8} fill={SKIN} stroke={INK_SOFT} />
      <rect x={120} y={78} width={55} height={34} rx={6} fill={SKIN} stroke={INK_SOFT} />
      <path d="M175 82 L250 60 L258 72 L185 95 Z" fill={SKIN} stroke={INK_SOFT} />
      <path d="M175 90 L255 95 L252 108 L175 105 Z" fill={SKIN} stroke={INK_SOFT} />
      <path d="M175 100 L248 125 L240 136 L172 112 Z" fill={SKIN} stroke={INK_SOFT} />
      <path d="M172 108 L230 150 L220 158 L168 118 Z" fill={SKIN} stroke={INK_SOFT} />
      <path d="M168 112 L200 165 L188 172 L162 120 Z" fill={SKIN} stroke={INK_SOFT} />
      {/* anchors */}
      <rect x={55} y={78} width={22} height={34} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} />
      <rect x={155} y={82} width={18} height={26} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} />
      <text x={40} y={200} style={{ ...lblB, fill: ACCENT }}>1 · forearm + palm anchors</text>
      {/* palm-side fan / X for hyperextension */}
      <path d="M75 110 L160 100" stroke={ROSE} strokeWidth={4} strokeLinecap="round" />
      <path d="M80 95 L155 115" stroke={ROSE} strokeWidth={4} strokeLinecap="round" opacity={0.7} />
      <path d="M85 120 L150 95" stroke={ROSE} strokeWidth={3.5} strokeLinecap="round" opacity={0.55} />
      <text x={40} y={216} style={{ ...lblB, fill: ROSE }}>2 · fan / X on palm side (blocks hyperextension)</text>
      <text x={40} y={232} style={lbl}>3 · close over anchors · check hand colour & warmth</text>
    </svg>
  )
}

/** Thumb spica — Alberta REC. */
export function ThumbSpicaDiagram() {
  return (
    <svg viewBox="0 0 340 240" className="w-full max-w-md" role="img" aria-label="Thumb spica tape diagram">
      <Banner title="Alberta · thumb spica (figure-8)" />
      <rect x={50} y={90} width={100} height={45} rx={8} fill={SKIN} stroke={INK_SOFT} />
      <rect x={140} y={98} width={50} height={30} rx={5} fill={SKIN} stroke={INK_SOFT} />
      {/* thumb */}
      <path d="M185 100 Q230 55 250 70 Q255 85 200 115" fill={SKIN} stroke={INK_SOFT} />
      {/* wrist anchor */}
      <rect x={145} y={102} width={16} height={22} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} />
      <text x={40} y={175} style={{ ...lblB, fill: ACCENT }}>1 · wrist anchor</text>
      {/* figure-8 loops */}
      <path
        d="M153 112 Q200 70 240 78 Q210 100 160 118 Q200 95 235 85"
        fill="none"
        stroke={VIOLET}
        strokeWidth={4}
        strokeLinecap="round"
      />
      <path
        d="M155 118 Q205 80 245 90"
        fill="none"
        stroke={VIOLET}
        strokeWidth={3.5}
        strokeLinecap="round"
        opacity={0.55}
      />
      <text x={40} y={193} style={{ ...lblB, fill: VIOLET }}>2 · overlapping figure-8 around thumb ↔ wrist</text>
      <text x={40} y={211} style={lbl}>Limits hyperextension / hyperabduction at the MCP</text>
      <text x={40} y={227} style={lbl}>3 · finish on wrist · check thumb tip colour</text>
    </svg>
  )
}

/** Elbow hyperextension — Alberta. */
export function ElbowTapeDiagram() {
  return (
    <svg viewBox="0 0 340 240" className="w-full max-w-md" role="img" aria-label="Elbow hyperextension tape diagram">
      <Banner title="Alberta · elbow hyperextension (slight flexion)" />
      {/* upper arm / forearm bent slightly */}
      <path d="M80 50 L80 130 L160 175 L250 155" fill="none" stroke={SKIN} strokeWidth={28} strokeLinecap="round" />
      <path d="M80 50 L80 130 L160 175 L250 155" fill="none" stroke={INK_SOFT} strokeWidth={1.5} strokeLinecap="round" />
      {/* anchors */}
      <rect x={66} y={70} width={28} height={16} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} transform="rotate(-5 80 78)" />
      <rect x={175} y={155} width={28} height={16} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} transform="rotate(20 189 163)" />
      <text x={40} y={200} style={{ ...lblB, fill: ACCENT }}>1 · anchors above & below (elbow slightly bent)</text>
      {/* fan across anterior crease */}
      <path d="M95 105 L175 155" stroke={ROSE} strokeWidth={4} strokeLinecap="round" />
      <path d="M100 115 L170 148" stroke={ROSE} strokeWidth={3.5} strokeLinecap="round" opacity={0.75} />
      <path d="M105 95 L180 160" stroke={ROSE} strokeWidth={3.5} strokeLinecap="round" opacity={0.55} />
      <text x={40} y={216} style={{ ...lblB, fill: ROSE }}>2 · fan / X across front of elbow crease</text>
      <text x={40} y={232} style={lbl}>Blocks terminal extension · close · check distal circulation</text>
    </svg>
  )
}

/** Buddy taping diagram (complements local photo). */
export function BuddyTapeDiagram() {
  return (
    <svg viewBox="0 0 340 200" className="w-full max-w-md" role="img" aria-label="Buddy taping diagram">
      <Banner title="Alberta · buddy taping (fingers)" />
      {/* two fingers */}
      <rect x={120} y={40} width={28} height={120} rx={10} fill={SKIN} stroke={INK_SOFT} />
      <rect x={158} y={40} width={28} height={120} rx={10} fill={SKIN} stroke={INK_SOFT} />
      {/* gauze pad between */}
      <rect x={146} y={70} width={14} height={50} rx={2} fill="#e2e8f0" stroke={AMBER} strokeWidth={1.5} />
      <text x={200} y={95} style={{ ...lblB, fill: AMBER }}>gauze pad</text>
      {/* tape strips above and below PIP — never over joint */}
      <rect x={115} y={58} width={76} height={12} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} />
      <rect x={115} y={118} width={76} height={12} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} />
      <text x={40} y={175} style={{ ...lblB, fill: ACCENT }}>strips above & below the injured joint (not over it)</text>
      <text x={40} y={191} style={lbl}>Leave fingertips free · check colour & warmth</text>
      {/* joint marker */}
      <circle cx={134} cy={95} r={3} fill={ROSE} />
      <circle cx={172} cy={95} r={3} fill={ROSE} />
      <text x={200} y={115} style={{ ...lbl, fill: ROSE }}>leave joint free</text>
    </svg>
  )
}

/** Collateral knee support — Alberta Sports Med 15 basic. */
export function KneeCollateralDiagram() {
  return (
    <svg viewBox="0 0 340 240" className="w-full max-w-md" role="img" aria-label="Knee collateral support tape diagram">
      <Banner title="Sports Med 15 · collateral knee support" />
      <path d="M160 30 L160 210" stroke={SKIN} strokeWidth={40} strokeLinecap="round" />
      <path d="M160 30 L160 210" stroke={INK_SOFT} strokeWidth={1.5} />
      <ellipse cx={160} cy={120} rx={28} ry={18} fill={SKIN} stroke={INK_SOFT} />
      <rect x={138} y={55} width={44} height={14} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} />
      <rect x={138} y={170} width={44} height={14} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} />
      <text x={40} y={200} style={{ ...lblB, fill: ACCENT }}>1 · anchors above & below joint line</text>
      <path d="M145 70 L175 165" stroke={VIOLET} strokeWidth={4} strokeLinecap="round" />
      <path d="M175 70 L145 165" stroke={VIOLET} strokeWidth={4} strokeLinecap="round" />
      <text x={40} y={216} style={{ ...lblB, fill: VIOLET }}>2 · X strips crossing the joint line</text>
      <text x={40} y={232} style={lbl}>Check distal colour / warmth after finishing</text>
    </svg>
  )
}

/** Patella (McConnell-style) tracking tape — Sports Med 15. */
export function PatellaTapeDiagram() {
  return (
    <svg viewBox="0 0 340 240" className="w-full max-w-md" role="img" aria-label="Patella tape diagram">
      <Banner title="Sports Med 15 · patella (kneecap) tape" />
      <path d="M160 25 L160 220" stroke={SKIN} strokeWidth={44} strokeLinecap="round" />
      <ellipse cx={160} cy={115} rx={22} ry={26} fill={SKIN} stroke={INK_SOFT} strokeWidth={1.5} />
      <text x={188} y={118} style={{ ...lblB, fill: INK }}>patella</text>
      {/* medial glide strip */}
      <path d="M185 105 Q210 115 185 130" fill="none" stroke={ROSE} strokeWidth={5} strokeLinecap="round" />
      <path d="M140 90 L185 108" stroke={ACCENT} strokeWidth={4} strokeLinecap="round" />
      <path d="M140 140 L185 122" stroke={ACCENT} strokeWidth={4} strokeLinecap="round" opacity={0.7} />
      <text x={40} y={185} style={{ ...lblB, fill: ROSE }}>1 · unload / glide strip on the kneecap</text>
      <text x={40} y={202} style={{ ...lblB, fill: ACCENT }}>2 · cover strips hold the correction</text>
      <text x={40} y={220} style={lbl}>Used for patellofemoral pain — not a fracture job</text>
    </svg>
  )
}

/** Shoulder spica — Sports Med 25/35. */
export function ShoulderSpicaDiagram() {
  return (
    <svg viewBox="0 0 340 260" className="w-full max-w-md" role="img" aria-label="Shoulder spica tape diagram">
      <Banner title="Sports Med 25/35 · shoulder spica" />
      {/* torso + arm */}
      <ellipse cx={150} cy={90} rx={55} ry={40} fill={SKIN} stroke={INK_SOFT} />
      <path d="M195 95 Q250 110 270 170" fill="none" stroke={SKIN} strokeWidth={22} strokeLinecap="round" />
      <path d="M195 95 Q250 110 270 170" fill="none" stroke={INK_SOFT} strokeWidth={1.5} />
      {/* chest / upper arm anchors */}
      <rect x={105} y={70} width={70} height={12} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} />
      <rect x={230} y={130} width={36} height={12} rx={2} fill={TAPE} stroke={ACCENT} strokeWidth={1.5} transform="rotate(25 248 136)" />
      <text x={40} y={200} style={{ ...lblB, fill: ACCENT }}>1 · trunk + upper-arm anchors</text>
      {/* figure-8 / spica loops */}
      <path
        d="M130 80 Q200 60 250 120 Q210 150 155 100 Q220 90 255 140"
        fill="none"
        stroke={VIOLET}
        strokeWidth={4}
        strokeLinecap="round"
      />
      <text x={40} y={218} style={{ ...lblB, fill: VIOLET }}>2 · overlapping spica loops chest ↔ arm</text>
      <text x={40} y={236} style={lbl}>Huge surface area — bracing often more reliable</text>
      <text x={40} y={252} style={lbl}>3 · close · check hand colour & sensation</text>
    </svg>
  )
}

/** AC joint support — Sports Med 35. */
export function ACJointTapeDiagram() {
  return (
    <svg viewBox="0 0 340 240" className="w-full max-w-md" role="img" aria-label="AC joint tape diagram">
      <Banner title="Sports Med 35 · AC joint support" />
      <ellipse cx={160} cy={100} rx={60} ry={42} fill={SKIN} stroke={INK_SOFT} />
      <circle cx={195} cy={78} r={6} fill={ROSE} />
      <text x={208} y={72} style={{ ...lblB, fill: ROSE }}>AC joint</text>
      <path d="M170 70 L210 55 L225 85" fill="none" stroke={ACCENT} strokeWidth={4} strokeLinecap="round" />
      <path d="M165 85 L215 70 L220 100" fill="none" stroke={VIOLET} strokeWidth={3.5} strokeLinecap="round" opacity={0.75} />
      <rect x={120} y={115} width={80} height={12} rx={2} fill={TAPE} stroke={AMBER} strokeWidth={1.5} />
      <text x={40} y={175} style={{ ...lblB, fill: ACCENT }}>1 · strips pulling clavicle “down & back”</text>
      <text x={40} y={193} style={{ ...lblB, fill: VIOLET }}>2 · cross-support over the AC joint</text>
      <text x={40} y={211} style={{ ...lblB, fill: AMBER }}>3 · chest/shoulder anchor lock</text>
      <text x={40} y={228} style={lbl}>Theory + instructor demo — AC grades need medical care</text>
    </svg>
  )
}

/** Hip / groin wrap — Sports Med 25. */
export function HipGroinWrapDiagram() {
  return (
    <svg viewBox="0 0 340 240" className="w-full max-w-md" role="img" aria-label="Hip and groin wrap diagram">
      <Banner title="Sports Med 25 · hip / groin wrap" />
      <path d="M150 30 L150 100 L110 210" fill="none" stroke={SKIN} strokeWidth={28} strokeLinecap="round" />
      <path d="M150 100 L190 210" fill="none" stroke={SKIN} strokeWidth={28} strokeLinecap="round" />
      <ellipse cx={150} cy={70} rx={45} ry={28} fill={SKIN} stroke={INK_SOFT} />
      <path
        d="M120 75 Q150 110 180 160 Q160 120 145 85"
        fill="none"
        stroke={EMERALD}
        strokeWidth={5}
        strokeLinecap="round"
      />
      <path
        d="M175 70 Q140 130 125 180"
        fill="none"
        stroke={VIOLET}
        strokeWidth={4}
        strokeLinecap="round"
        opacity={0.7}
      />
      <text x={40} y={200} style={{ ...lblB, fill: EMERALD }}>1 · spiral / figure from thigh → pelvis</text>
      <text x={40} y={218} style={{ ...lblB, fill: VIOLET }}>2 · tension opposes painful stretch</text>
      <text x={40} y={234} style={lbl}>Cloth wrap or elastic often used with rigid finish</text>
    </svg>
  )
}

/** Longitudinal arch / plantar — Sports Med 25. */
export function ArchTapeDiagram() {
  return (
    <svg viewBox="0 0 340 220" className="w-full max-w-md" role="img" aria-label="Longitudinal arch tape diagram">
      <Banner title="Sports Med 25 · longitudinal arch tape" />
      <path
        d="M60 120 Q120 80 200 95 Q260 110 300 140 L280 170 Q220 150 160 155 Q100 160 70 150 Z"
        fill={SKIN}
        stroke={INK_SOFT}
      />
      <path d="M100 145 Q170 120 250 145" fill="none" stroke={ACCENT} strokeWidth={5} strokeLinecap="round" />
      <path d="M110 155 Q175 135 245 155" fill="none" stroke={EMERALD} strokeWidth={4} strokeLinecap="round" opacity={0.75} />
      <rect x={90} y={100} width={40} height={10} rx={2} fill={TAPE} stroke={VIOLET} strokeWidth={1.5} />
      <rect x={230} y={125} width={36} height={10} rx={2} fill={TAPE} stroke={VIOLET} strokeWidth={1.5} />
      <text x={40} y={190} style={{ ...lblB, fill: ACCENT }}>strips under the arch (medial → lateral)</text>
      <text x={40} y={208} style={lbl}>Supports plantar fascia / fallen arch — check toes</text>
    </svg>
  )
}
