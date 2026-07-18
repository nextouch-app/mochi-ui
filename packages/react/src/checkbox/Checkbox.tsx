import { useState } from 'react'
import { cn, type CheckboxProps } from '@mochi-ui/core'

export function Checkbox({
  checked,
  defaultChecked = false,
  disabled = false,
  className,
  style,
  children,
  onChange,
}: CheckboxProps) {
  const [inner, setInner] = useState(defaultChecked)
  const isChecked = checked ?? inner

  const toggle = () => {
    if (disabled) return
    const next = !isChecked
    if (checked === undefined) setInner(next)
    onChange?.(next)
  }

  return (
    <label
      className={cn(
        'mochi-checkbox',
        isChecked && 'is-checked',
        disabled && 'is-disabled',
        className,
      )}
      style={style}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={isChecked}
        disabled={disabled}
        className="mochi-checkbox__box"
        onClick={toggle}
      >
        {isChecked ? <span className="mochi-checkbox__mark">✓</span> : null}
      </button>
      {children ? <span className="mochi-checkbox__label">{children}</span> : null}
    </label>
  )
}
