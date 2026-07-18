import { useState } from 'react'
import { cn, type TooltipProps } from '@mochi-ui/core'

export function Tooltip({
  title,
  placement = 'top',
  className,
  style,
  children,
}: TooltipProps) {
  const [open, setOpen] = useState(false)

  return (
    <span
      className={cn('mochi-tooltip', className)}
      style={style}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
    >
      {children}
      {open && title ? (
        <span className={cn('mochi-tooltip__popup', `mochi-tooltip__popup--${placement}`)} role="tooltip">
          {title}
        </span>
      ) : null}
    </span>
  )
}
