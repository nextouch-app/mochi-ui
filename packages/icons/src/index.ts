import type { CSSProperties, SVGProps } from 'react'
import { createElement, type ReactNode } from 'react'

export type IconName =
  | 'cloud'
  | 'star'
  | 'bubble'
  | 'raindrop'
  | 'clock'
  | 'sparkle'
  | 'leaf'
  | 'heart'
  | 'note'
  | 'check'

export type IconComponentProps = SVGProps<SVGSVGElement> & {
  size?: number | string
  color?: string
}

export type IconProps = IconComponentProps

function createIcon(displayName: string, children: ReactNode) {
  function SvgIcon({
    size = 24,
    color = 'currentColor',
    style,
    className,
    ...rest
  }: IconComponentProps) {
    return createElement(
      'svg',
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 24 24',
        width: size,
        height: size,
        fill: 'none',
        'aria-hidden': rest['aria-label'] ? undefined : true,
        role: rest['aria-label'] ? 'img' : undefined,
        className,
        style: {
          color,
          display: 'inline-block',
          verticalAlign: 'middle',
          flexShrink: 0,
          ...style,
        } as CSSProperties,
        ...rest,
      },
      children,
    )
  }
  SvgIcon.displayName = `MochiIcon${displayName}`
  return SvgIcon
}

export const Cloud = createIcon(
  'Cloud',
  createElement('path', {
    d: 'M7 16c-2.2 0-4-1.6-4-3.6C3 10.3 4.7 8.7 6.8 8.5 7.3 6.5 9.1 5 11.3 5c2.5 0 4.5 1.8 4.9 4.2.4-.1.8-.2 1.3-.2 2.2 0 4 1.7 4 3.8S19.7 16.6 17.5 16.6H7z',
    fill: 'currentColor',
    opacity: 0.9,
  }),
)

export const Star = createIcon(
  'Star',
  createElement('path', {
    d: 'M12 2.5l2.4 5.6 6.1.5-4.6 4.1 1.4 5.9L12 15.5 6.7 18.6l1.4-5.9L3.5 8.6l6.1-.5L12 2.5z',
    fill: 'currentColor',
  }),
)

export const Bubble = createIcon(
  'Bubble',
  createElement(
    'g',
    null,
    createElement('ellipse', {
      cx: 12,
      cy: 13,
      rx: 8,
      ry: 7,
      fill: 'currentColor',
      opacity: 0.85,
    }),
    createElement('circle', { cx: 9, cy: 11.5, r: 1.2, fill: '#FFF8F0' }),
    createElement('circle', { cx: 15, cy: 11.5, r: 1.2, fill: '#FFF8F0' }),
    createElement('path', {
      d: 'M10 15.5c.8.8 3.2.8 4 0',
      stroke: '#FFF8F0',
      strokeWidth: 1.5,
      strokeLinecap: 'round',
      fill: 'none',
    }),
  ),
)

export const Raindrop = createIcon(
  'Raindrop',
  createElement(
    'g',
    null,
    createElement('path', {
      d: 'M12 3c1.2 0 2.2.9 2.4 2.1C16.5 5.4 18 7 18 9c0 .4 0 .7-.1 1.1C19.7 10.6 21 12.1 21 14c0 2.2-1.8 4-4 4H7c-2.2 0-4-1.8-4-4 0-1.9 1.3-3.4 3.1-3.9C6 9.7 6 9.4 6 9c0-2 1.5-3.6 3.6-3.9C9.8 3.9 10.8 3 12 3z',
      fill: 'currentColor',
      opacity: 0.35,
    }),
    createElement('path', {
      d: 'M9 17.5c0 1.5-1 2.5-1.5 3.5M12 17.5c0 1.8-.5 3-1 4M15 17.5c0 1.5 1 2.5 1.5 3.5',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      fill: 'none',
    }),
  ),
)

export const Clock = createIcon(
  'Clock',
  createElement(
    'g',
    null,
    createElement('circle', {
      cx: 12,
      cy: 12,
      r: 9,
      stroke: 'currentColor',
      strokeWidth: 2,
      fill: 'none',
    }),
    createElement('path', {
      d: 'M12 7v5.5l3.5 2',
      stroke: 'currentColor',
      strokeWidth: 2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      fill: 'none',
    }),
  ),
)

