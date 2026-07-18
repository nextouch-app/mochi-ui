import { cn, type BreadcrumbProps } from '@mochi-ui/core'
import './breadcrumb.css'

export function Breadcrumb({
  items = [],
  separator = '/',
  className,
  style,
}: BreadcrumbProps) {
  return (
    <nav className={cn('mochi-breadcrumb', className)} style={style} aria-label="breadcrumb">
      <ol className="mochi-breadcrumb__list">
        {items.map((item, index) => {
          const last = index === items.length - 1
          return (
            <li key={item.key ?? index} className="mochi-breadcrumb__item">
              {item.href && !last ? (
                <a
                  className="mochi-breadcrumb__link"
                  href={item.href}
                  onClick={item.onClick}
                >
                  {item.title}
                </a>
              ) : (
                <span
                  className={cn('mochi-breadcrumb__text', last && 'is-current')}
                  onClick={last ? undefined : item.onClick}
                  role={item.onClick && !last ? 'button' : undefined}
                >
                  {item.title}
                </span>
              )}
              {!last ? <span className="mochi-breadcrumb__sep">{separator}</span> : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
