/**
 * StudyBuddy diagram engine: hand-coded SVG visuals that stay mathematically
 * and scientifically accurate (unlike AI-generated images) and render crisply
 * in light and dark mode. Neutral mid-tone strokes read on both themes.
 */

const INK = '#94a3b8' // axes / outlines
const INK_SOFT = '#cbd5e1' // grid
const TEXT = '#64748b'
const BLUE = '#3b82f6'
const VIOLET = '#8b5cf6'
const EMERALD = '#10b981'
const AMBER = '#f59e0b'
const ROSE = '#f43f5e'
const CYAN = '#06b6d4'

const lbl = { fill: TEXT, fontSize: 11, fontFamily: 'ui-sans-serif, system-ui' } as const
const lblB = { ...lbl, fontWeight: 700 } as const
// white outline behind text so labels stay readable over curves
const halo = { paintOrder: 'stroke', stroke: '#ffffff', strokeWidth: 3.5 } as const

// ---------------------------------------------------------------- graphs

interface FnSpec {
  f: (x: number) => number
  color?: string
  label?: string
}
interface PointSpec {
  x: number
  y: number
  label?: string
  color?: string
}

export function FunctionGraph({
  xMin = -5, xMax = 5, yMin = -5, yMax = 5,
  fns = [], points = [],
  shade,
  xLabel = 'x', yLabel = 'y',
}: {
  xMin?: number; xMax?: number; yMin?: number; yMax?: number
  fns?: FnSpec[]
  points?: PointSpec[]
  /** shade the region between f and the x-axis on [from, to] */
  shade?: { f: (x: number) => number; from: number; to: number; color?: string }
  xLabel?: string; yLabel?: string
}) {
  const W = 340; const H = 260; const P = 30
  const sx = (x: number) => P + ((x - xMin) / (xMax - xMin)) * (W - 2 * P)
  const sy = (y: number) => H - P - ((y - yMin) / (yMax - yMin)) * (H - 2 * P)

  const gridLines = []
  for (let gx = Math.ceil(xMin); gx <= Math.floor(xMax); gx++) {
    gridLines.push(<line key={`gx${gx}`} x1={sx(gx)} y1={sy(yMin)} x2={sx(gx)} y2={sy(yMax)} stroke={INK_SOFT} strokeWidth={gx === 0 ? 0 : 0.5} opacity={0.5} />)
  }
  for (let gy = Math.ceil(yMin); gy <= Math.floor(yMax); gy++) {
    gridLines.push(<line key={`gy${gy}`} x1={sx(xMin)} y1={sy(gy)} x2={sx(xMax)} y2={sy(gy)} stroke={INK_SOFT} strokeWidth={gy === 0 ? 0 : 0.5} opacity={0.5} />)
  }

  const paths = fns.map((spec, i) => {
    const segs: string[] = []
    let cur = ''
    const n = 240
    for (let k = 0; k <= n; k++) {
      const x = xMin + ((xMax - xMin) * k) / n
      const y = spec.f(x)
      // break the path (instead of clamping) once the curve leaves the plot area
      if (!Number.isFinite(y) || y < yMin || y > yMax) {
        if (cur) segs.push(cur)
        cur = ''
        continue
      }
      cur += `${cur ? 'L' : 'M'}${sx(x).toFixed(1)},${sy(y).toFixed(1)}`
    }
    if (cur) segs.push(cur)
    return <path key={i} d={segs.join(' ')} fill="none" stroke={spec.color ?? BLUE} strokeWidth={2.2} />
  })

  let shadePath: string | null = null
  if (shade) {
    const n = 100
    let d = `M${sx(shade.from).toFixed(1)},${sy(0).toFixed(1)}`
    for (let k = 0; k <= n; k++) {
      const x = shade.from + ((shade.to - shade.from) * k) / n
      d += `L${sx(x).toFixed(1)},${sy(shade.f(x)).toFixed(1)}`
    }
    d += `L${sx(shade.to).toFixed(1)},${sy(0).toFixed(1)} Z`
    shadePath = d
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full max-w-md" role="img">
      {gridLines}
      {shadePath && <path d={shadePath} fill={(shade?.color ?? EMERALD)} opacity={0.25} />}
      {/* axes with arrowheads */}
      {yMin <= 0 && yMax >= 0 && (
        <g>
          <line x1={sx(xMin)} y1={sy(0)} x2={sx(xMax)} y2={sy(0)} stroke={INK} strokeWidth={1.4} />
          <polygon points={`${sx(xMax) + 7},${sy(0)} ${sx(xMax) - 1},${sy(0) - 4} ${sx(xMax) - 1},${sy(0) + 4}`} fill={INK} />
        </g>
      )}
      {xMin <= 0 && xMax >= 0 && (
        <g>
          <line x1={sx(0)} y1={sy(yMin)} x2={sx(0)} y2={sy(yMax)} stroke={INK} strokeWidth={1.4} />
          <polygon points={`${sx(0)},${sy(yMax) - 7} ${sx(0) - 4},${sy(yMax) + 1} ${sx(0) + 4},${sy(yMax) + 1}`} fill={INK} />
        </g>
      )}
      {/* integer tick numbers, thinned on wide ranges */}
      {yMin <= 0 && yMax >= 0 && xMin <= 0 && xMax >= 0 && (() => {
        const xStep = xMax - xMin > 12 ? 2 : 1
        const yStep = yMax - yMin > 12 ? 2 : 1
        const ticks = []
        for (let gx = Math.ceil(xMin); gx <= Math.floor(xMax); gx += xStep) {
          if (gx === 0) continue
          ticks.push(<text key={`tx${gx}`} x={sx(gx)} y={sy(0) + 13} textAnchor="middle" style={{ ...lbl, fontSize: 8.5, ...halo }}>{gx}</text>)
        }
        for (let gy = Math.ceil(yMin); gy <= Math.floor(yMax); gy += yStep) {
          if (gy === 0) continue
          ticks.push(<text key={`ty${gy}`} x={sx(0) - 5} y={sy(gy) + 3} textAnchor="end" style={{ ...lbl, fontSize: 8.5, ...halo }}>{gy}</text>)
        }
        return ticks
      })()}
      <text x={sx(xMax) - 4} y={sy(0) - 7} textAnchor="end" style={lblB}>{xLabel}</text>
      <text x={sx(0) + 7} y={sy(yMax) + 12} style={lblB}>{yLabel}</text>
      {paths}
      {points.map((p, i) => (
        <g key={i}>
          <circle cx={sx(p.x)} cy={sy(p.y)} r={4} fill={p.color ?? ROSE} />
          {p.label && <text x={sx(p.x) + 7} y={sy(p.y) - 7} style={{ ...lblB, ...halo }}>{p.label}</text>}
        </g>
      ))}
      {fns.filter((f) => f.label).map((f, i) => (
        <text key={i} x={W - P} y={P + 14 * i} textAnchor="end" style={{ ...lblB, ...halo, fill: f.color ?? BLUE }}>{f.label}</text>
      ))}
    </svg>
  )
}

