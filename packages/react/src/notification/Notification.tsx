import { useEffect, useState } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { cn, type NotificationOptions } from '@mochi-ui/core'
import './notification.css'

let host: HTMLDivElement | null = null
let root: Root | null = null
let seq = 0
type Item = NotificationOptions & { id: number }
let queue: Item[] = []

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
  ensure()?.render(
    <div className="mochi-notification-stack">
      {queue.map((item) => (
        <NotificationCard key={item.id} item={item} />
      ))}
    </div>,
  )
}

function NotificationCard({ item }: { item: Item }) {
  const [leaving, setLeaving] = useState(false)
  useEffect(() => {
    const t = window.setTimeout(() => setLeaving(true), item.duration ?? 3600)
    return () => window.clearTimeout(t)
  }, [item.duration])

  useEffect(() => {
    if (!leaving) return
    const t = window.setTimeout(() => {
      queue = queue.filter((q) => q.id !== item.id)
      render()
    }, 200)
    return () => window.clearTimeout(t)
  }, [leaving, item.id])

  return (
    <div
      className={cn(
        'mochi-notification',
        `mochi-notification--${item.type ?? 'info'}`,
        `mochi-notification--${item.placement ?? 'topRight'}`,
        leaving && 'is-leaving',
      )}
      role="status"
    >
      <button
        type="button"
        className="mochi-notification__close"
        aria-label="关闭"
        onClick={() => setLeaving(true)}
      >
        ×
      </button>
      {item.title ? <div className="mochi-notification__title">{item.title}</div> : null}
      {item.description ? <div className="mochi-notification__desc">{item.description}</div> : null}
    </div>
  )
}

export const Notification = {
  open(options: NotificationOptions) {
    queue = [...queue, { ...options, id: ++seq }]
    if (host) {
      host.dataset.placement = options.placement ?? 'topRight'
    }
    render()
    if (host) host.dataset.placement = options.placement ?? 'topRight'
  },
  success(options: Omit<NotificationOptions, 'type'> | string) {
    const opts = typeof options === 'string' ? { title: options } : options
    Notification.open({ ...opts, type: 'success' })
  },
  info(options: Omit<NotificationOptions, 'type'> | string) {
    const opts = typeof options === 'string' ? { title: options } : options
    Notification.open({ ...opts, type: 'info' })
  },
  warning(options: Omit<NotificationOptions, 'type'> | string) {
    const opts = typeof options === 'string' ? { title: options } : options
    Notification.open({ ...opts, type: 'warning' })
  },
  error(options: Omit<NotificationOptions, 'type'> | string) {
    const opts = typeof options === 'string' ? { title: options } : options
    Notification.open({ ...opts, type: 'error' })
  },
}
