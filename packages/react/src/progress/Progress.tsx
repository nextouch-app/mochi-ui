import { cn, type ProgressProps } from '@mochi-ui/core'
import './progress.css'

function resolveStatus(status: ProgressProps['status'], percent: number) {
  if (status === 'error' || status === 'exception') return 'exception'
  if (status === 'success' || percent >= 100) return 'success'
  if (status === 'active') return 'active'
  return 'normal'
}

export function Progress({
  percent = 0,
  status = 'normal',
  showInfo = true,
  type = 'line',
  strokeColor,
  trailColor,
  strokeWidth,
  size,
  format,
  className,
  style,
}: ProgressProps) {
  const p = Math.min(100, Math.max(0, percent))
  const finalStatus = resolveStatus(status, p)
  const info = format ? format(p) : `${Math.round(p)}%`

  if (type === 'circle' || type === 'dashboard') {
    const dim = typeof size === 'number' ? size : Array.isArray(size) ? size[0] : 120
    const sw = strokeWidth ?? 8
    const r = (dim - sw) / 2
    const c = 2 * Math.PI * r
    const isDash = type === 'dashboard'
    const gap = isDash ? 0.75 : 1
    const length = c * gap
    const offset = length - (p / 100) * length
    const color =
      strokeColor ??
      (finalStatus === 'success' ? '#4caf50' : finalStatus === 'exception' ? '#e85d75' : '#6cb4ee')

    return (
      <div
        className={cn(
          'mochi-progress',
          'mochi-progress--circle',
          `mochi-progress--${finalStatus}`,
          className,
        )}
        style={{ width: dim, height: dim, ...style }}
        role="progressbar"
        aria-valuenow={p}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <svg width={dim} height={dim} viewBox={`0 0 ${dim} ${dim}`}>
          <circle
            className="mochi-progress__trail"
            cx={dim / 2}
            cy={dim / 2}
            r={r}
            strokeWidth={sw}
            stroke={trailColor ?? '#f7f3df'}
            fill="none"
            strokeDasharray={isDash ? `${length} ${c}` : undefined}
            strokeLinecap="round"
            transform={`rotate(${isDash ? 135 : -90} ${dim / 2} ${dim / 2})`}
          />
          <circle
            className="mochi-progress__stroke"
            cx={dim / 2}
            cy={dim / 2}
            r={r}
            strokeWidth={sw}
            stroke={color}
            fill="none"
            strokeDasharray={`${length} ${c}`}
            strokeDashoffset={offset}
            strokeLinecap="round"
            transform={`rotate(${isDash ? 135 : -90} ${dim / 2} ${dim / 2})`}
          />
        </svg>
        {showInfo ? <span className="mochi-progress__circle-info">{info}</span> : null}
      </div>
    )
  }

  const lineHeight = strokeWidth ?? (typeof size === 'number' ? size : 12)

  return (
    <div
      className={cn('mochi-progress', 'mochi-progress--line', `mochi-progress--${finalStatus}`, className)}
      style={style}
      role="progressbar"
      aria-valuenow={p}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="mochi-progress__rail"
        style={{ height: lineHeight, background: trailColor }}
      >
        <div
          className="mochi-progress__bar"
          style={{ width: `${p}%`, background: strokeColor, height: lineHeight }}
        />
      </div>
      {showInfo ? <span className="mochi-progress__info">{info}</span> : null}
    </div>
  )
}
