import { cn, type TagProps } from '@mochi-ui/core'

export function Tag({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  className,
  style,
  children,
}: TagProps) {
  return (
    <span
      className={cn(
        'mochi-tag',
        `mochi-tag--${variant}`,
        `mochi-tag--${color}`,
        `mochi-tag--${size}`,
        className,
      )}
      style={style}
    >
      {children}
    </span>
  )
}