// ---------------------------------------------------------------- trig

export function RightTriangle() {
  return (
    <svg viewBox="0 0 340 230" className="w-full max-w-md" role="img">
      <polygon points="40,190 300,190 300,40" fill={BLUE} opacity={0.08} />
      <polygon points="40,190 300,190 300,40" fill="none" stroke={INK} strokeWidth={2} />
      {/* right angle marker */}
      <path d="M282 190 L282 172 L300 172" fill="none" stroke={INK} strokeWidth={1.5} />
      {/* angle theta arc */}
      <path d="M78 190 A38 38 0 0 0 71 172" fill="none" stroke={ROSE} strokeWidth={2} />
      <text x={92} y={181} style={{ ...lblB, fill: ROSE, fontSize: 14 }}>θ</text>
      <text x={170} y={210} textAnchor="middle" style={{ ...lblB, fill: EMERALD }}>adjacent</text>
      <text x={318} y={120} textAnchor="middle" style={{ ...lblB, fill: AMBER }} transform="rotate(90 318 120)">opposite</text>
      <text x={150} y={100} textAnchor="middle" style={{ ...lblB, fill: VIOLET }} transform="rotate(-30.3 160 105)">hypotenuse</text>
      <text x={170} y={30} textAnchor="middle" style={lbl}>SOH · CAH · TOA — sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj</text>
    </svg>
  )
}

// ---------------------------------------------------------------- motion graphs

