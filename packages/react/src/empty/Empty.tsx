import { cn, type EmptyProps } from '@mochi-ui/core'
import { Icon } from '../icon/Icon'

export function Empty({ description = '暂无数据', className, style, children }: EmptyProps) {
  return (
    <div className={cn('mochi-empty', className)} style={style}>
      <div className="mochi-empty__icon">
        <Icon name="cloud" size={48} color="var(--mochi-color-primary)" />
        <Icon name="star" size={20} color="var(--mochi-color-warning)" className="mochi-empty__spark" />
      </div>
      <div className="mochi-empty__desc">{description}</div>
      {children}
    </div>
  )
}
