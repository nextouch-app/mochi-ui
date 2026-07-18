import { useEffect, useState } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { cn, type NotificationConfig, type NotificationOptions } from '@nextouch-app/mochi-core'
import './notification.css'

let host: HTMLDivElement | null = null
let root: Root | null = null
let seq = 0
type Item = NotificationOptions & { id: number }
let queue: Item[] = []
let globalConfig: NotificationConfig = { duration: 3600, placement: 'topRight' }

function ensure() {
  if (typeof document === 'undefined') return null
  if (!host) {
    host = document.createElement('div')
    host.className = 'mochi-notification-host'
    document.body.appendChild(host)
    root = createRoot(host)
  }
  return root
}

function render() {
  const placement = globalConfig.placement ?? 'topRight'
  if (host) host.dataset.placement = placement
  ensure()?.render(
    <div className="mochi-notification-stack">
      {queue.map((item) => (
        <NotificationCard
          key={item.id}
          item={item}
          onDismiss={() => removeItem(item)}
        />
      ))}
    </div>,
  )
}

function removeItem(item: Item) {
  queue = queue.filter((q) => q.id !== item.id)
  item.onClose?.()
  render()
}

function NotificationCard({ item, onDismiss }: { item: Item; onDismiss: () => void }) {
  const [leaving, setLeaving] = useState(false)
  const duration = item.duration ?? globalConfig.duration ?? 3600
  const placement = item.placement ?? globalConfig.placement ?? 'topRight'

  useEffect(() => {
    if (duration === 0) return
    const t = window.setTimeout(() => setLeaving(true), duration)
    return () => window.clearTimeout(t)
  }, [duration])

  useEffect(() => {
    if (!leaving) return
    const t = window.setTimeout(onDismiss, 200)
    return () => window.clearTimeout(t)
  }, [leaving, onDismiss])

  return (
    <div
      className={cn(
        'mochi-notification',
        `mochi-notification--${item.type ?? 'info'}`,
        `mochi-notification--${placement}`,
        leaving && 'is-leaving',
      )}
      role="status"
    >
      <button
        type="button"
        className="mochi-notification__close"
        aria-label="关闭"
        onClick={() => {
          setLeaving(true)
        }}
      >
        ×
      </button>
      {item.icon ? <div className="mochi-notification__icon">{item.icon}</div> : null}
      <div className="mochi-notification__body">
        {item.title ? <div className="mochi-notification__title">{item.title}</div> : null}
        {item.description ? <div className="mochi-notification__desc">{item.description}</div> : null}
        {item.btn ? <div className="mochi-notification__btn">{item.btn}</div> : null}
      </div>
    </div>
  )
}

function add(options: NotificationOptions): () => void {
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

export const Notification = {
  open(options: NotificationOptions) {
    return add(options)
  },
  success(options: Omit<NotificationOptions, 'type'> | string) {
    const opts = typeof options === 'string' ? { title: options } : options
    return Notification.open({ ...opts, type: 'success' })
  },
  info(options: Omit<NotificationOptions, 'type'> | string) {
    const opts = typeof options === 'string' ? { title: options } : options
    return Notification.open({ ...opts, type: 'info' })
  },
  warning(options: Omit<NotificationOptions, 'type'> | string) {
    const opts = typeof options === 'string' ? { title: options } : options
    return Notification.open({ ...opts, type: 'warning' })
  },
  error(options: Omit<NotificationOptions, 'type'> | string) {
    const opts = typeof options === 'string' ? { title: options } : options
    return Notification.open({ ...opts, type: 'error' })
  },
  destroy(key?: string | number) {
    if (key == null) return
    queue.filter((q) => q.key === key).forEach((t) => removeItem(t))
  },
  destroyAll() {
    queue.forEach((q) => q.onClose?.())
    queue = []
    render()
  },
  config(options: NotificationConfig) {
    globalConfig = { ...globalConfig, ...options }
    render()
  },
}
