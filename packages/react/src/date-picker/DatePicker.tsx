import { useEffect, useRef, useState } from 'react'
import { cn, normalizeSize, type DatePickerProps } from '@nextouch-app/mochi-core'
import { useConfig } from '../config-provider/ConfigProvider'
import { Calendar } from '../calendar/Calendar'
import { Button } from '../button/Button'
import { MonthPanel, YearPanel } from './PickerPanels'
import { TimePickerRow } from './TimePickerRow'
import { defaultFormatPattern, formatDate, startOfWeek } from './utils'
import './date-picker.css'

export function DatePicker({
  value,
  defaultValue = null,
  placeholder = '选择日期',
  disabled = false,
  allowClear = true,
  open: openProp,
  defaultOpen = false,
  disabledDate,
  status,
  size,
  format = defaultFormatPattern,
  showTime = false,
  picker = 'date',
  className,
  style,
  onChange,
  onOpenChange,
}: DatePickerProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize(size ?? ctxSize)
  const [inner, setInner] = useState<Date | null>(defaultValue)
  const [innerOpen, setInnerOpen] = useState(defaultOpen)
  const [draft, setDraft] = useState<Date | null>(defaultValue)
  const [pendingTime, setPendingTime] = useState(false)
  const [viewYear, setViewYear] = useState((defaultValue ?? new Date()).getFullYear())
  const [yearStart, setYearStart] = useState(Math.floor((defaultValue ?? new Date()).getFullYear() / 12) * 12)
  const current = value !== undefined ? value : inner
  const open = openProp ?? innerOpen
  const ref = useRef<HTMLDivElement>(null)

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setInnerOpen(next)
    onOpenChange?.(next)
    if (!next) setPendingTime(false)
  }

  useEffect(() => {
    if (open) {
      setDraft(current)
      setPendingTime(false)
    }
  }, [open, current])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const commit = (date: Date) => {
    if (value === undefined) setInner(date)
    onChange?.(date)
    setOpen(false)
  }

  const handlePick = (date: Date) => {
    const next = showTime ? date : date
    setDraft(next)
    if (showTime) {
      setPendingTime(true)
      return
    }
    commit(next)
  }

  const handleWeekPick = (date: Date) => {
    handlePick(startOfWeek(date))
  }

  const panel = (() => {
    if (picker === 'month') {
      return (
        <MonthPanel
          viewYear={viewYear}
          selected={draft}
          disabledDate={disabledDate}
          onViewYearChange={setViewYear}
          onSelect={handlePick}
        />
      )
    }
    if (picker === 'year') {
      return (
        <YearPanel
          viewStart={yearStart}
          selected={draft}
          onViewStartChange={setYearStart}
          onSelect={handlePick}
        />
      )
    }
    return (
      <Calendar
        value={draft ?? undefined}
        disabledDate={disabledDate}
        onChange={picker === 'week' ? handleWeekPick : handlePick}
      />
    )
  })()

  return (
    <div
      ref={ref}
      className={cn(
        'mochi-datepicker',
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
        <span className={cn(!current && 'is-placeholder')}>
          {current ? formatDate(current, format) : placeholder}
        </span>
        {allowClear && current ? (
          <span
            className="mochi-datepicker__clear"
            role="button"
            onClick={(e) => {
              e.stopPropagation()
              if (value === undefined) setInner(null)
              onChange?.(null)
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
          {panel}
          {showTime && pendingTime && draft ? (
            <>
              <TimePickerRow date={draft} onChange={setDraft} />
              <div className="mochi-datepicker__footer">
                <Button type="primary" size="small" onClick={() => draft && commit(draft)}>
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
