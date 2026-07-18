import { useState } from 'react'
import { cn, type CollapseProps } from '@nextouch-app/mochi-core'

function toArray(v?: string | string[]) {
  if (v == null) return [] as string[]
  return Array.isArray(v) ? v : [v]
}

export function Collapse({
  items = [],
  activeKey,
  defaultActiveKey,
  accordion = false,
  className,
  style,
  onChange,
}: CollapseProps) {
  const [inner, setInner] = useState(() => toArray(defaultActiveKey))
  const keys = activeKey !== undefined ? toArray(activeKey) : inner

  const toggle = (key: string) => {
    let next: string[]
    if (accordion) {
      next = keys.includes(key) ? [] : [key]
    } else {
      next = keys.includes(key) ? keys.filter((k) => k !== key) : [...keys, key]
    }
    if (activeKey === undefined) setInner(next)
    onChange?.(next)
  }

  return (
    <div className={cn('mochi-collapse', className)} style={style}>
      {items.map((item) => {
        const open = keys.includes(item.key)
        return (
          <div key={item.key} className={cn('mochi-collapse__panel', open && 'is-open')}>
            <button type="button" className="mochi-collapse__header" onClick={() => toggle(item.key)}>
              <span>{item.label}</span>
              <span className={cn('mochi-collapse__arrow', open && 'is-open')}>?</span>
            </button>
            {open ? <div className="mochi-collapse__body">{item.children}</div> : null}
          </div>
        )
      })}
    </div>
  )
}
