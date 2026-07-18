import { useState, type ChangeEvent, type KeyboardEvent } from 'react'
import { cn, normalizeSize, type InputNumberProps } from '@mochi-ui/core'
import { useConfig } from '../config-provider/ConfigProvider'
import './input-number.css'

function clamp(n: number, min?: number, max?: number) {
  let v = n
  if (min != null) v = Math.max(min, v)
  if (max != null) v = Math.min(max, v)
  return v
}

function format(n: number | null, precision?: number) {
  if (n == null || Number.isNaN(n)) return ''
  if (precision != null) return n.toFixed(precision)
  return String(n)
}

export function InputNumber({
  value,
  defaultValue,
  min,
  max,
  step = 1,
  precision,
  disabled = false,
  controls = true,
  size,
  prefix,
  addonBefore,
  addonAfter,
  placeholder,
  className,
  style,
  onChange,
  onStep,
}: InputNumberProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize(size ?? ctxSize)
  const [inner, setInner] = useState<number | null>(defaultValue ?? null)
  const [draft, setDraft] = useState<string | null>(null)
  const current = value !== undefined ? value : inner

  const commit = (next: number | null) => {
    const clamped = next == null || Number.isNaN(next) ? null : clamp(next, min, max)
    if (value === undefined) setInner(clamped)
    onChange?.(clamped)
    setDraft(null)
  }

  const stepBy = (dir: 'up' | 'down') => {
    if (disabled) return
    const base = current ?? 0
    const offset = dir === 'up' ? step : -step
    const next = clamp(Number((base + offset).toFixed(10)), min, max)
    commit(next)
    onStep?.(next, { offset: Math.abs(step), type: dir })
  }

  const display = draft ?? format(current, precision)

  const control = (
    <span
      className={cn(
        'mochi-input-number',
        `mochi-input-number--${finalSize}`,
        disabled && 'is-disabled',
        !addonBefore && !addonAfter ? className : undefined,
      )}
      style={!addonBefore && !addonAfter ? style : undefined}
    >
      {prefix ? <span className="mochi-input-number__prefix">{prefix}</span> : null}
      <input
        type="text"
        inputMode="decimal"
        className="mochi-input-number__field"
        disabled={disabled}
        placeholder={placeholder}
        value={display}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setDraft(e.target.value)}
        onBlur={() => {
          if (draft == null) return
          const parsed = draft.trim() === '' ? null : Number(draft)
          commit(parsed)
        }}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          if (e.key === 'ArrowUp') {
            e.preventDefault()
            stepBy('up')
          } else if (e.key === 'ArrowDown') {
            e.preventDefault()
            stepBy('down')
          } else if (e.key === 'Enter') {
            const parsed = (draft ?? display).trim() === '' ? null : Number(draft ?? display)
            commit(parsed)
          }
        }}
      />
      {controls ? (
        <span className="mochi-input-number__handlers">
          <button type="button" tabIndex={-1} disabled={disabled} onClick={() => stepBy('up')} aria-label="增加">
            ▴
          </button>
          <button type="button" tabIndex={-1} disabled={disabled} onClick={() => stepBy('down')} aria-label="减少">
            ▾
          </button>
        </span>
      ) : null}
    </span>
  )

  if (!addonBefore && !addonAfter) return control

  return (
    <span className={cn('mochi-input-number-group', className)} style={style}>
      {addonBefore ? <span className="mochi-input-number__addon">{addonBefore}</span> : null}
      {control}
      {addonAfter ? <span className="mochi-input-number__addon">{addonAfter}</span> : null}
    </span>
  )
}
