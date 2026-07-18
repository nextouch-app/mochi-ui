import { useEffect, useState } from 'react'
import { cn, type DatePickerProps } from '@mochi-ui/core'
import { Calendar } from '../calendar/Calendar'
import { Button } from '../button/Button'
import './date-picker.css'

const defaultFormat = (d: Date) =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

/**
 * Mobile DatePicker：底部抽屉内嵌 Calendar（非桌面锚定浮层）。
 * Web 端请用 `@mochi-ui/react` 的下拉面板版。
 */
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
  const [draft, setDraft] = useState<Date | null>(defaultValue)
  const current = value !== undefined ? value : inner

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

  return (
    <div className={cn('mochi-datepicker', open && 'is-open', disabled && 'is-disabled', className)} style={style}>
      <button
        type="button"
        className="mochi-datepicker__trigger"
        disabled={disabled}
        onClick={() => !disabled && setOpen(true)}
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
        <div className="mochi-datepicker-sheet" role="dialog" aria-modal="true">
          <div className="mochi-datepicker-sheet__mask" onClick={() => setOpen(false)} />
          <div className="mochi-datepicker-sheet__panel">
            <div className="mochi-datepicker-sheet__header">
              <button type="button" className="mochi-datepicker-sheet__link" onClick={() => setOpen(false)}>
                取消
              </button>
              <div className="mochi-datepicker-sheet__title">选择日期</div>
              <Button
                type="primary"
                size="small"
                onClick={() => {
                  if (draft) {
                    if (value === undefined) setInner(draft)
                    onChange?.(draft)
                  }
                  setOpen(false)
                }}
              >
                确定
              </Button>
            </div>
            <div className="mochi-datepicker-sheet__body">
              <Calendar value={draft ?? undefined} onChange={setDraft} />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