function MiniGraph({ x0, title, poly, flat }: { x0: number; title: string; poly: string; flat?: boolean }) {
  return (
    <g transform={`translate(${x0},0)`}>
      <text x={50} y={12} textAnchor="middle" style={lblB}>{title}</text>
      <line x1={10} y1={95} x2={95} y2={95} stroke={INK} strokeWidth={1.2} />
      <line x1={10} y1={95} x2={10} y2={20} stroke={INK} strokeWidth={1.2} />
      <text x={96} y={106} textAnchor="end" style={lbl}>t</text>
      {flat === undefined
        ? <path d={poly} fill="none" stroke={BLUE} strokeWidth={2.2} />
        : <line x1={12} y1={flat ? 60 : 95} x2={92} y2={flat ? 60 : 95} stroke={BLUE} strokeWidth={2.2} />}
    </g>
  )
}

/** d–t, v–t, a–t graphs for constant velocity or uniform acceleration. */
export function MotionGraphs({ kind }: { kind: 'const-v' | 'uniform-a' }) {
  return (
    <svg viewBox="0 0 340 115" className="w-full max-w-md" role="img">
      {kind === 'const-v' ? (
        <>
          <MiniGraph x0={10} title="d–t" poly="M12,93 L90,30" />
          <MiniGraph x0={120} title="v–t" flat poly="" />
          <MiniGraph x0={230} title="a–t" flat={false} poly="" />
        </>
      ) : (
        <>
          <MiniGraph x0={10} title="d–t" poly="M12,93 Q55,90 90,28" />
          <MiniGraph x0={120} title="v–t" poly="M12,93 L90,30" />
          <MiniGraph x0={230} title="a–t" flat poly="" />
        </>
      )}
    </svg>
  )
}

// ---------------------------------------------------------------- projectile scene

export function ProjectileScene() {
  return (
    <svg viewBox="0 0 340 240" className="w-full max-w-md" role="img">
      {/* ground */}
      <line x1={10} y1={215} x2={330} y2={215} stroke={INK} strokeWidth={2} />
      {/* building */}
      <rect x={30} y={65} width={70} height={150} fill={INK_SOFT} opacity={0.5} stroke={INK} />
      {[85, 110, 135, 160, 185].map((y) => (
        <g key={y}>
          <rect x={42} y={y} width={14} height={12} fill={CYAN} opacity={0.5} />
          <rect x={72} y={y} width={14} height={12} fill={CYAN} opacity={0.5} />
        </g>
      ))}
      {/* height dimension */}
      <line x1={112} y1={65} x2={112} y2={215} stroke={ROSE} strokeWidth={1.4} strokeDasharray="4 3" />
      <text x={120} y={145} style={{ ...lblB, fill: ROSE }}>h = 45 m</text>
      {/* thrower */}
      <circle cx={62} cy={48} r={6} fill={TEXT} />
      <path d="M62 54 L62 65 M62 57 L52 62 M62 57 L74 52 M62 65 L55 74 M62 65 L69 74" stroke={TEXT} strokeWidth={2.5} fill="none" strokeLinecap="round" />
      {/* initial velocity arrow */}
      <line x1={78} y1={50} x2={120} y2={38} stroke={EMERALD} strokeWidth={2.4} />
      <polygon points="120,38 110,37 114,46" fill={EMERALD} />
      <text x={126} y={36} style={{ ...lblB, fill: EMERALD }}>v₀ = 12 m/s</text>
      {/* trajectory */}
      <path d="M78 48 Q180 10 260 215" fill="none" stroke={BLUE} strokeWidth={2.2} strokeDasharray="6 4" />
      <circle cx={260} cy={215} r={5} fill={BLUE} />
      <text x={252} y={232} style={{ ...lblB, fill: BLUE }}>range?</text>
      <text x={170} y={18} textAnchor="middle" style={lbl}>Draw the picture first: height, v₀, and what the question asks for</text>
    </svg>
  )
}

// ---------------------------------------------------------------- chemistry

function Atom({ x, y, r = 20, label, color }: { x: number; y: number; r?: number; label: string; color: string }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r} fill={color} opacity={0.2} stroke={color} strokeWidth={2} />
      <text x={x} y={y + 5} textAnchor="middle" style={{ ...lblB, fill: color, fontSize: 14 }}>{label}</text>
    </g>
  )
}

