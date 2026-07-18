import { useEffect, useState, type ReactNode } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { cn, type MessageConfig, type MessageOptions } from '@nextouch-app/mochi-core'
import './message.css'

let host: HTMLDivElement | null = null
let root: Root | null = null
let seq = 0
type Item = MessageOptions & { id: number }
let queue: Item[] = []
let globalConfig: MessageConfig = { duration: 2400, top: 20 }

function ensure() {
  if (typeof document === 'undefined') return null
  if (!host) {
    host = document.createElement('div')
    host.className = 'mochi-message-host'
    document.body.appendChild(host)
    root = createRoot(host)
  }
  if (globalConfig.top != null) host.style.top = `${globalConfig.top}px`
  return root
}

function render() {
  ensure()?.render(
    <>
      {queue.map((item) => (
        <MessageItem key={item.id} item={item} onDismiss={() => removeItem(item)} />
      ))}
    </>,
  )
}

function removeItem(item: Item) {
  queue = queue.filter((q) => q.id !== item.id)
  item.onClose?.()
  render()
}

function MessageItem({ item, onDismiss }: { item: Item; onDismiss: () => void }) {
  const [leaving, setLeaving] = useState(false)
  const duration = item.duration ?? globalConfig.duration ?? 2400

  useEffect(() => {
    if (item.type === 'loading' || duration === 0) return
    const t = window.setTimeout(() => setLeaving(true), duration)
    return () => window.clearTimeout(t)
  }, [duration, item.type])

  useEffect(() => {
    if (!leaving) return
    const t = window.setTimeout(onDismiss, 180)
    return () => window.clearTimeout(t)
  }, [leaving, onDismiss])

  return (
    <div
      className={cn('mochi-message', `mochi-message--${item.type ?? 'info'}`, leaving && 'is-leaving')}
      role="status"
    >
      {item.icon ? <span className="mochi-message__icon">{item.icon}</span> : null}
      {item.type === 'loading' ? <span className="mochi-message__spinner" aria-hidden /> : null}
      {item.content}
    </div>
  )
}

function add(options: MessageOptions): () => void {
  const id = ++seq
  const item: Item = { ...options, id, duration: options.duration ?? globalConfig.duration }

  if (options.key != null) {
    queue = queue.filter((q) => q.key !== options.key)
  }

  queue = [...queue, item]
  if (globalConfig.maxCount != null && queue.length > globalConfig.maxCount) {
    const removed = queue.slice(0, queue.length - globalConfig.maxCount)
    removed.forEach((q) => q.onClose?.())
    queue = queue.slice(-globalConfig.maxCount)
  }

  render()
  return () => {
    const target = queue.find((q) => q.key === options.key || q.id === id)
    if (target) removeItem(target)
  }
}

function push(content: ReactNode, type: MessageOptions['type'] = 'info', duration?: number) {
  return add({ content, type, duration })
}

export const Message = {
  open(options: MessageOptions) {
    return add(options)
  },
  info(content: ReactNode, duration?: number) {
    return push(content, 'info', duration)
  },
  success(content: ReactNode, duration?: number) {
    return push(content, 'success', duration)
  },
  warning(content: ReactNode, duration?: number) {
    return push(content, 'warning', duration)
  },
  error(content: ReactNode, duration?: number) {
    return push(content, 'error', duration)
  },
  loading(content: ReactNode, duration?: number) {
    return push(content, 'loading', duration)
  },
  destroy(key?: string | number) {
    if (key == null) return
    const targets = queue.filter((q) => q.key === key)
    targets.forEach((t) => removeItem(t))
  },
  destroyAll() {
    queue.forEach((q) => q.onClose?.())
    queue = []
    render()
  },
  config(options: MessageConfig) {
    globalConfig = { ...globalConfig, ...options }
    if (host && options.top != null) host.style.top = `${options.top}px`
  },
}
