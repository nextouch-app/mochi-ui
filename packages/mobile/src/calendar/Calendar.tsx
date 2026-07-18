import { useMemo, useState } from 'react'
import { cn, type CalendarProps } from '@mochi-ui/core'
import './calendar.css'

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

export function Calendar({
  value,
  defaultValue,
  className,
  style,
  onChange,
  disabledDate,
}: CalendarProps) {
  const [inner, setInner] = useState(defaultValue ?? new Date())
  const selected = value ?? inner
  const [view, setView] = useState(new Date(selected.getFullYear(), selected.getMonth(), 1))

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
          return (
            <button
              key={d.toISOString()}
              type="button"
              disabled={disabled}
              className={cn(
                'mochi-calendar__cell',
                outside && 'is-outside',
                sameDay(d, selected) && 'is-selected',
                sameDay(d, new Date()) && 'is-today',
              )}
              onClick={() => pick(d)}
            >
              {d.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}
