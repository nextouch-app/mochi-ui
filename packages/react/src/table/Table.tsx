import type { ReactNode } from 'react'
import { cn, normalizeSize, type TableProps } from '@mochi-ui/core'
import { Empty } from '../empty/Empty'
import { Skeleton } from '../skeleton/Skeleton'
import './table.css'

export function Table<T extends Record<string, unknown> = Record<string, unknown>>({
  columns = [],
  dataSource = [],
  rowKey = 'key',
  loading = false,
  emptyText,
  bordered = true,
  size,
  className,
  style,
}: TableProps<T>) {
  const finalSize = normalizeSize(size)

  const getKey = (record: T, index: number) => {
    if (typeof rowKey === 'function') return rowKey(record, index)
    const v = record[rowKey]
    return v != null ? String(v) : String(index)
  }

  return (
    <div
      className={cn(
        'mochi-table-wrap',
        `mochi-table-wrap--${finalSize}`,
        bordered && 'is-bordered',
        className,
      )}
      style={style}
    >
      {loading ? (
        <Skeleton paragraph={{ rows: 4 }} />
      ) : dataSource.length === 0 ? (
        <Empty description={emptyText ?? '暂无数据'} />
      ) : (
        <table className="mochi-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key} style={{ width: col.width, textAlign: col.align ?? 'left' }}>
                  {col.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataSource.map((record, index) => (
              <tr key={getKey(record, index)}>
                {columns.map((col) => {
                  const raw = col.dataIndex ? record[col.dataIndex] : undefined
                  const cell = col.render ? col.render(raw, record, index) : (raw as ReactNode)
                  return (
                    <td key={col.key} style={{ textAlign: col.align ?? 'left' }}>
                      {cell}
                    </td>
                  )
                })}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}
