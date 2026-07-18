import { useEffect, useState, type MouseEvent as ReactMouseEvent } from 'react'
import { cn, type AnchorLinkItem, type AnchorProps } from '@mochi-ui/core'
import './anchor.css'

function flatten(items: AnchorLinkItem[]): AnchorLinkItem[] {
  return items.flatMap((item) => [item, ...(item.children ? flatten(item.children) : [])])
}

export function Anchor({
  items = [],
  affix = true,
  offsetTop = 0,
  bounds = 8,
  getContainer,
  className,
  style,
  onClick,
  onChange,
}: AnchorProps) {
  const [active, setActive] = useState(items[0]?.href ?? '')

  useEffect(() => {
    const container = getContainer?.() ?? window
    const links = flatten(items)

    const onScroll = () => {
      const scrollTop =
        container === window
          ? window.scrollY || document.documentElement.scrollTop
          : (container as HTMLElement).scrollTop

      let current = links[0]?.href ?? ''
      for (const link of links) {
        const id = link.href.replace(/^#/, '')
        const el = document.getElementById(id)
        if (!el) continue
        const top =
          container === window
            ? el.getBoundingClientRect().top + window.scrollY
            : el.offsetTop
        if (top - offsetTop - bounds <= scrollTop) current = link.href
      }
      setActive((prev) => {
        if (prev !== current) onChange?.(current)
        return current
      })
    }

    onScroll()
    container.addEventListener('scroll', onScroll, { passive: true })
    return () => container.removeEventListener('scroll', onScroll)
  }, [items, offsetTop, bounds, getContainer, onChange])

  const renderLinks = (list: AnchorLinkItem[], depth = 0) =>
    list.map((item) => (
      <div key={item.key} className="mochi-anchor__node" style={{ paddingLeft: depth * 14 }}>
        <a
          className={cn('mochi-anchor__link', active === item.href && 'is-active')}
          href={item.href}
          onClick={(e: ReactMouseEvent) => {
            onClick?.(e, { href: item.href, title: item.title })
          }}
        >
          {item.title}
        </a>
        {item.children?.length ? renderLinks(item.children, depth + 1) : null}
      </div>
    ))

  return (
    <div
      className={cn('mochi-anchor', affix && 'is-affix', className)}
      style={{ ...style, ...(affix ? { top: offsetTop } : null) }}
    >
      <div className="mochi-anchor__ink" />
      {renderLinks(items)}
    </div>
  )
}
