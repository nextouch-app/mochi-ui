import { cn, normalizeSize, type DescriptionsProps } from '@nextouch-app/mochi-core'
import './descriptions.css'

export function Descriptions({
  title,
  extra,
  items = [],
  column = 3,
  layout = 'horizontal',
  bordered = false,
  size,
  className,
  style,
}: DescriptionsProps) {
  const finalSize = normalizeSize(size)
  const cols = Math.max(1, column)

  const rows: Array<typeof items> = []
  let row: typeof items = []
  let spanSum = 0
  items.forEach((item) => {
    const span = Math.min(item.span ?? 1, cols)
    if (spanSum + span > cols && row.length) {
      rows.push(row)
      row = []
      spanSum = 0
    }
    row.push({ ...item, span })
    spanSum += span
    if (spanSum >= cols) {
      rows.push(row)
      row = []
      spanSum = 0
    }
  })
  if (row.length) rows.push(row)

  return (
    <div
      className={cn(
        'mochi-descriptions',
        `mochi-descriptions--${finalSize}`,
        `mochi-descriptions--${layout}`,
        bordered && 'is-bordered',
        className,
      )}
      style={style}
    >
      {(title || extra) && (
        <div className="mochi-descriptions__header">
          <div className="mochi-descriptions__title">{title}</div>
          {extra ? <div className="mochi-descriptions__extra">{extra}</div> : null}
        </div>
      )}
      <div className="mochi-descriptions__view">
        {rows.map((r, ri) => (
          <div key={ri} className="mochi-descriptions__row" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
            {r.map((item, ii) => (
              <div
                key={item.key ?? `${ri}-${ii}`}
                className="mochi-descriptions__item"
                style={{ gridColumn: `span ${item.span ?? 1}` }}
              >
                <div className="mochi-descriptions__label">{item.label}</div>
                <div className="mochi-descriptions__content">{item.children}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
