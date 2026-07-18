import type { RangeValue } from '@mochi-ui/core'

export const defaultFormatPattern = 'YYYY-MM-DD'

export function formatDate(
  date: Date,
  fmt: string | ((date: Date) => string) = defaultFormatPattern,
) {
  if (typeof fmt === 'function') return fmt(date)
  const pad = (n: number) => String(n).padStart(2, '0')
  return fmt
    .replace('YYYY', String(date.getFullYear()))
    .replace('MM', pad(date.getMonth() + 1))
    .replace('DD', pad(date.getDate()))
    .replace('HH', pad(date.getHours()))
    .replace('mm', pad(date.getMinutes()))
}

export function applyTime(date: Date, hours: number, minutes: number) {
  const next = new Date(date)
  next.setHours(hours, minutes, 0, 0)
  return next
}

export function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate())
}

export function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export function startOfWeek(d: Date) {
  const day = d.getDay()
  return new Date(d.getFullYear(), d.getMonth(), d.getDate() - day)
}

export function formatRange(
  value: RangeValue,
  format: string | ((date: Date) => string),
  placeholder: [string, string],
) {
  const [start, end] = value ?? [null, null]
  const left = start ? formatDate(start, format) : placeholder[0]
  const right = end ? formatDate(end, format) : placeholder[1]
  if (!start && !end) return ''
  return `${left} ~ ${right}`
}
