import { cn, type ColProps, type RowProps } from '@mochi-ui/core'
import './grid.css'

const alignMap = {
  top: 'flex-start',
  middle: 'center',
  bottom: 'flex-end',
  stretch: 'stretch',
} as const

const justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  center: 'center',
  'space-around': 'space-around',
  'space-between': 'space-between',
  'space-evenly': 'space-evenly',
} as const

export function Row({
  gutter = 0,
  align = 'top',
  justify = 'start',
  wrap = true,
  className,
  style,
  children,
}: RowProps) {
  const [gutterX, gutterY] = Array.isArray(gutter) ? gutter : [gutter, 0]
  return (
    <div
      className={cn('mochi-row', className)}
      style={{
        display: 'flex',
        flexWrap: wrap ? 'wrap' : 'nowrap',
        alignItems: alignMap[align],
        justifyContent: justifyMap[justify],
        marginLeft: gutterX ? -gutterX / 2 : undefined,
        marginRight: gutterX ? -gutterX / 2 : undefined,
        rowGap: gutterY || undefined,
        ['--mochi-gutter-x' as string]: gutterX ? `${gutterX}px` : '0px',
        ...style,
      }}
      data-gutter-x={gutterX || undefined}
    >
      {children}
    </div>
  )
}

export function Col({
  span = 24,
  offset = 0,
  order,
  flex,
  className,
  style,
  children,
}: ColProps) {
  const width = `${(Math.min(24, Math.max(0, span)) / 24) * 100}%`
  const marginLeft = offset ? `${(Math.min(24, offset) / 24) * 100}%` : undefined

  return (
    <div
      className={cn('mochi-col', className)}
      style={{
        flex: flex ?? `0 0 ${width}`,
        maxWidth: flex == null ? width : undefined,
        marginLeft,
        order,
        paddingLeft: 'var(--mochi-col-pad, 0px)',
        paddingRight: 'var(--mochi-col-pad, 0px)',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

/* Apply horizontal gutter via CSS variable from nearest row */
Row.displayName = 'Row'
Col.displayName = 'Col'
