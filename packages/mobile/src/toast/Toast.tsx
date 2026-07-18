import { useEffect, useState } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { cn, type ToastOptions } from '@nextouch-app/mochi-core'

let toastRoot: Root | null = null
let host: HTMLDivElement | null = null

function ensureHost() {
  if (typeof document === 'undefined') return null
  if (!host) {
    host = document.createElement('div')
    host.className = 'mochi-toast-host'
    document.body.appendChild(host)
    toastRoot = createRoot(host)
  }
  return toastRoot
}

function ToastView({
  content,
  position = 'top',
  onGone,
}: {
  content: React.ReactNode
  position?: ToastOptions['position']
  onGone: () => void
}) {
  const [visible, setVisible] = useState(true)
  useEffect(() => {
    if (!visible) {
      const t = setTimeout(onGone, 200)
      return () => clearTimeout(t)
    }
  }, [visible, onGone])

  return (
    <div
      className={cn('mochi-toast', `mochi-toast--${position}`, !visible && 'is-leaving')}
      role="status"
      onAnimationEnd={() => {
        if (!visible) onGone()
      }}
    >
      {content}
      <button
        type="button"
        className="mochi-toast__close"
        aria-label="关闭"
        onClick={() => setVisible(false)}
        style={{ display: 'none' }}
      />
    </div>
  )
}

export const Toast = {
  show(options: ToastOptions | string) {
    const opts: ToastOptions = typeof options === 'string' ? { content: options } : options
    const root = ensureHost()
    if (!root) return
    const duration = opts.duration ?? 2000
    const clear = () => root.render(null)
    root.render(
      <ToastView
        content={opts.content}
        position={opts.position}
        onGone={clear}
      />,
    )
    window.setTimeout(() => clear(), duration)
  },
}
