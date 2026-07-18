import { useEffect, useRef, useState } from 'react'
import { cn, type DatePickerProps } from '@mochi-ui/core'
import { Calendar } from '../calendar/Calendar'
import './date-picker.css'

const defaultFormat = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

export function DatePicker({
  value,
  defaultValue = null,
  placeholder = '选择日期',
  disabled = false,
  allowClear = true,
  format = defaultFormat,
  className,
  style,
  onChange,
}: DatePickerProps) {
  const [inner, setInner] = useState<Date | null>(defaultValue)
  const [open, setOpen] = useState(false)
  const current = value !== undefined ? value : inner
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  return (
    <div ref={ref} className={cn('mochi-datepicker', open && 'is-open', disabled && 'is-disabled', className)} style={style}>
      <button
        type="button"
        className="mochi-datepicker__trigger"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
      >
        <span className={cn(!current && 'is-placeholder')}>{current ? format(current) : placeholder}</span>
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
          <Calendar
            value={current ?? undefined}
            onChange={(d) => {
              if (value === undefined) setInner(d)
              onChange?.(d)
              setOpen(false)
            }}
          />
        </div>
      ) : null}
    </div>
  )
}
