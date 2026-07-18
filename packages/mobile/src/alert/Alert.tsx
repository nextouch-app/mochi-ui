import { useState } from 'react'
import { cn, type AlertProps } from '@nextouch-app/mochi-core'

export function Alert({
  type = 'info',
  message,
  description,
  closable,
  onClose,
  className,
  style,
  children,
}: AlertProps) {
  const [visible, setVisible] = useState(true)
  if (!visible) return null

  return (
    <div className={cn('mochi-alert', `mochi-alert--${type}`, className)} style={style} role="alert">
      <div className="mochi-alert__content">
        {message ? <div className="mochi-alert__message">{message}</div> : null}
        {description ? <div className="mochi-alert__desc">{description}</div> : null}
        {children}
      </div>
      {closable ? (
        <button
          type="button"
          className="mochi-alert__close"
          aria-label="关闭"
          onClick={() => {
            setVisible(false)
            onClose?.()
          }}
        >
          ×
        </button>
      ) : null}
    </div>
  )
}
