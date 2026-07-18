import { useEffect, useRef, useState } from 'react'
import { cn, normalizeSize, type TimePickerProps } from '@nextouch-app/mochi-core'
import { useConfig } from '../config-provider/ConfigProvider'
import './time-picker.css'

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function formatTime(
  date: Date,
  fmt: string | ((date: Date) => string) = 'HH:mm:ss',
  showSecond = true,
  use12Hours = false,
) {
  if (typeof fmt === 'function') return fmt(date)
  let h = date.getHours()
  const m = date.getMinutes()
  const s = date.getSeconds()
  let suffix = ''
  if (use12Hours) {
    suffix = h >= 12 ? ' PM' : ' AM'
    h = h % 12 || 12
  }
  const base = showSecond ? `${pad(h)}:${pad(m)}:${pad(s)}` : `${pad(h)}:${pad(m)}`
  if (fmt.includes('A') || fmt.includes('a')) return `${base}${suffix}`
  return use12Hours ? `${base}${suffix}` : base.replace(/:\d{2}$/, showSecond ? `:${pad(s)}` : '')
}

function range(max: number, step: number) {
  const out: number[] = []
  for (let i = 0; i < max; i += step) out.push(i)
  return out
}

export function TimePicker({
  value,
  defaultValue = null,
  placeholder = '选择时间',
  disabled = false,
  allowClear = true,
  open: openProp,
  defaultOpen = false,
  format = 'HH:mm:ss',
  size,
  hourStep = 1,
  minuteStep = 1,
  secondStep = 1,
  showSecond = true,
  use12Hours = false,
  className,
  style,
  onChange,
  onOpenChange,
}: TimePickerProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize(size ?? ctxSize)
  const [inner, setInner] = useState<Date | null>(defaultValue)
  const [innerOpen, setInnerOpen] = useState(defaultOpen)
  const rootRef = useRef<HTMLDivElement>(null)
  const current = value !== undefined ? value : inner
  const open = openProp ?? innerOpen

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setInnerOpen(next)
    onOpenChange?.(next)
  }

  const commit = (next: Date | null) => {
    if (value === undefined) setInner(next)
    onChange?.(next, next ? formatTime(next, format, showSecond, use12Hours) : '')
  }

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  const draft = current ?? new Date(1970, 0, 1, 0, 0, 0)
  const hours = use12Hours ? range(12, hourStep).map((h) => (h === 0 ? 12 : h)) : range(24, hourStep)
  const minutes = range(60, minuteStep)
  const seconds = range(60, secondStep)

  const setPart = (part: 'h' | 'm' | 's' | 'ampm', val: number | string) => {
    const next = new Date(draft)
    if (part === 'm') next.setMinutes(Number(val))
    else if (part === 's') next.setSeconds(Number(val))
    else if (part === 'ampm') {
      const h = next.getHours()
      if (val === 'AM' && h >= 12) next.setHours(h - 12)
      if (val === 'PM' && h < 12) next.setHours(h + 12)
    } else if (use12Hours) {
      const ampm = next.getHours() >= 12 ? 'PM' : 'AM'
      let h = Number(val) % 12
      if (ampm === 'PM') h += 12
      next.setHours(h)
    } else {
      next.setHours(Number(val))
    }
    commit(next)
  }

  const displayH = use12Hours ? draft.getHours() % 12 || 12 : draft.getHours()

  return (
    <div
      ref={rootRef}
      className={cn(
        'mochi-timepicker',
        `mochi-timepicker--${finalSize}`,
        open && 'is-open',
        disabled && 'is-disabled',
        className,
      )}
      style={style}
    >
      <button
        type="button"
        className="mochi-timepicker__trigger"
        disabled={disabled}
        onClick={() => !disabled && setOpen(!open)}
      >
        <span className={cn('mochi-timepicker__value', !current && 'is-placeholder')}>
          {current ? formatTime(current, format, showSecond, use12Hours) : placeholder}
        </span>
        {allowClear && current && !disabled ? (
          <span
            className="mochi-timepicker__clear"
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.stopPropagation()
              commit(null)
            }}
          >
            ×
          </span>
        ) : (
          <span className="mochi-timepicker__clock" aria-hidden>
            ⏱
          </span>
        )}
      </button>
      {open ? (
        <div className="mochi-timepicker__panel">
          <div className="mochi-timepicker__cols">
            <select
              className="mochi-timepicker__select"
              value={displayH}
              onChange={(e) => setPart('h', Number(e.target.value))}
            >
              {hours.map((h) => (
                <option key={h} value={h}>
                  {pad(h)}
                </option>
              ))}
            </select>
            <span>:</span>
            <select
              className="mochi-timepicker__select"
              value={draft.getMinutes()}
              onChange={(e) => setPart('m', Number(e.target.value))}
            >
              {minutes.map((m) => (
                <option key={m} value={m}>
                  {pad(m)}
                </option>
              ))}
            </select>
            {showSecond ? (
              <>
                <span>:</span>
                <select
                  className="mochi-timepicker__select"
                  value={draft.getSeconds()}
                  onChange={(e) => setPart('s', Number(e.target.value))}
                >
                  {seconds.map((s) => (
                    <option key={s} value={s}>
                      {pad(s)}
                    </option>
                  ))}
                </select>
              </>
            ) : null}
            {use12Hours ? (
              <select
                className="mochi-timepicker__select"
                value={draft.getHours() >= 12 ? 'PM' : 'AM'}
                onChange={(e) => setPart('ampm', e.target.value)}
              >
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            ) : null}
          </div>
          <button type="button" className="mochi-timepicker__ok" onClick={() => setOpen(false)}>
            确定
          </button>
        </div>
      ) : null}
    </div>
  )
}
