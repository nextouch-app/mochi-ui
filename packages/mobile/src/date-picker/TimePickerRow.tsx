import { applyTime } from './utils'

export function TimePickerRow({
  date,
  onChange,
  label,
}: {
  date: Date
  onChange: (date: Date) => void
  label?: string
}) {
  const hours = Array.from({ length: 24 }, (_, i) => i)
  const minutes = Array.from({ length: 60 }, (_, i) => i)

  return (
    <div className="mochi-datepicker__time">
      {label ? <span className="mochi-datepicker__time-label">{label}</span> : null}
      <select
        className="mochi-datepicker__time-select"
        value={date.getHours()}
        onChange={(e) => onChange(applyTime(date, Number(e.target.value), date.getMinutes()))}
      >
        {hours.map((h) => (
          <option key={h} value={h}>
            {String(h).padStart(2, '0')}
          </option>
        ))}
      </select>
      <span className="mochi-datepicker__time-sep">:</span>
      <select
        className="mochi-datepicker__time-select"
        value={date.getMinutes()}
        onChange={(e) => onChange(applyTime(date, date.getHours(), Number(e.target.value)))}
      >
        {minutes.map((m) => (
          <option key={m} value={m}>
            {String(m).padStart(2, '0')}
          </option>
        ))}
      </select>
    </div>
  )
}
