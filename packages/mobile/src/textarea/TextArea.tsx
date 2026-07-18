import { cn, type TextAreaProps } from '@nextouch-app/mochi-core'

export function TextArea({
  className,
  style,
  disabled,
  rows = 3,
  ...rest
}: TextAreaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn('mochi-textarea', disabled && 'is-disabled', className)}
      style={style}
      disabled={disabled}
      rows={rows}
      {...rest}
    />
  )
}
