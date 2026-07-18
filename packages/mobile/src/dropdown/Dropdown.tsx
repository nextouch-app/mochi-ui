import { useEffect, useRef, useState, cloneElement, isValidElement, type MouseEvent as ReactMouseEvent, type ReactElement } from 'react'
import { cn, type DropdownItem, type DropdownProps } from '@mochi-ui/core'
import './dropdown.css'

function MobileAccordionItem({
  item,
  onPick,
  itemClass,
}: {
  item: DropdownItem
  onPick: () => void
  itemClass: string
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={cn('mochi-dropdown-sheet__group', expanded && 'is-expanded')}>
      <button
        type="button"
        role="menuitem"
        disabled={item.disabled}
        className={cn(itemClass, item.danger && 'is-danger', item.disabled && 'is-disabled', 'has-children')}
        onClick={() => setExpanded(!expanded)}
      >
        {item.icon ? <span className="mochi-dropdown__item-icon">{item.icon}</span> : null}
        <span className="mochi-dropdown-sheet__item-label">{item.label}</span>
        <span className="mochi-dropdown-sheet__item-arrow">{expanded ? '▾' : '▸'}</span>
      </button>
      {expanded ? (
        <div className="mochi-dropdown-sheet__submenu">
          {renderItems(item.children ?? [], onPick, itemClass)}
        </div>
      ) : null}
    </div>
  )
}

function renderItems(items: DropdownItem[], onPick: () => void, itemClass: string) {
  return items.map((item) => {
    if (item.type === 'divider') {
      return <div key={item.key} className="mochi-dropdown-sheet__divider" role="separator" />
    }
    if (item.children?.length) {
      return <MobileAccordionItem key={item.key} item={item} onPick={onPick} itemClass={itemClass} />
    }
    return (
      <button
        key={item.key}
        type="button"
        role="menuitem"
        disabled={item.disabled}
        className={cn(itemClass, item.danger && 'is-danger', item.disabled && 'is-disabled')}
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

/**
 * Mobile Dropdown：仅支持点击触发，菜单以底部面板呈现（不使用 hover）。
 */
export function Dropdown({
  items = [],
  disabled = false,
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
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const child = isValidElement(children)
    ? cloneElement(children as ReactElement<{ onClick?: (e: ReactMouseEvent) => void }>, {
        onClick: (e: ReactMouseEvent) => {
          ;(children as ReactElement<{ onClick?: (e: ReactMouseEvent) => void }>).props.onClick?.(e)
          set(!open)
        },
      })
    : (
      <button type="button" className="mochi-dropdown__fallback" disabled={disabled} onClick={() => set(!open)}>
        {children}
      </button>
    )

  return (
    <div ref={ref} className={cn('mochi-dropdown', open && 'is-open', disabled && 'is-disabled', className)} style={style}>
      <div className="mochi-dropdown__trigger">{child}</div>
      {open ? (
        <div className="mochi-dropdown-sheet" role="dialog" aria-modal="true">
          <div className="mochi-dropdown-sheet__mask" onClick={() => set(false)} />
          <div className="mochi-dropdown-sheet__panel" role="menu">
            {renderItems(items, () => set(false), 'mochi-dropdown-sheet__item')}
            <button type="button" className="mochi-dropdown-sheet__cancel" onClick={() => set(false)}>
              取消
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
