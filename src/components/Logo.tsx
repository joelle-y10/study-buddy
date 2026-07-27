/**
 * StudyBuddy mark: an open book with a maple leaf rising from it like an
 * idea-spark — studying that's proudly built on Canadian curricula.
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
      {/* maple leaf spark */}
      <path
        d="M32 8 L34.6 13.4 L39.5 11.6 L37.8 17 L43.5 16.4 L39.8 21.4 L45 23.6 L40.4 26.2 L42.2 30.6 L36.2 29.2 L36.2 34.5 L32 31.4 L27.8 34.5 L27.8 29.2 L21.8 30.6 L23.6 26.2 L19 23.6 L24.2 21.4 L20.5 16.4 L26.2 17 L24.5 11.6 L29.4 13.4 Z"
        fill="#fda4af"
      />
      <rect x="31" y="31" width="2" height="6" rx="1" fill="#fda4af" />
      {/* open book */}
      <path
        d="M10 41 C17 36.5 26.5 36.5 32 40.5 C37.5 36.5 47 36.5 54 41 L54 52 C47 47.5 37.5 47.5 32 51.5 C26.5 47.5 17 47.5 10 52 Z"
        fill="#ffffff"
      />
      <path d="M32 40.5 L32 51.5" stroke="#c7d2fe" strokeWidth="1.6" />
    </svg>
  )
}
