import { useState, type ReactNode } from 'react'
import { cn, type LayoutProps, type LayoutSiderProps } from '@mochi-ui/core'
import './layout.css'

function LayoutRoot({ hasSider, className, style, children }: LayoutProps) {
  return (
    <section
      className={cn('mochi-layout', hasSider && 'mochi-layout--has-sider', className)}
      style={style}
    >
      {children}
    </section>
  )
}

function Header({ className, style, children }: LayoutProps) {
  return (
    <header className={cn('mochi-layout-header', className)} style={style}>
      {children}
    </header>
  )
}

function Content({ className, style, children }: LayoutProps) {
  return (
    <main className={cn('mochi-layout-content', className)} style={style}>
      {children}
    </main>
  )
}

function Footer({ className, style, children }: LayoutProps) {
  return (
    <footer className={cn('mochi-layout-footer', className)} style={style}>
      {children}
    </footer>
  )
}

function Sider({
  width = 200,
  collapsed = false,
  collapsedWidth = 64,
  collapsible = false,
  className,
  style,
  children,
  onCollapse,
}: LayoutSiderProps) {
  const [inner, setInner] = useState(false)
  const isCollapsed = collapsed !== undefined ? collapsed : inner
  const w = isCollapsed ? collapsedWidth : width

  return (
    <aside
      className={cn('mochi-layout-sider', isCollapsed && 'is-collapsed', className)}
      style={{ width: w, flex: `0 0 ${typeof w === 'number' ? `${w}px` : w}`, ...style }}
    >
      <div className="mochi-layout-sider__body">{children as ReactNode}</div>
      {collapsible ? (
        <button
          type="button"
          className="mochi-layout-sider__trigger"
          onClick={() => {
            const next = !isCollapsed
            if (collapsed === undefined) setInner(next)
            onCollapse?.(next)
          }}
        >
          {isCollapsed ? '»' : '«'}
        </button>
      ) : null}
    </aside>
  )
}

export const Layout = Object.assign(LayoutRoot, {
  Header,
  Content,
  Footer,
  Sider,
})
