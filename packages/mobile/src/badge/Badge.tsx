import { cn, type BadgeProps } from '@nextouch-app/mochi-core'

export function Badge({
  count,
  dot,
  overflowCount = 99,
  className,
  style,
  children,
}: BadgeProps) {
  const show = dot || (count !== undefined && count !== 0 && count !== '0')
  const text =
    typeof count === 'number' && count > overflowCount ? `${overflowCount}+` : count

  return (
    <span className={cn('mochi-badge', className)} style={style}>
      {children}
      {show ? (
        <sup className={cn('mochi-badge__sup', dot && 'mochi-badge__sup--dot')}>
          {dot ? null : text}
        </sup>
      ) : null}
    </span>
  )
}
