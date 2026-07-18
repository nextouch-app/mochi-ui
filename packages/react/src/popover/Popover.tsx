import {
  useEffect,
  useRef,
  useState,
  cloneElement,
  isValidElement,
  type MouseEvent as ReactMouseEvent,
  type ReactElement,
} from 'react'
import { cn, type PopoverProps } from '@mochi-ui/core'
import './popover.css'

export function Popover({
  content,
  title,
  open: openProp,
  defaultOpen = false,
  trigger = 'click',
  placement = 'top',
  className,
  style,
  children,
  onOpenChange,
}: PopoverProps) {
  const [inner, setInner] = useState(defaultOpen)
  const open = openProp ?? inner
  const ref = useRef<HTMLDivElement>(null)

  const set = (next: boolean) => {
    if (openProp === undefined) setInner(next)
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
      className={cn('mochi-popover', open && 'is-open', className)}
      style={style}
      onMouseEnter={() => trigger === 'hover' && set(true)}
      onMouseLeave={() => trigger === 'hover' && set(false)}
    >
      <div className="mochi-popover__trigger">{child}</div>
      {open ? (
        <div className={cn('mochi-popover__panel', `mochi-popover__panel--${placement}`)} role="dialog">
          {title ? <div className="mochi-popover__title">{title}</div> : null}
          <div className="mochi-popover__content">{content}</div>
        </div>
      ) : null}
    </div>
  )
}
