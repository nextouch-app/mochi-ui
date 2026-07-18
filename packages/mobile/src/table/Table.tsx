import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { cn, normalizeSize, type TableColumn, type TableProps } from '@nextouch-app/mochi-core'
import { Empty } from '../empty/Empty'
import { Pagination } from '../pagination/Pagination'
import { Skeleton } from '../skeleton/Skeleton'
import './table.css'

type SortOrder = 'ascend' | 'descend' | null

function ColumnFilter<T extends Record<string, unknown>>({
  column,
  activeValues,
  open,
  onOpenChange,
  onChange,
}: {
  column: TableColumn<T>
  activeValues: Array<string | number | boolean> | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onChange: (values: Array<string | number | boolean> | null) => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) onOpenChange(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open, onOpenChange])

  if (!column.filters?.length) return null

  const selected = activeValues ?? []
  const filtered = selected.length > 0

  return (
    <div ref={ref} className={cn('mochi-table__filter', open && 'is-open')}>
      <button
        type="button"
        className={cn('mochi-table__filter-trigger', filtered && 'is-active')}
        aria-label="筛选"
        onClick={(e) => {
          e.stopPropagation()
          onOpenChange(!open)
        }}
      >
        ⛃
      </button>
      {open ? (
        <div className="mochi-table__filter-menu" role="menu">
          {column.filters.map((filter) => {
            const checked = selected.includes(filter.value)
            return (
              <label key={String(filter.value)} className="mochi-table__filter-item">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => {
                    const next = checked
                      ? selected.filter((v) => v !== filter.value)
                      : [...selected, filter.value]
                    onChange(next.length ? next : null)
                  }}
                />
                <span>{filter.text}</span>
              </label>
            )
          })}
          <button
            type="button"
            className="mochi-table__filter-reset"
            onClick={() => onChange(null)}
          >
            重置
          </button>
        </div>
      ) : null}
    </div>
  )
}

