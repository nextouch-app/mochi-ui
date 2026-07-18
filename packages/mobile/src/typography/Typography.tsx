import { useState, type CSSProperties, type ElementType, type ReactNode } from 'react'
import {
  cn,
  type TypographyLinkProps,
  type TypographyParagraphProps,
  type TypographyTextProps,
  type TypographyTitleProps,
} from '@mochi-ui/core'
import './typography.css'

function typoClass(
  base: string,
  {
    type,
    strong,
    italic,
    underline,
    delete: del,
    code,
    mark,
    disabled,
    ellipsis,
  }: Partial<TypographyTextProps>,
) {
  return cn(
    base,
    type && `mochi-typography--${type}`,
    strong && 'is-strong',
    italic && 'is-italic',
    underline && 'is-underline',
    del && 'is-delete',
    code && 'is-code',
    mark && 'is-mark',
    disabled && 'is-disabled',
    ellipsis && 'is-ellipsis',
  )
}

function CopyButton({ text, onCopy }: { text: string; onCopy?: () => void }) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      type="button"
      className="mochi-typography__copy"
      aria-label="复制"
      onClick={async () => {
        try {
          await navigator.clipboard?.writeText(text)
          setCopied(true)
          onCopy?.()
          window.setTimeout(() => setCopied(false), 1200)
        } catch {
          /* ignore */
        }
      }}
    >
      {copied ? '✓' : '⧉'}
    </button>
  )
}

function Text({
  type,
  strong,
  italic,
  underline,
  delete: del,
  code,
  mark,
  disabled,
  ellipsis,
  copyable,
  className,
  style,
  children,
}: TypographyTextProps) {
  const Tag: ElementType = code ? 'code' : 'span'
  const copyCfg = copyable === true ? {} : copyable || undefined
  const copyText = copyCfg?.text ?? String(children ?? '')

  return (
    <Tag
      className={typoClass('mochi-typography mochi-typography-text', {
        type,
        strong,
        italic,
        underline,
        delete: del,
        code,
        mark,
        disabled,
        ellipsis,
      }) + (className ? ` ${className}` : '')}
      style={style}
    >
      {children}
      {copyCfg ? <CopyButton text={copyText} onCopy={copyCfg.onCopy} /> : null}
    </Tag>
  )
}

function Title({
  level = 1,
  type,
  ellipsis,
  className,
  style,
  children,
}: TypographyTitleProps) {
  const Tag = (`h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5')
  return (
    <Tag
      className={cn(
        'mochi-typography',
        'mochi-typography-title',
        `mochi-typography-title--h${level}`,
        type && `mochi-typography--${type}`,
        ellipsis && 'is-ellipsis',
        className,
      )}
      style={style}
    >
      {children}
    </Tag>
  )
}

function Paragraph(props: TypographyParagraphProps) {
  const {
    type,
    strong,
    italic,
    underline,
    delete: del,
    code,
    mark,
    disabled,
    ellipsis,
    copyable,
    className,
    style,
    children,
  } = props
  const copyCfg = copyable === true ? {} : copyable || undefined
  const copyText = copyCfg?.text ?? String(children ?? '')

  return (
    <p
      className={typoClass('mochi-typography mochi-typography-paragraph', {
        type,
        strong,
        italic,
        underline,
        delete: del,
        code,
        mark,
        disabled,
        ellipsis,
      }) + (className ? ` ${className}` : '')}
      style={style}
    >
      {children}
      {copyCfg ? <CopyButton text={copyText} onCopy={copyCfg.onCopy} /> : null}
    </p>
  )
}

function Link({
  href,
  target,
  type,
  disabled,
  className,
  style,
  children,
  onClick,
}: TypographyLinkProps) {
  if (disabled || !href) {
    return (
      <span
        className={cn(
          'mochi-typography',
          'mochi-typography-link',
          'is-disabled',
          type && `mochi-typography--${type}`,
          className,
        )}
        style={style}
      >
        {children}
      </span>
    )
  }
  return (
    <a
      className={cn(
        'mochi-typography',
        'mochi-typography-link',
        type && `mochi-typography--${type}`,
        className,
      )}
      style={style}
      href={href}
      target={target}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export const Typography = Object.assign(
  ({ className, style, children }: { className?: string; style?: CSSProperties; children?: ReactNode }) => (
    <div className={cn('mochi-typography-root', className)} style={style}>
      {children}
    </div>
  ),
  { Text, Title, Paragraph, Link },
)
