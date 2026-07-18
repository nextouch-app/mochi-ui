import { cn, type TimelineProps } from '@nextouch-app/mochi-core'
import './timeline.css'

export function Timeline({
  items = [],
  mode = 'left',
  pending = false,
  reverse = false,
  className,
  style,
  children,
}: TimelineProps) {
  const list = reverse ? [...items].reverse() : items

  return (
    <ul className={cn('mochi-timeline', `mochi-timeline--${mode}`, className)} style={style}>
      {list.map((item, index) => (
        <li
          key={item.key ?? index}
          className={cn('mochi-timeline__item', item.color && `is-color-${item.color}`)}
        >
          {mode !== 'left' && item.label ? (
            <div className="mochi-timeline__label">{item.label}</div>
          ) : null}
          <div className="mochi-timeline__tail" />
          <div
            className="mochi-timeline__dot"
            style={
              item.color && !['primary', 'success', 'warning', 'error', 'gray'].includes(item.color)
                ? { background: item.color, borderColor: item.color }
                : undefined
            }
          >
            {item.dot}
          </div>
          <div className="mochi-timeline__content">
            {mode === 'left' && item.label ? (
              <div className="mochi-timeline__label-inline">{item.label}</div>
            ) : null}
            {item.children}
          </div>
        </li>
      ))}
      {pending ? (
        <li className="mochi-timeline__item is-pending">
          <div className="mochi-timeline__tail" />
          <div className="mochi-timeline__dot is-pending-dot" />
          <div className="mochi-timeline__content">
            {pending === true ? '进行中…' : pending}
          </div>
        </li>
      ) : null}
      {children}
    </ul>
  )
}
