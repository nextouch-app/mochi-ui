import { useState, type ReactNode } from 'react'
import { cn, type FloatButtonGroupProps, type FloatButtonProps } from '@mochi-ui/core'
import './float-button.css'

function FloatButtonInner({
  icon = '☁',
  description,
  type = 'default',
  shape = 'circle',
  href,
  target,
  tooltip,
  className,
  style,
  onClick,
  children,
}: FloatButtonProps) {
  const content = (
    <>
      <span className="mochi-float-btn__icon">{icon}</span>
      {description ? <span className="mochi-float-btn__desc">{description}</span> : null}
      {children}
    </>
  )

  const cls = cn(
    'mochi-float-btn',
    `mochi-float-btn--${type}`,
    `mochi-float-btn--${shape}`,
    description && 'is-with-desc',
    className,
  )

  if (href) {
    return (
      <a
        className={cls}
        style={style}
        href={href}
        target={target}
        title={typeof tooltip === 'string' ? tooltip : undefined}
        onClick={onClick}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={cls}
      style={style}
      title={typeof tooltip === 'string' ? tooltip : undefined}
      onClick={onClick}
    >
      {content}
    </button>
  )
}

export function FloatButtonGroup({
  trigger = 'click',
  open: openProp,
  defaultOpen = false,
  shape = 'circle',
  type = 'primary',
  icon = '+',
  className,
  style,
  children,
  onOpenChange,
}: FloatButtonGroupProps) {
  const [innerOpen, setInnerOpen] = useState(defaultOpen)
  const open = openProp ?? innerOpen

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setInnerOpen(next)
    onOpenChange?.(next)
  }

  return (
    <div
      className={cn('mochi-float-btn-group', open && 'is-open', className)}
      style={style}
      onMouseEnter={() => trigger === 'hover' && setOpen(true)}
      onMouseLeave={() => trigger === 'hover' && setOpen(false)}
    >
      <div className="mochi-float-btn-group__list">{children as ReactNode}</div>
      <FloatButtonInner
        type={type}
        shape={shape}
        icon={icon}
        onClick={() => trigger === 'click' && setOpen(!open)}
      />
    </div>
  )
}

export const FloatButton = Object.assign(FloatButtonInner, {
  Group: FloatButtonGroup,
})
