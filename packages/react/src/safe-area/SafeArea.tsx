import { cn, type SafeAreaProps } from '@nextouch-app/mochi-core'

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
