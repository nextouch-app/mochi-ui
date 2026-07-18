import {
  useEffect,
  useRef,
  useState,
  cloneElement,
  isValidElement,
  type MouseEvent as ReactMouseEvent,
  type ReactElement,
} from 'react'
import { cn, type DropdownItem, type DropdownProps } from '@nextouch-app/mochi-core'
import './dropdown.css'

function SubMenuItem({
  item,
  trigger,
  onPick,
}: {
  item: DropdownItem
  trigger: 'click' | 'hover'
  onPick: () => void
}) {
  const [open, setOpen] = useState(false)

  return (
    <div
      className={cn('mochi-dropdown__submenu', open && 'is-open')}
      onMouseEnter={() => trigger === 'hover' && setOpen(true)}
      onMouseLeave={() => trigger === 'hover' && setOpen(false)}
    >
      <button
        type="button"
        role="menuitem"
        disabled={item.disabled}
        className={cn('mochi-dropdown__item', 'has-children', item.danger && 'is-danger')}
        onClick={(e) => {
          e.stopPropagation()
          if (trigger === 'click') setOpen(!open)
        }}
      >
        {item.icon ? <span className="mochi-dropdown__item-icon">{item.icon}</span> : null}
        <span className="mochi-dropdown__item-label">{item.label}</span>
        <span className="mochi-dropdown__submenu-arrow">›</span>
      </button>
      {open ? (
        <div className="mochi-dropdown__submenu-panel" role="menu">
          {renderItems(item.children ?? [], onPick, trigger)}
        </div>
      ) : null}
    </div>
  )
}

function renderItems(items: DropdownItem[], onPick: () => void, trigger: 'click' | 'hover') {
  return items.map((item) => {
    if (item.type === 'divider') {
      return <div key={item.key} className="mochi-dropdown__divider" role="separator" />
    }
    if (item.children?.length) {
      return <SubMenuItem key={item.key} item={item} trigger={trigger} onPick={onPick} />
    }
    return (
      <button
        key={item.key}
        type="button"
        role="menuitem"
        disabled={item.disabled}
        className={cn('mochi-dropdown__item', item.danger && 'is-danger')}
        onClick={() => {
          item.onClick?.()
          onPick()
        }}
      >
        {item.icon ? <span className="mochi-dropdown__item-icon">{item.icon}</span> : null}
        {item.label}
      </button>
    )
  })
}

export function Dropdown({
  items = [],
  trigger = 'click',
  disabled = false,
  placement = 'bottomLeft',
  open: openProp,
  defaultOpen = false,
  className,
  style,
  children,
  onOpenChange,
}: DropdownProps) {
  const [innerOpen, setInnerOpen] = useState(defaultOpen)
  const open = openProp ?? innerOpen
  const ref = useRef<HTMLDivElement>(null)

  const set = (next: boolean) => {
    if (disabled) return
    if (openProp === undefined) setInnerOpen(next)
    onOpenChange?.(next)
  }

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) set(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const child = isValidElement(children)
    ? cloneElement(children as ReactElement<{ onClick?: (e: ReactMouseEvent) => void }>, {
        onClick: (e: ReactMouseEvent) => {
          ;(children as ReactElement<{ onClick?: (e: ReactMouseEvent) => void }>).props.onClick?.(e)
          if (trigger === 'click') set(!open)
        },
      })
    : children

  return (
    <div
      ref={ref}
      className={cn('mochi-dropdown', open && 'is-open', disabled && 'is-disabled', className)}
      style={style}
      onMouseEnter={() => trigger === 'hover' && set(true)}
      onMouseLeave={() => trigger === 'hover' && set(false)}
    >
      <div className="mochi-dropdown__trigger">{child}</div>
      {open ? (
        <div className={cn('mochi-dropdown__menu', `mochi-dropdown__menu--${placement}`)} role="menu">
          {renderItems(items, () => set(false), trigger)}
        </div>
      ) : null}
    </div>
  )
}
