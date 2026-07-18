import {
  useEffect,
  useState,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type MouseEvent as ReactMouseEvent,
} from 'react'
import { cn, normalizeSize, type ButtonProps } from '@mochi-ui/core'
import { useConfig } from '../config-provider/ConfigProvider'
import './button.css'

type NativeButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  keyof ButtonProps | 'type'
>
type NativeAnchorProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof ButtonProps | 'type'
>

export function Button({
  type = 'default',
  size,
  shape = 'default',
  danger = false,
  ghost = false,
  disabled = false,
  loading = false,
  block = false,
  icon,
  iconPlacement = 'start',
  href,
  target,
  htmlType = 'button',
  className,
  style,
  children,
  onClick,
  ...rest
}: ButtonProps & NativeButtonProps & NativeAnchorProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize(size ?? ctxSize)
  const [pressed, setPressed] = useState(false)
  const [innerLoading, setInnerLoading] = useState(false)

  const loadingDelay = typeof loading === 'object' ? loading.delay ?? 0 : 0
  const loadingEnabled = typeof loading === 'object' ? true : !!loading

  useEffect(() => {
    if (!loadingEnabled) {
      setInnerLoading(false)
      return
    }
    if (loadingDelay <= 0) {
      setInnerLoading(true)
      return
    }
    const timer = window.setTimeout(() => setInnerLoading(true), loadingDelay)
    return () => window.clearTimeout(timer)
  }, [loadingEnabled, loadingDelay])

  const isLoading = innerLoading
  const isDisabled = disabled || isLoading
  const isIconOnly = !!icon && (children === undefined || children === null || children === '')
  const isLinkLike = type === 'link' || type === 'text' || !!href

  const classNames = cn(
    'mochi-btn',
    `mochi-btn--${type}`,
    `mochi-btn--${finalSize}`,
    shape !== 'default' && `mochi-btn--shape-${shape}`,
    danger && 'mochi-btn--danger',
    ghost && 'mochi-btn--ghost',
    block && 'mochi-btn--block',
    isIconOnly && 'mochi-btn--icon-only',
    isDisabled && 'is-disabled',
    isLoading && 'is-loading',
    pressed && 'is-pressed',
    className,
  )

  const loadingIcon =
    typeof loading === 'object' && loading.icon != null ? loading.icon : null

  const content = (
    <>
      {isLoading && !loadingIcon ? <span className="mochi-btn__stripes" aria-hidden /> : null}
      {isLoading && loadingIcon ? (
        <span className="mochi-btn__icon mochi-btn__icon--loading">{loadingIcon}</span>
      ) : null}
      {!isLoading && icon && iconPlacement === 'start' ? (
        <span className="mochi-btn__icon">{icon}</span>
      ) : null}
      {children != null && children !== false ? (
        <span className="mochi-btn__label">{children}</span>
      ) : null}
      {!isLoading && icon && iconPlacement === 'end' ? (
        <span className="mochi-btn__icon">{icon}</span>
      ) : null}
    </>
  )

  const pressHandlers = isLinkLike
    ? {}
    : {
        onMouseDown: () => setPressed(true),
        onMouseUp: () => setPressed(false),
        onMouseLeave: () => setPressed(false),
      }

  const handleClick = (e: ReactMouseEvent<HTMLElement>) => {
    if (isDisabled) {
      e.preventDefault()
      return
    }
    onClick?.(e as ReactMouseEvent<HTMLButtonElement>)
  }

  if (href) {
    return (
      <a
        className={classNames}
        style={style}
        href={isDisabled ? undefined : href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        aria-disabled={isDisabled || undefined}
        aria-busy={isLoading || undefined}
        onClick={handleClick}
        {...(rest as NativeAnchorProps)}
      >
        {content}
      </a>
    )
  }

  return (
    <button
      type={htmlType}
      className={classNames}
      style={style}
      disabled={isDisabled}
      aria-busy={isLoading || undefined}
      onClick={handleClick}
      {...pressHandlers}
      {...(rest as NativeButtonProps)}
    >
      {content}
    </button>
  )
}
