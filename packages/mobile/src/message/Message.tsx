import { useEffect, useState, type ReactNode } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { cn, type MessageOptions } from '@mochi-ui/core'
import './message.css'

let host: HTMLDivElement | null = null
let root: Root | null = null
let seq = 0
type Item = MessageOptions & { id: number }
let queue: Item[] = []

function ensure() {
  if (typeof document === 'undefined') return null
  if (!host) {
    host = document.createElement('div')
    host.className = 'mochi-message-host'
    document.body.appendChild(host)
    root = createRoot(host)
  }
  return root
}

function render() {
  ensure()?.render(
    <>
      {queue.map((item) => (
        <MessageItem key={item.id} item={item} />
      ))}
    </>,
  )
}

function MessageItem({ item }: { item: Item }) {
  const [leaving, setLeaving] = useState(false)
  useEffect(() => {
    const t = window.setTimeout(() => setLeaving(true), item.duration ?? 2400)
    return () => window.clearTimeout(t)
  }, [item.duration])

  useEffect(() => {
    if (!leaving) return
    const t = window.setTimeout(() => {
      queue = queue.filter((q) => q.id !== item.id)
      render()
    }, 180)
    return () => window.clearTimeout(t)
  }, [leaving, item.id])

  return (
    <div className={cn('mochi-message', `mochi-message--${item.type ?? 'info'}`, leaving && 'is-leaving')} role="status">
      {item.content}
    </div>
  )
}

function push(content: ReactNode, type: MessageOptions['type'] = 'info', duration?: number) {
  queue = [...queue, { id: ++seq, content, type, duration }]
  render()
}

export const Message = {
  open(options: MessageOptions) {
    push(options.content, options.type ?? 'info', options.duration)
  },
  info(content: ReactNode, duration?: number) {
    push(content, 'info', duration)
  },
  success(content: ReactNode, duration?: number) {
    push(content, 'success', duration)
  },
  warning(content: ReactNode, duration?: number) {
    push(content, 'warning', duration)
  },
  error(content: ReactNode, duration?: number) {
    push(content, 'error', duration)
  },
}
