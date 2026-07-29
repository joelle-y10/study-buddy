/**
 * Thumb hyperextension / spica: denser Canadian athletic-therapy style
 * (anchors → X/pigtails → hoods → close), with blue pull-direction arrows.
 */

import type { ReactNode } from 'react'

const SKIN = '#f3c9a8'
const TAPE = '#f8fafc'
const TAPE_EDGE = '#94a3b8'
const INK = '#64748b'
const ARROW = '#2563eb'
const DONE = '#cbd5e1'

const lbl = { fill: INK, fontSize: 11, fontFamily: 'ui-sans-serif, system-ui' } as const
const lblB = { ...lbl, fontWeight: 700, fontSize: 12 } as const

/** Right hand, palm slightly toward viewer, thumb left (C position). */
function HandOutline() {
  return (
    <g>
      {/* forearm / wrist */}
      <path
        d="M168 28 C188 28 198 48 200 78 L198 118 C196 128 186 134 170 134 L148 132 C136 130 130 120 132 108 L138 70 C142 42 152 28 168 28 Z"
        fill={SKIN}
        stroke={INK}
        strokeWidth={1.2}
      />
      {/* palm */}
      <path
        d="M148 120 C130 128 118 150 122 172 C126 196 148 210 176 208 C204 206 222 188 220 164 C218 142 204 128 186 124 L168 122 Z"
        fill={SKIN}
        stroke={INK}
        strokeWidth={1.2}
      />
      {/* thumb */}
      <path
        d="M148 128 C120 118 92 122 78 140 C68 154 74 170 92 176 C108 182 126 172 138 156 C146 144 150 134 148 128 Z"
        fill={SKIN}
        stroke={INK}
        strokeWidth={1.2}
      />
      {/* fingers (simplified) */}
      <path d="M168 206 C166 230 170 248 176 252" fill="none" stroke={SKIN} strokeWidth={14} strokeLinecap="round" />
      <path d="M184 208 C186 232 192 250 198 254" fill="none" stroke={SKIN} strokeWidth={13} strokeLinecap="round" />
      <path d="M198 204 C204 226 212 244 218 248" fill="none" stroke={SKIN} strokeWidth={12} strokeLinecap="round" />
      <path d="M210 196 C218 216 226 230 232 234" fill="none" stroke={SKIN} strokeWidth={11} strokeLinecap="round" />
    </g>
  )
}

function Frame({ title, children }: { title: string; children: ReactNode }) {
  return (
    <svg viewBox="0 0 280 240" className="h-auto w-full max-w-sm" role="img" aria-label={title}>
      <defs>
        <marker id="thumbArrow" markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={ARROW} />
        </marker>
      </defs>
      <rect x={0} y={0} width={280} height={240} rx={12} fill="#ffffff" />
      <text x={14} y={22} style={lblB}>
        {title}
      </text>
      <g transform="translate(0, 6)">{children}</g>
    </svg>
  )
}

function Arrow({ d, label, lx, ly }: { d: string; label?: string; lx?: number; ly?: number }) {
  return (
    <g>
      <path d={d} fill="none" stroke={ARROW} strokeWidth={2.4} strokeLinecap="round" markerEnd="url(#thumbArrow)" />
      {label && lx != null && ly != null && (
        <text x={lx} y={ly} style={lblB} fill={ARROW}>
          {label}
        </text>
      )}
    </g>
  )
}

export function ThumbStepPrep() {
  return (
    <Frame title="1 · C position & prep">
      <HandOutline />
      <text x={14} y={48} style={lblB} fill={ARROW}>
        “hold a cup”
      </text>
      <Arrow d="M70 150 C60 160 58 174 68 182" />
      <text x={14} y={220} style={lbl}>
        Adherent on thumb, palm, wrist. No pro-wrap needed.
      </text>
    </Frame>
  )
}

export function ThumbStepAnchors() {
  return (
    <Frame title="2 · Anchors + web strip">
      <HandOutline />
      {/* wrist anchor */}
      <rect x={148} y={88} width={48} height={14} rx={2} fill={TAPE} stroke={TAPE_EDGE} />
      {/* thumb phalanx anchor */}
      <ellipse cx={108} cy={148} rx={16} ry={10} fill={TAPE} stroke={TAPE_EDGE} transform="rotate(-25 108 148)" />
      {/* web / spica starter */}
      <path
        d="M160 96 C140 110 118 128 108 148 C102 158 112 166 126 160 C142 152 158 138 168 120 C172 112 166 100 160 96"
        fill={TAPE}
        stroke={TAPE_EDGE}
        opacity={0.9}
      />
      <Arrow d="M190 84 C210 90 218 110 210 128" label="wrist" lx={214} ly={78} />
      <Arrow d="M90 130 C78 138 74 152 82 164" label="thumb" lx={14} ly={128} />
      <text x={14} y={220} style={lbl}>
        Crimping through the web space protects circulation.
      </text>
    </Frame>
  )
}

