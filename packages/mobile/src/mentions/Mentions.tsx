import { useEffect, useMemo, useRef, useState } from 'react'
import { cn, type MentionsOption, type MentionsProps } from '@mochi-ui/core'
import './mentions.css'

function defaultFilter(input: string, option: MentionsOption) {
  const label = typeof option.label === 'string' ? option.label : option.value
  return String(label).toLowerCase().includes(input.trim().toLowerCase())
}

function getActiveMention(text: string, caret: number, prefixes: string[]) {
  const before = text.slice(0, caret)
  let hit: { prefix: string; start: number; search: string } | null = null
  for (const prefix of prefixes) {
    const idx = before.lastIndexOf(prefix)
    if (idx < 0) continue
    const prev = before[idx - 1]
    if (idx > 0 && prev && !/\s/.test(prev)) continue
    const search = before.slice(idx + prefix.length)
    if (/\s/.test(search)) continue
    if (!hit || idx > hit.start) hit = { prefix, start: idx, search }
  }
  return hit
}

export function Mentions({
  value,
  defaultValue = '',
  options = [],
  prefix = '@',
  placeholder = '输入 @ 提及',
  disabled = false,
  rows = 3,
  status,
  split = ' ',
  filterOption = true,
  className,
  style,
  onChange,
  onSelect,
  onSearch,
}: MentionsProps) {
  const [inner, setInner] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<{ prefix: string; start: number; search: string } | null>(
    null,
  )
  const current = value ?? inner
  const ref = useRef<HTMLDivElement>(null)
  const areaRef = useRef<HTMLTextAreaElement>(null)
  const prefixes = Array.isArray(prefix) ? prefix : [prefix]

  const filtered = useMemo(() => {
    if (!active) return []
    if (filterOption === false) return options
    if (typeof filterOption === 'function') {
      return options.filter((opt) => filterOption(active.search, opt))
    }
    if (!active.search) return options
    return options.filter((opt) => defaultFilter(active.search, opt))
  }, [options, active, filterOption])

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const updateFromCaret = (text: string, caret: number) => {
    const mention = getActiveMention(text, caret, prefixes)
    setActive(mention)
    setOpen(!!mention)
    if (mention) onSearch?.(mention.search, mention.prefix)
  }

  const setText = (next: string) => {
    if (value === undefined) setInner(next)
    onChange?.(next)
  }

  const pick = (option: MentionsOption) => {
    if (!active || option.disabled || !areaRef.current) return
    const caret = areaRef.current.selectionStart
    const before = current.slice(0, active.start)
    const after = current.slice(caret)
    const insert = `${active.prefix}${option.value}${split}`
    const next = `${before}${insert}${after}`
    setText(next)
    onSelect?.(option, active.prefix)
    setOpen(false)
    setActive(null)
    requestAnimationFrame(() => {
      const pos = before.length + insert.length
      areaRef.current?.focus()
      areaRef.current?.setSelectionRange(pos, pos)
    })
  }

  return (
    <div
      ref={ref}
      className={cn(
        'mochi-mentions',
        open && 'is-open',
        disabled && 'is-disabled',
        status && `is-${status}`,
        className,
      )}
      style={style}
    >
      <textarea
        ref={areaRef}
        className="mochi-mentions__textarea"
        value={current}
        rows={rows}
        placeholder={placeholder}
        disabled={disabled}
        onChange={(e) => {
          const next = e.target.value
          setText(next)
          updateFromCaret(next, e.target.selectionStart)
        }}
        onClick={(e) => updateFromCaret(current, e.currentTarget.selectionStart)}
        onKeyUp={(e) => updateFromCaret(current, e.currentTarget.selectionStart)}
      />
      {open && active ? (
        <div className="mochi-mentions__dropdown" role="listbox">
          {filtered.length === 0 ? (
            <div className="mochi-mentions__empty">暂无匹配</div>
          ) : (
            filtered.map((opt) => (
              <button
                key={opt.value}
                type="button"
                role="option"
                disabled={opt.disabled}
                className="mochi-mentions__option"
                onClick={() => pick(opt)}
              >
                {opt.label ?? opt.value}
              </button>
            ))
          )}
        </div>
      ) : null}
    </div>
  )
}
