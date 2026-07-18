import { useState } from 'react'
import { cn, type StepperProps } from '@mochi-ui/core'

export function Stepper({
  value,
  defaultValue = 0,
  min = 0,
  max = 99,
  step = 1,
  disabled,
  className,
  style,
  onChange,
}: StepperProps) {
  const [inner, setInner] = useState(defaultValue)
  const val = value ?? inner

  const set = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next))
    if (value === undefined) setInner(clamped)
    onChange?.(clamped)
  }

  return (
    <div className={cn('mochi-stepper', disabled && 'is-disabled', className)} style={style}>
      <button
        type="button"
        className="mochi-stepper__btn"
        disabled={disabled || val <= min}
        onClick={() => set(val - step)}
        aria-label="减少"
      >
        −
      </button>
      <span className="mochi-stepper__value">{val}</span>
      <button
        type="button"
        className="mochi-stepper__btn"
        disabled={disabled || val >= max}
        onClick={() => set(val + step)}
        aria-label="增加"
      >
        +
      </button>
    </div>
  )
}
