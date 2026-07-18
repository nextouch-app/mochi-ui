import { cn, type DividerProps } from '@nextouch-app/mochi-core'

function WaveSvg() {
  return (
    <svg className="mochi-divider__wave" viewBox="0 0 120 8" preserveAspectRatio="none" aria-hidden>
      <path
        d="M0 4 Q10 0 20 4 T40 4 T60 4 T80 4 T100 4 T120 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Divider({
  type = 'solid',
  orientation = 'horizontal',
  className,
  style,
  children,
}: DividerProps) {
  return (
    <div
      className={cn(
        'mochi-divider',
        `mochi-divider--${type}`,
        `mochi-divider--${orientation}`,
        children && 'mochi-divider--with-text',
        className,
      )}
      style={style}
      role="separator"
    >
      {type === 'wave' && orientation === 'horizontal' ? (
        <WaveSvg />
      ) : (
        <span className="mochi-divider__line" />
      )}
      {children ? <span className="mochi-divider__text">{children}</span> : null}
      {children ? (
        type === 'wave' ? <WaveSvg /> : <span className="mochi-divider__line" />
      ) : null}
    </div>
  )
}
