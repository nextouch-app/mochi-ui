import { useEffect, useMemo, useRef, useState } from 'react'
import { cn, type WatermarkProps } from '@mochi-ui/core'
import './watermark.css'

function toLines(content?: string | string[]) {
  if (!content) return ['Mochi UI']
  return Array.isArray(content) ? content : [content]
}

export function Watermark({
  content,
  width = 120,
  height = 64,
  rotate = -22,
  gap = [100, 100],
  offset = [0, 0],
  font,
  zIndex = 9,
  className,
  style,
  children,
}: WatermarkProps) {
  const [url, setUrl] = useState('')
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const lines = useMemo(() => toLines(content), [content])

  useEffect(() => {
    const canvas = canvasRef.current ?? document.createElement('canvas')
    canvasRef.current = canvas
    const ratio = window.devicePixelRatio || 1
    const cellW = width + gap[0]
    const cellH = height + gap[1]
    canvas.width = cellW * ratio
    canvas.height = cellH * ratio
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.scale(ratio, ratio)
    ctx.clearRect(0, 0, cellW, cellH)
    ctx.translate(cellW / 2 + offset[0], cellH / 2 + offset[1])
    ctx.rotate((Math.PI / 180) * rotate)
    ctx.fillStyle = font?.color ?? 'rgba(114, 93, 66, 0.18)'
    ctx.font = `${font?.fontWeight ?? 700} ${font?.fontSize ?? 16}px ${
      font?.fontFamily ?? 'Nunito, Noto Sans SC, system-ui, sans-serif'
    }`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    lines.forEach((line, i) => {
      ctx.fillText(line, 0, (i - (lines.length - 1) / 2) * ((font?.fontSize ?? 16) + 4))
    })
    setUrl(canvas.toDataURL())
  }, [lines, width, height, rotate, gap, offset, font])

  return (
    <div className={cn('mochi-watermark', className)} style={style}>
      {children}
      <div
        className="mochi-watermark__mark"
        style={{
          zIndex,
          backgroundImage: url ? `url(${url})` : undefined,
          backgroundSize: `${width + gap[0]}px ${height + gap[1]}px`,
        }}
      />
    </div>
  )
}
