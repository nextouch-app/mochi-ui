import { cn, type DrawerProps } from '@mochi-ui/core'

export function Drawer({
  open = false,
  title,
  placement = 'right',
  onClose,
  className,
  style,
  children,
}: DrawerProps) {
  if (!open) return null

  return (
    <div className="mochi-drawer-root">
      <div className="mochi-drawer__mask" onClick={onClose} />
      <aside
        className={cn('mochi-drawer', `mochi-drawer--${placement}`, className)}
        style={style}
        role="dialog"
        aria-modal="true"
      >
        <div className="mochi-drawer__header">
          <div className="mochi-drawer__title">{title}</div>
          <button type="button" className="mochi-drawer__close" onClick={onClose} aria-label="关闭">
            ×
          </button>
        </div>
        <div className="mochi-drawer__body">{children}</div>
      </aside>
    </div>
  )
}
