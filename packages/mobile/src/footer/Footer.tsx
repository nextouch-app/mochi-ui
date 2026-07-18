import { cn, type FooterProps } from '@mochi-ui/core'
import './footer.css'

export function Footer({
  copyright = '© Nextouch',
  links = [],
  className,
  style,
  children,
}: FooterProps) {
  return (
    <footer className={cn('mochi-footer', className)} style={style}>
      <div className="mochi-footer__wave" aria-hidden />
      {links.length ? (
        <nav className="mochi-footer__links">
          {links.map((link, i) =>
            link.href ? (
              <a key={link.key ?? i} href={link.href} className="mochi-footer__link">
                {link.title}
              </a>
            ) : (
              <button
                key={link.key ?? i}
                type="button"
                className="mochi-footer__link"
                onClick={link.onClick}
              >
                {link.title}
              </button>
            ),
          )}
        </nav>
      ) : null}
      <div className="mochi-footer__copyright">{copyright}</div>
      {children}
    </footer>
  )
}
