import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent } from 'react'
import { cn, normalizeSize, type SwitchProps } from '@nextouch-app/mochi-core'
import { useConfig } from '../config-provider/ConfigProvider'
import './switch.css'

export function Switch({
  checked,
  defaultChecked = false,
  disabled = false,
  loading = false,
  size,
  checkedChildren,
  unCheckedChildren,
  autoFocus = false,
  className,
  style,
  onChange,
  onClick,
}: SwitchProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize(size ?? ctxSize)
  const [inner, setInner] = useState(defaultChecked)
  const isChecked = checked ?? inner
  const ref = useRef<HTMLButtonElement>(null)
  const isDisabled = disabled || loading

  useEffect(() => {
    if (autoFocus) ref.current?.focus()
  }, [autoFocus])

  const toggle = (e: ReactMouseEvent<HTMLButtonElement>) => {
    if (isDisabled) return
    const next = !isChecked
    if (checked === undefined) setInner(next)
    onChange?.(next, e)
    onClick?.(next, e)
  }

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={isChecked}
      aria-busy={loading || undefined}
      disabled={isDisabled}
      className={cn(
        'mochi-switch',
        `mochi-switch--${finalSize}`,
        isChecked && 'is-checked',
        disabled && 'is-disabled',
        loading && 'is-loading',
        className,
      )}
      style={style}
      onClick={toggle}
    >
      <span className="mochi-switch__inner" aria-hidden>
        {isChecked ? checkedChildren : unCheckedChildren}
      </span>
      <span className="mochi-switch__thumb">
        {loading ? <span className="mochi-switch__spinner" /> : null}
      </span>
    </button>
  )
}
