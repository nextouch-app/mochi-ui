import { useState } from 'react'
import { cn, type SearchBarProps } from '@mochi-ui/core'

export function SearchBar({
  value,
  defaultValue = '',
  placeholder = '搜索',
  disabled,
  className,
  style,
  onChange,
  onSearch,
}: SearchBarProps) {
  const [inner, setInner] = useState(defaultValue)
  const val = value ?? inner

  return (
    <div className={cn('mochi-search-bar', disabled && 'is-disabled', className)} style={style}>
      <span className="mochi-search-bar__icon" aria-hidden>
        ⌕
      </span>
      <input
        className="mochi-search-bar__input"
        value={val}
        disabled={disabled}
        placeholder={placeholder}
        onChange={(e) => {
          if (value === undefined) setInner(e.target.value)
          onChange?.(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') onSearch?.(val)
        }}
      />
      {val ? (
        <button
          type="button"
          className="mochi-search-bar__clear"
          aria-label="清除"
          onClick={() => {
            if (value === undefined) setInner('')
            onChange?.('')
          }}
        >
          ×
        </button>
      ) : null}
    </div>
  )
}
