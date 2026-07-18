import { useEffect, useState } from 'react'
import { cn, type PickerProps } from '@nextouch-app/mochi-core'
import { Button } from '../button/Button'
import './picker.css'

export function Picker({
  open = false,
  title = '请选择',
  columns = [],
  value,
  defaultValue,
  confirmText = '确定',
  cancelText = '取消',
  className,
  style,
  onConfirm,
  onCancel,
  onClose,
}: PickerProps) {
  const init = () =>
    value ??
    defaultValue ??
    columns.map((col) => col[0]?.value).filter((v) => v !== undefined) as Array<string | number>

  const [inner, setInner] = useState<Array<string | number>>(init)

  useEffect(() => {
    if (open) setInner(init())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  if (!open) return null

  const close = () => {
    onCancel?.()
    onClose?.()
  }

  return (
    <div className={cn('mochi-picker-root', className)} style={style} role="dialog" aria-modal="true">
      <div className="mochi-picker__mask" onClick={close} />
      <div className="mochi-picker">
        <div className="mochi-picker__header">
          <button type="button" className="mochi-picker__link" onClick={close}>
            {cancelText}
          </button>
          <div className="mochi-picker__title">{title}</div>
          <Button
            type="primary"
            size="small"
            onClick={() => {
              onConfirm?.(inner)
              onClose?.()
            }}
          >
            {confirmText}
          </Button>
        </div>
        <div className="mochi-picker__body">
          {columns.map((col, colIndex) => (
            <div key={colIndex} className="mochi-picker__column">
              {col.map((opt) => (
                <button
                  key={String(opt.value)}
                  type="button"
                  className={cn('mochi-picker__option', inner[colIndex] === opt.value && 'is-active')}
                  onClick={() => {
                    const next = [...inner]
                    next[colIndex] = opt.value
                    setInner(next)
                  }}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
