import { cn, type StatisticProps } from '@mochi-ui/core'
import './statistic.css'

function formatValue(value: string | number | undefined, precision?: number) {
  if (value == null) return '-'
  if (typeof value === 'number' && precision != null) return value.toFixed(precision)
  return String(value)
}

export function Statistic({
  title,
  value,
  precision,
  prefix,
  suffix,
  loading = false,
  valueStyle,
  className,
  style,
}: StatisticProps) {
  return (
    <div className={cn('mochi-statistic', loading && 'is-loading', className)} style={style}>
      {title ? <div className="mochi-statistic__title">{title}</div> : null}
      <div className="mochi-statistic__content" style={valueStyle}>
        {loading ? (
          <span className="mochi-statistic__skeleton" />
        ) : (
          <>
            {prefix ? <span className="mochi-statistic__prefix">{prefix}</span> : null}
            <span className="mochi-statistic__value">{formatValue(value, precision)}</span>
            {suffix ? <span className="mochi-statistic__suffix">{suffix}</span> : null}
          </>
        )}
      </div>
    </div>
  )
}
