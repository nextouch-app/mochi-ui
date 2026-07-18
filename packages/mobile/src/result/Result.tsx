import { cn, type ResultProps } from '@nextouch-app/mochi-core'
import { Icon } from '../icon/Icon'
import type { IconName } from '@nextouch-app/mochi-icons'

const statusIcon: Record<string, IconName> = {
  success: 'check',
  error: 'heart',
  info: 'bubble',
  warning: 'sparkle',
}

export function Result({
  status = 'info',
  title,
  subTitle,
  extra,
  className,
  style,
  children,
}: ResultProps) {
  return (
    <div className={cn('mochi-result', `mochi-result--${status}`, className)} style={style}>
      <div className="mochi-result__icon">
        <Icon name={statusIcon[status] ?? 'bubble'} size={56} />
      </div>
      {title ? <div className="mochi-result__title">{title}</div> : null}
      {subTitle ? <div className="mochi-result__subtitle">{subTitle}</div> : null}
      {extra ? <div className="mochi-result__extra">{extra}</div> : null}
      {children}
    </div>
  )
}
