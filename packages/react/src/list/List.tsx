import { cn, type ListProps, type ListItemProps } from '@mochi-ui/core'

export function List({ header, className, style, children }: ListProps) {
  return (
    <div className={cn('mochi-list', className)} style={style}>
      {header ? <div className="mochi-list__header">{header}</div> : null}
      <div className="mochi-list__body">{children}</div>
    </div>
  )
}

export function ListItem({
  prefix,
  extra,
  description,
  className,
  style,
  children,
  onClick,
}: ListItemProps) {
  return (
    <div
      className={cn('mochi-list-item', onClick && 'is-clickable', className)}
      style={style}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
    >
      {prefix ? <div className="mochi-list-item__prefix">{prefix}</div> : null}
      <div className="mochi-list-item__content">
        <div className="mochi-list-item__title">{children}</div>
        {description ? <div className="mochi-list-item__desc">{description}</div> : null}
      </div>
      {extra ? <div className="mochi-list-item__extra">{extra}</div> : null}
    </div>
  )
}
