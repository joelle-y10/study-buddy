/**
 * Step diagrams for Sports Med tape jobs (wrist → AC).
 * Same visual language as ankle/thumb: placement views + blue pull-direction arrows.
 * Sequences match the finished instructional photos in /public/images/taping.
 */

import type { ReactNode } from 'react'

const SKIN = '#f3c9a8'
const WRAP = '#e11d48'
const TAPE = '#f8fafc'
const EDGE = '#94a3b8'
const INK = '#64748b'
const ARROW = '#2563eb'
const DONE = '#cbd5e1'

const lbl = { fill: INK, fontSize: 11, fontFamily: 'ui-sans-serif, system-ui' } as const
const lblB = { ...lbl, fontWeight: 700, fontSize: 12 } as const

function Frame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 280 230" className="h-auto w-full max-w-sm" role="img" aria-label={title}>
      <defs>
        <marker id="basicArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={ARROW} />
        </marker>
      </defs>
      <rect width={280} height={230} rx={12} fill="#fff" />
      <text x={14} y={22} style={lblB}>{title}</text>
      <g transform="translate(0,4)">{children}</g>
    </svg>
  )
}

function Arr({ d, label, x = 14, y = 48 }: { d: string; label?: string; x?: number; y?: number }) {
  return (
    <g>
      <path d={d} fill="none" stroke={ARROW} strokeWidth={2.4} strokeLinecap="round" markerEnd="url(#basicArrow)" />
      {label && <text x={x} y={y} style={lblB} fill={ARROW}>{label}</text>}
    </g>
  )
}

// ---- Wrist (SportMedBC / Waterloo style) ----

function WristHand({ prowrap = false }: { prowrap?: boolean }) {
  return (
    <g>
      <path d="M150 40 C168 40 178 58 180 90 L178 130 C176 140 166 146 152 146 L130 144 C120 142 116 132 118 120 L124 78 C128 52 136 40 150 40 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      <path d="M130 132 C118 140 108 158 112 178 C118 202 140 214 168 210 C196 206 214 186 210 162 C206 140 188 128 168 126 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      <path d="M132 138 C112 132 92 138 84 152 C78 162 86 172 100 174 C112 176 124 168 132 156 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      {prowrap && (
        <path d="M124 70 C140 66 168 68 174 78 L172 130 C160 138 140 138 128 132 Z" fill={WRAP} opacity={0.45} />
      )}
    </g>
  )
}

export const WRIST_STEP_DIAGRAMS: ReactNode[] = [
  <Frame key="w1" title="1 · Prep & position">
    <WristHand prowrap />
    <text x={14} y={48} style={lblB} fill={ARROW}>fingers splayed</text>
    <Arr d="M200 160 C220 170 228 190 220 204" />
    <text x={14} y={214} style={lbl}>Clean skin / adhesive. Hand open, knuckles free.</text>
  </Frame>,
  <Frame key="w2" title="2 · Wrist anchor">
    <WristHand />
    <rect x={132} y={96} width={44} height={16} rx={2} fill={TAPE} stroke={EDGE} />
    <Arr d="M190 90 C210 96 218 112 212 128" label="2–3 turns at wrist" />
    <text x={14} y={214} style={lbl}>Firm band just proximal to the wrist crease.</text>
  </Frame>,
  <Frame key="w3" title="3 · Thumb-web diagonal">
    <WristHand />
    <rect x={132} y={96} width={44} height={14} rx={2} fill={DONE} stroke={EDGE} />
    <path d="M148 108 C168 130 188 150 198 168 C204 178 192 184 180 174 C160 156 144 130 140 112" fill="none" stroke={TAPE} strokeWidth={8} strokeLinecap="round" />
    <Arr d="M160 120 C176 140 190 158 198 170" label="through thumb web" />
    <text x={14} y={214} style={lbl}>From wrist → web space → back to wrist anchor.</text>
  </Frame>,
  <Frame key="w4" title="4 · Pinky-side diagonal (X)">
    <WristHand />
    <rect x={132} y={96} width={44} height={14} rx={2} fill={DONE} stroke={EDGE} />
    <path d="M148 108 C168 130 188 150 198 168 C204 178 192 184 180 174 C160 156 144 130 140 112" fill="none" stroke={DONE} strokeWidth={7} />
    <path d="M170 108 C150 130 130 152 118 170 C112 180 124 186 136 176 C156 156 168 132 172 112" fill="none" stroke={TAPE} strokeWidth={8} strokeLinecap="round" />
    <Arr d="M164 120 C148 142 132 160 122 172" label="around 5th met" />
    <text x={14} y={214} style={lbl}>Crosses the first strip mid-dorsum → crisp X.</text>
  </Frame>,
  <Frame key="w5" title="5 · Smooth & check">
    <WristHand />
    <rect x={132} y={94} width={44} height={18} rx={2} fill={TAPE} stroke={EDGE} />
    <path d="M148 108 C168 130 188 150 198 168" fill="none" stroke={TAPE} strokeWidth={8} />
    <path d="M170 108 C150 130 130 152 118 170" fill="none" stroke={TAPE} strokeWidth={8} />
    <Arr d="M200 120 C220 130 226 150 218 168" label="knuckles free" />
    <text x={14} y={214} style={lbl}>Rub flat. Fingers pink, warm, normal sensation.</text>
  </Frame>,
]

