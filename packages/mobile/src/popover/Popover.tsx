import { useEffect, useState, cloneElement, isValidElement, type MouseEvent as ReactMouseEvent, type ReactElement } from 'react'
import { cn, type PopoverProps } from '@nextouch-app/mochi-core'
import './popover.css'

/**
 * Mobile Popover：点击打开底部信息面板（无 hover）。
 * Web 端请用 `@nextouch-app/mochi-react` 的气泡定位版。
 */
export function Popover({
  content,
  title,
  open: openProp,
  defaultOpen = false,
  className,
  style,
  children,
  onOpenChange,
}: PopoverProps) {
  const [inner, setInner] = useState(defaultOpen)
  const open = openProp ?? inner

  const set = (next: boolean) => {
    if (openProp === undefined) setInner(next)
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
    : children

  return (
    <div className={cn('mochi-popover', open && 'is-open', className)} style={style}>
      <div className="mochi-popover__trigger">{child}</div>
      {open ? (
        <div className="mochi-popover-sheet" role="dialog" aria-modal="true">
          <div className="mochi-popover-sheet__mask" onClick={() => set(false)} />
          <div className="mochi-popover-sheet__panel">
            {title ? <div className="mochi-popover-sheet__title">{title}</div> : null}
            <div className="mochi-popover-sheet__content">{content}</div>
            <button type="button" className="mochi-popover-sheet__ok" onClick={() => set(false)}>
              知道了
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}
