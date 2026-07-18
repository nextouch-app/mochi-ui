import { useState } from 'react'
import { cn, type TabBarProps } from '@mochi-ui/core'

export function TabBar({
  activeKey,
  defaultActiveKey,
  items = [],
  className,
  style,
  onChange,
}: TabBarProps) {
  const [inner, setInner] = useState(defaultActiveKey ?? items[0]?.key ?? '')
  const current = activeKey ?? inner

  return (
    <nav className={cn('mochi-tab-bar', className)} style={style} role="tablist">
      {items.map((item) => (
        <button
          key={item.key}
          type="button"
          role="tab"
          aria-selected={item.key === current}
          className={cn('mochi-tab-bar__item', item.key === current && 'is-active')}
          onClick={() => {
            if (activeKey === undefined) setInner(item.key)
            onChange?.(item.key)
          }}
        >
          {item.icon ? <span className="mochi-tab-bar__icon">{item.icon}</span> : null}
          <span className="mochi-tab-bar__title">{item.title}</span>
        </button>
      ))}
    </nav>
  )
}
