import { cn, type PhoneProps } from '@nextouch-app/mochi-core'
import './phone.css'

export function Phone({
  number = '400-000-0000',
  label = '客服热线',
  tone = 'sky',
  statusBar = true,
  time = '09:41',
  className,
  style,
  children,
}: PhoneProps) {
  return (
    <div
      className={cn('mochi-phone', `mochi-phone--${tone}`, className)}
      style={style}
    >
      <div className="mochi-phone__bezel">
        <div className="mochi-phone__notch" aria-hidden />
        {statusBar ? (
          <div className="mochi-phone__status">
            <span>{time}</span>
            <span className="mochi-phone__signal" aria-hidden>
              ▂▄▆
            </span>
          </div>
        ) : null}
        <div className="mochi-phone__screen">
          {label ? <div className="mochi-phone__label">{label}</div> : null}
          <div className="mochi-phone__number">{number}</div>
          {children}
        </div>
        <div className="mochi-phone__home" aria-hidden />
      </div>
    </div>
  )
}