// ---- Elbow (Whitworth / hyperextension fan) ----

function ElbowArm() {
  return (
    <g>
      {/* upper arm */}
      <path d="M120 36 C138 36 148 50 150 78 L148 118 C146 128 136 134 122 134 C108 134 100 126 100 114 L102 78 C104 50 108 36 120 36 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      {/* forearm angled ~20° flexion */}
      <path d="M122 128 C140 132 168 148 186 170 C196 182 190 194 176 198 C160 202 140 188 126 168 C116 152 112 138 122 128 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      <ellipse cx={126} cy={132} rx={10} ry={8} fill="#e8b890" opacity={0.6} />
    </g>
  )
}

export const ELBOW_STEP_DIAGRAMS: ReactNode[] = [
  <Frame key="e1" title="1 · Slight flexion">
    <ElbowArm />
    <path d="M150 150 L176 150 L176 176" fill="none" stroke={ARROW} strokeWidth={1.8} strokeDasharray="3 2" />
    <text x={180} y={164} style={lblB} fill={ARROW}>~15–20°</text>
    <text x={14} y={214} style={lbl}>Contract biceps / forearm when laying anchors.</text>
  </Frame>,
  <Frame key="e2" title="2 · Anchors">
    <ElbowArm />
    <rect x={104} y={70} width={42} height={12} rx={2} fill={TAPE} stroke={EDGE} />
    <rect x={150} y={168} width={40} height={12} rx={2} fill={TAPE} stroke={EDGE} transform="rotate(-28 170 174)" />
    <Arr d="M160 76 C178 80 188 94 184 110" label="upper arm" />
    <Arr d="M200 170 C218 178 222 194 214 206" label="forearm" x={200} y={160} />
    <text x={14} y={214} style={lbl}>2+ strips each end, overlapping ~½.</text>
  </Frame>,
  <Frame key="e3" title="3 · X / fan over joint">
    <ElbowArm />
    <rect x={104} y={70} width={42} height={10} rx={2} fill={DONE} stroke={EDGE} />
    <rect x={150} y={168} width={40} height={10} rx={2} fill={DONE} stroke={EDGE} transform="rotate(-28 170 174)" />
    <path d="M120 82 L170 172" fill="none" stroke={TAPE} strokeWidth={8} strokeLinecap="round" />
    <path d="M138 82 L158 176" fill="none" stroke={TAPE} strokeWidth={7} strokeLinecap="round" />
    <path d="M108 90 L180 168" fill="none" stroke={TAPE} strokeWidth={7} strokeLinecap="round" />
    <Arr d="M128 100 L162 160" label="cross at joint line" />
    <text x={14} y={214} style={lbl}>Overlap diagonals until end-range is blocked.</text>
  </Frame>,
  <Frame key="e4" title="4 · Lock & check">
    <ElbowArm />
    <rect x={104} y={68} width={42} height={14} rx={2} fill={TAPE} stroke={EDGE} />
    <rect x={150} y={166} width={40} height={14} rx={2} fill={TAPE} stroke={EDGE} transform="rotate(-28 170 174)" />
    <path d="M120 82 L170 172" fill="none" stroke={TAPE} strokeWidth={9} />
    <path d="M138 82 L158 176" fill="none" stroke={TAPE} strokeWidth={8} />
    <path d="M108 90 L180 168" fill="none" stroke={TAPE} strokeWidth={8} />
    <Arr d="M190 100 C210 110 216 130 208 148" label="closing anchors" />
    <text x={14} y={214} style={lbl}>Hand pink/warm? Flexion free, painful extension limited.</text>
  </Frame>,
]