export function Molecule({ kind }: { kind: 'H2O' | 'CO2' | 'CH4' | 'NaCl' }) {
  if (kind === 'H2O') {
    return (
      <svg viewBox="0 0 340 170" className="w-full max-w-md" role="img">
        <line x1={170} y1={70} x2={110} y2={120} stroke={INK} strokeWidth={3} />
        <line x1={170} y1={70} x2={230} y2={120} stroke={INK} strokeWidth={3} />
        <Atom x={170} y={70} r={24} label="O" color={ROSE} />
        <Atom x={110} y={120} r={16} label="H" color={BLUE} />
        <Atom x={230} y={120} r={16} label="H" color={BLUE} />
        {/* lone pairs */}
        <circle cx={158} cy={44} r={3} fill={TEXT} /><circle cx={168} cy={40} r={3} fill={TEXT} />
        <circle cx={176} cy={40} r={3} fill={TEXT} /><circle cx={186} cy={44} r={3} fill={TEXT} />
        <text x={170} y={160} textAnchor="middle" style={lbl}>Bent shape, ~104.5° — lone pairs make water polar</text>
      </svg>
    )
  }
  if (kind === 'CO2') {
    return (
      <svg viewBox="0 0 340 130" className="w-full max-w-md" role="img">
        <line x1={100} y1={54} x2={160} y2={54} stroke={INK} strokeWidth={3} />
        <line x1={100} y1={62} x2={160} y2={62} stroke={INK} strokeWidth={3} />
        <line x1={180} y1={54} x2={240} y2={54} stroke={INK} strokeWidth={3} />
        <line x1={180} y1={62} x2={240} y2={62} stroke={INK} strokeWidth={3} />
        <Atom x={170} y={58} r={22} label="C" color={TEXT} />
        <Atom x={85} y={58} r={20} label="O" color={ROSE} />
        <Atom x={255} y={58} r={20} label="O" color={ROSE} />
        <text x={170} y={118} textAnchor="middle" style={lbl}>Linear, 180° — symmetric, so nonpolar overall</text>
      </svg>
    )
  }
  if (kind === 'CH4') {
    return (
      <svg viewBox="0 0 340 190" className="w-full max-w-md" role="img">
        {[[170, 40], [100, 120], [240, 120], [170, 150]].map(([x, y], i) => (
          <line key={i} x1={170} y1={95} x2={x} y2={y} stroke={INK} strokeWidth={3} />
        ))}
        <Atom x={170} y={95} r={22} label="C" color={TEXT} />
        <Atom x={170} y={40} r={15} label="H" color={BLUE} />
        <Atom x={100} y={120} r={15} label="H" color={BLUE} />
        <Atom x={240} y={120} r={15} label="H" color={BLUE} />
        <Atom x={170} y={150} r={15} label="H" color={BLUE} />
        <text x={170} y={182} textAnchor="middle" style={lbl}>Tetrahedral, 109.5° bond angles (drawn flat here)</text>
      </svg>
    )
  }
  // NaCl ionic
  return (
    <svg viewBox="0 0 340 160" className="w-full max-w-md" role="img">
      <Atom x={100} y={70} r={26} label="Na⁺" color={VIOLET} />
      <Atom x={240} y={70} r={22} label="Cl⁻" color={EMERALD} />
      {/* electron transfer arrow */}
      <path d="M120 34 Q170 8 218 40" fill="none" stroke={AMBER} strokeWidth={2.2} strokeDasharray="5 4" />
      <polygon points="218,40 208,34 210,45" fill={AMBER} />
      <circle cx={120} cy={34} r={4} fill={AMBER} />
      <text x={170} y={22} textAnchor="middle" style={{ ...lblB, fill: AMBER }}>e⁻ transferred</text>
      <text x={170} y={120} textAnchor="middle" style={lbl}>Na gives its electron to Cl; the + and − ions attract.</text>
      <text x={170} y={136} textAnchor="middle" style={lbl}>Covalent bonds SHARE electrons instead.</text>
    </svg>
  )
}

// ---------------------------------------------------------------- image figure

/** A raster/vector figure loaded from /public/images (openly-licensed sources). */
export function Figure({ src, alt, maxW = 'max-w-md' }: { src: string; alt: string; maxW?: string }) {
  // optional chaining keeps this renderable outside Vite (e.g. the dev render script)
  const base = import.meta.env?.BASE_URL ?? '/'
  return (
    <img
      src={`${base}${src}`}
      alt={alt}
      loading="lazy"
      className={`h-auto w-full ${maxW}`}
    />
  )
}

// ---------------------------------------------------------------- sports med

