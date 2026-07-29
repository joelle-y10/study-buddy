/**
 * Closed-basketweave ankle: side-view step diagrams with blue arrows
 * showing where each strip goes and which way to pull it.
 */

import type { ReactNode } from 'react'

const SKIN = '#f3c9a8'
const WRAP = '#e11d48'
const TAPE = '#f8fafc'
const TAPE_EDGE = '#94a3b8'
const INK = '#64748b'
const ARROW = '#2563eb'
const DONE = '#cbd5e1'

const lbl = { fill: INK, fontSize: 11, fontFamily: 'ui-sans-serif, system-ui' } as const
const lblB = { ...lbl, fontWeight: 700, fontSize: 12 } as const

/** Shared lateral foot silhouette (right foot, toes right, heel left). */
function FootOutline({ underwrap = false }: { underwrap?: boolean }) {
  return (
    <g>
      {/* lower leg */}
      <path
        d="M118 28 C128 28 136 40 138 78 L138 118 C136 128 128 134 118 134 C108 134 100 128 98 118 L98 78 C100 40 108 28 118 28 Z"
        fill={SKIN}
        stroke={INK}
        strokeWidth={1.2}
      />
      {/* foot */}
      <path
        d="M98 118 C70 122 52 138 48 158 C46 172 58 182 78 180 L210 168 C228 166 236 154 232 140 C228 124 210 118 188 120 L148 124 C140 124 132 122 124 118 Z"
        fill={SKIN}
        stroke={INK}
        strokeWidth={1.2}
      />
      {/* malleolus hint */}
      <ellipse cx={112} cy={128} rx={7} ry={9} fill="#e8b890" opacity={0.7} />
      {underwrap && (
        <path
          d="M102 55 C112 52 128 52 134 58 L136 118 C134 128 126 134 118 134 C108 134 100 128 100 118 Z
             M100 118 C74 122 56 136 52 154 C50 164 58 172 72 172 L188 162 C200 160 208 152 206 144 C204 134 192 128 176 130 L140 132 C128 130 112 124 102 118 Z"
          fill={WRAP}
          opacity={0.55}
        />
      )}
    </g>
  )
}

function ArrowPath({
  d,
  label,
  labelAt,
}: {
  d: string
  label?: string
  labelAt?: { x: number; y: number }
}) {
  return (
    <g>
      <path
        d={d}
        fill="none"
        stroke={ARROW}
        strokeWidth={2.4}
        strokeLinecap="round"
        markerEnd="url(#arrowHead)"
      />
      {label && labelAt && (
        <text x={labelAt.x} y={labelAt.y} style={lblB} fill={ARROW}>
          {label}
        </text>
      )}
    </g>
  )
}

function Frame({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <svg viewBox="0 0 280 220" className="h-auto w-full max-w-sm" role="img" aria-label={title}>
      <defs>
        <marker id="arrowHead" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={ARROW} />
        </marker>
      </defs>
      <rect x={0} y={0} width={280} height={220} rx={12} fill="#ffffff" />
      <text x={14} y={22} style={lblB}>
        {title}
      </text>
      <g transform="translate(8, 8)">{children}</g>
    </svg>
  )
}

/** Step 1 — hold 90° + underwrap / pads */
export function AnkleStepPrep() {
  return (
    <Frame title="1 · Position & prep">
      <FootOutline underwrap />
      {/* 90° cue */}
      <path d="M138 150 L168 150 L168 120" fill="none" stroke={ARROW} strokeWidth={1.8} strokeDasharray="3 2" />
      <text x={172} y={138} style={lblB} fill={ARROW}>
        90°
      </text>
      <text x={14} y={200} style={lbl}>
        Keep toes up. Underwrap + heel/lace pads.
      </text>
    </Frame>
  )
}

/** Step 2 — proximal + distal anchors */
export function AnkleStepAnchors() {
  return (
    <Frame title="2 · Anchors">
      <FootOutline underwrap />
      {/* proximal anchor */}
      <rect x={100} y={62} width={36} height={12} rx={2} fill={TAPE} stroke={TAPE_EDGE} strokeWidth={1.2} />
      <ArrowPath d="M96 68 C88 68 82 72 78 78" label="calf anchor" labelAt={{ x: 14, y: 72 }} />
      {/* distal / midfoot anchor */}
      <path
        d="M150 138 C170 136 196 138 210 148 C214 152 210 158 198 160 L160 164 C148 164 140 158 138 150 Z"
        fill={TAPE}
        stroke={TAPE_EDGE}
        strokeWidth={1.2}
      />
      <ArrowPath d="M220 142 C228 148 230 158 224 166" label="midfoot" labelAt={{ x: 214, y: 180 }} />
      <text x={14} y={200} style={lbl}>
        Circumferential strips — not too tight.
      </text>
    </Frame>
  )
}

/** Step 3 — stirrup medial → under heel → lateral */
export function AnkleStepStirrup() {
  return (
    <Frame title="3 · Stirrup">
      <FootOutline underwrap />
      <rect x={100} y={62} width={36} height={10} rx={2} fill={DONE} stroke={TAPE_EDGE} />
      <path
        d="M150 138 C170 136 196 138 208 146 C210 150 206 154 196 156 L160 158 C150 158 144 152 144 146 Z"
        fill={DONE}
        stroke={TAPE_EDGE}
      />
      {/* stirrup path along lateral → under heel → up (shown from outside) */}
      <path
        d="M108 72 L108 128 C108 148 88 162 72 168 C64 172 58 166 62 158 C72 140 86 128 98 118 L104 78"
        fill="none"
        stroke={TAPE}
        strokeWidth={10}
        strokeLinecap="round"
        opacity={0.95}
      />
      <path
        d="M108 72 L108 128 C108 148 88 162 72 168"
        fill="none"
        stroke={TAPE_EDGE}
        strokeWidth={1}
      />
      <ArrowPath
        d="M120 88 L120 130 C118 148 100 160 84 166"
        label="medial → under heel → lateral"
        labelAt={{ x: 14, y: 48 }}
      />
      <text x={14} y={200} style={lbl}>
        Pull against inversion. Overlap half on repeats.
      </text>
    </Frame>
  )
}

