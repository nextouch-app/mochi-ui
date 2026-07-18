import { cn } from '@mochi-ui/core'
import { startOfDay } from './utils'

const monthLabels = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

export function MonthPanel({
  viewYear,
  selected,
  disabledDate,
  onViewYearChange,
  onSelect,
}: {
  viewYear: number
  selected?: Date | null
  disabledDate?: (date: Date) => boolean
  onViewYearChange: (year: number) => void
  onSelect: (date: Date) => void
}) {
  return (
    <div className="mochi-datepicker__picker-panel">
      <div className="mochi-datepicker__picker-header">
        <button type="button" className="mochi-datepicker__picker-nav" onClick={() => onViewYearChange(viewYear - 1)}>
          ‹
        </button>
        <div className="mochi-datepicker__picker-title">{viewYear} 年</div>
        <button type="button" className="mochi-datepicker__picker-nav" onClick={() => onViewYearChange(viewYear + 1)}>
          ›
        </button>
      </div>
      <div className="mochi-datepicker__month-grid">
        {monthLabels.map((label, index) => {
          const date = startOfDay(new Date(viewYear, index, 1))
          const disabled = disabledDate?.(date)
          const isSelected = selected && selected.getFullYear() === viewYear && selected.getMonth() === index
          return (
            <button
              key={label}
              type="button"
              disabled={disabled}
              className={cn('mochi-datepicker__month-cell', isSelected && 'is-selected')}
              onClick={() => onSelect(date)}
            >
              {label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function YearPanel({
  viewStart,
  selected,
  onViewStartChange,
  onSelect,
}: {
  viewStart: number
  selected?: Date | null
  onViewStartChange: (start: number) => void
  onSelect: (date: Date) => void
}) {
  const years = Array.from({ length: 12 }, (_, i) => viewStart + i)
  return (
    <div className="mochi-datepicker__picker-panel">
      <div className="mochi-datepicker__picker-header">
        <button
          type="button"
          className="mochi-datepicker__picker-nav"
          onClick={() => onViewStartChange(viewStart - 12)}
        >
          ‹
        </button>
        <div className="mochi-datepicker__picker-title">
          {viewStart} - {viewStart + 11}
        </div>
        <button
          type="button"
          className="mochi-datepicker__picker-nav"
          onClick={() => onViewStartChange(viewStart + 12)}
        >
          ›
        </button>
      </div>
      <div className="mochi-datepicker__month-grid">
        {years.map((year) => {
          const date = startOfDay(new Date(year, 0, 1))
          const isSelected = selected?.getFullYear() === year
          return (
            <button
              key={year}
              type="button"
              className={cn('mochi-datepicker__month-cell', isSelected && 'is-selected')}
              onClick={() => onSelect(date)}
            >
              {year}
            </button>
          )
        })}
      </div>
    </div>
  )
}
