import { cn, type SkeletonProps } from '@mochi-ui/core'
import './skeleton.css'

export function Skeleton({
  loading = true,
  active = true,
  avatar = false,
  title = true,
  paragraph = true,
  className,
  style,
  children,
}: SkeletonProps) {
  if (!loading) return <>{children}</>

  const rows = typeof paragraph === 'object' ? paragraph.rows ?? 3 : paragraph ? 3 : 0

  return (
    <div className={cn('mochi-skeleton', active && 'is-active', className)} style={style}>
      {avatar ? <div className="mochi-skeleton__avatar" /> : null}
      <div className="mochi-skeleton__content">
        {title ? <div className="mochi-skeleton__title" /> : null}
        {Array.from({ length: rows }).map((_, i) => (
          <div
            key={i}
            className="mochi-skeleton__line"
            style={{ width: i === rows - 1 ? '60%' : '100%' }}
          />
        ))}
      </div>
    </div>
  )
}
