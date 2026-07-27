import logo from '../assets/logo.png'

/**
 * StudyBuddy mascot: a graduating beaver with a maple leaf at an open book —
 * proudly Canadian, permanently studying.
 */
export default function Logo({ size = 32, className = '' }: { size?: number; className?: string }) {
  return (
    <img
      src={logo}
      width={size}
      height={size}
      alt="StudyBuddy logo"
      className={`select-none rounded-[22%] ${className}`}
      draggable={false}
    />
  )
}
