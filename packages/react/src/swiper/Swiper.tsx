import { Children, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react'
import { cn, type SwiperProps } from '@mochi-ui/core'
import './swiper.css'

export function Swiper({
  autoplay = false,
  loop = true,
  dots = true,
  index: indexProp,
  defaultIndex = 0,
  className,
  style,
  children,
  onChange,
}: SwiperProps) {
  const slides = Children.toArray(children)
  const count = slides.length
  const [inner, setInner] = useState(defaultIndex)
  const index = indexProp ?? inner
  const startX = useRef(0)
  const deltaX = useRef(0)
  const dragging = useRef(false)

  const go = (next: number) => {
    if (count === 0) return
    let n = next
    if (loop) n = ((next % count) + count) % count
    else n = Math.min(count - 1, Math.max(0, next))
    if (indexProp === undefined) setInner(n)
    onChange?.(n)
  }

  useEffect(() => {
    if (!autoplay || count <= 1 || dragging.current) return
    const ms = typeof autoplay === 'number' ? autoplay : 3000
    const t = window.setInterval(() => go(index + 1), ms)
    return () => window.clearInterval(t)
  }, [autoplay, count, index])

  const onPointerDown = (e: ReactPointerEvent) => {
    if ((e.target as HTMLElement).closest('button')) return
    dragging.current = true
    startX.current = e.clientX
    deltaX.current = 0
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const onPointerMove = (e: ReactPointerEvent) => {
    if (!dragging.current) return
    deltaX.current = e.clientX - startX.current
  }

  const onPointerUp = () => {
    if (!dragging.current) return
    dragging.current = false
    if (deltaX.current > 48) go(index - 1)
    else if (deltaX.current < -48) go(index + 1)
    deltaX.current = 0
  }

  if (count === 0) return null

  return (
    <div
      className={cn('mochi-swiper', className)}
      style={style}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
    >
      <div className="mochi-swiper__track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {slides.map((slide, i) => (
          <div key={i} className="mochi-swiper__slide">
            {slide}
          </div>
        ))}
      </div>
      <button type="button" className="mochi-swiper__nav mochi-swiper__nav--prev" aria-label="上一张" onClick={() => go(index - 1)}>
        ‹
      </button>
      <button type="button" className="mochi-swiper__nav mochi-swiper__nav--next" aria-label="下一张" onClick={() => go(index + 1)}>
        ›
      </button>
      {dots ? (
        <div className="mochi-swiper__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              className={cn('mochi-swiper__dot', i === index && 'is-active')}
              aria-label={`第 ${i + 1} 张`}
              onClick={() => go(i)}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}
