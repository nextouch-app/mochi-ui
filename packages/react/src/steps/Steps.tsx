import { cn, normalizeSize, type StepsProps } from '@nextouch-app/mochi-core'
import './steps.css'

export function Steps({
  items = [],
  current = 0,
  status = 'process',
  direction = 'horizontal',
  size,
  labelPlacement = 'horizontal',
  className,
  style,
  onChange,
}: StepsProps) {
  const finalSize = normalizeSize(size)

  return (
    <div
      className={cn(
        'mochi-steps',
        `mochi-steps--${direction}`,
        `mochi-steps--${finalSize}`,
        `mochi-steps--label-${labelPlacement}`,
        className,
      )}
      style={style}
    >
      {items.map((item, index) => {
        let itemStatus = item.status
        if (!itemStatus) {
          if (index < current) itemStatus = 'finish'
          else if (index === current) itemStatus = status
          else itemStatus = 'wait'
        }
        const clickable = !!onChange && !item.disabled && index !== current

        return (
          <div
            key={item.key ?? index}
            className={cn(
              'mochi-steps__item',
              `is-${itemStatus}`,
              item.disabled && 'is-disabled',
              clickable && 'is-clickable',
            )}
            onClick={() => {
              if (clickable) onChange?.(index)
            }}
          >
            <div className="mochi-steps__head">
              <span className="mochi-steps__icon">
                {item.icon ?? (itemStatus === 'finish' ? '✓' : index + 1)}
              </span>
              {index < items.length - 1 ? <span className="mochi-steps__tail" /> : null}
            </div>
            <div className="mochi-steps__main">
              <div className="mochi-steps__title">{item.title}</div>
              {item.description ? (
                <div className="mochi-steps__desc">{item.description}</div>
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}
