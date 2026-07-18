import { useState } from 'react'
import { cn, type MenuItemType, type MenuProps } from '@nextouch-app/mochi-core'
import './menu.css'

function Item({
  item,
  selected,
  open,
  mode,
  depth,
  onSelect,
  onToggle,
}: {
  item: MenuItemType
  selected: Set<string>
  open: Set<string>
  mode: MenuProps['mode']
  depth: number
  onSelect: (key: string) => void
  onToggle: (key: string) => void
}) {
  if (item.type === 'divider') {
    return <div key={item.key} className="mochi-menu__divider" role="separator" />
  }
  if (item.type === 'group') {
    return (
      <div key={item.key} className="mochi-menu__group">
        <div className="mochi-menu__group-title">{item.label}</div>
        <div className="mochi-menu__group-list">
          {(item.children ?? []).map((child) => (
            <Item
              key={child.key}
              item={child}
              selected={selected}
              open={open}
              mode={mode}
              depth={depth}
              onSelect={onSelect}
              onToggle={onToggle}
            />
          ))}
        </div>
      </div>
    )
  }

  const hasChildren = !!item.children?.length
  const isOpen = open.has(item.key)
  const isSelected = selected.has(item.key)

  return (
    <div key={item.key} className={cn('mochi-menu__node', hasChildren && 'has-children', isOpen && 'is-open')}>
      <button
        type="button"
        role="menuitem"
        disabled={item.disabled}
        className={cn(
          'mochi-menu__item',
          isSelected && 'is-selected',
          item.danger && 'is-danger',
        )}
        style={{ paddingLeft: 12 + depth * 14 }}
        onClick={() => {
          if (hasChildren) onToggle(item.key)
          else onSelect(item.key)
        }}
      >
        {item.icon ? <span className="mochi-menu__icon">{item.icon}</span> : null}
        <span className="mochi-menu__label">{item.label}</span>
        {hasChildren ? <span className="mochi-menu__arrow">{isOpen ? '▾' : '▸'}</span> : null}
      </button>
      {hasChildren && isOpen ? (
        <div className="mochi-menu__submenu">
          {item.children!.map((child) => (
            <Item
              key={child.key}
              item={child}
              selected={selected}
              open={open}
              mode={mode}
              depth={depth + 1}
              onSelect={onSelect}
              onToggle={onToggle}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export function Menu({
  mode = 'vertical',
  items = [],
  selectedKeys,
  defaultSelectedKeys = [],
  openKeys,
  defaultOpenKeys = [],
  className,
  style,
  onClick,
  onSelect,
  onOpenChange,
}: MenuProps) {
  const [innerSelected, setInnerSelected] = useState(defaultSelectedKeys)
  const [innerOpen, setInnerOpen] = useState(defaultOpenKeys)
  const selected = new Set(selectedKeys ?? innerSelected)
  const open = new Set(openKeys ?? innerOpen)

  const select = (key: string) => {
    const next = [key]
    if (selectedKeys === undefined) setInnerSelected(next)
    onClick?.({ key })
    onSelect?.({ key, selectedKeys: next })
  }

  const toggle = (key: string) => {
    const next = new Set(open)
    if (next.has(key)) next.delete(key)
    else next.add(key)
    const arr = Array.from(next)
    if (openKeys === undefined) setInnerOpen(arr)
    onOpenChange?.(arr)
  }

  return (
    <nav
      className={cn('mochi-menu', `mochi-menu--${mode}`, className)}
      style={style}
      role="menu"
    >
      {items.map((item) => (
        <Item
          key={item.key}
          item={item}
          selected={selected}
          open={open}
          mode={mode}
          depth={0}
          onSelect={select}
          onToggle={toggle}
        />
      ))}
    </nav>
  )
}
