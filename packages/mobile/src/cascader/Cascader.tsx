import { useEffect, useMemo, useState } from 'react'
import { cn, normalizeSize, type CascaderOption, type CascaderProps } from '@nextouch-app/mochi-core'
import { useConfig } from '../config-provider/ConfigProvider'
import { Button } from '../button/Button'
import './cascader.css'

function findOptionsByPath(options: CascaderOption[], path: Array<string | number>): CascaderOption[] {
  const selected: CascaderOption[] = []
  let current = options
  for (const value of path) {
    const opt = current.find((item) => item.value === value)
    if (!opt) break
    selected.push(opt)
    current = opt.children ?? []
  }
  return selected
}

function buildColumns(options: CascaderOption[], path: Array<string | number>) {
  const columns: CascaderOption[][] = [options]
  let current = options
  for (const value of path) {
    const opt = current.find((item) => item.value === value)
    if (!opt?.children?.length) break
    columns.push(opt.children)
    current = opt.children
  }
  return columns
}

export function Cascader({
  options = [],
  value,
  defaultValue = [],
  placeholder = '请选择',
  disabled = false,
  allowClear = true,
  changeOnSelect = false,
  size,
  status,
  displayRender,
  className,
  style,
  onChange,
}: CascaderProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize(size ?? ctxSize)
  const [inner, setInner] = useState<Array<string | number>>(defaultValue)
  const [open, setOpen] = useState(false)
  const [activePath, setActivePath] = useState<Array<string | number>>(defaultValue)
  const current = value ?? inner

  const selectedOptions = useMemo(() => findOptionsByPath(options, current), [options, current])
  const columns = useMemo(() => buildColumns(options, activePath), [options, activePath])
  const labels = selectedOptions.map((opt) => opt.label)
  const display =
    displayRender?.(labels, selectedOptions) ??
    (labels.length ? labels.join(' / ') : '')

  useEffect(() => {
    if (open) setActivePath(current)
  }, [open, current])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  const commit = (path: Array<string | number>) => {
    const selected = findOptionsByPath(options, path)
    if (value === undefined) setInner(path)
    onChange?.(path, selected)
  }

  const selectOption = (columnIndex: number, option: CascaderOption) => {
    if (option.disabled) return
    const nextPath = [...activePath.slice(0, columnIndex), option.value]
    setActivePath(nextPath)
    const isLeaf = !option.children?.length
    if (isLeaf || changeOnSelect) {
      commit(nextPath)
      if (isLeaf) setOpen(false)
    }
  }

  return (
    <div
      className={cn(
        'mochi-cascader',
        `mochi-cascader--${finalSize}`,
        open && 'is-open',
        disabled && 'is-disabled',
        status && `is-${status}`,
        className,
      )}
      style={style}
    >
      <button
        type="button"
        className="mochi-cascader__trigger"
        disabled={disabled}
        onClick={() => !disabled && setOpen(true)}
      >
        <span className={cn(!display && 'is-placeholder')}>{display || placeholder}</span>
        {allowClear && current.length ? (
          <span
            className="mochi-cascader__clear"
            role="button"
            onClick={(e) => {
              e.stopPropagation()
              commit([])
              setActivePath([])
            }}
          >
            ×
          </span>
        ) : (
          <span className="mochi-cascader__arrow">▾</span>
        )}
      </button>
      {open ? (
        <div className="mochi-cascader-sheet" role="dialog" aria-modal="true">
          <div className="mochi-cascader-sheet__mask" onClick={() => setOpen(false)} />
          <div className="mochi-cascader-sheet__panel">
            <div className="mochi-cascader-sheet__header">
              <button type="button" className="mochi-cascader-sheet__link" onClick={() => setOpen(false)}>
                取消
              </button>
              <div className="mochi-cascader-sheet__title">请选择</div>
              <Button
                type="primary"
                size="small"
                onClick={() => {
                  commit(activePath)
                  setOpen(false)
                }}
              >
                确定
              </Button>
            </div>
            <div className="mochi-cascader-sheet__body">
              <div className="mochi-cascader__panel">
                {columns.map((column, columnIndex) => (
                  <div key={columnIndex} className="mochi-cascader__menu" role="menu">
                    {column.map((option) => (
                      <button
                        key={String(option.value)}
                        type="button"
                        role="menuitem"
                        disabled={option.disabled}
                        className={cn(
                          'mochi-cascader__item',
                          activePath[columnIndex] === option.value && 'is-active',
                          option.children?.length && 'has-children',
                        )}
                        onClick={() => selectOption(columnIndex, option)}
                      >
                        <span>{option.label}</span>
                        {option.children?.length ? <span className="mochi-cascader__item-arrow">›</span> : null}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}