// ---- Buddy ----

function BuddyHand() {
  return (
    <g>
      <path d="M90 70 C100 55 130 50 150 58 C168 66 178 90 176 120 L170 170 C168 190 150 200 130 198 C110 196 96 180 94 160 L90 120 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      {/* index free */}
      <path d="M118 78 C114 50 118 28 122 22" fill="none" stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      {/* middle + ring (buddy pair) */}
      <path d="M138 72 C136 44 138 22 140 16" fill="none" stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <path d="M152 76 C154 48 156 26 158 20" fill="none" stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      {/* pinky */}
      <path d="M166 88 C172 64 176 48 178 44" fill="none" stroke={SKIN} strokeWidth={10} strokeLinecap="round" />
    </g>
  )
}

export const BUDDY_STEP_DIAGRAMS: ReactNode[] = [
  <Frame key="b1" title="1 · Padding between">
    <BuddyHand />
    <rect x={142} y={28} width={8} height={40} rx={2} fill="#f1f5f9" stroke={EDGE} />
    <Arr d="M160 40 C180 44 190 58 186 74" label="foam / gauze" />
    <text x={14} y={214} style={lbl}>Between the two fingers — not wrapping one alone.</text>
  </Frame>,
  <Frame key="b2" title="2 · Tape both together">
    <BuddyHand />
    <rect x={142} y={28} width={8} height={40} rx={2} fill={DONE} stroke={EDGE} />
    <rect x={130} y={36} width={40} height={12} rx={2} fill={TAPE} stroke={EDGE} />
    <rect x={132} y={54} width={36} height={10} rx={2} fill={TAPE} stroke={EDGE} />
    <Arr d="M178 42 C198 48 206 64 200 80" label="around BOTH" />
    <text x={14} y={214} style={lbl}>Above & below the joint — never over a swollen joint.</text>
  </Frame>,
  <Frame key="b3" title="3 · Tips free · check">
    <BuddyHand />
    <rect x={130} y={36} width={40} height={12} rx={2} fill={TAPE} stroke={EDGE} />
    <rect x={132} y={54} width={36} height={10} rx={2} fill={TAPE} stroke={EDGE} />
    <Arr d="M148 18 C148 8 148 4 148 2" label="tips free" x={160} y={16} />
    <text x={14} y={214} style={lbl}>Colour & warmth on both digits.</text>
  </Frame>,
]

// ---- Knee collateral ----

function KneeLeg() {
  return (
    <g>
      <path d="M130 30 C148 30 158 48 160 80 L158 120 C156 130 146 136 132 136 C118 136 110 128 110 116 L112 80 C114 48 118 30 130 30 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      <ellipse cx={134} cy={128} rx={18} ry={14} fill="#e8b890" opacity={0.55} />
      <path d="M132 132 C148 136 156 160 154 190 C152 210 140 220 128 220 C114 220 106 208 108 188 C110 160 118 138 132 132 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
    </g>
  )
}

