import { cn, type NavBarProps } from '@mochi-ui/core'

export function NavBar({ title, back, onBack, right, className, style, children }: NavBarProps) {
  return (
    <header className={cn('mochi-nav-bar', className)} style={style}>
      <div className="mochi-nav-bar__left">
        {onBack || back ? (
          <button type="button" className="mochi-nav-bar__back" onClick={onBack} aria-label="返回">
            {back ?? '‹'}
          </button>
        ) : null}
      </div>
      <div className="mochi-nav-bar__title">{title ?? children}</div>
      <div className="mochi-nav-bar__right">{right}</div>
    </header>
  )
}
