import { useEffect, useRef, useState } from 'react'
import { cn, normalizeSize, type RangePickerProps, type RangeValue } from '@mochi-ui/core'
import { useConfig } from '../config-provider/ConfigProvider'
import { Calendar } from '../calendar/Calendar'
import { Button } from '../button/Button'
import { TimePickerRow } from './TimePickerRow'
import { defaultFormatPattern, formatRange, startOfDay } from './utils'
import './date-picker.css'

function normalizeRangeValue(value: RangeValue): [Date | null, Date | null] {
  const [a, b] = value ?? [null, null]
  if (!a || !b) return [a, b]
  return a.getTime() <= b.getTime() ? [a, b] : [b, a]
}

export function RangePicker({
  value,
  defaultValue = null,
  placeholder = ['开始日期', '结束日期'],
  disabled = false,
  allowClear = true,
  disabledDate,
  status,
  size,
  format = defaultFormatPattern,
  showTime = false,
  className,
  style,
  onChange,
}: RangePickerProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize(size ?? ctxSize)
  const [inner, setInner] = useState<RangeValue>(defaultValue)
  const [open, setOpen] = useState(false)
  const [draft, setDraft] = useState<[Date | null, Date | null]>([null, null])
  const [hoverDate, setHoverDate] = useState<Date | null>(null)
  const [pendingTime, setPendingTime] = useState(false)
  const current = value !== undefined ? value : inner
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      const [start, end] = normalizeRangeValue(current)
      setDraft([start, end])
      setPendingTime(false)
      setHoverDate(null)
    }
  }, [open, current])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const commit = (next: RangeValue) => {
    if (value === undefined) setInner(next)
    onChange?.(next)
    setOpen(false)
  }

  const handleDayPick = (date: Date) => {
    const day = startOfDay(date)
    const [start, end] = draft

    if (!start || (start && end)) {
      setDraft([day, null])
      setPendingTime(false)
      return
    }

    const next = normalizeRangeValue([start, day])
    setDraft(next)
    if (showTime) {
      setPendingTime(true)
      return
    }
    commit(next)
  }

  const display = formatRange(current, format, placeholder)
  const hasValue = Boolean(current?.[0] || current?.[1])

  return (
    <div
      ref={ref}
      className={cn(
        'mochi-datepicker',
        'mochi-rangepicker',
        `mochi-datepicker--${finalSize}`,
        open && 'is-open',
        disabled && 'is-disabled',
        status && `is-${status}`,
        className,
      )}
      style={style}
    >
      <button
        type="button"
        className="mochi-datepicker__trigger"
        disabled={disabled}
        onClick={() => !disabled && setOpen(!open)}
      >
        <span className={cn(!hasValue && 'is-placeholder')}>{display || `${placeholder[0]} ~ ${placeholder[1]}`}</span>
        {allowClear && hasValue ? (
          <span
            className="mochi-datepicker__clear"
            role="button"
            onClick={(e) => {
              e.stopPropagation()
              commit(null)
            }}
          >
            ×
          </span>
        ) : (
          <span className="mochi-datepicker__icon">📅</span>
        )}
      </button>
      {open ? (
        <div className="mochi-datepicker__panel">
          <Calendar
            value={draft[0] ?? draft[1] ?? undefined}
            rangeStart={draft[0]}
            rangeEnd={draft[1]}
            hoverDate={hoverDate}
            onHoverDate={setHoverDate}
            disabledDate={disabledDate}
            onChange={handleDayPick}
          />
          {showTime && pendingTime && draft[0] && draft[1] ? (
            <>
              <TimePickerRow
                label="开始"
                date={draft[0]}
                onChange={(d) => setDraft([d, draft[1]])}
              />
              <TimePickerRow
                label="结束"
                date={draft[1]!}
                onChange={(d) => setDraft([draft[0], d])}
              />
              <div className="mochi-datepicker__footer">
                <Button type="primary" size="small" onClick={() => commit(normalizeRangeValue(draft))}>
                  确定
                </Button>
              </div>
            </>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