export const KNEE_STEP_DIAGRAMS: ReactNode[] = [
  <Frame key="k1" title="1 · Slight flexion">
    <KneeLeg />
    <text x={170} y={130} style={lblB} fill={ARROW}>slight bend</text>
    <text x={14} y={214} style={lbl}>Clean skin / underwrap as taught.</text>
  </Frame>,
  <Frame key="k2" title="2 · Anchors">
    <KneeLeg />
    <rect x={114} y={70} width={40} height={12} rx={2} fill={TAPE} stroke={EDGE} />
    <rect x={114} y={170} width={40} height={12} rx={2} fill={TAPE} stroke={EDGE} />
    <Arr d="M164 76 C184 82 192 98 186 114" label="above joint" />
    <Arr d="M164 176 C184 182 192 198 186 212" label="below joint" x={168} y={168} />
    <text x={14} y={214} style={lbl}>Proximal and distal circumferential anchors.</text>
  </Frame>,
  <Frame key="k3" title="3 · X over joint line">
    <KneeLeg />
    <rect x={114} y={70} width={40} height={10} rx={2} fill={DONE} stroke={EDGE} />
    <rect x={114} y={170} width={40} height={10} rx={2} fill={DONE} stroke={EDGE} />
    <path d="M120 82 L150 178" fill="none" stroke={TAPE} strokeWidth={8} strokeLinecap="round" />
    <path d="M148 82 L122 178" fill="none" stroke={TAPE} strokeWidth={8} strokeLinecap="round" />
    <Arr d="M128 100 L142 150" label="collateral side" />
    <text x={14} y={214} style={lbl}>X crosses the injured collateral joint line.</text>
  </Frame>,
  <Frame key="k4" title="4 · Close & toes">
    <KneeLeg />
    <rect x={114} y={68} width={40} height={14} rx={2} fill={TAPE} stroke={EDGE} />
    <rect x={114} y={168} width={40} height={14} rx={2} fill={TAPE} stroke={EDGE} />
    <path d="M120 82 L150 178" fill="none" stroke={TAPE} strokeWidth={9} />
    <path d="M148 82 L122 178" fill="none" stroke={TAPE} strokeWidth={9} />
    <Arr d="M170 200 C190 208 198 220 192 228" label="toe check" x={168} y={196} />
    <text x={14} y={214} style={lbl}>Light close. Colour, warmth, sensation in toes.</text>
  </Frame>,
]

// ---- Patella infrapatellar strap ----

export const PATELLA_STEP_DIAGRAMS: ReactNode[] = [
  <Frame key="p1" title="1 · Find the soft spot">
    <KneeLeg />
    <ellipse cx={134} cy={128} rx={16} ry={12} fill="#f59e0b" opacity={0.35} stroke={ARROW} strokeWidth={1.5} />
    <Arr d="M160 120 C180 116 196 124 204 140" label="below kneecap" />
    <text x={14} y={214} style={lbl}>Patellar tendon — soft spot under the patella.</text>
  </Frame>,
  <Frame key="p2" title="2 · Wrap at tendon level">
    <KneeLeg />
    <path d="M110 128 C130 118 160 118 180 128 C184 132 180 140 168 142 L120 142 C112 140 108 134 110 128" fill={TAPE} stroke={EDGE} />
    <Arr d="M186 130 C206 136 214 152 208 168" label="around knee" />
    <text x={14} y={214} style={lbl}>Cohesive / elastic strip, not tourniquet-tight.</text>
  </Frame>,
  <Frame key="p3" title="3 · Twist the front cord">
    <KneeLeg />
    <path d="M110 128 C130 118 160 118 180 128 C184 132 180 140 168 142 L120 142 C112 140 108 134 110 128" fill={TAPE} stroke={EDGE} opacity={0.5} />
    <path d="M118 130 C128 124 140 122 150 130 C154 134 148 138 138 136 C128 134 120 134 118 130" fill={TAPE} stroke={ARROW} strokeWidth={1.5} />
    <Arr d="M156 122 C170 110 186 108 200 118" label="twist / press" />
    <text x={14} y={214} style={lbl}>Rolled cord presses into the soft tendon.</text>
  </Frame>,
  <Frame key="p4" title="4 · Flatten & check">
    <KneeLeg />
    <path d="M110 128 C130 118 160 118 180 128 C184 132 180 140 168 142 L120 142 C112 140 108 134 110 128" fill={TAPE} stroke={EDGE} />
    <path d="M118 130 C128 124 140 122 150 130 C154 134 148 138 138 136 C128 134 120 134 118 130" fill={TAPE} stroke={EDGE} />
    <Arr d="M100 140 C80 148 72 164 78 178" label="flatten at back" x={14} y={120} />
    <text x={14} y={214} style={lbl}>Comfort + distal circulation check.</text>
  </Frame>,
]

