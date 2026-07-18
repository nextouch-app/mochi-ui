import { useMemo, useState } from 'react'
import { cn, type CalendarProps } from '@mochi-ui/core'
import './calendar.css'

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function normalizeRange(start: Date | null | undefined, end: Date | null | undefined) {
  if (!start || !end) return { start, end }
  const s = startOfDay(start)
  const e = startOfDay(end)
  return s.getTime() <= e.getTime() ? { start: s, end: e } : { start: e, end: s }
}

function inRange(
  d: Date,
  start: Date | null | undefined,
  end: Date | null | undefined,
  hover?: Date | null,
) {
  const normalized = normalizeRange(start, end ?? hover)
  if (!normalized.start) return false
  const endDate = normalized.end ?? hover
  if (!endDate) return sameDay(d, normalized.start)
  const t = startOfDay(d).getTime()
  return t >= startOfDay(normalized.start).getTime() && t <= startOfDay(endDate).getTime()
}

export function Calendar({
  value,
  defaultValue,
  className,
  style,
  onChange,
  disabledDate,
  rangeStart,
  rangeEnd,
  hoverDate,
  onHoverDate,
}: CalendarProps) {
  const [inner, setInner] = useState(defaultValue ?? new Date())
  const selected = value ?? inner
  const [view, setView] = useState(new Date(selected.getFullYear(), selected.getMonth(), 1))
  const [pressedDay, setPressedDay] = useState<string | null>(null)

  const days = useMemo(() => {
    const year = view.getFullYear()
    const month = view.getMonth()
    const first = new Date(year, month, 1)
    const startWeek = first.getDay()
    const grid: Date[] = []
    const start = new Date(year, month, 1 - startWeek)
    for (let i = 0; i < 42; i++) {
      grid.push(new Date(start.getFullYear(), start.getMonth(), start.getDate() + i))
    }
    return grid
  }, [view])

  const pick = (d: Date) => {
    if (disabledDate?.(d)) return
    const next = startOfDay(d)
    if (value === undefined) setInner(next)
    onChange?.(next)
  }

  const range = normalizeRange(rangeStart, rangeEnd)

  return (
    <div className={cn('mochi-calendar', className)} style={style}>
      <div className="mochi-calendar__header">
        <button type="button" className="mochi-calendar__nav" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() - 1, 1))}>
          ‹
        </button>
        <div className="mochi-calendar__title">
          {view.getFullYear()} 年 {view.getMonth() + 1} 月
        </div>
        <button type="button" className="mochi-calendar__nav" onClick={() => setView(new Date(view.getFullYear(), view.getMonth() + 1, 1))}>
          ›
        </button>
      </div>
      <div className="mochi-calendar__week">
        {['日', '一', '二', '三', '四', '五', '六'].map((w) => (
          <span key={w}>{w}</span>
        ))}
      </div>
      <div className="mochi-calendar__grid">
        {days.map((d) => {
          const outside = d.getMonth() !== view.getMonth()
          const disabled = !!disabledDate?.(d)
          const key = d.toISOString()
          const isStart = range.start ? sameDay(d, range.start) : false
          const isEnd = range.end ? sameDay(d, range.end) : false
          const isInRange = inRange(d, rangeStart, rangeEnd, hoverDate)
          return (
            <button
              key={key}
              type="button"
              disabled={disabled}
              className={cn(
                'mochi-calendar__cell',
                outside && 'is-outside',
                sameDay(d, selected) && !rangeStart && !rangeEnd && 'is-selected',
                sameDay(d, new Date()) && 'is-today',
                isInRange && 'is-in-range',
                isStart && 'is-range-start',
                isEnd && 'is-range-end',
                pressedDay === key && 'is-pressed',
              )}
              onClick={() => pick(d)}
              onTouchStart={() => {
                setPressedDay(key)
                onHoverDate?.(d)
              }}
              onTouchEnd={() => setPressedDay(null)}
            >
              {d.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}