export function Table<T extends Record<string, unknown> = Record<string, unknown>>({
  columns = [],
  dataSource = [],
  rowKey = 'key',
  loading = false,
  emptyText,
  bordered = true,
  size,
  rowSelection,
  pagination,
  scroll,
  onRow,
  className,
  style,
}: TableProps<T>) {
  const finalSize = normalizeSize(size)
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortOrder, setSortOrder] = useState<SortOrder>(null)
  const [openFilterKey, setOpenFilterKey] = useState<string | null>(null)
  const [innerFilters, setInnerFilters] = useState<Record<string, Array<string | number | boolean>>>({})
  const [innerPage, setInnerPage] = useState(
    pagination != null && pagination !== false ? (pagination.defaultCurrent ?? 1) : 1,
  )
  const [innerSelectedKeys, setInnerSelectedKeys] = useState<Array<string | number>>(
    rowSelection?.defaultSelectedRowKeys ?? [],
  )

  const getKey = (record: T, index: number) => {
    if (typeof rowKey === 'function') return rowKey(record, index)
    const v = record[rowKey]
    return v != null ? String(v) : String(index)
  }

  const getRecordKey = (record: T, index: number): string | number => {
    if (typeof rowKey === 'function') return rowKey(record, index)
    const v = record[rowKey]
    return v != null ? (v as string | number) : index
  }

  const getFilterValues = (col: TableColumn<T>) =>
    col.filteredValue !== undefined ? col.filteredValue : innerFilters[col.key] ?? null

  const selectedKeys = rowSelection?.selectedRowKeys ?? innerSelectedKeys
  const selectionType = rowSelection?.type ?? 'checkbox'

  const filteredData = useMemo(() => {
    return dataSource.filter((record) =>
      columns.every((col) => {
        const values = getFilterValues(col)
        if (!values?.length || !col.filters?.length) return true
        return values.some((value) => {
          if (col.onFilter) return col.onFilter(value, record)
          if (col.dataIndex) return record[col.dataIndex] === value
          return false
        })
      }),
    )
  }, [columns, dataSource, innerFilters])

  const sortedData = useMemo(() => {
    if (!sortKey || !sortOrder) return filteredData
    const col = columns.find((c) => c.key === sortKey)
    if (!col?.sorter) return filteredData
    const compare =
      typeof col.sorter === 'function'
        ? col.sorter
        : (a: T, b: T) => {
            const av = col.dataIndex ? a[col.dataIndex] : undefined
            const bv = col.dataIndex ? b[col.dataIndex] : undefined
            if (av == null && bv == null) return 0
            if (av == null) return -1
            if (bv == null) return 1
            if (typeof av === 'number' && typeof bv === 'number') return av - bv
            return String(av).localeCompare(String(bv))
          }
    const next = [...filteredData].sort(compare)
    return sortOrder === 'descend' ? next.reverse() : next
  }, [columns, filteredData, sortKey, sortOrder])

  const pageSize =
    pagination != null && pagination !== false ? (pagination.pageSize ?? 10) : sortedData.length
  const currentPage =
    pagination != null && pagination !== false ? (pagination.current ?? innerPage) : 1
  const pagedData =
    pagination == null || pagination === false
      ? sortedData
      : sortedData.slice((currentPage - 1) * pageSize, currentPage * pageSize)

  const updateSelection = (keys: Array<string | number>, rows: T[]) => {
    if (rowSelection?.selectedRowKeys === undefined) setInnerSelectedKeys(keys)
    rowSelection?.onChange?.(keys, rows)
  }

  const toggleRow = (record: T, index: number) => {
    if (!rowSelection) return
    const key = getRecordKey(record, index)
    const checkboxProps = rowSelection.getCheckboxProps?.(record)
    if (checkboxProps?.disabled) return

    if (selectionType === 'radio') {
      updateSelection([key], [record])
      return
    }

    const exists = selectedKeys.some((k) => k === key)
    const nextKeys = exists ? selectedKeys.filter((k) => k !== key) : [...selectedKeys, key]
    const nextRows = sortedData.filter((r, i) => nextKeys.includes(getRecordKey(r, i)))
    updateSelection(nextKeys, nextRows)
  }

  const toggleAll = () => {
    if (!rowSelection || selectionType === 'radio') return
    const enabled = pagedData.filter((r, i) => !rowSelection.getCheckboxProps?.(r)?.disabled)
    const enabledKeys = enabled.map((r, i) => {
      const idx = sortedData.indexOf(r)
      return getRecordKey(r, idx >= 0 ? idx : i)
    })
    const allSelected = enabledKeys.every((k) => selectedKeys.includes(k))
    const nextKeys = allSelected
      ? selectedKeys.filter((k) => !enabledKeys.includes(k))
      : [...new Set([...selectedKeys, ...enabledKeys])]
    const nextRows = sortedData.filter((r, i) => nextKeys.includes(getRecordKey(r, i)))
    updateSelection(nextKeys, nextRows)
  }

  const cycleSort = (key: string, hasSorter: boolean) => {
    if (!hasSorter) return
    if (sortKey !== key) {
      setSortKey(key)
      setSortOrder('ascend')
      return
    }
    if (sortOrder === 'ascend') {
      setSortOrder('descend')
      return
    }
    if (sortOrder === 'descend') {
      setSortKey(null)
      setSortOrder(null)
      return
    }
    setSortOrder('ascend')
  }

  const tableBody = (
    <table className="mochi-table" style={{ minWidth: scroll?.x }}>
      <thead>
        <tr>
          {rowSelection ? (
            <th className="mochi-table__selection-col">
              {selectionType === 'checkbox' ? (
                <input type="checkbox" aria-label="全选" onChange={toggleAll} />
              ) : null}
            </th>
          ) : null}
          {columns.map((col) => (
            <th
              key={col.key}
              style={{ width: col.width, textAlign: col.align ?? 'left' }}
              className={cn(
                col.fixed === 'left' && 'is-fixed-left',
                col.fixed === 'right' && 'is-fixed-right',
                col.sorter && 'is-sortable',
                sortKey === col.key && sortOrder && `is-sorted-${sortOrder}`,
              )}
              onClick={() => cycleSort(col.key, Boolean(col.sorter))}
            >
              <span className="mochi-table__title">
                {col.title}
                {col.sorter ? (
                  <span className="mochi-table__sorter">
                    {sortKey === col.key && sortOrder === 'ascend'
                      ? '↑'
                      : sortKey === col.key && sortOrder === 'descend'
                        ? '↓'
                        : '↕'}
                  </span>
                ) : null}
                <ColumnFilter
                  column={col}
                  activeValues={getFilterValues(col)}
                  open={openFilterKey === col.key}
                  onOpenChange={(next) => setOpenFilterKey(next ? col.key : null)}
                  onChange={(values) => {
                    if (col.filteredValue === undefined) {
                      setInnerFilters((prev) => {
                        const nextState = { ...prev }
                        if (values?.length) nextState[col.key] = values
                        else delete nextState[col.key]
                        return nextState
                      })
                    }
                  }}
                />
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {pagedData.map((record, index) => {
          const key = getRecordKey(record, index)
          const rowProps = onRow?.(record, index) ?? {}
          const checkboxProps = rowSelection?.getCheckboxProps?.(record)
          const checked = selectedKeys.some((k) => k === key)
          return (
            <tr
              key={getKey(record, index)}
              className={rowProps.className}
              onClick={rowProps.onClick}
            >
              {rowSelection ? (
                <td className="mochi-table__selection-col">
                  <input
                    type={selectionType}
                    checked={checked}
                    disabled={checkboxProps?.disabled}
                    aria-label="选择行"
                    onChange={() => toggleRow(record, index)}
                  />
                </td>
              ) : null}
              {columns.map((col) => {
                const raw = col.dataIndex ? record[col.dataIndex] : undefined
                const cell = col.render ? col.render(raw, record, index) : (raw as ReactNode)
                return (
                  <td
                    key={col.key}
                    style={{ textAlign: col.align ?? 'left' }}
                    className={cn(
                      col.fixed === 'left' && 'is-fixed-left',
                      col.fixed === 'right' && 'is-fixed-right',
                      col.ellipsis && 'is-ellipsis',
                    )}
                  >
                    {cell}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )

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
        <>
          {scroll?.y ? (
            <div className="mochi-table__scroll" style={{ maxHeight: scroll.y, overflowY: 'auto' }}>
              {tableBody}
            </div>
          ) : (
            tableBody
          )}
          {pagination !== false && pagination != null ? (
            <Pagination
              {...pagination}
              total={pagination.total ?? sortedData.length}
              current={pagination.current ?? innerPage}
              pageSize={pageSize}
              onChange={(page, size) => {
                if (pagination.current === undefined) setInnerPage(page)
                pagination.onChange?.(page, size)
              }}
            />
          ) : null}
        </>
      )}
    </div>
  )
}