// ---- Shoulder spica / deltoid lattice (SM25) ----

function ShoulderTorso() {
  return (
    <g>
      <path d="M90 50 C120 30 160 28 190 48 C210 62 220 90 216 130 L210 200 C200 210 160 214 130 210 C100 206 84 190 80 160 L78 110 C80 78 82 58 90 50 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      <path d="M190 90 C220 100 240 130 238 160 C236 186 220 198 200 190 C186 182 180 160 182 140 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      <ellipse cx={198} cy={100} rx={14} ry={12} fill="#e8b890" opacity={0.5} />
    </g>
  )
}

export const SHOULDER_STEP_DIAGRAMS: ReactNode[] = [
  <Frame key="s1" title="1 · Prep & arm position">
    <ShoulderTorso />
    <text x={14} y={48} style={lblB} fill={ARROW}>arm slightly abducted</text>
    <text x={14} y={214} style={lbl}>Clean chest + deltoid + upper arm skin.</text>
  </Frame>,
  <Frame key="s2" title="2 · Deltoid lattice">
    <ShoulderTorso />
    <path d="M176 88 L210 160" fill="none" stroke={TAPE} strokeWidth={7} strokeLinecap="round" />
    <path d="M188 84 L198 162" fill="none" stroke={TAPE} strokeWidth={7} strokeLinecap="round" />
    <path d="M200 90 L186 164" fill="none" stroke={TAPE} strokeWidth={6} strokeLinecap="round" />
    <Arr d="M210 100 C224 120 228 144 220 164" label="overlap X on deltoid" />
    <text x={14} y={214} style={lbl}>Alternating diagonals over the side of the shoulder.</text>
  </Frame>,
  <Frame key="s3" title="3 · Chest → shoulder strips">
    <ShoulderTorso />
    <path d="M176 88 L210 160" fill="none" stroke={DONE} strokeWidth={6} />
    <path d="M188 84 L198 162" fill="none" stroke={DONE} strokeWidth={6} />
    <path d="M120 90 C150 70 180 70 200 96" fill="none" stroke={TAPE} strokeWidth={8} strokeLinecap="round" />
    <path d="M130 110 C160 88 186 86 204 108" fill="none" stroke={TAPE} strokeWidth={7} strokeLinecap="round" />
    <Arr d="M140 96 C168 78 190 82 204 100" label="chest → acromion" />
    <text x={14} y={214} style={lbl}>Long strips from sternum/chest over the top of the joint.</text>
  </Frame>,
  <Frame key="s4" title="4 · Arm anchors & check">
    <ShoulderTorso />
    <path d="M176 88 L210 160" fill="none" stroke={TAPE} strokeWidth={7} />
    <path d="M120 90 C150 70 180 70 200 96" fill="none" stroke={TAPE} strokeWidth={8} />
    <rect x={196} y={158} width={36} height={14} rx={2} fill={TAPE} stroke={EDGE} />
    <Arr d="M230 150 C242 158 246 174 238 186" label="lock on arm" />
    <text x={14} y={214} style={lbl}>Circumferential upper-arm anchors. Hand colour check.</text>
  </Frame>,
]

// ---- Hip / groin spica ----

