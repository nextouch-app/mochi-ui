import { useEffect, useState, type ReactNode } from 'react'
import { cn, type SpinProps } from '@mochi-ui/core'
import { Loading } from '../loading/Loading'
import './spin.css'

export function Spin({
  spinning = true,
  size = 'md',
  tip,
  delay = 0,
  fullscreen = false,
  className,
  style,
  children,
}: SpinProps) {
  const [visible, setVisible] = useState(delay <= 0 ? spinning : false)

  useEffect(() => {
    if (!spinning) {
      setVisible(false)
      return
    }
    if (delay <= 0) {
      setVisible(true)
      return
    }
    const id = window.setTimeout(() => setVisible(true), delay)
    return () => window.clearTimeout(id)
  }, [spinning, delay])

  const indicator = (
    <Loading size={size} tip={typeof tip === 'string' ? tip : undefined} spinning>
      {typeof tip !== 'string' && tip ? <div className="mochi-spin__tip">{tip}</div> : null}
    </Loading>
  )

  if (fullscreen) {
    if (!visible) return null
    return (
      <div className={cn('mochi-spin', 'mochi-spin--fullscreen', className)} style={style}>
        {indicator}
      </div>
    )
  }

  if (!children) {
    return visible ? (
      <div className={cn('mochi-spin', className)} style={style}>
        {indicator}
      </div>
    ) : null
  }

  return (
    <div className={cn('mochi-spin', 'mochi-spin--nested', visible && 'is-spinning', className)} style={style}>
      {visible ? <div className="mochi-spin__overlay">{indicator}</div> : null}
      <div className={cn('mochi-spin__content', visible && 'is-blurred')}>{children as ReactNode}</div>
    </div>
  )
}
