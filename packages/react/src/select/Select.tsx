import { useEffect, useMemo, useRef, useState } from 'react'
import { cn, normalizeSize, type SelectOption, type SelectProps } from '@mochi-ui/core'
import { useConfig } from '../config-provider/ConfigProvider'
import './select.css'

function defaultFilter(input: string, option: SelectOption) {
  const label = typeof option.label === 'string' ? option.label : String(option.value)
  return label.toLowerCase().includes(input.trim().toLowerCase())
}

function toArray(value: string | number | Array<string | number> | undefined): Array<string | number> {
  if (value == null) return []
  return Array.isArray(value) ? value : [value]
}

export function Select({
  mode,
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
  maxTagCount,
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
  const multiple = mode === 'multiple' || mode === 'tags'
  const [inner, setInner] = useState<string | number | Array<string | number> | undefined>(defaultValue)
  const [innerOpen, setInnerOpen] = useState(defaultOpen)
  const [keyword, setKeyword] = useState('')
  const current = value ?? inner
  const open = openProp ?? innerOpen
  const selectedValues = multiple ? toArray(current) : []
  const selected = multiple ? null : options.find((o) => o.value === current)
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

  const hasValue = multiple ? selectedValues.length > 0 : current != null && current !== ''
  const showClear = allowClear && !disabled && hasValue

  const selectedOptions = multiple
    ? selectedValues
        .map((v) => options.find((o) => o.value === v))
        .filter((o): o is SelectOption => o != null)
    : []

  const visibleTags =
    maxTagCount === 'responsive' || maxTagCount == null
      ? selectedOptions
      : selectedOptions.slice(0, maxTagCount)
  const hiddenCount =
    maxTagCount != null && maxTagCount !== 'responsive'
      ? Math.max(0, selectedOptions.length - maxTagCount)
      : 0

  const updateMultiple = (next: Array<string | number>) => {
    if (value === undefined) setInner(next)
    const nextOptions = next
      .map((v) => options.find((o) => o.value === v))
      .filter((o): o is SelectOption => o != null)
    onChange?.(next, nextOptions)
  }

  const toggleOption = (opt: SelectOption) => {
    if (multiple) {
      const exists = selectedValues.includes(opt.value)
      const next = exists ? selectedValues.filter((v) => v !== opt.value) : [...selectedValues, opt.value]
      updateMultiple(next)
      return
    }
    if (value === undefined) setInner(opt.value)
    onChange?.(opt.value, opt)
    setOpen(false)
  }

  const isSelected = (opt: SelectOption) =>
    multiple ? selectedValues.includes(opt.value) : opt.value === current

  return (
    <div
      ref={ref}
      className={cn(
        'mochi-select',
        `mochi-select--${finalSize}`,
        multiple && 'mochi-select--multiple',
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
        {multiple ? (
          <span className={cn('mochi-select__tags', selectedOptions.length === 0 && 'is-placeholder')}>
            {selectedOptions.length === 0 ? (
              placeholder
            ) : (
              <>
                {visibleTags.map((opt) => (
                  <span key={String(opt.value)} className="mochi-select__tag">
                    {opt.label}
                    <span
                      className="mochi-select__tag-close"
                      role="button"
                      aria-label="移除"
                      onClick={(e) => {
                        e.stopPropagation()
                        updateMultiple(selectedValues.filter((v) => v !== opt.value))
                      }}
                    >
                      ×
                    </span>
                  </span>
                ))}
                {hiddenCount > 0 ? <span className="mochi-select__tag-more">+{hiddenCount}</span> : null}
              </>
            )}
          </span>
        ) : (
          <span className={cn('mochi-select__value', !selected && 'is-placeholder')}>
            {selected?.label ?? placeholder}
          </span>
        )}
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
                if (value === undefined) setInner(multiple ? [] : undefined)
                onChange?.(multiple ? [] : undefined, multiple ? [] : undefined)
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
                aria-selected={isSelected(opt)}
                disabled={opt.disabled}
                className={cn(
                  'mochi-select__option',
                  isSelected(opt) && 'is-active',
                  opt.disabled && 'is-disabled',
                )}
                onClick={() => {
                  if (opt.disabled) return
                  toggleOption(opt)
                }}
              >
                {multiple ? (
                  <span className="mochi-select__option-check">{isSelected(opt) ? '✓' : ''}</span>
                ) : null}
                {opt.label}
              </button>
            ))
          )}
        </div>
      ) : null}
    </div>
  )
}
