import { useState } from 'react'
import { cn, type RateProps } from '@nextouch-app/mochi-core'
import './rate.css'

export function Rate({
  value,
  defaultValue = 0,
  count = 5,
  allowHalf = false,
  allowClear = true,
  disabled = false,
  character = '★',
  tooltips,
  className,
  style,
  onChange,
  onHoverChange,
}: RateProps) {
  const [inner, setInner] = useState(defaultValue)
  const [hover, setHover] = useState<number | null>(null)
  const current = value ?? inner
  const display = hover ?? current

  const set = (next: number) => {
    if (disabled) return
    const cleared = allowClear && next === current ? 0 : next
    if (value === undefined) setInner(cleared)
    onChange?.(cleared)
  }

  const setHoverValue = (next: number | null) => {
    setHover(next)
    if (next != null) onHoverChange?.(next)
  }

  return (
    <div
      className={cn('mochi-rate', disabled && 'is-disabled', className)}
      style={style}
      role="slider"
      aria-valuenow={current}
      aria-valuemin={0}
      aria-valuemax={count}
      onMouseLeave={() => setHoverValue(null)}
    >
      {Array.from({ length: count }).map((_, i) => {
        const idx = i + 1
        const full = display >= idx
        const half = allowHalf && display >= idx - 0.5 && display < idx
        return (
          <button
            key={idx}
            type="button"
            className={cn('mochi-rate__star', full && 'is-full', half && 'is-half')}
            disabled={disabled}
            title={tooltips?.[i]}
            onMouseEnter={() => setHoverValue(idx)}
            onClick={(e) => {
              if (allowHalf) {
                const rect = (e.target as HTMLElement).getBoundingClientRect()
                const isLeft = e.clientX - rect.left < rect.width / 2
                set(isLeft ? idx - 0.5 : idx)
              } else {
                set(idx)
              }
            }}
          >
            {character}
          </button>
        )
      })}
    </div>
  )
}
