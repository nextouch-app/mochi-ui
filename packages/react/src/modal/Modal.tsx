import { useEffect, useRef, type CSSProperties } from 'react'
import { cn, type ModalProps } from '@mochi-ui/core'
import { Button } from '../button/Button'
import './modal.css'

/** Cloud-shaped dialog panel */
export function Modal({
  open = false,
  title,
  onClose,
  onCancel,
  onOk,
  okText = '确定',
  cancelText = '取消',
  confirmLoading = false,
  okButtonProps,
  cancelButtonProps,
  footer,
  maskClosable = true,
  closable = true,
  mask = true,
  width,
  centered = true,
  destroyOnClose: _destroyOnClose = false,
  afterClose,
  zIndex,
  keyboard = true,
  className,
  style,
  children,
}: ModalProps) {
  const wasOpen = useRef(open)

  const handleClose = () => {
    onCancel?.()
    onClose?.()
  }

  useEffect(() => {
    if (!open || !keyboard) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel?.()
        onClose?.()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, keyboard, onClose, onCancel])

  useEffect(() => {
    if (wasOpen.current && !open) afterClose?.()
    wasOpen.current = open
  }, [open, afterClose])

  if (!open) return null

  const panelStyle: CSSProperties = {
    ...style,
    ...(width != null ? { width: typeof width === 'number' ? `${width}px` : width } : null),
  }

  return (
    <div
      className={cn('mochi-modal-root', centered && 'is-centered')}
      role="dialog"
      aria-modal="true"
      style={zIndex != null ? { zIndex } : undefined}
    >
      <svg className="mochi-modal__defs" width="0" height="0" aria-hidden>
        <defs>
          <clipPath id="mochi-modal-clip" clipPathUnits="objectBoundingBox">
            <path d="M0.12,0.08 C0.18,0.02,0.35,0,0.5,0 C0.65,0,0.82,0.02,0.88,0.08 C0.96,0.16,1,0.28,1,0.42 C1,0.58,0.97,0.72,0.9,0.82 C0.84,0.92,0.7,1,0.5,1 C0.3,1,0.16,0.92,0.1,0.82 C0.03,0.72,0,0.58,0,0.42 C0,0.28,0.04,0.16,0.12,0.08 Z" />
          </clipPath>
        </defs>
      </svg>
      {mask ? (
        <div
          className="mochi-modal__mask"
          onClick={() => {
            if (maskClosable) handleClose()
          }}
        />
      ) : null}
      <div className={cn('mochi-modal', className)} style={panelStyle}>
        <span className="mochi-modal__cloud mochi-modal__cloud--l" aria-hidden />
        <span className="mochi-modal__cloud mochi-modal__cloud--r" aria-hidden />
        {closable ? (
          <button type="button" className="mochi-modal__close" aria-label="关闭" onClick={handleClose}>
            ×
          </button>
        ) : null}
        {title ? <div className="mochi-modal__title">{title}</div> : null}
        <div className="mochi-modal__body">{children}</div>
        {footer === null ? null : (
          <div className="mochi-modal__footer">
            {footer ?? (
              <>
                <Button type="default" onClick={handleClose} {...cancelButtonProps}>
                  {cancelText}
                </Button>
                <Button type="primary" loading={confirmLoading} onClick={onOk} {...okButtonProps}>
                  {okText}
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
