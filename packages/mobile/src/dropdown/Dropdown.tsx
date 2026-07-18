import { useEffect, useRef, useState, cloneElement, isValidElement, type MouseEvent as ReactMouseEvent, type ReactElement } from 'react'
import { cn, type DropdownProps } from '@mochi-ui/core'
import './dropdown.css'

/**
 * Mobile Dropdown：仅支持点击触发，菜单以底部面板呈现（不使用 hover）。
 * Web 端请用 `@mochi-ui/react` 的悬浮下拉菜单。
 */
export function Dropdown({
  items = [],
  disabled = false,
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
            {items.map((item) => (
              <button
                key={item.key}
                type="button"
                role="menuitem"
                disabled={item.disabled}
                className={cn('mochi-dropdown-sheet__item', item.danger && 'is-danger', item.disabled && 'is-disabled')}
                onClick={() => {
                  item.onClick?.()
                  set(false)
                }}
              >
                {item.label}
              </button>
            ))}
            <button type="button" className="mochi-dropdown-sheet__cancel" onClick={() => set(false)}>
              取消
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
