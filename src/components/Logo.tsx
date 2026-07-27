/**
 * StudyBuddy mark: a graduation cap on an indigo-violet tile.
 */
export default function Logo({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="StudyBuddy logo"
      className={className}
    >
      <defs>
        <linearGradient id="sb-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3564fb" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="16" fill="url(#sb-bg)" />
      {/* cap band (under the board) */}
      <path d="M22 32 L22 41 Q32 47.5 42 41 L42 32 Z" fill="#c7d2fe" />
      {/* mortarboard */}
      <path d="M32 15 L54 25.5 L32 36 L10 25.5 Z" fill="#ffffff" />
      {/* button */}
      <circle cx="32" cy="25.5" r="1.6" fill="#8b5cf6" />
      {/* tassel */}
      <path d="M32 25.5 Q46 27 49 31 L49 42" fill="none" stroke="#fbbf24" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="49" cy="44.5" r="3" fill="#fbbf24" />
    </svg>
  )
}
