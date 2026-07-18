import {
  forwardRef,
  useState,
  type ChangeEvent,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from 'react'
import { cn, normalizeSize, type InputProps } from '@nextouch-app/mochi-core'
import { useConfig } from '../config-provider/ConfigProvider'
import { TextArea } from '../textarea/TextArea'
import { Password } from './Password'
import { Search } from './Search'
import './input.css'

export const InternalInput = forwardRef<
  HTMLInputElement,
  InputProps & Omit<InputHTMLAttributes<HTMLInputElement>, keyof InputProps | 'size' | 'prefix'>
>(function InternalInput(
  {
    size,
    disabled = false,
    readOnly,
    error = false,
    status,
    variant = 'outlined',
    allowClear = false,
    maxLength,
    showCount = false,
    prefix,
    suffix,
    addonBefore,
    addonAfter,
    className,
    style,
    value,
    defaultValue,
    onChange,
    onPressEnter,
    onClear,
    onKeyDown,
    ...rest
  },
  ref,
) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize(size ?? ctxSize)
  const [inner, setInner] = useState(defaultValue ?? '')
  const mergedStatus = status || (error ? 'error' : '')
  const isControlled = value !== undefined
  const current = isControlled ? String(value ?? '') : inner
  const showClear = allowClear && !disabled && !readOnly && !!current

  const control = (
    <span
      className={cn(
        'mochi-input',
        `mochi-input--${finalSize}`,
        `mochi-input--${variant}`,
        mergedStatus && `is-${mergedStatus}`,
        disabled && 'is-disabled',
        className && !addonBefore && !addonAfter ? className : undefined,
      )}
      style={!addonBefore && !addonAfter ? style : undefined}
    >
      {prefix ? <span className="mochi-input__prefix">{prefix}</span> : null}
      <input
        ref={ref}
        className="mochi-input__field"
        disabled={disabled}
        readOnly={readOnly}
        maxLength={maxLength}
        aria-invalid={mergedStatus === 'error' || undefined}
        value={isControlled ? value : undefined}
        defaultValue={defaultValue}
        onChange={(e) => {
          if (!isControlled) setInner(e.target.value)
          onChange?.(e)
        }}
        onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => {
          onKeyDown?.(e)
          if (e.key === 'Enter') onPressEnter?.(e)
        }}
        {...rest}
      />
      {showClear ? (
        <button
          type="button"
          className="mochi-input__clear"
          aria-label="清除"
          onClick={() => {
            if (!isControlled) setInner('')
            onClear?.()
            onChange?.({
              target: { value: '' },
            } as ChangeEvent<HTMLInputElement>)
          }}
        >
          ×
        </button>
      ) : null}
      {suffix ? <span className="mochi-input__suffix">{suffix}</span> : null}
      {showCount && maxLength != null ? (
        <span className="mochi-input__count">
          {current.length}/{maxLength}
        </span>
      ) : null}
    </span>
  )

  if (addonBefore || addonAfter) {
    return (
      <span
        className={cn('mochi-input-group', `mochi-input-group--${finalSize}`, className)}
        style={style}
      >
        {addonBefore ? <span className="mochi-input-group__addon">{addonBefore}</span> : null}
        {control}
        {addonAfter ? <span className="mochi-input-group__addon">{addonAfter}</span> : null}
      </span>
    )
  }

  return control
})

export const Input = Object.assign(InternalInput, {
  Password,
  Search,
  TextArea,
})
