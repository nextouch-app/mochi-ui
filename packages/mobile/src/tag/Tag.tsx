import { cn, type TagProps } from '@nextouch-app/mochi-core'

export function Tag({
  variant = 'solid',
  color = 'primary',
  size = 'md',
  closable = false,
  icon,
  bordered = false,
  className,
  style,
  children,
  onClose,
}: TagProps) {
  return (
    <span
      className={cn(
        'mochi-tag',
        `mochi-tag--${variant}`,
        `mochi-tag--${color}`,
        `mochi-tag--${size}`,
        bordered && 'is-bordered',
        closable && 'is-closable',
        className,
      )}
      style={style}
    >
      {icon ? <span className="mochi-tag__icon">{icon}</span> : null}
      <span className="mochi-tag__content">{children}</span>
      {closable ? (
        <button
          type="button"
          className="mochi-tag__close"
          aria-label="关闭"
          onClick={(e) => onClose?.(e)}
        >
          ×
        </button>
      ) : null}
    </span>
  )
}
