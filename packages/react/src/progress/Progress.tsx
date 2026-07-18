import { cn, type ProgressProps } from '@mochi-ui/core'

export function Progress({
  percent = 0,
  status = 'normal',
  showInfo = true,
  className,
  style,
}: ProgressProps) {
  const p = Math.min(100, Math.max(0, percent))
  return (
    <div
      className={cn('mochi-progress', `mochi-progress--${status}`, className)}
      style={style}
      role="progressbar"
      aria-valuenow={p}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div className="mochi-progress__rail">
        <div className="mochi-progress__bar" style={{ width: `${p}%` }} />
      </div>
      {showInfo ? <span className="mochi-progress__info">{Math.round(p)}%</span> : null}
    </div>
  )
}
