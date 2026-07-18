import { useState } from 'react'
import { cn, type SliderProps } from '@nextouch-app/mochi-core'

export function Slider({
  value,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled,
  className,
  style,
  onChange,
}: SliderProps) {
  const [inner, setInner] = useState(defaultValue)
  const val = value ?? inner
  const percent = ((val - min) / (max - min)) * 100

  return (
    <div className={cn('mochi-slider', disabled && 'is-disabled', className)} style={style}>
      <div className="mochi-slider__rail">
        <div className="mochi-slider__track" style={{ width: `${percent}%` }} />
        <input
          type="range"
          className="mochi-slider__input"
          min={min}
          max={max}
          step={step}
          value={val}
          disabled={disabled}
          aria-valuenow={val}
          onChange={(e) => {
            const next = Number(e.target.value)
            if (value === undefined) setInner(next)
            onChange?.(next)
          }}
        />
      </div>
    </div>
  )
}
