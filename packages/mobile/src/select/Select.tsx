import { useEffect, useMemo, useRef, useState } from 'react'
import { cn, normalizeSize, type SelectOption, type SelectProps } from '@mochi-ui/core'
import { useConfig } from '../config-provider/ConfigProvider'
import './select.css'

function defaultFilter(input: string, option: SelectOption) {
  const label = typeof option.label === 'string' ? option.label : String(option.value)
  return label.toLowerCase().includes(input.trim().toLowerCase())
}

export function Select({
  value,
  defaultValue,
  options = [],
  placeholder = '请选择',
  disabled,
  loading = false,
  allowClear = false,
  showSearch = false,
  size,
  status,
  open: openProp,
  defaultOpen = false,
  onDropdownVisibleChange,
  className,
  style,
  onChange,
  onClear,
  onSearch,
  filterOption = true,
  notFoundContent = '暂无数据',
  listHeight = 220,
}: SelectProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize(size ?? ctxSize)
  const [inner, setInner] = useState(defaultValue)
  const [innerOpen, setInnerOpen] = useState(defaultOpen)
  const [keyword, setKeyword] = useState('')
  const current = value ?? inner
  const open = openProp ?? innerOpen
  const selected = options.find((o) => o.value === current)
  const ref = useRef<HTMLDivElement>(null)

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setInnerOpen(next)
    onDropdownVisibleChange?.(next)
    if (!next) setKeyword('')
  }

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) {
        if (openProp === undefined) setInnerOpen(false)
        onDropdownVisibleChange?.(false)
        setKeyword('')
      }
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [openProp, onDropdownVisibleChange])

  const filtered = useMemo(() => {
    if (!showSearch || !keyword || filterOption === false) return options
    if (typeof filterOption === 'function') {
      return options.filter((o) => filterOption(keyword, o))
    }
    return options.filter((o) => defaultFilter(keyword, o))
  }, [options, showSearch, keyword, filterOption])

  const showClear = allowClear && !disabled && current != null && current !== ''

  return (
    <div
      ref={ref}
      className={cn(
        'mochi-select',
        `mochi-select--${finalSize}`,
        open && 'is-open',
        disabled && 'is-disabled',
        loading && 'is-loading',
        status && `is-${status}`,
        className,
      )}
      style={style}
    >
      <button
        type="button"
        className="mochi-select__trigger"
        disabled={disabled || loading}
        aria-expanded={open}
        aria-haspopup="listbox"
        onClick={() => {
          if (disabled || loading) return
          setOpen(!open)
        }}
      >
        <span className={cn('mochi-select__value', !selected && 'is-placeholder')}>
          {selected?.label ?? placeholder}
        </span>
        <span className="mochi-select__suffix">
          {loading ? <span className="mochi-select__spinner" /> : null}
          {showClear ? (
            <span
              className="mochi-select__clear"
              role="button"
              tabIndex={-1}
              aria-label="清除"
              onClick={(e) => {
                e.stopPropagation()
                if (value === undefined) setInner(undefined)
                onChange?.(undefined, undefined)
                onClear?.()
              }}
            >
              ×
            </span>
          ) : null}
          <span className="mochi-select__arrow">▾</span>
        </span>
      </button>
      {open ? (
        <div className="mochi-select__dropdown" role="listbox" style={{ maxHeight: listHeight }}>
          {showSearch ? (
            <div className="mochi-select__search">
              <input
                className="mochi-select__search-input"
                value={keyword}
                placeholder="搜索…"
                autoFocus
                onChange={(e) => {
                  setKeyword(e.target.value)
                  onSearch?.(e.target.value)
                }}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          ) : null}
          {filtered.length === 0 ? (
            <div className="mochi-select__empty">{notFoundContent}</div>
          ) : (
            filtered.map((opt) => (
              <button
                key={String(opt.value)}
                type="button"
                role="option"
                aria-selected={opt.value === current}
                disabled={opt.disabled}
                className={cn(
                  'mochi-select__option',
                  opt.value === current && 'is-active',
                  opt.disabled && 'is-disabled',
                )}
                onClick={() => {
                  if (value === undefined) setInner(opt.value)
                  onChange?.(opt.value, opt)
                  setOpen(false)
                }}
              >
                {opt.label}
              </button>
            ))
          )}
        </div>
      ) : null}
    </div>
  )
}
