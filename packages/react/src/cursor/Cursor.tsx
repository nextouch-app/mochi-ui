import { useEffect, useState } from 'react'
import { cn, type CursorProps } from '@mochi-ui/core'
import './cursor.css'

export function Cursor({
  follow = false,
  size = 'md',
  color = '#6cb4ee',
  label,
  hideNative = false,
  className,
  style,
}: CursorProps) {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [visible, setVisible] = useState(!follow)

  useEffect(() => {
    if (!follow) return
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY })
      setVisible(true)
    }
    const onLeave = () => setVisible(false)
    window.addEventListener('mousemove', onMove)
    document.documentElement.addEventListener('mouseleave', onLeave)
    return () => {
      window.removeEventListener('mousemove', onMove)
      document.documentElement.removeEventListener('mouseleave', onLeave)
    }
  }, [follow])

  useEffect(() => {
    if (!follow || !hideNative) return
    const prev = document.body.style.cursor
    document.body.style.cursor = 'none'
    return () => {
      document.body.style.cursor = prev
    }
  }, [follow, hideNative])

  if (follow && !visible) return null

  return (
    <span
      className={cn(
        'mochi-cursor',
        `mochi-cursor--${size}`,
        follow && 'is-follow',
        className,
      )}
      style={{
        ...(follow
          ? { position: 'fixed', left: pos.x, top: pos.y, transform: 'translate(-30%, -20%)' }
          : null),
        color,
        ...style,
      }}
      aria-hidden={!label}
    >
      <svg className="mochi-cursor__icon" viewBox="0 0 32 32" fill="currentColor">
        <path d="M6 3l18 12-8 2-4 10L6 3z" stroke="#c4b89e" strokeWidth="2" />
      </svg>
      {label ? <span className="mochi-cursor__label">{label}</span> : null}
    </span>
  )
}
