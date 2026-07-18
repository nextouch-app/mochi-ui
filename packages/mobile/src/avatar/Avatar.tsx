import { cn, type AvatarProps } from '@nextouch-app/mochi-core'

export function Avatar({
  src,
  size = 'md',
  shape = 'circle',
  alt,
  className,
  style,
  children,
}: AvatarProps) {
  const sizeStyle =
    typeof size === 'number'
      ? { width: size, height: size, fontSize: size * 0.4 }
      : undefined

  return (
    <span
      className={cn(
        'mochi-avatar',
        typeof size === 'string' && `mochi-avatar--${size}`,
        `mochi-avatar--${shape}`,
        className,
      )}
      style={{ ...sizeStyle, ...style }}
    >
      {src ? <img src={src} alt={alt ?? ''} /> : children ?? '☁'}
    </span>
  )
}
