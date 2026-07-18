import { cn, type SafeAreaProps } from '@mochi-ui/core'

export function SafeArea({ position = 'top', className, style, children }: SafeAreaProps) {
  return (
    <div
      className={cn('mochi-safe-area', `mochi-safe-area--${position}`, className)}
      style={style}
    >
      {children}
    </div>
  )
}
