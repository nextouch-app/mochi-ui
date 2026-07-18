import { useEffect, useState } from 'react'
import { cn, normalizeSize, type DatePickerProps } from '@nextouch-app/mochi-core'
import { useConfig } from '../config-provider/ConfigProvider'
import { Calendar } from '../calendar/Calendar'
import { Button } from '../button/Button'
import { MonthPanel, YearPanel } from './PickerPanels'
import { TimePickerRow } from './TimePickerRow'
import { defaultFormatPattern, formatDate, startOfWeek } from './utils'
import './date-picker.css'

/**
 * Mobile DatePicker：底部抽屉内嵌 Calendar（非桌面锚定浮层）。
 */
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
  const [viewYear, setViewYear] = useState((defaultValue ?? new Date()).getFullYear())
  const [yearStart, setYearStart] = useState(Math.floor((defaultValue ?? new Date()).getFullYear() / 12) * 12)
  const current = value !== undefined ? value : inner
  const open = openProp ?? innerOpen
  const needsConfirm = showTime || picker !== 'date'

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setInnerOpen(next)
    onOpenChange?.(next)
  }

  useEffect(() => {
    if (open) setDraft(current)
  }, [open, current])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const commit = (date: Date | null) => {
    if (date) {
      if (value === undefined) setInner(date)
      onChange?.(date)
    }
    setOpen(false)
  }

  const handlePick = (date: Date) => {
    setDraft(date)
    if (!needsConfirm) commit(date)
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
        onChange={picker === 'week' ? (d) => handlePick(startOfWeek(d)) : handlePick}
      />
    )
  })()

  return (
    <div
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
        onClick={() => !disabled && setOpen(true)}
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
        <div className="mochi-datepicker-sheet" role="dialog" aria-modal="true">
          <div className="mochi-datepicker-sheet__mask" onClick={() => setOpen(false)} />
          <div className="mochi-datepicker-sheet__panel">
            <div className="mochi-datepicker-sheet__header">
              <button type="button" className="mochi-datepicker-sheet__link" onClick={() => setOpen(false)}>
                取消
              </button>
              <div className="mochi-datepicker-sheet__title">选择日期</div>
              <Button type="primary" size="small" onClick={() => draft && commit(draft)} disabled={!draft}>
                确定
              </Button>
            </div>
            <div className="mochi-datepicker-sheet__body">
              {panel}
              {showTime && draft ? <TimePickerRow date={draft} onChange={setDraft} /> : null}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
