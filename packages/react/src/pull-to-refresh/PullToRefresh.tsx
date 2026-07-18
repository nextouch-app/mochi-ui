import { useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { cn, type PullToRefreshProps } from '@mochi-ui/core'
import './pull-to-refresh.css'

/** 以 pointer 事件实现，触控与桌面拖拽均可；移动端场景更常用 */
export function PullToRefresh({
  onRefresh,
  pullingText = '下拉刷新',
  refreshingText = '刷新中…',
  disabled = false,
  className,
  style,
  children,
}: PullToRefreshProps) {
  const startY = useRef(0)
  const pulling = useRef(false)
  const [distance, setDistance] = useState(0)
  const [refreshing, setRefreshing] = useState(false)
  const threshold = 64

  const onPointerDown = (e: ReactPointerEvent) => {
    if (disabled || refreshing) return
    pulling.current = true
    startY.current = e.clientY
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: ReactPointerEvent) => {
    if (!pulling.current || disabled || refreshing) return
    const dy = e.clientY - startY.current
    if (dy > 0) setDistance(Math.min(dy * 0.45, 96))
  }

  const onPointerUp = async () => {
    if (!pulling.current || disabled || refreshing) return
    pulling.current = false
    if (distance >= threshold && onRefresh) {
      setRefreshing(true)
      setDistance(threshold)
      try {
        await onRefresh()
      } finally {
        setRefreshing(false)
        setDistance(0)
      }
    } else {
      setDistance(0)
    }
  }

  return (
    <div
      className={cn('mochi-pull', refreshing && 'is-refreshing', className)}
      style={style}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="mochi-pull__indicator" style={{ height: distance }}>
        <span>{refreshing ? refreshingText : pullingText}</span>
      </div>
      <div className="mochi-pull__content" style={{ transform: `translateY(${distance}px)` }}>
        {children}
      </div>
    </div>
  )
}
