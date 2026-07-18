import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { cn, type ImagePreviewGroupProps, type ImageProps } from '@nextouch-app/mochi-core'
import './image.css'

interface PreviewGroupCtx {
  register: (src: string, alt?: string) => number
  openAt: (index: number) => void
  enabled: boolean
}

const PreviewGroupContext = createContext<PreviewGroupCtx | null>(null)

function ImageInner({
  src,
  alt = '',
  width,
  height,
  preview = true,
  fallback,
  placeholder,
  className,
  style,
  onClick,
  onError,
  onLoad,
}: ImageProps) {
  const group = useContext(PreviewGroupContext)
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  const previewConfig = typeof preview === 'object' ? preview : null
  const previewEnabled = preview !== false && (group ? group.enabled : true)
  const [innerVisible, setInnerVisible] = useState(false)
  const visible = previewConfig?.visible ?? innerVisible
  const previewSrc = previewConfig?.src ?? src
  const [groupIndex] = useState(() =>
    group && src ? group.register(src, alt) : -1,
  )

  const setVisible = (next: boolean) => {
    if (previewConfig?.visible === undefined) setInnerVisible(next)
    previewConfig?.onVisibleChange?.(next)
  }

  const displaySrc = failed ? fallback : src

  return (
    <>
      <span
        className={cn('mochi-image', !loaded && 'is-loading', className)}
        style={{ width, height, ...style }}
      >
        {!loaded && placeholder ? (
          <span className="mochi-image__placeholder">{placeholder}</span>
        ) : null}
        {displaySrc ? (
          <img
            className="mochi-image__img"
            src={displaySrc}
            alt={alt}
            width={width}
            height={height}
            onLoad={(e) => {
              setLoaded(true)
              onLoad?.(e)
            }}
            onError={(e) => {
              setFailed(true)
              onError?.(e)
            }}
            onClick={(e) => {
              onClick?.(e)
              if (!previewEnabled || failed) return
              if (group && groupIndex >= 0) group.openAt(groupIndex)
              else setVisible(true)
            }}
          />
        ) : (
          <span className="mochi-image__empty">无图片</span>
        )}
      </span>
      {!group && previewEnabled && visible && previewSrc ? (
        <PreviewOverlay
          src={previewSrc}
          alt={alt}
          onClose={() => setVisible(false)}
        />
      ) : null}
    </>
  )
}

function PreviewOverlay({
  src,
  alt,
  current,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  src: string
  alt?: string
  current?: number
  total?: number
  onClose: () => void
  onPrev?: () => void
  onNext?: () => void
}) {
  return (
    <div
      className="mochi-image-preview"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <button
        type="button"
        className="mochi-image-preview__close"
        aria-label="关闭"
        onClick={onClose}
      >
        ×
      </button>
      {onPrev ? (
        <button
          type="button"
          className="mochi-image-preview__nav mochi-image-preview__nav--prev"
          aria-label="上一张"
          onClick={(e) => {
            e.stopPropagation()
            onPrev()
          }}
        >
          ‹
        </button>
      ) : null}
      {onNext ? (
        <button
          type="button"
          className="mochi-image-preview__nav mochi-image-preview__nav--next"
          aria-label="下一张"
          onClick={(e) => {
            e.stopPropagation()
            onNext()
          }}
        >
          ›
        </button>
      ) : null}
      <img
        className="mochi-image-preview__img"
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />
      {total != null && total > 1 ? (
        <div className="mochi-image-preview__indicator" onClick={(e) => e.stopPropagation()}>
          {(current ?? 0) + 1} / {total}
        </div>
      ) : null}
    </div>
  )
}

function PreviewGroup({
  items,
  preview = true,
  className,
  style,
  children,
}: ImagePreviewGroupProps) {
  const enabled = preview !== false
  const previewCfg = typeof preview === 'object' ? preview : null
  const listRef = useMemo(() => {
    const fromItems =
      items?.map((it) =>
        typeof it === 'string' ? { src: it, alt: '' } : { src: it.src, alt: it.alt ?? '' },
      ) ?? []
    return { items: fromItems, dynamic: [] as Array<{ src: string; alt?: string }> }
  }, [items])

  const [innerVisible, setInnerVisible] = useState(false)
  const [innerCurrent, setInnerCurrent] = useState(0)
  const visible = previewCfg?.visible ?? innerVisible
  const current = previewCfg?.current ?? innerCurrent

  const allItems = items
    ? listRef.items
    : listRef.dynamic

  const setVisible = (next: boolean) => {
    if (previewCfg?.visible === undefined) setInnerVisible(next)
    previewCfg?.onVisibleChange?.(next)
  }

  const setCurrent = (next: number) => {
    if (previewCfg?.current === undefined) setInnerCurrent(next)
    previewCfg?.onChange?.(next)
  }

  const ctx = useMemo<PreviewGroupCtx>(
    () => ({
      enabled,
      register: (src, alt) => {
        if (items) {
          const idx = listRef.items.findIndex((it) => it.src === src)
          return idx >= 0 ? idx : listRef.items.length
        }
        const exist = listRef.dynamic.findIndex((it) => it.src === src)
        if (exist >= 0) return exist
        listRef.dynamic.push({ src, alt })
        return listRef.dynamic.length - 1
      },
      openAt: (index) => {
        setCurrent(index)
        setVisible(true)
      },
    }),
    [enabled, items, listRef],
  )

  const active = allItems[current] ?? allItems[0]

  return (
    <PreviewGroupContext.Provider value={ctx}>
      <div className={cn('mochi-image-group', className)} style={style}>
        {children as ReactNode}
      </div>
      {enabled && visible && active ? (
        <PreviewOverlay
          src={active.src}
          alt={active.alt}
          current={current}
          total={allItems.length}
          onClose={() => setVisible(false)}
          onPrev={
            allItems.length > 1
              ? () => setCurrent((current - 1 + allItems.length) % allItems.length)
              : undefined
          }
          onNext={
            allItems.length > 1
              ? () => setCurrent((current + 1) % allItems.length)
              : undefined
          }
        />
      ) : null}
    </PreviewGroupContext.Provider>
  )
}

export const Image = Object.assign(ImageInner, {
  PreviewGroup,
})
