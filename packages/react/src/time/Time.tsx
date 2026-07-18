import { useEffect, useState } from 'react'
import { cn, type TimeProps } from '@nextouch-app/mochi-core'
import './time.css'

function toDate(value?: Date | number | string) {
  if (value == null) return new Date()
  if (value instanceof Date) return value
  return new Date(value)
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

function defaultFormat(date: Date, showDate: boolean, showSeconds: boolean) {
  const time = showSeconds
    ? `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
    : `${pad(date.getHours())}:${pad(date.getMinutes())}`
  if (!showDate) return time
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} ${time}`
}

export function Time({
  value,
  format,
  live = false,
  showDate = false,
  showSeconds = true,
  label,
  className,
  style,
}: TimeProps) {
  const [now, setNow] = useState(() => toDate(value))

  useEffect(() => {
    setNow(toDate(value))
  }, [value])

  useEffect(() => {
    if (!live || value != null) return
    const id = window.setInterval(() => setNow(new Date()), showSeconds ? 1000 : 30_000)
    return () => window.clearInterval(id)
  }, [live, value, showSeconds])

  const text =
    typeof format === 'function'
      ? format(now)
      : format
        ? format
            .replace('YYYY', String(now.getFullYear()))
            .replace('MM', pad(now.getMonth() + 1))
            .replace('DD', pad(now.getDate()))
            .replace('HH', pad(now.getHours()))
            .replace('mm', pad(now.getMinutes()))
            .replace('ss', pad(now.getSeconds()))
        : defaultFormat(now, showDate, showSeconds)

  return (
    <div className={cn('mochi-time', className)} style={style}>
      {label ? <div className="mochi-time__label">{label}</div> : null}
      <time className="mochi-time__value" dateTime={now.toISOString()}>
        {text}
      </time>
    </div>
  )
}
