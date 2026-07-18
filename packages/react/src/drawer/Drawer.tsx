import { useEffect, useRef, useState } from 'react'
import { cn, type DrawerProps } from '@nextouch-app/mochi-core'
import './drawer.css'

export function Drawer({
  open = false,
  title,
  placement = 'right',
  width = 378,
  height = 378,
  mask = true,
  maskClosable = true,
  closable = true,
  destroyOnClose = false,
  footer,
  extra,
  zIndex,
  onClose,
  afterOpenChange,
  className,
  style,
  children,
}: DrawerProps) {
  const [mounted, setMounted] = useState(open)
  const prevOpen = useRef(open)

  useEffect(() => {
    if (open) setMounted(true)
    else if (destroyOnClose) setMounted(false)
  }, [open, destroyOnClose])

  useEffect(() => {
    if (prevOpen.current !== open) {
      afterOpenChange?.(open)
      prevOpen.current = open
    }
  }, [open, afterOpenChange])

  if (!open && (destroyOnClose || !mounted)) return null
  if (!open) return null

  const sizeStyle =
    placement === 'left' || placement === 'right' ? { width } : { height }

  return (
    <div className="mochi-drawer-root" style={{ zIndex }}>
      {mask ? (
        <div
          className="mochi-drawer__mask"
          onClick={() => {
            if (maskClosable) onClose?.()
          }}
        />
      ) : null}
      <aside
        className={cn('mochi-drawer', `mochi-drawer--${placement}`, className)}
        style={{ ...sizeStyle, ...style }}
        role="dialog"
        aria-modal="true"
      >
        <div className="mochi-drawer__header">
          <div className="mochi-drawer__title">{title}</div>
          <div className="mochi-drawer__header-extra">
            {extra}
            {closable ? (
              <button type="button" className="mochi-drawer__close" onClick={onClose} aria-label="关闭">
                ×
              </button>
            ) : null}
          </div>
        </div>
        <div className="mochi-drawer__body">{children}</div>
        {footer ? <div className="mochi-drawer__footer">{footer}</div> : null}
      </aside>
    </div>
  )
}
