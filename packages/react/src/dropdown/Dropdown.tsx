import {
  useEffect,
  useRef,
  useState,
  cloneElement,
  isValidElement,
  type MouseEvent as ReactMouseEvent,
  type ReactElement,
} from 'react'
import { cn, type DropdownProps } from '@mochi-ui/core'
import './dropdown.css'

export function Dropdown({
  items = [],
  trigger = 'click',
  disabled = false,
  placement = 'bottomLeft',
  className,
  style,
  children,
  onOpenChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const set = (next: boolean) => {
    if (disabled) return
    setOpen(next)
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
          {items.map((item) => (
            <button
              key={item.key}
              type="button"
              role="menuitem"
              disabled={item.disabled}
              className={cn('mochi-dropdown__item', item.danger && 'is-danger')}
              onClick={() => {
                item.onClick?.()
                set(false)
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}
