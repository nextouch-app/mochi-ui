import { useEffect, useLayoutEffect, useState } from 'react'
import { cn, type TourProps } from '@nextouch-app/mochi-core'
import './tour.css'

export function Tour({
  open: openProp,
  defaultOpen = false,
  current: currentProp,
  defaultCurrent = 0,
  steps = [],
  mask = true,
  zIndex = 1100,
  className,
  style,
  onClose,
  onFinish,
  onChange,
}: TourProps) {
  const [innerOpen, setInnerOpen] = useState(defaultOpen)
  const [innerCurrent, setInnerCurrent] = useState(defaultCurrent)
  const [rect, setRect] = useState<DOMRect | null>(null)
  const open = openProp ?? innerOpen
  const current = currentProp ?? innerCurrent
  const step = steps[current]

  const setOpen = (next: boolean) => {
    if (openProp === undefined) setInnerOpen(next)
  }

  const setCurrent = (next: number) => {
    if (currentProp === undefined) setInnerCurrent(next)
    onChange?.(next)
  }

  useLayoutEffect(() => {
    if (!open || !step) {
      setRect(null)
      return
    }
    const el = step.target?.()
    setRect(el?.getBoundingClientRect() ?? null)
  }, [open, step, current])

  useEffect(() => {
    if (!open) return
    const onResize = () => {
      const el = steps[current]?.target?.()
      setRect(el?.getBoundingClientRect() ?? null)
    }
    window.addEventListener('resize', onResize)
    window.addEventListener('scroll', onResize, true)
    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onResize, true)
    }
  }, [open, current, steps])

  if (!open || !step) return null

  const close = () => {
    setOpen(false)
    onClose?.(current)
  }

  const next = () => {
    if (current >= steps.length - 1) {
      setOpen(false)
      onFinish?.()
      return
    }
    setCurrent(current + 1)
  }

  const prev = () => {
    if (current > 0) setCurrent(current - 1)
  }

  const pad = 6

  return (
    <div className={cn('mochi-tour', className)} style={{ zIndex, ...style }}>
      {mask ? (
        <div className="mochi-tour__mask" onClick={close}>
          {rect ? (
            <div
              className="mochi-tour__spotlight"
              style={{
                top: rect.top - pad,
                left: rect.left - pad,
                width: rect.width + pad * 2,
                height: rect.height + pad * 2,
              }}
            />
          ) : null}
        </div>
      ) : null}
      <div
        className="mochi-tour__panel"
        style={
          rect
            ? {
                top: Math.min(window.innerHeight - 200, rect.bottom + 12),
                left: Math.min(window.innerWidth - 320, Math.max(12, rect.left)),
              }
            : { top: '30%', left: '50%', transform: 'translateX(-50%)' }
        }
      >
        {step.cover ? <div className="mochi-tour__cover">{step.cover}</div> : null}
        {step.title ? <div className="mochi-tour__title">{step.title}</div> : null}
        {step.description ? <div className="mochi-tour__desc">{step.description}</div> : null}
        <div className="mochi-tour__footer">
          <span className="mochi-tour__indicator">
            {current + 1} / {steps.length}
          </span>
          <div className="mochi-tour__actions">
            <button type="button" className="mochi-tour__btn" onClick={close}>
              跳过
            </button>
            {current > 0 ? (
              <button type="button" className="mochi-tour__btn" onClick={prev}>
                {step.prevButtonProps?.children ?? '上一步'}
              </button>
            ) : null}
            <button type="button" className="mochi-tour__btn mochi-tour__btn--primary" onClick={next}>
              {current >= steps.length - 1
                ? '完成'
                : (step.nextButtonProps?.children ?? '下一步')}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
