import { cn, normalizeSize, type CardProps } from '@nextouch-app/mochi-core'
import './card.css'

/** Sticker-style card panel */
export function Card({
  variant = 'default',
  type = 'default',
  size,
  title,
  extra,
  cover,
  actions,
  bordered = true,
  hoverable = false,
  loading = false,
  decorated = true,
  className,
  style,
  children,
}: CardProps) {
  const finalSize = size && size !== 'default' ? normalizeSize(size) : 'md'

  return (
    <div
      className={cn(
        'mochi-card',
        `mochi-card--${variant}`,
        `mochi-card--${finalSize}`,
        type === 'inner' && 'mochi-card--inner',
        !bordered && 'mochi-card--borderless',
        hoverable && 'mochi-card--hoverable',
        loading && 'is-loading',
        className,
      )}
      style={style}
    >
      {decorated ? (
        <>
          <span className="mochi-card__cloud mochi-card__cloud--tl" aria-hidden />
          <span className="mochi-card__cloud mochi-card__cloud--tr" aria-hidden />
          <span className="mochi-card__star" aria-hidden>
            ✦
          </span>
        </>
      ) : null}

      {cover ? <div className="mochi-card__cover">{cover}</div> : null}

      {(title || extra) && (
        <div className="mochi-card__header">
          {title ? <div className="mochi-card__title">{title}</div> : null}
          {extra ? <div className="mochi-card__extra">{extra}</div> : null}
        </div>
      )}

      <div className="mochi-card__body">
        {loading ? (
          <div className="mochi-card__skeleton" aria-hidden>
            <span />
            <span />
            <span />
          </div>
        ) : (
          children
        )}
      </div>

      {actions && actions.length > 0 ? (
        <div className="mochi-card__actions">
          {actions.map((action, i) => (
            <div key={i} className="mochi-card__action">
              {action}
            </div>
          ))}
        </div>
      ) : null}
    </div>
  )
}
