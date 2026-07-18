import { useState } from 'react'
import { cn, type TreeDataNode, type TreeProps } from '@mochi-ui/core'
import './tree.css'

function collectKeys(nodes: TreeDataNode[], all = false): string[] {
  const keys: string[] = []
  const walk = (list: TreeDataNode[]) => {
    list.forEach((node) => {
      if (all || (node.children && node.children.length > 0)) keys.push(node.key)
      if (node.children) walk(node.children)
    })
  }
  walk(nodes)
  return keys
}

function findNode(nodes: TreeDataNode[], key: string): TreeDataNode | null {
  for (const node of nodes) {
    if (node.key === key) return node
    if (node.children) {
      const found = findNode(node.children, key)
      if (found) return found
    }
  }
  return null
}

function getLeafKeys(node: TreeDataNode): string[] {
  if (!node.children?.length) return [node.key]
  return node.children.flatMap(getLeafKeys)
}

export function Tree({
  treeData = [],
  checkable = false,
  selectable = true,
  multiple = false,
  defaultExpandAll = false,
  defaultExpandedKeys,
  expandedKeys: expandedKeysProp,
  defaultSelectedKeys = [],
  selectedKeys: selectedKeysProp,
  defaultCheckedKeys = [],
  checkedKeys: checkedKeysProp,
  checkStrictly = false,
  showLine = false,
  disabled = false,
  className,
  style,
  onExpand,
  onSelect,
  onCheck,
}: TreeProps) {
  const [innerExpanded, setInnerExpanded] = useState<string[]>(
    defaultExpandedKeys ?? (defaultExpandAll ? collectKeys(treeData) : []),
  )
  const [innerSelected, setInnerSelected] = useState(defaultSelectedKeys)
  const [innerChecked, setInnerChecked] = useState(
    Array.isArray(defaultCheckedKeys) ? defaultCheckedKeys : [],
  )

  const expandedKeys = expandedKeysProp ?? innerExpanded
  const selectedKeys = selectedKeysProp ?? innerSelected
  const checkedKeysRaw = checkedKeysProp ?? innerChecked
  const checkedKeys = Array.isArray(checkedKeysRaw) ? checkedKeysRaw : checkedKeysRaw.checked
  const halfChecked = Array.isArray(checkedKeysRaw) ? [] : checkedKeysRaw.halfChecked

  const setExpanded = (next: string[]) => {
    if (expandedKeysProp === undefined) setInnerExpanded(next)
    onExpand?.(next)
  }

  const toggleExpand = (key: string) => {
    setExpanded(
      expandedKeys.includes(key) ? expandedKeys.filter((k) => k !== key) : [...expandedKeys, key],
    )
  }

  const handleSelect = (node: TreeDataNode) => {
    if (disabled || node.disabled || node.selectable === false || !selectable) return
    let next: string[]
    if (multiple) {
      next = selectedKeys.includes(node.key)
        ? selectedKeys.filter((k) => k !== node.key)
        : [...selectedKeys, node.key]
    } else {
      next = selectedKeys.includes(node.key) ? [] : [node.key]
    }
    if (selectedKeysProp === undefined) setInnerSelected(next)
    onSelect?.(next, { node, selected: next.includes(node.key) })
  }

  const handleCheck = (node: TreeDataNode) => {
    if (disabled || node.disabled || node.disableCheckbox || node.checkable === false) return
    const leafKeys = checkStrictly ? [node.key] : getLeafKeys(node)
    const checked = !leafKeys.every((k) => checkedKeys.includes(k))
    let nextChecked = [...checkedKeys]
    if (checked) {
      nextChecked = [...new Set([...nextChecked, ...leafKeys])]
    } else {
      nextChecked = nextChecked.filter((k) => !leafKeys.includes(k))
    }

    if (checkStrictly) {
      if (checkedKeysProp === undefined) setInnerChecked(nextChecked)
      onCheck?.(nextChecked, { node, checked })
      return
    }

    const allLeaves = collectKeys(treeData, true).filter((key) => {
      const n = findNode(treeData, key)
      return n && !n.children?.length
    })
    const half = treeData
      .flatMap(function walk(n: TreeDataNode): string[] {
        if (!n.children?.length) return []
        const leaves = getLeafKeys(n)
        const count = leaves.filter((k) => nextChecked.includes(k)).length
        const selfHalf = count > 0 && count < leaves.length ? [n.key] : []
        return [...selfHalf, ...n.children.flatMap(walk)]
      })
    void allLeaves
    if (checkedKeysProp === undefined) setInnerChecked(nextChecked)
    onCheck?.({ checked: nextChecked, halfChecked: half }, { node, checked })
  }

  const renderNodes = (nodes: TreeDataNode[], depth = 0) =>
    nodes.map((node) => {
      const hasChildren = !!node.children?.length
      const expanded = expandedKeys.includes(node.key)
      const selected = selectedKeys.includes(node.key)
      const checked = checkedKeys.includes(node.key)
      const indeterminate = halfChecked.includes(node.key)

      return (
        <div key={node.key} className="mochi-tree__node" style={{ paddingLeft: depth * 18 }}>
          <div
            className={cn(
              'mochi-tree__content',
              selected && 'is-selected',
              node.disabled && 'is-disabled',
            )}
          >
            {hasChildren ? (
              <button
                type="button"
                className={cn('mochi-tree__switcher', expanded && 'is-open')}
                disabled={disabled}
                onClick={() => toggleExpand(node.key)}
                aria-label={expanded ? '折叠' : '展开'}
              >
                ▸
              </button>
            ) : (
              <span className={cn('mochi-tree__switcher-placeholder', showLine && 'is-line')} />
            )}
            {checkable ? (
              <input
                type="checkbox"
                className="mochi-tree__checkbox"
                checked={checked}
                ref={(el) => {
                  if (el) el.indeterminate = indeterminate
                }}
                disabled={disabled || node.disabled || node.disableCheckbox}
                onChange={() => handleCheck(node)}
              />
            ) : null}
            <span
              className="mochi-tree__title"
              role={selectable ? 'button' : undefined}
              tabIndex={selectable && !disabled && !node.disabled ? 0 : undefined}
              onClick={() => handleSelect(node)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleSelect(node)
                }
              }}
            >
              {node.title}
            </span>
          </div>
          {hasChildren && expanded ? (
            <div className="mochi-tree__children">{renderNodes(node.children!, depth + 1)}</div>
          ) : null}
        </div>
      )
    })

  return (
    <div
      className={cn('mochi-tree', showLine && 'is-show-line', disabled && 'is-disabled', className)}
      style={style}
      role="tree"
    >
      {renderNodes(treeData)}
    </div>
  )
}

export type { TreeDataNode }
