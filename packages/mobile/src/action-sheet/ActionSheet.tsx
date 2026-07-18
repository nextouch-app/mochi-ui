import { cn, type ActionSheetProps } from '@nextouch-app/mochi-core'

export function ActionSheet({
  open = false,
  actions = [],
  cancelText = '取消',
  onClose,
  className,
  style,
}: ActionSheetProps) {
  if (!open) return null

  return (
    <div className="mochi-action-sheet-root">
      <div className="mochi-action-sheet__mask" onClick={onClose} />
      <div className={cn('mochi-action-sheet', className)} style={style} role="dialog">
        <div className="mochi-action-sheet__list">
          {actions.map((action) => (
            <button
              key={action.key}
              type="button"
              disabled={action.disabled}
              className={cn(
                'mochi-action-sheet__item',
                action.danger && 'is-danger',
                action.disabled && 'is-disabled',
              )}
              onClick={() => {
                action.onClick?.()
                onClose?.()
              }}
            >
              {action.text}
            </button>
          ))}
        </div>
        <button type="button" className="mochi-action-sheet__cancel" onClick={onClose}>
          {cancelText}
        </button>
      </div>
    </div>
  )
}
