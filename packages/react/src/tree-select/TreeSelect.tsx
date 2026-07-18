import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { cn, normalizeSize, type TreeDataNode, type TreeSelectProps } from '@mochi-ui/core'
import { useConfig } from '../config-provider/ConfigProvider'
import { Tree } from '../tree/Tree'
import './tree-select.css'

function flatten(nodes: TreeDataNode[]): TreeDataNode[] {
  return nodes.flatMap((n) => [n, ...(n.children ? flatten(n.children) : [])])
}

function matchSearch(node: TreeDataNode, keyword: string) {
  if (!keyword) return true
  const title = typeof node.title === 'string' ? node.title : String(node.key)
  return title.toLowerCase().includes(keyword.toLowerCase())
}

function filterTree(nodes: TreeDataNode[], keyword: string): TreeDataNode[] {
  if (!keyword) return nodes
  return nodes
    .map((node) => {
      const children = node.children ? filterTree(node.children, keyword) : []
      if (matchSearch(node, keyword) || children.length) {
        return { ...node, children: children.length ? children : node.children }
      }
      return null
    })
    .filter(Boolean) as TreeDataNode[]
}

export function TreeSelect({
  treeData = [],
  value,
  defaultValue,
  placeholder = '请选择',
  disabled = false,
  allowClear = true,
  multiple = false,
  treeCheckable = false,
  treeDefaultExpandAll = true,
  showSearch = false,
  status,
  size,
  className,
  style,
  onChange,
  onSearch,
  onClear,
}: TreeSelectProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize(size ?? ctxSize)
  const multi = multiple || treeCheckable
  const [inner, setInner] = useState<string | string[] | undefined>(defaultValue)
  const [open, setOpen] = useState(false)
  const [keyword, setKeyword] = useState('')
  const current = value ?? inner
  const ref = useRef<HTMLDivElement>(null)
  const flat = useMemo(() => flatten(treeData), [treeData])
  const filteredData = useMemo(() => filterTree(treeData, keyword), [treeData, keyword])

  const selectedKeys = useMemo(() => {
    if (current == null) return [] as string[]
    return Array.isArray(current) ? current : [current]
  }, [current])

  const labels = selectedKeys
    .map((key) => flat.find((n) => n.key === key)?.title)
    .filter(Boolean) as ReactNode[]

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const commit = (keys: string[]) => {
    const next = multi ? keys : keys[0]
    if (value === undefined) setInner(next)
    const labelList = keys
      .map((key) => flat.find((n) => n.key === key)?.title)
      .filter(Boolean) as ReactNode[]
    onChange?.(next, labelList)
  }

  const display = labels.length
    ? multi
      ? labels.map((label, i) => (
          <span key={selectedKeys[i]} className="mochi-treeselect__tag">
            {label}
          </span>
        ))
      : labels[0]
    : null

  return (
    <div
      ref={ref}
      className={cn(
        'mochi-treeselect',
        `mochi-treeselect--${finalSize}`,
        open && 'is-open',
        disabled && 'is-disabled',
        status && `is-${status}`,
        className,
      )}
      style={style}
    >
      <button
        type="button"
        className="mochi-treeselect__trigger"
        disabled={disabled}
        onClick={() => !disabled && setOpen(!open)}
      >
        <span className={cn('mochi-treeselect__value', !display && 'is-placeholder')}>
          {display ?? placeholder}
        </span>
        {allowClear && selectedKeys.length > 0 ? (
          <span
            className="mochi-treeselect__clear"
            role="button"
            onClick={(e) => {
              e.stopPropagation()
              if (value === undefined) setInner(multi ? [] : undefined)
              onChange?.(multi ? [] : undefined, [])
              onClear?.()
            }}
          >
            ×
          </span>
        ) : (
          <span className="mochi-treeselect__arrow">▾</span>
        )}
      </button>
      {open ? (
        <div className="mochi-treeselect__dropdown">
          {showSearch ? (
            <input
              className="mochi-treeselect__search"
              placeholder="搜索"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value)
                onSearch?.(e.target.value)
              }}
            />
          ) : null}
          <Tree
            treeData={filteredData}
            selectable={!treeCheckable}
            multiple={multi && !treeCheckable}
            checkable={treeCheckable}
            defaultExpandAll={treeDefaultExpandAll}
            selectedKeys={treeCheckable ? undefined : selectedKeys}
            checkedKeys={treeCheckable ? selectedKeys : undefined}
            onSelect={(keys) => {
              if (treeCheckable) return
              commit(keys)
              if (!multi) setOpen(false)
            }}
            onCheck={(keys) => {
              const next = Array.isArray(keys) ? keys : keys.checked
              commit(next)
            }}
          />
        </div>
      ) : null}
    </div>
  )
}
