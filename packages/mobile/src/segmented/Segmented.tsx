import { useState } from 'react'
import { cn, normalizeSize, type SegmentedOption, type SegmentedProps } from '@nextouch-app/mochi-core'
import { useConfig } from '../config-provider/ConfigProvider'
import './segmented.css'

function normalizeOptions(options: SegmentedProps['options'] = []): SegmentedOption[] {
  return options.map((opt) =>
    typeof opt === 'object' ? opt : { label: String(opt), value: opt },
  )
}

export function Segmented({
  options = [],
  value,
  defaultValue,
  disabled = false,
  size,
  block = false,
  className,
  style,
  onChange,
}: SegmentedProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize(size ?? ctxSize)
  const items = normalizeOptions(options)
  const [inner, setInner] = useState<string | number | undefined>(
    defaultValue ?? items[0]?.value,
  )
  const current = value ?? inner

  return (
    <div
      className={cn(
        'mochi-segmented',
        `mochi-segmented--${finalSize}`,
        block && 'is-block',
        disabled && 'is-disabled',
        className,
      )}
      style={style}
      role="tablist"
    >
      {items.map((item) => {
        const active = item.value === current
        return (
          <button
            key={String(item.value)}
            type="button"
            role="tab"
            aria-selected={active}
            disabled={disabled || item.disabled}
            className={cn('mochi-segmented__item', active && 'is-active')}
            onClick={() => {
              if (value === undefined) setInner(item.value)
              onChange?.(item.value)
            }}
          >
            {item.icon ? <span className="mochi-segmented__icon">{item.icon}</span> : null}
            <span>{item.label}</span>
          </button>
        )
      })}
    </div>
  )
}
