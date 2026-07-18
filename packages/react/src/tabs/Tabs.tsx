import { useState } from 'react'
import { cn, type TabsProps } from '@nextouch-app/mochi-core'

export function Tabs({
  activeKey,
  defaultActiveKey,
  items = [],
  className,
  style,
  children,
  onChange,
}: TabsProps) {
  const first = items[0]?.key
  const [inner, setInner] = useState(defaultActiveKey ?? first ?? '')
  const current = activeKey ?? inner
  const active = items.find((i) => i.key === current)

  return (
    <div className={cn('mochi-tabs', className)} style={style}>
      <div className="mochi-tabs__nav" role="tablist">
        {items.map((item) => (
          <button
            key={item.key}
            type="button"
            role="tab"
            aria-selected={item.key === current}
            className={cn('mochi-tabs__tab', item.key === current && 'is-active')}
            onClick={() => {
              if (activeKey === undefined) setInner(item.key)
              onChange?.(item.key)
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mochi-tabs__content" role="tabpanel">
        {active?.children ?? children}
      </div>
    </div>
  )
}
