import { cn, type SpaceProps } from '@mochi-ui/core'

const sizeMap = { sm: 8, md: 12, lg: 16 }

export function Space({
  size = 'md',
  direction = 'horizontal',
  wrap = false,
  align = 'center',
  className,
  style,
  children,
}: SpaceProps) {
  const gap = typeof size === 'number' ? size : sizeMap[size]
  return (
    <div
      className={cn(
        'mochi-space',
        `mochi-space--${direction}`,
        wrap && 'mochi-space--wrap',
        className,
      )}
      style={{ gap, alignItems: align, ...style }}
    >
      {children}
    </div>
  )
}