export function AnatomicalPosition() {
  return (
    <svg viewBox="0 0 340 260" className="w-full max-w-md" role="img">
      {/* figure: standing, palms forward */}
      <circle cx={170} cy={40} r={16} fill={INK_SOFT} stroke={INK} strokeWidth={1.5} />
      <line x1={170} y1={56} x2={170} y2={140} stroke={INK} strokeWidth={5} strokeLinecap="round" />
      <line x1={170} y1={72} x2={130} y2={130} stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <line x1={170} y1={72} x2={210} y2={130} stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <line x1={170} y1={140} x2={150} y2={215} stroke={INK} strokeWidth={4} strokeLinecap="round" />
      <line x1={170} y1={140} x2={190} y2={215} stroke={INK} strokeWidth={4} strokeLinecap="round" />
      {/* superior / inferior */}
      <line x1={45} y1={30} x2={45} y2={220} stroke={TEXT} strokeWidth={1.2} />
      <polygon points="45,24 40,34 50,34" fill={TEXT} />
      <polygon points="45,226 40,216 50,216" fill={TEXT} />
      <text x={24} y={22} style={lblB}>superior</text>
      <text x={24} y={242} style={lblB}>inferior</text>
      {/* midline + medial/lateral */}
      <line x1={170} y1={20} x2={170} y2={235} stroke={ROSE} strokeWidth={1.2} strokeDasharray="5 4" />
      <text x={170} y={252} textAnchor="middle" style={{ ...lblB, fill: ROSE }}>midline (medial = toward it, lateral = away)</text>
      {/* proximal / distal on arm */}
      <text x={196} y={88} style={{ ...lblB, fill: EMERALD }}>proximal</text>
      <text x={214} y={146} style={{ ...lblB, fill: EMERALD }}>distal</text>
      {/* anterior label */}
      <text x={240} y={40} style={lblB}>anterior = front</text>
      <text x={240} y={56} style={lblB}>posterior = back</text>
      <text x={240} y={80} style={lbl}>Anatomical position:</text>
      <text x={240} y={94} style={lbl}>standing, facing you,</text>
      <text x={240} y={108} style={lbl}>palms forward</text>
    </svg>
  )
}

// ---------------------------------------------------------------- cs / web

export function BoxModel() {
  return (
    <svg viewBox="0 0 340 220" className="w-full max-w-md" role="img">
      <rect x={20} y={20} width={300} height={180} fill={AMBER} opacity={0.18} stroke={AMBER} strokeDasharray="5 4" />
      <rect x={55} y={50} width={230} height={120} fill={VIOLET} opacity={0.2} stroke={VIOLET} strokeWidth={2} />
      <rect x={80} y={72} width={180} height={76} fill={EMERALD} opacity={0.2} stroke={EMERALD} strokeDasharray="5 4" />
      <rect x={105} y={92} width={130} height={36} fill={BLUE} opacity={0.25} stroke={BLUE} />
      <text x={170} y={114} textAnchor="middle" style={{ ...lblB, fill: BLUE }}>content</text>
      <text x={170} y={86} textAnchor="middle" style={{ ...lblB, fill: EMERALD }}>padding</text>
      <text x={170} y={64} textAnchor="middle" style={{ ...lblB, fill: VIOLET }}>border</text>
      <text x={170} y={38} textAnchor="middle" style={{ ...lblB, fill: AMBER }}>margin</text>
      <text x={170} y={214} textAnchor="middle" style={lbl}>Every element is a box inside these four layers</text>
    </svg>
  )
}

// ---------------------------------------------------------------- ela / social / bio

export function PlotArc() {
  return (
    <svg viewBox="0 0 340 200" className="w-full max-w-md" role="img">
      <line x1={20} y1={170} x2={320} y2={170} stroke={INK} strokeWidth={1.5} />
      <path d="M30 165 L90 160 L200 40 L250 100 L310 130" fill="none" stroke={VIOLET} strokeWidth={2.5} />
      <circle cx={200} cy={40} r={5} fill={ROSE} />
      <text x={45} y={185} style={lblB}>exposition</text>
      <text x={110} y={110} style={{ ...lblB, fill: VIOLET }} transform="rotate(-45 120 110)">rising action</text>
      <text x={200} y={26} textAnchor="middle" style={{ ...lblB, fill: ROSE }}>climax</text>
      <text x={232} y={78} style={{ ...lblB, fill: VIOLET }} transform="rotate(48 240 80)">falling</text>
      <text x={272} y={152} style={lblB}>resolution</text>
    </svg>
  )
}

