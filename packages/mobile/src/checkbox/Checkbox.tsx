import { createContext, useContext, useState, type ReactNode } from 'react'
import { cn, type CheckboxGroupProps, type CheckboxProps } from '@mochi-ui/core'
import './checkbox.css'

interface GroupCtx {
  value?: Array<string | number>
  disabled?: boolean
  toggle?: (val: string | number, checked: boolean) => void
}

const CheckboxGroupContext = createContext<GroupCtx>({})

function CheckboxInner({
  checked,
  defaultChecked = false,
  disabled = false,
  value,
  className,
  style,
  children,
  onChange,
}: CheckboxProps) {
  const group = useContext(CheckboxGroupContext)
  const [inner, setInner] = useState(defaultChecked)
  const inGroup = group.value != null && value !== undefined
  const isChecked = inGroup ? group.value!.includes(value!) : (checked ?? inner)
  const isDisabled = disabled || group.disabled

  const toggle = () => {
    if (isDisabled) return
    const next = !isChecked
    if (inGroup && value !== undefined) {
      group.toggle?.(value, next)
    } else {
      if (checked === undefined) setInner(next)
      onChange?.(next)
    }
  }

  return (
    <label
      className={cn(
        'mochi-checkbox',
        isChecked && 'is-checked',
        isDisabled && 'is-disabled',
        className,
      )}
      style={style}
    >
      <button
        type="button"
        role="checkbox"
        aria-checked={isChecked}
        disabled={isDisabled}
        className="mochi-checkbox__box"
        onClick={toggle}
      >
        {isChecked ? <span className="mochi-checkbox__mark">✓</span> : null}
      </button>
      {children ? <span className="mochi-checkbox__label">{children}</span> : null}
    </label>
  )
}

export function CheckboxGroup({
  value,
  defaultValue = [],
  disabled = false,
  options,
  className,
  style,
  children,
  onChange,
}: CheckboxGroupProps) {
  const [inner, setInner] = useState(defaultValue)
  const current = value ?? inner

  const toggle = (val: string | number, checked: boolean) => {
    const next = checked ? [...current, val] : current.filter((v) => v !== val)
    if (value === undefined) setInner(next)
    onChange?.(next)
  }

  const nodes: ReactNode =
    options?.map((opt) => {
      const item = typeof opt === 'object' ? opt : { label: String(opt), value: opt }
      return (
        <CheckboxInner key={String(item.value)} value={item.value} disabled={item.disabled}>
          {item.label}
        </CheckboxInner>
      )
    }) ?? children

  return (
    <CheckboxGroupContext.Provider value={{ value: current, disabled, toggle }}>
      <div className={cn('mochi-checkbox-group', className)} style={style} role="group">
        {nodes}
      </div>
    </CheckboxGroupContext.Provider>
  )
}

export const Checkbox = Object.assign(CheckboxInner, {
  Group: CheckboxGroup,
})
