import {
  Children,
  isValidElement,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type ReactElement,
  type ReactNode,
} from 'react'
import { cn, type SplitterPanelProps, type SplitterProps } from '@mochi-ui/core'
import './splitter.css'

export function SplitterPanel({ className, style, children }: SplitterPanelProps) {
  return (
    <div className={cn('mochi-splitter__panel', className)} style={style}>
      {children}
    </div>
  )
}

function parseSize(value: number | string | undefined, total: number, fallback: number) {
  if (value == null) return fallback
  if (typeof value === 'number') return value
  if (value.endsWith('%')) return (parseFloat(value) / 100) * total
  return parseFloat(value) || fallback
}

function SplitterRoot({
  layout = 'horizontal',
  className,
  style,
  children,
  onResize,
  onResizeEnd,
}: SplitterProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const panels = Children.toArray(children).filter(isValidElement) as ReactElement<SplitterPanelProps>[]
  const [sizes, setSizes] = useState<number[] | null>(null)

  const vertical = layout === 'vertical'

  const startDrag = (index: number, e: ReactMouseEvent) => {
    e.preventDefault()
    const root = rootRef.current
    if (!root) return
    const rect = root.getBoundingClientRect()
    const total = vertical ? rect.height : rect.width
    const current =
      sizes ??
      panels.map((p) =>
        parseSize(p.props.defaultSize ?? p.props.size, total, total / panels.length),
      )

    const startPos = vertical ? e.clientY : e.clientX
    const startSizes = current.slice()
    let latest = startSizes

    const onMove = (ev: MouseEvent) => {
      const delta = (vertical ? ev.clientY : ev.clientX) - startPos
      const next = startSizes.slice()
      const minA = parseSize(panels[index].props.min, total, 48)
      const minB = parseSize(panels[index + 1]?.props.min, total, 48)
      const maxA = parseSize(panels[index].props.max, total, total - minB)
      let a = startSizes[index] + delta
      a = Math.max(minA, Math.min(maxA, a))
      const b = startSizes[index] + startSizes[index + 1] - a
      if (b < minB) return
      next[index] = a
      next[index + 1] = b
      latest = next
      setSizes(next)
      onResize?.(next)
    }

    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      onResizeEnd?.(latest)
    }

    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  return (
    <div
      ref={rootRef}
      className={cn('mochi-splitter', `mochi-splitter--${layout}`, className)}
      style={style}
    >
      {panels.map((panel, i) => {
        const sizeStyle = sizes
          ? { flexBasis: sizes[i], flexGrow: 0, flexShrink: 0 }
          : panel.props.defaultSize != null || panel.props.size != null
            ? {
                flexBasis:
                  typeof (panel.props.size ?? panel.props.defaultSize) === 'number'
                    ? `${panel.props.size ?? panel.props.defaultSize}px`
                    : (panel.props.size ?? panel.props.defaultSize),
                flexGrow: 0,
                flexShrink: 0,
              }
            : { flex: 1 }

        return (
          <div key={panel.key ?? i} className="mochi-splitter__unit">
            <div className={cn('mochi-splitter__panel', panel.props.className)} style={{ ...sizeStyle, ...panel.props.style }}>
              {panel.props.children as ReactNode}
            </div>
            {i < panels.length - 1 && panel.props.resizable !== false ? (
              <div
                className="mochi-splitter__bar"
                role="separator"
                aria-orientation={vertical ? 'horizontal' : 'vertical'}
                onMouseDown={(e) => startDrag(i, e)}
              />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export const Splitter = Object.assign(SplitterRoot, {
  Panel: SplitterPanel,
})
