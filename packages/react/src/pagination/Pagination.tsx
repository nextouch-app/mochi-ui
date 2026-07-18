import { useState } from 'react'
import { cn, type PaginationProps } from '@mochi-ui/core'
import './pagination.css'

export function Pagination({
  current,
  defaultCurrent = 1,
  total = 0,
  pageSize = 10,
  disabled = false,
  showTotal = false,
  className,
  style,
  onChange,
}: PaginationProps) {
  const [inner, setInner] = useState(defaultCurrent)
  const page = current ?? inner
  const pageCount = Math.max(1, Math.ceil(total / pageSize))

  const go = (next: number) => {
    if (disabled) return
    const clamped = Math.min(pageCount, Math.max(1, next))
    if (current === undefined) setInner(clamped)
    onChange?.(clamped, pageSize)
  }

  const start = total === 0 ? 0 : (page - 1) * pageSize + 1
  const end = Math.min(page * pageSize, total)
  const totalNode =
    typeof showTotal === 'function'
      ? showTotal(total, [start, end])
      : showTotal
        ? `共 ${total} 条`
        : null

  const pages: number[] = []
  for (let i = 1; i <= pageCount; i++) {
    if (i === 1 || i === pageCount || Math.abs(i - page) <= 1) pages.push(i)
    else if (pages[pages.length - 1] !== -1) pages.push(-1)
  }

  return (
    <div className={cn('mochi-pagination', disabled && 'is-disabled', className)} style={style}>
      {totalNode ? <span className="mochi-pagination__total">{totalNode}</span> : null}
      <button type="button" className="mochi-pagination__btn" disabled={disabled || page <= 1} onClick={() => go(page - 1)}>
        ‹
      </button>
      {pages.map((p, idx) =>
        p === -1 ? (
          <span key={`e-${idx}`} className="mochi-pagination__ellipsis">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            className={cn('mochi-pagination__btn', p === page && 'is-active')}
            disabled={disabled}
            onClick={() => go(p)}
          >
            {p}
          </button>
        ),
      )}
      <button
        type="button"
        className="mochi-pagination__btn"
        disabled={disabled || page >= pageCount}
        onClick={() => go(page + 1)}
      >
        ›
      </button>
    </div>
  )
}