/** Step 4 — horseshoe weave */
export function AnkleStepHorseshoe() {
  return (
    <Frame title="4 · Horseshoe">
      <FootOutline underwrap />
      <rect x={100} y={62} width={36} height={10} rx={2} fill={DONE} stroke={TAPE_EDGE} />
      {/* prior stirrups faded */}
      <path
        d="M108 72 L108 128 C108 148 88 162 72 168"
        fill="none"
        stroke={DONE}
        strokeWidth={8}
        strokeLinecap="round"
      />
      {/* horseshoe U around heel */}
      <path
        d="M148 132 C168 128 188 132 198 148 C204 160 192 172 170 174 C148 176 128 168 118 154 C112 144 124 134 148 132"
        fill={TAPE}
        stroke={TAPE_EDGE}
        strokeWidth={1.2}
        opacity={0.95}
      />
      <ArrowPath
        d="M156 140 C172 136 188 142 194 154"
        label="front → around heel"
        labelAt={{ x: 14, y: 48 }}
      />
      <text x={14} y={200} style={lbl}>
        Weave with stirrups (basketweave pattern).
      </text>
    </Frame>
  )
}

/** Step 5 — heel lock with pull direction (matches classroom arrow style) */
export function AnkleStepHeelLock() {
  return (
    <Frame title="5 · Heel lock">
      <FootOutline underwrap />
      <rect x={100} y={62} width={36} height={10} rx={2} fill={DONE} stroke={TAPE_EDGE} />
      <path
        d="M150 138 C170 136 196 138 208 146 C210 150 206 154 196 156 L160 158 C150 158 144 152 144 146 Z"
        fill={DONE}
        stroke={TAPE_EDGE}
      />
      {/* woven body */}
      <path
        d="M108 78 L108 128 C108 148 90 160 76 166"
        fill="none"
        stroke={DONE}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <path
        d="M140 130 C165 126 190 134 198 150 C202 160 188 170 168 172 C148 174 128 166 120 152"
        fill={DONE}
        stroke={TAPE_EDGE}
        opacity={0.85}
      />
      {/* active heel-lock strip on lateral side */}
      <path
        d="M124 90 C118 118 108 140 92 158 C86 166 96 172 110 168 C130 160 148 148 158 132 C162 124 154 118 144 122"
        fill="none"
        stroke={TAPE}
        strokeWidth={9}
        strokeLinecap="round"
      />
      <path
        d="M124 90 C118 118 108 140 92 158 C86 166 96 172 110 168"
        fill="none"
        stroke={ARROW}
        strokeWidth={2.4}
        strokeLinecap="round"
        markerEnd="url(#arrowHead)"
      />
      <text x={14} y={48} style={lblB} fill={ARROW}>
        pull toward / around heel
      </text>
      <text x={14} y={200} style={lbl}>
        Figure-6 / half figure-8, then lock each side.
      </text>
    </Frame>
  )
}

/** Step 6 — close + circulation check */
export function AnkleStepClose() {
  return (
    <Frame title="6 · Close & check">
      <FootOutline underwrap />
      {/* finished basketweave look */}
      <rect x={100} y={58} width={36} height={14} rx={2} fill={TAPE} stroke={TAPE_EDGE} />
      <path
        d="M104 70 L106 128 C106 150 88 164 74 170"
        fill="none"
        stroke={TAPE}
        strokeWidth={11}
        strokeLinecap="round"
      />
      <path
        d="M112 72 L114 130 C114 148 100 160 88 166"
        fill="none"
        stroke={TAPE}
        strokeWidth={9}
        strokeLinecap="round"
        opacity={0.9}
      />
      <path
        d="M138 128 C168 122 198 132 206 150 C210 162 192 174 168 176 C144 178 122 168 114 152 C110 142 122 132 138 128"
        fill={TAPE}
        stroke={TAPE_EDGE}
      />
      <path
        d="M148 136 C172 132 198 140 208 152 C212 160 200 166 184 164 L156 160"
        fill={TAPE}
        stroke={TAPE_EDGE}
      />
      <text x={200} y={100} style={lblB} fill={ARROW}>
        toes pink?
      </text>
      <ArrowPath d="M196 108 L220 150" />
      <text x={14} y={200} style={lbl}>
        Lock loose ends. Check colour, warmth, sensation.
      </text>
    </Frame>
  )
}

export const ANKLE_STEP_DIAGRAMS: ReactNode[] = [
  <AnkleStepPrep key="prep" />,
  <AnkleStepAnchors key="anchors" />,
  <AnkleStepStirrup key="stirrup" />,
  <AnkleStepHorseshoe key="horseshoe" />,
  <AnkleStepHeelLock key="heel-lock" />,
  <AnkleStepClose key="close" />,
]

/** Optional classroom photos shown under a step (same index as steps). */
export const ANKLE_STEP_PHOTOS: Array<{ src: string; alt: string; credit: string } | null> = [
  null,
  null,
  null,
  null,
  {
    src: 'images/taping/ankle-heel-lock-direction.png',
    alt: 'Heel lock strip on a taped ankle with blue arrows showing pull direction toward the heel',
    credit: 'Classroom demo — arrows show pull direction on the heel-lock strip',
  },
  null,
]
