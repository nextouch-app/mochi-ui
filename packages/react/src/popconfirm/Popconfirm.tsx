import { useState, cloneElement, isValidElement, type MouseEvent as ReactMouseEvent, type ReactElement } from 'react'
import { cn, type PopconfirmProps } from '@nextouch-app/mochi-core'
import { Button } from '../button/Button'
import { Popover } from '../popover/Popover'
import './popconfirm.css'

export function Popconfirm({
  title = '确认操作？',
  description,
  open: openProp,
  okText = '确定',
  cancelText = '取消',
  className,
  style,
  children,
  onConfirm,
  onCancel,
  onOpenChange,
}: PopconfirmProps) {
  const [inner, setInner] = useState(false)
  const open = openProp ?? inner

  const set = (next: boolean) => {
    if (openProp === undefined) setInner(next)
    onOpenChange?.(next)
  }

  const content = (
    <div className="mochi-popconfirm">
      <div className="mochi-popconfirm__title">{title}</div>
      {description ? <div className="mochi-popconfirm__desc">{description}</div> : null}
      <div className="mochi-popconfirm__actions">
        <Button
          size="small"
          onClick={() => {
            onCancel?.()
            set(false)
          }}
        >
          {cancelText}
        </Button>
        <Button
          type="primary"
          size="small"
          onClick={() => {
            onConfirm?.()
            set(false)
          }}
        >
          {okText}
        </Button>
      </div>
    </div>
  )

  const child = isValidElement(children)
    ? cloneElement(children as ReactElement<{ onClick?: (e: ReactMouseEvent) => void }>, {
        onClick: (e: ReactMouseEvent) => {
          ;(children as ReactElement<{ onClick?: (e: ReactMouseEvent) => void }>).props.onClick?.(e)
          set(true)
        },
      })
    : children

  return (
    <Popover
      open={open}
      trigger="click"
      placement="top"
      content={content}
      className={cn(className)}
      style={style}
      onOpenChange={set}
    >
      {child}
    </Popover>
  )
}
