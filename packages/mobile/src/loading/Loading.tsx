import { cn, type LoadingProps } from '@nextouch-app/mochi-core'

/** Bouncing puff loader */
export function Loading({
  size = 'md',
  tip,
  spinning = true,
  className,
  style,
  children,
}: LoadingProps) {
  if (!spinning && children) return <>{children}</>

  return (
    <div
      className={cn('mochi-loading', `mochi-loading--${size}`, className)}
      style={style}
      role="status"
      aria-live="polite"
    >
      <div className="mochi-loading__puffs" aria-hidden>
        <span className="mochi-loading__puff mochi-loading__puff--sky">
          <i />
          <i />
        </span>
        <span className="mochi-loading__puff mochi-loading__puff--pink">
          <i />
          <i />
        </span>
        <span className="mochi-loading__puff mochi-loading__puff--mint">
          <i />
          <i />
        </span>
      </div>
      {tip ? <div className="mochi-loading__tip">{tip}</div> : null}
      {children}
    </div>
  )
}
