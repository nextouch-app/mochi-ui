import { cn, type BaseProps } from '@nextouch-app/mochi-core'

/** Swallowtail ribbon title — game menu banner */
export function Title({ className, style, children }: BaseProps) {
  return (
    <div className={cn('mochi-title', className)} style={style}>
      <span className="mochi-title__fold mochi-title__fold--l" aria-hidden />
      <span className="mochi-title__ribbon">
        <span className="mochi-title__spark" aria-hidden>
          ✦
        </span>
        {children}
        <span className="mochi-title__spark" aria-hidden>
          ✦
        </span>
      </span>
      <span className="mochi-title__fold mochi-title__fold--r" aria-hidden />
    </div>
  )
}
