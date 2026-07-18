import {
  icons,
  type IconName,
  type IconComponentProps as SvgIconProps,
} from '@nextouch-app/mochi-icons'
import { cn } from '@nextouch-app/mochi-core'
import './icon.css'

export interface IconProps extends Omit<SvgIconProps, 'children'> {
  name: IconName
  className?: string
  /** hover 时轻微弹跳 */
  bounce?: boolean
}

export function Icon({
  name,
  className,
  size = 24,
  color,
  bounce = false,
  ...rest
}: IconProps) {
  const Comp = icons[name]
  if (!Comp) return null
  return (
    <span
      className={cn('mochi-icon', bounce && 'mochi-icon--bounce', className)}
      style={{ width: typeof size === 'number' ? size : size, height: typeof size === 'number' ? size : size }}
    >
      <Comp size={size} color={color} {...rest} />
    </span>
  )
}
