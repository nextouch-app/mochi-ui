import { useState, type PointerEvent as ReactPointerEvent } from 'react'
import { cn, type RateProps } from '@mochi-ui/core'
import './rate.css'

/** Mobile Rate：用 pointer 事件反馈，不依赖 :hover */
export function Rate({
  value,
  defaultValue = 0,
  count = 5,
  allowHalf = false,
  allowClear = true,
  disabled = false,
  className,
  style,
  onChange,
}: RateProps) {
  const [inner, setInner] = useState(defaultValue)
  const [preview, setPreview] = useState<number | null>(null)
  const current = value ?? inner
  const display = preview ?? current

  const set = (next: number) => {
    if (disabled) return
    const cleared = allowClear && next === current ? 0 : next
    if (value === undefined) setInner(cleared)
    onChange?.(cleared)
  }

  const valueFromEvent = (e: ReactPointerEvent<HTMLButtonElement>, idx: number) => {
    if (!allowHalf) return idx
    const rect = e.currentTarget.getBoundingClientRect()
    const isLeft = e.clientX - rect.left < rect.width / 2
    return isLeft ? idx - 0.5 : idx
  }

  return (
    <div
      className={cn('mochi-rate', disabled && 'is-disabled', className)}
      style={style}
      role="slider"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={count}
      onPointerLeave={() => setPreview(null)}
    >
      {Array.from({ length: count }).map((_, i) => {
        const idx = i + 1
        const full = display >= idx
        const half = allowHalf && display >= idx - 0.5 && display < idx
        return (
          <button
            key={idx}
            type="button"
            className={cn('mochi-rate__star', full && 'is-full', half && 'is-half', preview != null && 'is-preview')}
            disabled={disabled}
            onPointerDown={(e) => {
              e.currentTarget.setPointerCapture(e.pointerId)
              setPreview(valueFromEvent(e, idx))
            }}
            onPointerMove={(e) => {
              if (e.buttons === 0 && e.pointerType === 'mouse') return
              if (preview == null && e.pointerType !== 'touch') return
              setPreview(valueFromEvent(e, idx))
            }}
            onPointerUp={(e) => {
              set(valueFromEvent(e, idx))
              setPreview(null)
            }}
          >
            ★
          </button>
        )
      })}
    </div>
  )
}