function HipFigure() {
  return (
    <g>
      <path d="M100 40 C140 30 180 32 210 48 C228 60 232 90 224 120 L210 160 C190 170 140 172 120 160 C100 148 92 120 96 90 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      <path d="M150 150 C170 155 186 180 184 210 C182 228 168 236 154 232 C138 228 132 208 136 188 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
    </g>
  )
}

export const HIP_STEP_DIAGRAMS: ReactNode[] = [
  <Frame key="h1" title="1 · Position">
    <HipFigure />
    <text x={14} y={48} style={lblB} fill={ARROW}>slight flex + adduction</text>
    <text x={14} y={214} style={lbl}>Pain-free posture on the injured side.</text>
  </Frame>,
  <Frame key="h2" title="2 · Thigh base">
    <HipFigure />
    <rect x={142} y={180} width={40} height={14} rx={2} fill={TAPE} stroke={EDGE} />
    <Arr d="M190 186 C210 190 218 206 210 218" label="around thigh" />
    <text x={14} y={214} style={lbl}>Several circular turns mid- to upper-thigh.</text>
  </Frame>,
  <Frame key="h3" title="3 · Spica to waist">
    <HipFigure />
    <rect x={142} y={180} width={40} height={12} rx={2} fill={DONE} stroke={EDGE} />
    <path d="M160 184 C170 150 190 120 210 100 C220 90 210 80 190 86 C160 96 140 120 136 150" fill="none" stroke={TAPE} strokeWidth={10} strokeLinecap="round" />
    <Arr d="M168 160 C180 130 198 108 214 96" label="up across hip" />
    <text x={14} y={214} style={lbl}>Figure-8 / spica: thigh → hip → around waist → back.</text>
  </Frame>,
  <Frame key="h4" title="4 · Overlap & lock">
    <HipFigure />
    <path d="M160 184 C170 150 190 120 210 100 C220 90 210 80 190 86 C160 96 140 120 136 150" fill="none" stroke={TAPE} strokeWidth={12} />
    <path d="M150 188 C164 154 188 128 208 110" fill="none" stroke={TAPE} strokeWidth={10} opacity={0.85} />
    <Arr d="M120 100 C100 110 90 130 96 150" label="waist lock" x={14} y={90} />
    <text x={14} y={214} style={lbl}>Repeat overlapping. Recheck after a few steps.</text>
  </Frame>,
]

// ---- Longitudinal arch ----

function ArchFoot() {
  return (
    <g>
      <path d="M40 140 C50 100 80 70 130 66 C180 62 220 80 240 120 C248 140 236 160 210 164 L80 170 C50 170 36 156 40 140 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      <path d="M60 150 C90 130 140 120 190 130" fill="none" stroke="#e8b890" strokeWidth={3} opacity={0.7} />
    </g>
  )
}

export const ARCH_STEP_DIAGRAMS: ReactNode[] = [
  <Frame key="a1" title="1 · Neutral foot">
    <ArchFoot />
    <text x={14} y={48} style={lblB} fill={ARROW}>non-weight-bearing</text>
    <text x={14} y={214} style={lbl}>Foot relaxed; mark the medial arch path.</text>
  </Frame>,
  <Frame key="a2" title="2 · Longitudinal strip">
    <ArchFoot />
    <path d="M70 148 C110 128 160 122 210 138" fill="none" stroke={TAPE} strokeWidth={10} strokeLinecap="round" />
    <Arr d="M90 130 C130 112 170 112 210 128" label="heel → ball of foot" />
    <text x={14} y={214} style={lbl}>Along the medial longitudinal arch, above the sole.</text>
  </Frame>,
  <Frame key="a3" title="3 · Heel + MTP anchors">
    <ArchFoot />
    <path d="M70 148 C110 128 160 122 210 138" fill="none" stroke={DONE} strokeWidth={9} />
    <path d="M58 130 C52 148 58 166 72 168" fill="none" stroke={TAPE} strokeWidth={8} strokeLinecap="round" />
    <path d="M210 120 C222 130 226 150 214 162" fill="none" stroke={TAPE} strokeWidth={8} strokeLinecap="round" />
    <Arr d="M48 140 C36 150 34 166 44 178" label="heel lock" x={14} y={120} />
    <Arr d="M230 130 C242 140 244 158 234 170" label="MTP lock" x={200} y={190} />
    <text x={14} y={214} style={lbl}>Vertical anchors secure both ends of the strip.</text>
  </Frame>,
  <Frame key="a4" title="4 · Smooth & toes">
    <ArchFoot />
    <path d="M70 148 C110 128 160 122 210 138" fill="none" stroke={TAPE} strokeWidth={10} />
    <path d="M58 130 C52 148 58 166 72 168" fill="none" stroke={TAPE} strokeWidth={8} />
    <path d="M210 120 C222 130 226 150 214 162" fill="none" stroke={TAPE} strokeWidth={8} />
    <Arr d="M160 100 C160 80 160 70 160 62" label="no wrinkles" />
    <text x={14} y={214} style={lbl}>Rub flat. Check toe colour / warmth.</text>
  </Frame>,
]

