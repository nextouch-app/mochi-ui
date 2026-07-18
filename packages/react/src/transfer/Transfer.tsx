import { useMemo, useState, type ReactNode } from 'react'
import { cn, type TransferItem, type TransferProps } from '@nextouch-app/mochi-core'
import { Button } from '../button/Button'
import './transfer.css'

function defaultFilter(input: string, item: TransferItem) {
  const title = typeof item.title === 'string' ? item.title : String(item.key)
  return title.toLowerCase().includes(input.trim().toLowerCase())
}

export function Transfer({
  dataSource = [],
  targetKeys: targetKeysProp,
  defaultTargetKeys = [],
  selectedKeys: selectedKeysProp,
  defaultSelectedKeys = [],
  titles = ['源列表', '目标列表'],
  operations = ['>', '<'],
  showSearch = false,
  disabled = false,
  oneWay = false,
  listStyle,
  filterOption = defaultFilter,
  render,
  className,
  style,
  onChange,
  onSelectChange,
  onSearch,
}: TransferProps) {
  const [innerTarget, setInnerTarget] = useState(defaultTargetKeys)
  const [innerSelected, setInnerSelected] = useState(defaultSelectedKeys)
  const [leftKeyword, setLeftKeyword] = useState('')
  const [rightKeyword, setRightKeyword] = useState('')

  const targetKeys = targetKeysProp ?? innerTarget
  const selectedKeys = selectedKeysProp ?? innerSelected

  const leftData = useMemo(
    () => dataSource.filter((item) => !targetKeys.includes(item.key)),
    [dataSource, targetKeys],
  )
  const rightData = useMemo(
    () => dataSource.filter((item) => targetKeys.includes(item.key)),
    [dataSource, targetKeys],
  )

  const filterFn = typeof filterOption === 'function' ? filterOption : defaultFilter
  const leftFiltered = leftData.filter((item) => !showSearch || !leftKeyword || filterFn(leftKeyword, item))
  const rightFiltered = rightData.filter(
    (item) => !showSearch || !rightKeyword || filterFn(rightKeyword, item),
  )

  const leftSelected = selectedKeys.filter((key) => leftData.some((item) => item.key === key))
  const rightSelected = selectedKeys.filter((key) => rightData.some((item) => item.key === key))

  const setSelected = (next: string[]) => {
    if (selectedKeysProp === undefined) setInnerSelected(next)
    const sourceSelected = next.filter((key) => leftData.some((item) => item.key === key))
    const targetSelected = next.filter((key) => rightData.some((item) => item.key === key))
    onSelectChange?.(sourceSelected, targetSelected)
  }

  const toggle = (key: string, itemDisabled?: boolean) => {
    if (disabled || itemDisabled) return
    setSelected(
      selectedKeys.includes(key) ? selectedKeys.filter((k) => k !== key) : [...selectedKeys, key],
    )
  }

  const move = (direction: 'left' | 'right') => {
    if (disabled) return
    const moveKeys = direction === 'right' ? leftSelected : rightSelected
    if (!moveKeys.length) return
    const nextTarget =
      direction === 'right'
        ? [...new Set([...targetKeys, ...moveKeys])]
        : targetKeys.filter((key) => !moveKeys.includes(key))
    if (targetKeysProp === undefined) setInnerTarget(nextTarget)
    setSelected(selectedKeys.filter((key) => !moveKeys.includes(key)))
    onChange?.(nextTarget, direction, moveKeys)
  }

  const renderPanel = (
    side: 'left' | 'right',
    title: ReactNode,
    items: TransferItem[],
    keyword: string,
    setKeyword: (v: string) => void,
    selected: string[],
  ) => (
    <div className="mochi-transfer__panel" style={listStyle}>
      <div className="mochi-transfer__header">
        <span>
          {selected.length}/{items.length}
        </span>
        <strong>{title}</strong>
      </div>
      {showSearch ? (
        <input
          className="mochi-transfer__search"
          placeholder="搜索"
          value={keyword}
          disabled={disabled}
          onChange={(e) => {
            setKeyword(e.target.value)
            onSearch?.(side, e.target.value)
          }}
        />
      ) : null}
      <ul className="mochi-transfer__list">
        {items.map((item) => (
          <li key={item.key}>
            <label
              className={cn(
                'mochi-transfer__item',
                selected.includes(item.key) && 'is-selected',
                (disabled || item.disabled) && 'is-disabled',
              )}
            >
              <input
                type="checkbox"
                checked={selected.includes(item.key)}
                disabled={disabled || item.disabled}
                onChange={() => toggle(item.key, item.disabled)}
              />
              <span className="mochi-transfer__item-body">
                {render?.(item) ?? (
                  <>
                    <span className="mochi-transfer__item-title">{item.title}</span>
                    {item.description ? (
                      <span className="mochi-transfer__item-desc">{item.description}</span>
                    ) : null}
                  </>
                )}
              </span>
            </label>
          </li>
        ))}
        {items.length === 0 ? <li className="mochi-transfer__empty">暂无数据</li> : null}
      </ul>
    </div>
  )

  return (
    <div className={cn('mochi-transfer', disabled && 'is-disabled', className)} style={style}>
      {renderPanel('left', titles[0], leftFiltered, leftKeyword, setLeftKeyword, leftSelected)}
      <div className="mochi-transfer__ops">
        <Button
          type="primary"
          size="small"
          disabled={disabled || leftSelected.length === 0}
          onClick={() => move('right')}
        >
          {operations[0]}
        </Button>
        {!oneWay ? (
          <Button
            type="default"
            size="small"
            disabled={disabled || rightSelected.length === 0}
            onClick={() => move('left')}
          >
            {operations[1]}
          </Button>
        ) : null}
      </div>
      {renderPanel('right', titles[1], rightFiltered, rightKeyword, setRightKeyword, rightSelected)}
    </div>
  )
}
