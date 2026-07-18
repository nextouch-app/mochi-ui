import { useState, createContext, useContext } from 'react'
import { cn, type RadioProps } from '@nextouch-app/mochi-core'

interface RadioGroupCtx {
  value?: string | number
  onChange?: (value: string | number) => void
  disabled?: boolean
}

const RadioGroupContext = createContext<RadioGroupCtx>({})

export function RadioGroup({
  value,
  defaultValue,
  disabled,
  className,
  style,
  children,
  onChange,
}: {
  value?: string | number
  defaultValue?: string | number
  disabled?: boolean
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  onChange?: (value: string | number) => void
}) {
  const [inner, setInner] = useState(defaultValue)
  const current = value ?? inner

  return (
    <RadioGroupContext.Provider
      value={{
        value: current,
        disabled,
        onChange: (v) => {
          if (value === undefined) setInner(v)
          onChange?.(v)
        },
      }}
    >
      <div className={cn('mochi-radio-group', className)} style={style} role="radiogroup">
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

export function Radio({
  checked,
  defaultChecked = false,
  disabled = false,
  value,
  className,
  style,
  children,
  onChange,
}: RadioProps) {
  const group = useContext(RadioGroupContext)
  const [inner, setInner] = useState(defaultChecked)
  const inGroup = group.value !== undefined || !!group.onChange
  const isChecked = inGroup ? group.value === value : (checked ?? inner)
  const isDisabled = disabled || group.disabled

  const select = () => {
    if (isDisabled) return
    if (inGroup && value !== undefined) {
      group.onChange?.(value)
    } else {
      if (checked === undefined) setInner(true)
      onChange?.(true)
    }
  }

  return (
    <label
      className={cn(
        'mochi-radio',
        isChecked && 'is-checked',
        isDisabled && 'is-disabled',
        className,
      )}
      style={style}
    >
      <button
        type="button"
        role="radio"
        aria-checked={isChecked}
        disabled={isDisabled}
        className="mochi-radio__dot"
        onClick={select}
      >
        {isChecked ? <span className="mochi-radio__inner" /> : null}
      </button>
      {children ? <span className="mochi-radio__label">{children}</span> : null}
    </label>
  )
}