// ---- AC joint ----

function AcShoulder() {
  return (
    <g>
      <path d="M70 80 C110 50 160 48 200 70 C220 84 228 110 220 140 L200 190 C180 200 130 198 110 180 C90 160 78 130 76 110 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      <path d="M190 100 C220 110 238 140 232 170 C226 192 206 200 190 190 C176 180 172 150 178 128 Z" fill={SKIN} stroke={INK} strokeWidth={1.2} />
      <ellipse cx={188} cy={92} rx={10} ry={8} fill="#e8b890" opacity={0.55} />
    </g>
  )
}

export const AC_STEP_DIAGRAMS: ReactNode[] = [
  <Frame key="ac1" title="1 · Locate AC / prep">
    <AcShoulder />
    <ellipse cx={188} cy={92} rx={12} ry={10} fill="#f59e0b" opacity={0.3} stroke={ARROW} />
    <Arr d="M210 80 C228 74 240 82 246 96" label="AC joint" />
    <text x={14} y={214} style={lbl}>Mild sprain only — refer if deformity / severe pain.</text>
  </Frame>,
  <Frame key="ac2" title="2 · Neck / trap anchor">
    <AcShoulder />
    <rect x={130} y={70} width={40} height={12} rx={2} fill={TAPE} stroke={EDGE} />
    <Arr d="M120 70 C100 74 88 90 86 108" label="upper trap anchor" x={14} y={60} />
    <text x={14} y={214} style={lbl}>Short horizontal base near the base of the neck.</text>
  </Frame>,
  <Frame key="ac3" title="3 · Split / Y over AC">
    <AcShoulder />
    <rect x={130} y={70} width={40} height={10} rx={2} fill={DONE} stroke={EDGE} />
    <path d="M160 80 C180 78 200 90 210 120 C214 132 200 138 190 128" fill="none" stroke={TAPE} strokeWidth={8} strokeLinecap="round" />
    <path d="M160 82 C176 96 188 120 196 150 C200 162 186 166 178 154" fill="none" stroke={TAPE} strokeWidth={8} strokeLinecap="round" />
    <Arr d="M200 100 C214 110 220 128 214 146" label="tails cross on deltoid" />
    <text x={14} y={214} style={lbl}>Leave a small diamond of skin over the joint peak.</text>
  </Frame>,
  <Frame key="ac4" title="4 · Lock & refer flags">
    <AcShoulder />
    <rect x={130} y={70} width={40} height={12} rx={2} fill={TAPE} stroke={EDGE} />
    <path d="M160 80 C180 78 200 90 210 120" fill="none" stroke={TAPE} strokeWidth={8} />
    <path d="M160 82 C176 96 188 120 196 150" fill="none" stroke={TAPE} strokeWidth={8} />
    <Arr d="M220 160 C230 172 228 188 216 198" label="hand check" />
    <text x={14} y={214} style={lbl}>Temporary support only. Hand colour / sensation OK?</text>
  </Frame>,
]
