import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { cn, type AffixProps } from '@mochi-ui/core'
import './affix.css'

export function Affix({
  offsetTop = 0,
  offsetBottom,
  target,
  className,
  style,
  children,
  onChange,
}: AffixProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const [affixed, setAffixed] = useState(false)
  const [placeholderHeight, setPlaceholderHeight] = useState(0)
  const [fixedStyle, setFixedStyle] = useState<CSSProperties>({})

  useEffect(() => {
    const getTarget = () => target?.() ?? window

    const update = () => {
      const root = rootRef.current
      if (!root) return
      const rect = root.getBoundingClientRect()
      const container = getTarget()
      const scrollTop =
        container === window
          ? window.scrollY || document.documentElement.scrollTop
          : (container as HTMLElement).scrollTop

      let nextAffixed = false
      let nextStyle: CSSProperties = {}

      if (offsetBottom != null) {
        const viewHeight =
          container === window ? window.innerHeight : (container as HTMLElement).clientHeight
        if (rect.bottom > viewHeight - offsetBottom) {
          nextAffixed = true
          nextStyle = {
            position: 'fixed',
            bottom: offsetBottom,
            left: rect.left,
            width: rect.width,
          }
        }
      } else if (rect.top <= offsetTop) {
        nextAffixed = true
        nextStyle = {
          position: 'fixed',
          top: offsetTop,
          left: rect.left,
          width: rect.width,
        }
      }

      setPlaceholderHeight(nextAffixed ? root.offsetHeight : 0)
      setFixedStyle(nextStyle)
      setAffixed((prev) => {
        if (prev !== nextAffixed) onChange?.(nextAffixed)
        return nextAffixed
      })
      void scrollTop
    }

    update()
    const container = getTarget()
    container.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      container.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [offsetTop, offsetBottom, target, onChange])

  return (
    <div ref={rootRef} className={cn('mochi-affix', className)} style={style}>
      {affixed ? <div style={{ height: placeholderHeight }} aria-hidden /> : null}
      <div className={cn('mochi-affix__content', affixed && 'is-fixed')} style={fixedStyle}>
        {children}
      </div>
    </div>
  )
}
