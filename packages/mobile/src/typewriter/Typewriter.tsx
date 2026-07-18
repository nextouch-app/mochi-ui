import { useEffect, useMemo, useState } from 'react'
import { cn, type TypewriterProps } from '@nextouch-app/mochi-core'
import './typewriter.css'

export function Typewriter({
  text = '',
  speed = 60,
  loop = false,
  cursor = true,
  deleteSpeed = 40,
  pause = 1200,
  className,
  style,
  onComplete,
}: TypewriterProps) {
  const textKey = Array.isArray(text) ? text.join('\u0000') : String(text)
  const lines = useMemo(() => textKey.split('\u0000'), [textKey])
  const [lineIndex, setLineIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [done, setDone] = useState(false)

  useEffect(() => {
    setLineIndex(0)
    setDisplay('')
    setDeleting(false)
    setDone(false)
  }, [textKey])

  useEffect(() => {
    if (done) return
    const full = lines[lineIndex] ?? ''
    let timer: number

    if (!deleting && display === full) {
      if (!loop && lineIndex >= lines.length - 1) {
        setDone(true)
        onComplete?.()
        return
      }
      timer = window.setTimeout(() => setDeleting(true), pause)
    } else if (deleting && display === '') {
      setDeleting(false)
      setLineIndex((i) => (i + 1) % lines.length)
    } else {
      timer = window.setTimeout(
        () => {
          setDisplay((prev) =>
            deleting ? prev.slice(0, -1) : full.slice(0, prev.length + 1),
          )
        },
        deleting ? deleteSpeed : speed,
      )
    }

    return () => window.clearTimeout(timer)
  }, [display, deleting, lineIndex, lines, loop, speed, deleteSpeed, pause, onComplete, done])

  return (
    <span className={cn('mochi-typewriter', className)} style={style}>
      {display}
      {cursor !== false ? (
        <span className="mochi-typewriter__cursor" aria-hidden>
          {typeof cursor === 'string' ? cursor : '|'}
        </span>
      ) : null}
    </span>
  )
}