export const Sparkle = createIcon(
  'Sparkle',
  createElement(
    'g',
    null,
    createElement('path', {
      d: 'M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z',
      fill: 'currentColor',
    }),
    createElement('path', {
      d: 'M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14z',
      fill: 'currentColor',
      opacity: 0.7,
    }),
  ),
)

export const Leaf = createIcon(
  'Leaf',
  createElement('path', {
    d: 'M12 3c.5 2.5 1.5 4 3.5 5.5C13.5 10 12.5 11.5 12 14c-.5-2.5-1.5-4-3.5-5.5C10.5 7 11.5 5.5 12 3z',
    fill: 'currentColor',
  }),
)

export const Heart = createIcon(
  'Heart',
  createElement('path', {
    d: 'M12 21c-1.5-1.8-6-5.5-6-10.2C6 7.2 8.7 4.5 12 4.5s6 2.7 6 6.3C18 15.5 13.5 19.2 12 21z',
    fill: 'currentColor',
  }),
)

export const Note = createIcon(
  'Note',
  createElement('path', {
    d: 'M9 5.5c0-1.1.7-2 1.8-2.3.4-1.2 1.6-2 2.9-1.7 1 .2 1.7 1.1 1.8 2.1 1.2.2 2.1 1.2 2.1 2.4v6.2c0 1.3-.8 2.4-2 2.8l-1.4 4.2c-.2.6-.8 1-1.4 1h-1.6c-.7 0-1.3-.4-1.5-1.1l-1.1-3.5c-.9-.5-1.6-1.5-1.6-2.7V8.2c0-1.3.9-2.4 2-2.7z',
    fill: 'currentColor',
  }),
)

export const Check = createIcon(
  'Check',
  createElement(
    'g',
    null,
    createElement('circle', {
      cx: 12,
      cy: 12,
      r: 9,
      stroke: 'currentColor',
      strokeWidth: 2,
      fill: 'none',
    }),
    createElement('path', {
      d: 'M8 12l2.5 2.5L16 9',
      stroke: 'currentColor',
      strokeWidth: 2.2,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      fill: 'none',
    }),
  ),
)

/** name → React SVG component（给 @mochi-ui/react Icon 用） */
export const icons = {
  cloud: Cloud,
  star: Star,
  bubble: Bubble,
  raindrop: Raindrop,
  clock: Clock,
  sparkle: Sparkle,
  leaf: Leaf,
  heart: Heart,
  note: Note,
  check: Check,
} as const

/** Icon catalogue for demos and docs */
export const ICON_LIST: { name: IconName; label: string }[] = [
  { name: 'cloud', label: 'Cloud' },
  { name: 'star', label: 'Star' },
  { name: 'bubble', label: 'Bubble' },
  { name: 'raindrop', label: 'Raindrop' },
  { name: 'clock', label: 'Clock' },
  { name: 'sparkle', label: 'Sparkle' },
  { name: 'leaf', label: 'Leaf' },
  { name: 'heart', label: 'Heart' },
  { name: 'note', label: 'Note' },
  { name: 'check', label: 'Check' },
]

/** SVG 资源 URL（原始文件，可用在 img / background-image） */
export const iconUrls = {
  cloud: new URL('./svg/cloud.svg', import.meta.url).href,
  star: new URL('./svg/star.svg', import.meta.url).href,
  bubble: new URL('./svg/bubble.svg', import.meta.url).href,
  raindrop: new URL('./svg/raindrop.svg', import.meta.url).href,
  clock: new URL('./svg/clock.svg', import.meta.url).href,
  sparkle: new URL('./svg/sparkle.svg', import.meta.url).href,
  leaf: new URL('./svg/leaf.svg', import.meta.url).href,
  heart: new URL('./svg/heart.svg', import.meta.url).href,
  note: new URL('./svg/note.svg', import.meta.url).href,
  check: new URL('./svg/check.svg', import.meta.url).href,
} as const satisfies Record<IconName, string>
