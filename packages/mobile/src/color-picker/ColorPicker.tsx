import { useEffect, useRef, useState } from 'react'
import { cn, normalizeSize, type ColorPickerProps } from '@nextouch-app/mochi-core'
import './color-picker.css'

const PRESETS = [
  '#6cb4ee',
  '#ff8fab',
  '#7ed957',
  '#ffc857',
  '#b39ddb',
  '#ff6b6b',
  '#4ecdc4',
  '#725d42',
]

export function ColorPicker({
  value,
  defaultValue = '#6cb4ee',
  disabled = false,
  showText = false,
  presets,
  size,
  className,
  style,
  onChange,
  onChangeComplete,
}: ColorPickerProps) {
  const [inner, setInner] = useState(defaultValue)
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const finalSize = normalizeSize(size)
  const color = value ?? inner
  const list = presets?.flatMap((group) => group.colors) ?? PRESETS

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [open])

  const setColor = (next: string, complete = false) => {
    if (value === undefined) setInner(next)
    onChange?.(next)
    if (complete) onChangeComplete?.(next)
  }

  return (
    <div
      ref={rootRef}
      className={cn(
        'mochi-color-picker',
        `mochi-color-picker--${finalSize}`,
        disabled && 'is-disabled',
        open && 'is-open',
        className,
      )}
      style={style}
    >
      <button
        type="button"
        className="mochi-color-picker__trigger"
        disabled={disabled}
        onClick={() => !disabled && setOpen((v) => !v)}
      >
        <span className="mochi-color-picker__swatch" style={{ background: color }} />
        {showText ? <span className="mochi-color-picker__text">{color}</span> : null}
      </button>
      {open ? (
        <div className="mochi-color-picker__panel" role="dialog">
          <input
            type="color"
            className="mochi-color-picker__native"
            value={/^#[0-9a-fA-F]{6}$/.test(color) ? color : '#6cb4ee'}
            disabled={disabled}
            onChange={(e) => setColor(e.target.value)}
            onBlur={(e) => setColor(e.target.value, true)}
          />
          <input
            type="text"
            className="mochi-color-picker__input"
            value={color}
            disabled={disabled}
            onChange={(e) => setColor(e.target.value)}
            onBlur={(e) => setColor(e.target.value, true)}
            aria-label="color value"
          />
          <p className="mochi-color-picker__hint">支持 #hex / rgba()</p>
          <div className="mochi-color-picker__presets">
            {list.map((item) => (
              <button
                key={item}
                type="button"
                className={cn(
                  'mochi-color-picker__preset',
                  item === color && 'is-active',
                )}
                style={{ background: item }}
                disabled={disabled}
                onClick={() => {
                  setColor(item, true)
                  setOpen(false)
                }}
                aria-label={item}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
}
