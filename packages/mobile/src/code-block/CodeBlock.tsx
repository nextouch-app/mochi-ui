import { useState } from 'react'
import { cn, type CodeBlockProps } from '@mochi-ui/core'
import './code-block.css'

export function CodeBlock({
  code = '',
  language = 'tsx',
  showCopy = true,
  title,
  className,
  style,
  children,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const content = code || (typeof children === 'string' ? children : '')

  return (
    <div className={cn('mochi-codeblock', className)} style={style}>
      <div className="mochi-codeblock__bar">
        <span className="mochi-codeblock__dots" aria-hidden>
          <i />
          <i />
          <i />
        </span>
        <span className="mochi-codeblock__title">{title ?? language}</span>
        {showCopy ? (
          <button
            type="button"
            className="mochi-codeblock__copy"
            onClick={async () => {
              try {
                await navigator.clipboard?.writeText(content)
                setCopied(true)
                window.setTimeout(() => setCopied(false), 1200)
              } catch {
                /* ignore */
              }
            }}
          >
            {copied ? '已复制' : '复制'}
          </button>
        ) : null}
      </div>
      <pre className="mochi-codeblock__pre">
        <code>{content}</code>
      </pre>
    </div>
  )
}