export function ThumbStepPigtails() {
  return (
    <Frame title="3 · X / pigtail strips">
      <HandOutline />
      <rect x={148} y={88} width={48} height={12} rx={2} fill={DONE} stroke={TAPE_EDGE} />
      <ellipse cx={108} cy={148} rx={16} ry={10} fill={DONE} stroke={TAPE_EDGE} transform="rotate(-25 108 148)" />
      {/* X over MCP */}
      <path d="M118 140 L168 100" fill="none" stroke={TAPE} strokeWidth={7} strokeLinecap="round" />
      <path d="M100 152 L172 112" fill="none" stroke={TAPE} strokeWidth={7} strokeLinecap="round" />
      <path d="M112 146 L164 104" fill="none" stroke={TAPE} strokeWidth={6} strokeLinecap="round" opacity={0.85} />
      <Arrow d="M124 136 L160 108" label="medial → wrist" lx={14} ly={48} />
      <Arrow d="M108 156 L164 118" label="lateral → wrist" lx={14} ly={68} />
      <text x={14} y={220} style={lbl}>
        Repeat the X ~3×, overlapping slightly each pass.
      </text>
    </Frame>
  )
}

export function ThumbStepHoods() {
  return (
    <Frame title="4 · Hood strips">
      <HandOutline />
      <rect x={148} y={88} width={48} height={12} rx={2} fill={DONE} stroke={TAPE_EDGE} />
      <path d="M118 140 L168 100" fill="none" stroke={DONE} strokeWidth={6} />
      <path d="M100 152 L172 112" fill="none" stroke={DONE} strokeWidth={6} />
      {/* hoods fanning from dorsal wrist to palm */}
      <path d="M175 100 C150 118 130 140 128 158 C126 168 140 172 152 164" fill="none" stroke={TAPE} strokeWidth={8} strokeLinecap="round" />
      <path d="M180 104 C156 122 138 146 136 164 C134 174 148 176 160 168" fill="none" stroke={TAPE} strokeWidth={7} strokeLinecap="round" opacity={0.9} />
      <path d="M185 108 C162 126 146 150 146 168 C146 178 158 180 168 172" fill="none" stroke={TAPE} strokeWidth={6} strokeLinecap="round" opacity={0.85} />
      <Arrow d="M188 112 C168 128 152 148 148 164" label="dorsal wrist → palm" lx={14} ly={48} />
      <text x={14} y={220} style={lbl}>
        3–4 overlapping hoods, working toward the thumb.
      </text>
    </Frame>
  )
}

export function ThumbStepClose() {
  return (
    <Frame title="5 · Close & check">
      <HandOutline />
      {/* dense finished look */}
      <rect x={146} y={84} width={52} height={18} rx={2} fill={TAPE} stroke={TAPE_EDGE} />
      <ellipse cx={108} cy={148} rx={18} ry={11} fill={TAPE} stroke={TAPE_EDGE} transform="rotate(-25 108 148)" />
      <path d="M118 140 L168 100" fill="none" stroke={TAPE} strokeWidth={8} />
      <path d="M100 152 L172 112" fill="none" stroke={TAPE} strokeWidth={8} />
      <path d="M175 100 C150 118 130 140 128 158 C126 168 140 172 152 164" fill="none" stroke={TAPE} strokeWidth={9} />
      <path d="M180 104 C156 122 138 146 136 164" fill="none" stroke={TAPE} strokeWidth={8} />
      <path
        d="M160 96 C140 110 118 128 108 148 C102 158 112 166 126 160 C142 152 158 138 168 120"
        fill={TAPE}
        stroke={TAPE_EDGE}
        opacity={0.85}
      />
      <text x={14} y={48} style={lblB} fill={ARROW}>
        tip pink & warm?
      </text>
      <Arrow d="M70 150 C55 158 50 172 58 184" />
      <text x={14} y={220} style={lbl}>
        Re-anchor thumb + wrist. Recheck the C position.
      </text>
    </Frame>
  )
}

export const THUMB_STEP_DIAGRAMS: ReactNode[] = [
  <ThumbStepPrep key="prep" />,
  <ThumbStepAnchors key="anchors" />,
  <ThumbStepPigtails key="pigtails" />,
  <ThumbStepHoods key="hoods" />,
  <ThumbStepClose key="close" />,
]
