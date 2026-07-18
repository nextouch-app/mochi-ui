import { useEffect, useMemo, useRef, useState } from 'react'
import { cn, normalizeSize, type AutoCompleteOption, type AutoCompleteProps } from '@nextouch-app/mochi-core'
import { useConfig } from '../config-provider/ConfigProvider'
import './auto-complete.css'

function defaultFilter(input: string, option: AutoCompleteOption) {
  const label = typeof option.label === 'string' ? option.label : option.value
  return String(label).toLowerCase().includes(input.trim().toLowerCase())
}

export function AutoComplete({
  value,
  defaultValue = '',
  options = [],
  placeholder = '请输入',
  disabled = false,
  allowClear = false,
  status,
  size,
  filterOption = true,
  notFoundContent = '暂无数据',
  className,
  style,
  onChange,
  onSelect,
  onSearch,
  onClear,
}: AutoCompleteProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize(size ?? ctxSize)
  const [inner, setInner] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const current = value ?? inner
  const ref = useRef<HTMLDivElement>(null)

  const filtered = useMemo(() => {
    if (filterOption === false) return options
    if (typeof filterOption === 'function') {
      return options.filter((opt) => filterOption(current, opt))
    }
    if (!current) return options
    return options.filter((opt) => defaultFilter(current, opt))
  }, [options, current, filterOption])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const setValue = (next: string) => {
    if (value === undefined) setInner(next)
    onChange?.(next)
    onSearch?.(next)
  }

  return (
    <div
      ref={ref}
      className={cn(
        'mochi-autocomplete',
        `mochi-autocomplete--${finalSize}`,
        open && 'is-open',
        disabled && 'is-disabled',
        status && `is-${status}`,
        className,
      )}
      style={style}
    >
      <div className="mochi-autocomplete__control">
        <input
          className="mochi-autocomplete__input"
          value={current}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setValue(e.target.value)
            setOpen(true)
          }}
        />
        {allowClear && current && !disabled ? (
          <button
            type="button"
            className="mochi-autocomplete__clear"
            aria-label="清除"
            onClick={() => {
              setValue('')
              onClear?.()
            }}
          >
            ×
          </button>
        ) : null}
      </div>
      {open ? (
        <div className="mochi-autocomplete__dropdown" role="listbox">
          {filtered.length === 0 ? (
            <div className="mochi-autocomplete__empty">{notFoundContent}</div>
          ) : (
            filtered.map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="option"
                disabled={opt.disabled}
                className={cn(
                  'mochi-autocomplete__option',
                  opt.value === current && 'is-active',
                )}
                onClick={() => {
                  if (opt.disabled) return
                  setValue(opt.value)
                  onSelect?.(opt.value, opt)
                  setOpen(false)
                }}
              >
                {opt.label ?? opt.value}
              </button>
            ))
          )}
        </div>
      ) : null}
    </div>
  )
}
