import type { Avatar as AvatarType } from '../types'

/** Renders the user's profile picture: emoji tile, colour tile with initial, or uploaded image. */
export default function Avatar({
  avatar,
  name,
  size = 40,
  className = '',
}: {
  avatar?: AvatarType
  name: string
  size?: number
  className?: string
}) {
  const initial = (name.trim()[0] ?? '?').toUpperCase()
  const base = `flex shrink-0 items-center justify-center overflow-hidden rounded-full font-display font-extrabold text-white select-none ${className}`
  const style = { width: size, height: size, fontSize: size * 0.45 }

  if (avatar?.kind === 'image') {
    return (
      <span className={base} style={style}>
        <img src={avatar.value} alt={`${name}'s profile`} className="h-full w-full object-cover" />
      </span>
    )
  }
  if (avatar?.kind === 'emoji') {
    return (
      <span className={`${base} bg-brand-500/15`} style={{ ...style, fontSize: size * 0.55 }} role="img" aria-label={`${name}'s profile`}>
        {avatar.value}
      </span>
    )
  }
  const bg = avatar?.kind === 'color' ? avatar.value : undefined
  return (
    <span
      className={`${base} ${bg ? '' : 'bg-gradient-to-br from-brand-500 to-violet-500'}`}
      style={{ ...style, ...(bg ? { backgroundColor: bg } : {}) }}
      aria-label={`${name}'s profile`}
    >
      {initial}
    </span>
  )
}

/** Centre-crop an uploaded photo and shrink it to a small data-URL for cheap cloud sync. */
export async function fileToAvatarDataUrl(file: File): Promise<string> {
  const bitmap = await createImageBitmap(file)
  const SIZE = 128
  const canvas = document.createElement('canvas')
  canvas.width = SIZE
  canvas.height = SIZE
  const ctx = canvas.getContext('2d')!
  const s = Math.min(bitmap.width, bitmap.height)
  ctx.drawImage(bitmap, (bitmap.width - s) / 2, (bitmap.height - s) / 2, s, s, 0, 0, SIZE, SIZE)
  bitmap.close()
  return canvas.toDataURL('image/jpeg', 0.85)
}