export function PoliticalSpectrum() {
  return (
    <svg viewBox="0 0 340 150" className="w-full max-w-md" role="img">
      <defs>
        <linearGradient id="spec" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={ROSE} /><stop offset="50%" stopColor={VIOLET} /><stop offset="100%" stopColor={BLUE} />
        </linearGradient>
      </defs>
      <rect x={20} y={60} width={300} height={14} rx={7} fill="url(#spec)" opacity={0.8} />
      <text x={20} y={48} style={lblB}>collectivism</text>
      <text x={320} y={48} textAnchor="end" style={lblB}>individualism</text>
      {/* labels staggered onto two rows so neighbours don't collide */}
      {[
        ['communism', 34, 0], ['socialism', 100, 1], ['liberalism', 170, 0], ['conservatism', 240, 1], ['libertarianism', 300, 0],
      ].map(([name, x, row]) => (
        <g key={name as string}>
          <line x1={x as number} y1={74} x2={x as number} y2={(row as number) === 0 ? 92 : 108} stroke={TEXT} strokeWidth={1.5} />
          <text x={x as number} y={(row as number) === 0 ? 104 : 120} textAnchor="middle" style={lbl}>{name}</text>
        </g>
      ))}
      <text x={170} y={142} textAnchor="middle" style={lbl}>How much should the state share vs. the individual keep?</text>
    </svg>
  )
}

export function EnergyPyramid() {
  const levels = [
    { name: 'tertiary consumers · 0.1%', w: 70, color: ROSE },
    { name: 'secondary consumers · 1%', w: 140, color: AMBER },
    { name: 'primary consumers · 10%', w: 210, color: EMERALD },
    { name: 'producers · 100%', w: 280, color: BLUE },
  ]
  return (
    <svg viewBox="0 0 340 200" className="w-full max-w-md" role="img">
      {levels.map((l, i) => (
        <g key={l.name}>
          <rect x={170 - l.w / 2} y={20 + i * 38} width={l.w} height={30} fill={l.color} opacity={0.3} stroke={l.color} strokeWidth={1.5} />
          <text x={170} y={39 + i * 38} textAnchor="middle" style={lblB}>{l.name}</text>
        </g>
      ))}
      <text x={170} y={188} textAnchor="middle" style={lbl}>~90% of energy is lost as heat at each level</text>
    </svg>
  )
}

export function CellDiagram() {
  return (
    <svg viewBox="0 0 340 220" className="w-full max-w-md" role="img">
      <ellipse cx={160} cy={105} rx={130} ry={85} fill={EMERALD} opacity={0.1} stroke={EMERALD} strokeWidth={2.5} />
      <text x={160} y={16} textAnchor="middle" style={{ ...lblB, fill: EMERALD }}>cell membrane</text>
      <circle cx={135} cy={95} r={34} fill={VIOLET} opacity={0.25} stroke={VIOLET} strokeWidth={2} />
      <circle cx={135} cy={95} r={10} fill={VIOLET} opacity={0.5} />
      <text x={135} y={95 + 52} textAnchor="middle" style={{ ...lblB, fill: VIOLET }}>nucleus (DNA)</text>
      <ellipse cx={225} cy={75} rx={28} ry={14} fill={ROSE} opacity={0.25} stroke={ROSE} strokeWidth={2} />
      <path d="M203 75 q6 -7 12 0 q6 7 12 0 q6 -7 12 0 q6 7 8 0" fill="none" stroke={ROSE} strokeWidth={1.4} />
      <text x={248} y={52} textAnchor="middle" style={{ ...lblB, fill: ROSE }}>mitochondrion</text>
      <ellipse cx={222} cy={135} rx={26} ry={13} fill={CYAN} opacity={0.25} stroke={CYAN} strokeWidth={2} />
      <line x1={204} y1={131} x2={240} y2={131} stroke={CYAN} strokeWidth={1.4} />
      <line x1={204} y1={138} x2={240} y2={138} stroke={CYAN} strokeWidth={1.4} />
      <text x={252} y={162} textAnchor="middle" style={{ ...lblB, fill: CYAN }}>chloroplast</text>
      <text x={160} y={210} textAnchor="middle" style={lbl}>Respiration: mitochondria · Photosynthesis: chloroplasts</text>
    </svg>
  )
}
