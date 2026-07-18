import type { CSSProperties, ReactElement, SVGProps } from 'react'
import { createElement } from 'react'

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
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'arrow-down'
  | 'left'
  | 'right'
  | 'up'
  | 'down'
  | 'caret-left'
  | 'caret-right'
  | 'caret-up'
  | 'caret-down'
  | 'double-left'
  | 'double-right'
  | 'swap'
  | 'reload'
  | 'sync'
  | 'enter'
  | 'fullscreen'
  | 'fullscreen-exit'
  | 'expand'
  | 'compress'
  | 'close'
  | 'plus'
  | 'minus'
  | 'question'
  | 'info'
  | 'warning'
  | 'error'
  | 'stop'
  | 'ban'
  | 'check-circle'
  | 'close-circle'
  | 'plus-circle'
  | 'minus-circle'
  | 'exclamation-circle'
  | 'loading'
  | 'edit'
  | 'delete'
  | 'copy'
  | 'cut'
  | 'save'
  | 'undo'
  | 'redo'
  | 'bold'
  | 'italic'
  | 'underline'
  | 'link'
  | 'unlink'
  | 'align-left'
  | 'align-center'
  | 'align-right'
  | 'ordered-list'
  | 'unordered-list'
  | 'search'
  | 'home'
  | 'user'
  | 'team'
  | 'setting'
  | 'menu'
  | 'more'
  | 'more-vertical'
  | 'filter'
  | 'sort-ascending'
  | 'sort-descending'
  | 'calendar'
  | 'mail'
  | 'phone'
  | 'camera'
  | 'picture'
  | 'file'
  | 'folder'
  | 'folder-open'
  | 'download'
  | 'upload'
  | 'share'
  | 'eye'
  | 'eye-invisible'
  | 'lock'
  | 'unlock'
  | 'key'
  | 'bell'
  | 'message'
  | 'comment'
  | 'like'
  | 'dislike'
  | 'shopping-cart'
  | 'gift'
  | 'tag'
  | 'bookmark'
  | 'flag'
  | 'pushpin'
  | 'environment'
  | 'global'
  | 'wifi'
  | 'poweroff'
  | 'desktop'
  | 'mobile'
  | 'tablet'
  | 'printer'
  | 'qrcode'
  | 'dashboard'
  | 'appstore'
  | 'table'
  | 'database'
  | 'cloud-upload'
  | 'cloud-download'
  | 'history'
  | 'api'
  | 'code'
  | 'bug'
  | 'experiment'
  | 'rocket'
  | 'trophy'
  | 'fire'
  | 'thunderbolt'
  | 'sun'
  | 'moon'
  | 'smile'
  | 'frown'
  | 'meh'
  | 'fish'
  | 'flower'
  | 'mushroom'
  | 'tree'
  | 'rainbow'
  | 'candy'
  | 'cake'
  | 'cookie'
  | 'balloon'
  | 'paw'
  | 'bird'
  | 'bee'
  | 'butterfly'
  | 'shell'
  | 'acorn'
  | 'carrot'
  | 'apple'
  | 'milk'
  | 'tea'

export type IconComponentProps = SVGProps<SVGSVGElement> & {
  size?: number | string
  color?: string
}

export type IconProps = IconComponentProps

const ICON_MARKUP: Record<IconName, string> = {
  'cloud': "<path d=\"M7 16c-2.2 0-4-1.6-4-3.6C3 10.3 4.7 8.7 6.8 8.5 7.3 6.5 9.1 5 11.3 5c2.5 0 4.5 1.8 4.9 4.2.4-.1.8-.2 1.3-.2 2.2 0 4 1.7 4 3.8S19.7 16.6 17.5 16.6H7z\" fill=\"currentColor\" opacity=\".9\"/>",
  'star': "<path d=\"M12 2.5l2.4 5.6 6.1.5-4.6 4.1 1.4 5.9L12 15.5 6.7 18.6l1.4-5.9L3.5 8.6l6.1-.5L12 2.5z\" fill=\"currentColor\"/>",
  'bubble': "<ellipse cx=\"12\" cy=\"13\" rx=\"8\" ry=\"7\" fill=\"currentColor\" opacity=\".85\"/><circle cx=\"9\" cy=\"11.5\" r=\"1.2\" fill=\"#FFF8F0\"/><circle cx=\"15\" cy=\"11.5\" r=\"1.2\" fill=\"#FFF8F0\"/><path d=\"M10 15.5c.8.8 3.2.8 4 0\" stroke=\"#FFF8F0\" stroke-width=\"1.5\" stroke-linecap=\"round\"/>",
  'raindrop': "<path d=\"M12 3c3.5 4.2 6 7.2 6 10a6 6 0 1 1-12 0c0-2.8 2.5-5.8 6-10z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M10 14c0 1.5.8 2.5 2 3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'clock': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 7v5.5l3.5 2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'sparkle': "<path d=\"M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z\" fill=\"currentColor\"/><path d=\"M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14z\" fill=\"currentColor\" opacity=\".7\"/>",
  'leaf': "<path d=\"M12 20c0-6 4-9 8-10-1 5-4 8-8 10zM12 20C12 14 8 11 4 10c1 5 4 8 8 10z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 20V10\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'heart': "<path d=\"M12 20s-6-4.2-6-9a3.8 3.8 0 0 1 6-3 3.8 3.8 0 0 1 6 3c0 4.8-6 9-6 9z\" fill=\"currentColor\"/>",
  'note': "<path d=\"M9 18V8a2 2 0 0 1 2-2h7v10a2 2 0 1 1-2-2h2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"9\" cy=\"18\" r=\"2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'check': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8 12l2.5 2.5L16 9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'arrow-left': "<path d=\"M19 12H5M11 6l-6 6 6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'arrow-right': "<path d=\"M5 12h14M13 6l6 6-6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'arrow-up': "<path d=\"M12 19V5M6 11l6-6 6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'arrow-down': "<path d=\"M12 5v14M6 13l6 6 6-6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'left': "<path d=\"M15 6l-6 6 6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'right': "<path d=\"M9 6l6 6-6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'up': "<path d=\"M6 14l6-6 6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'down': "<path d=\"M6 10l6 6 6-6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'caret-left': "<path d=\"M14 6l-6 6 6 6\" fill=\"currentColor\"/>",
  'caret-right': "<path d=\"M10 6l6 6-6 6\" fill=\"currentColor\"/>",
  'caret-up': "<path d=\"M6 14l6-6 6 6\" fill=\"currentColor\"/>",
  'caret-down': "<path d=\"M6 10l6 6 6-6\" fill=\"currentColor\"/>",
  'double-left': "<path d=\"M11 6l-6 6 6 6M19 6l-6 6 6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'double-right': "<path d=\"M5 6l6 6-6 6M13 6l6 6-6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'swap': "<path d=\"M7 8h11M15 4l4 4-4 4M17 16H6M9 12l-4 4 4 4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'reload': "<path d=\"M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M18 3v5h-5M6 21v-5h5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'sync': "<path d=\"M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M18 4v4h-4M6 20v-4h4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'enter': "<path d=\"M4 12h12a4 4 0 0 0 0-8H12\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M9 8l-5 4 5 4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'fullscreen': "<path d=\"M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'fullscreen-exit': "<path d=\"M9 4v5H4M15 4v5h5M4 15h5v5M20 15h-5v5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'expand': "<path d=\"M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'compress': "<path d=\"M9 3v6H3M15 3v6h6M3 15h6v6M21 15h-6v6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'close': "<path d=\"M6 6l12 12M18 6L6 18\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'plus': "<path d=\"M12 5v14M5 12h14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'minus': "<path d=\"M5 12h14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'question': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M9.5 9.5a2.5 2.5 0 1 1 3.2 2.4c-.8.4-1.2 1-1.2 1.8V14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"12\" cy=\"17\" r=\"1\" fill=\"currentColor\"/>",
  'info': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 11v6M12 7h.01\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'warning': "<path d=\"M12 4l9 16H3L12 4z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 10v4M12 17h.01\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'error': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 8v5M12 16h.01\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'stop': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><rect x=\"9\" y=\"9\" width=\"6\" height=\"6\" rx=\"1\" fill=\"currentColor\"/>",
  'ban': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M6.5 6.5l11 11\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'check-circle': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8 12l2.5 2.5L16 9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'close-circle': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M9 9l6 6M15 9l-6 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'plus-circle': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 8v8M8 12h8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'minus-circle': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8 12h8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'exclamation-circle': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 7v6M12 16h.01\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'loading': "<path d=\"M12 3a9 9 0 1 1-9 9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'edit': "<path d=\"M4 20h4l11-11-4-4L4 16v4zM14 6l4 4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'delete': "<path d=\"M5 7h14M9 7V5h6v2M8 7l1 12h6l1-12\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'copy': "<rect x=\"8\" y=\"8\" width=\"11\" height=\"11\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M6 16V6a2 2 0 0 1 2-2h10\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'cut': "<circle cx=\"7\" cy=\"17\" r=\"2.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"17\" cy=\"17\" r=\"2.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M9 15.5L18 4M15 15.5L6 4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'save': "<path d=\"M5 5h11l3 3v11H5V5z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8 5v5h7V5M8 19v-6h8v6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'undo': "<path d=\"M9 14H5v-4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M5 10a7 7 0 1 1 2 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'redo': "<path d=\"M15 14h4v-4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M19 10a7 7 0 1 0-2 6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'bold': "<path d=\"M7 5h6a3 3 0 0 1 0 6H7V5zM7 11h7a3 3 0 0 1 0 6H7v-6z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'italic': "<path d=\"M14 5H8M16 19H10M13 5l-2 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'underline': "<path d=\"M7 5v6a5 5 0 0 0 10 0V5M6 20h12\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'link': "<path d=\"M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'unlink': "<path d=\"M10 13a5 5 0 0 0 5.5 1M17 10a5 5 0 0 0-5.5-1M14 11a5 5 0 0 0-5.5-1M7 14a5 5 0 0 0 5.5 1M4 4l16 16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'align-left': "<path d=\"M4 6h16M4 12h10M4 18h14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'align-center': "<path d=\"M4 6h16M7 12h10M5 18h14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'align-right': "<path d=\"M4 6h16M10 12h10M6 18h14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'ordered-list': "<path d=\"M9 6h11M9 12h11M9 18h11M4 6h1v4M4.5 16.5l1.5-.5v3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'unordered-list': "<path d=\"M9 6h11M9 12h11M9 18h11M5 6h.01M5 12h.01M5 18h.01\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'search': "<circle cx=\"11\" cy=\"11\" r=\"6.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M16 16l4 4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'home': "<path d=\"M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'user': "<circle cx=\"12\" cy=\"8\" r=\"3.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'team': "<circle cx=\"9\" cy=\"8\" r=\"3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"17\" cy=\"9\" r=\"2.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M3.5 19c1-3 2.8-4.5 5.5-4.5S14 16 15 19M14 14.5c1.5-.4 2.8-.2 4 .8 1.2 1 2 2.4 2.5 3.7\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'setting': "<circle cx=\"12\" cy=\"12\" r=\"3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'menu': "<path d=\"M4 7h16M4 12h16M4 17h16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'more': "<circle cx=\"6\" cy=\"12\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"18\" cy=\"12\" r=\"1.5\" fill=\"currentColor\"/>",
  'more-vertical': "<circle cx=\"12\" cy=\"6\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"12\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"12\" cy=\"18\" r=\"1.5\" fill=\"currentColor\"/>",
  'filter': "<path d=\"M4 6h16l-6 7v5l-4 2v-7L4 6z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'sort-ascending': "<path d=\"M8 7v10M5 10l3-3 3 3M13 7h7M13 12h5M13 17h3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'sort-descending': "<path d=\"M8 7v10M5 14l3 3 3-3M13 7h3M13 12h5M13 17h7\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'calendar': "<rect x=\"4\" y=\"5\" width=\"16\" height=\"15\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8 3v4M16 3v4M4 10h16\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'mail': "<rect x=\"3\" y=\"6\" width=\"18\" height=\"12\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M3 8l9 6 9-6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'phone': "<path d=\"M7 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5L16 13l4 1.5V18a2 2 0 0 1-2 2A14 14 0 0 1 4 6a2 2 0 0 1 3-2z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'camera': "<path d=\"M4 8h3l2-2h6l2 2h3v11H4V8z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"12\" cy=\"13\" r=\"3.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'picture': "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"9\" cy=\"10\" r=\"1.5\" fill=\"currentColor\"/><path d=\"M3 16l5-4 4 3 3-2 6 4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'file': "<path d=\"M7 3h7l4 4v14H7V3z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M14 3v4h4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'folder': "<path d=\"M3 7h6l2 2h10v10H3V7z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'folder-open': "<path d=\"M3 8h6l2 2h7v2H5l-2 7V8zM5 12h16l-2 8H4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'download': "<path d=\"M12 4v10M8 10l4 4 4-4M5 19h14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'upload': "<path d=\"M12 14V4M8 8l4-4 4 4M5 19h14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'share': "<circle cx=\"6\" cy=\"12\" r=\"2.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"18\" cy=\"6\" r=\"2.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"18\" cy=\"18\" r=\"2.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8.2 11l7.5-4M8.2 13l7.5 4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'eye': "<path d=\"M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"12\" cy=\"12\" r=\"2.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'eye-invisible': "<path d=\"M3 4l18 16M9.5 9.7A3 3 0 0 0 12 15a3 3 0 0 0 2.8-1.9M6.1 6.5C4 8 2 12 2 12s3.5 6 10 6c1.5 0 2.8-.3 4-.7M14.5 5.4C15.7 5.7 16.8 6.3 18 7.2 20.5 9 22 12 22 12s-.7 1.3-2 2.8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'lock': "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8 10V7a4 4 0 0 1 8 0v3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'unlock': "<rect x=\"5\" y=\"10\" width=\"14\" height=\"10\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8 10V7a4 4 0 0 1 7.5-2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'key': "<circle cx=\"8\" cy=\"14\" r=\"3.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M11 12.5l8-8M16 5l3 3M15 8l2 2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'bell': "<path d=\"M6 16V11a6 6 0 1 1 12 0v5l2 2H4l2-2zM10 19a2 2 0 0 0 4 0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'message': "<path d=\"M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H10l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'comment': "<path d=\"M6 18l-2 3v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'like': "<path d=\"M8 11v9H5v-9h3zM8 11l3-6a2 2 0 0 1 2 2v3h5.5a2 2 0 0 1 2 2.3l-1 6A2 2 0 0 1 17.5 20H8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'dislike': "<path d=\"M8 13V4H5v9h3zM8 13l3 6a2 2 0 0 0 2-2v-3h5.5a2 2 0 0 0 2-2.3l-1-6A2 2 0 0 0 17.5 4H8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'shopping-cart': "<path d=\"M4 5h2l2 11h10l2-8H7\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"10\" cy=\"19\" r=\"1.5\" fill=\"currentColor\"/><circle cx=\"17\" cy=\"19\" r=\"1.5\" fill=\"currentColor\"/>",
  'gift': "<rect x=\"4\" y=\"10\" width=\"16\" height=\"10\" rx=\"1\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M4 14h16M12 10v10M12 10c-2-3-5-3-5 0 2 0 4 0 5 0zm0 0c2-3 5-3 5 0-2 0-4 0-5 0z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'tag': "<path d=\"M3 12V5h7l9 9-7 7-9-9z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"8\" cy=\"8\" r=\"1.2\" fill=\"currentColor\"/>",
  'bookmark': "<path d=\"M7 4h10v17l-5-3-5 3V4z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'flag': "<path d=\"M6 21V4M6 4h10l-2 4 2 4H6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'pushpin': "<path d=\"M12 14v7M9 4h6l1 5-3 2v3H11v-3L8 9l1-5z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'environment': "<path d=\"M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"12\" cy=\"10\" r=\"2.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'global': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'wifi': "<path d=\"M5 10.5a10 10 0 0 1 14 0M8 13.5a6 6 0 0 1 8 0M12 18h.01\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'poweroff': "<path d=\"M12 3v8M7 6.5a8 8 0 1 0 10 0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'desktop': "<rect x=\"3\" y=\"4\" width=\"18\" height=\"12\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8 20h8M12 16v4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'mobile': "<rect x=\"7\" y=\"3\" width=\"10\" height=\"18\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M11 18h2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'tablet': "<rect x=\"4\" y=\"3\" width=\"16\" height=\"18\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M11 18h2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'printer': "<path d=\"M7 8V4h10v4M6 12h12v8H6v-8z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M4 8h16v6h-3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'qrcode': "<path d=\"M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6zM14 14h2v2M18 14h2v2M14 18h2v2M18 18h2v2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'dashboard': "<path d=\"M4 13a8 8 0 1 1 16 0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 13l4-4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"12\" cy=\"13\" r=\"1.5\" fill=\"currentColor\"/>",
  'appstore': "<rect x=\"4\" y=\"4\" width=\"6\" height=\"6\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><rect x=\"14\" y=\"4\" width=\"6\" height=\"6\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><rect x=\"4\" y=\"14\" width=\"6\" height=\"6\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><rect x=\"14\" y=\"14\" width=\"6\" height=\"6\" rx=\"1.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'table': "<rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M3 10h18M3 15h18M9 5v14M15 5v14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'database': "<ellipse cx=\"12\" cy=\"6\" rx=\"7\" ry=\"2.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'cloud-upload': "<path d=\"M7 17H6a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.6-1.5A3.5 3.5 0 0 1 18 17h-1\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 19v-8M9 14l3-3 3 3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'cloud-download': "<path d=\"M7 17H6a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.6-1.5A3.5 3.5 0 0 1 18 17h-1\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 11v8M9 16l3 3 3-3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'history': "<path d=\"M4 12a8 8 0 1 0 2.3-5.5M4 5v4h4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 8v5l3 2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'api': "<path d=\"M8 8h2v8H8zM14 8h2v8h-2zM6 10h4M14 14h4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"5\" cy=\"10\" r=\"1.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"19\" cy=\"14\" r=\"1.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'code': "<path d=\"M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'bug': "<path d=\"M8 10a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0v-6zM4 12h4M16 12h4M6 7l2.5 2M18 7l-2.5 2M6 18l2.5-2M18 18l-2.5-2M12 6V4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'experiment': "<path d=\"M9 3h6M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'rocket': "<path d=\"M12 3c3 3 5 7 5 11l-2 1-1 3h-4l-1-3-2-1c0-4 2-8 5-11zM9 17c-2 1-4 3-4 4 2 0 4-1 5-2M15 17c2 1 4 3 4 4-2 0-4-1-5-2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"12\" cy=\"10\" r=\"1.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'trophy': "<path d=\"M8 4h8v5a4 4 0 0 1-8 0V4zM8 6H5a2 2 0 0 0 2 4M16 6h3a2 2 0 0 1-2 4M10 15h4v3H10zM8 21h8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'fire': "<path d=\"M12 21c-4 0-6-2.5-6-6 0-3 2-5 3-7 0 2 1.5 3 2.5 3C12 8 13 5 15 3c1 3 3 5.5 3 9 0 4.5-2.5 9-6 9z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'thunderbolt': "<path d=\"M13 2L6 13h5l-1 9 8-12h-5l0-8z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'sun': "<circle cx=\"12\" cy=\"12\" r=\"4\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M5 19l1.5-1.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'moon': "<path d=\"M18 14.5A7.5 7.5 0 1 1 9.5 5 6 6 0 0 0 18 14.5z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'smile': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8.5 10h.01M15.5 10h.01M8.5 14c1.2 1.5 5.8 1.5 7 0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'frown': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8.5 10h.01M15.5 10h.01M8.5 16c1.2-1.5 5.8-1.5 7 0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'meh': "<circle cx=\"12\" cy=\"12\" r=\"9\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8.5 10h.01M15.5 10h.01M9 15h6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'fish': "<path d=\"M4 12c4-5 10-5 14-2 1.5 0 3 .5 4 1-1 .5-2.5 1-4 1-4 3-10 3-14-2z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"8\" cy=\"11\" r=\"1\" fill=\"currentColor\"/><path d=\"M18 10l3-3M18 14l3 3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'flower': "<circle cx=\"12\" cy=\"12\" r=\"2.5\" fill=\"currentColor\"/><path d=\"M12 4c1.5 2 1.5 4 0 6-1.5-2-1.5-4 0-6zM12 14c1.5 2 1.5 4 0 6-1.5-2-1.5-4 0-6zM4 12c2-1.5 4-1.5 6 0-2 1.5-4 1.5-6 0zM14 12c2-1.5 4-1.5 6 0-2 1.5-4 1.5-6 0zM7 7c2 0 3.5 1 4 3-2 .5-3.5-.5-4-3zM13 14c2 .5 3.5-.5 4-3-2 0-3.5 1-4 3zM17 7c-2 0-3.5 1-4 3 2 .5 3.5-.5 4-3zM7 17c2 0 3.5-1 4-3-2-.5-3.5.5-4 3z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'mushroom': "<path d=\"M6 11c0-4 2.5-7 6-7s6 3 6 7H6z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M10 11v6a2 2 0 0 0 4 0v-6\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"9\" cy=\"8\" r=\".8\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"7.5\" r=\".8\" fill=\"currentColor\"/>",
  'tree': "<path d=\"M12 21v-6M8 10c0-3 1.8-5 4-5s4 2 4 5c2 0 3 1.5 3 3.2S18 16 16 16H8c-2 0-3-1.2-3-2.8S6 10 8 10z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'rainbow': "<path d=\"M4 16a8 8 0 0 1 16 0M6.5 16a5.5 5.5 0 0 1 11 0M9 16a3 3 0 0 1 6 0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'candy': "<path d=\"M9 10c-2-2-4-2-5-1 1 1 1 3-1 5 2-1 4-1 5-3zM15 14c2 2 4 2 5 1-1-1-1-3 1-5-2 1-4 1-5 3z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><ellipse cx=\"12\" cy=\"12\" rx=\"4\" ry=\"3\" transform=\"rotate(-35 12 12)\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'cake': "<path d=\"M4 13h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6zM4 13c0-2 2-3 4-3s3 1.5 4 1.5S14 10 16 10s4 1 4 3M9 7l.5-2M12 7l.5-2M15 7l.5-2\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'cookie': "<circle cx=\"12\" cy=\"12\" r=\"8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"9\" cy=\"10\" r=\"1\" fill=\"currentColor\"/><circle cx=\"14\" cy=\"9\" r=\"1\" fill=\"currentColor\"/><circle cx=\"11\" cy=\"14\" r=\"1\" fill=\"currentColor\"/><circle cx=\"15\" cy=\"14\" r=\"1\" fill=\"currentColor\"/>",
  'balloon': "<path d=\"M12 3c3 0 5.5 2.8 5.5 6.2S14.5 16 12 16 6.5 12.6 6.5 9.2 9 3 12 3zM12 16c0 2-.5 3.5-1.5 5M12 16c0 1 .3 2 0 3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'paw': "<circle cx=\"8\" cy=\"8\" r=\"2\" fill=\"currentColor\"/><circle cx=\"16\" cy=\"8\" r=\"2\" fill=\"currentColor\"/><circle cx=\"6.5\" cy=\"12.5\" r=\"1.8\" fill=\"currentColor\"/><circle cx=\"17.5\" cy=\"12.5\" r=\"1.8\" fill=\"currentColor\"/><ellipse cx=\"12\" cy=\"16\" rx=\"4\" ry=\"3.2\" fill=\"currentColor\"/>",
  'bird': "<path d=\"M4 14c3-1 5-4 6-7 2 2 5 3 8 3-1 3-4 6-8 7-1 1-2 2-3 3 0 0-1-1 0-2z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><circle cx=\"15\" cy=\"9\" r=\".8\" fill=\"currentColor\"/>",
  'bee': "<path d=\"M8 10c0-2 1.8-4 4-4s4 2 4 4v3c0 2-1.8 4-4 4s-4-2-4-4v-3zM7 11H4M17 11h3M9 8L7 5M15 8l2-3\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M8 12h8M8 14h8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'butterfly': "<path d=\"M12 8v10M8 10c-3-1-4-4-3-6 3 0 5 2 5 4M16 10c3-1 4-4 3-6-3 0-5 2-5 4M8 14c-3 1-4 4-2 6 2-.5 4-2.5 4-4.5M16 14c3 1 4 4 2 6-2-.5-4-2.5-4-4.5\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'shell': "<path d=\"M12 19c-5 0-8-3-8-7 0-5 3.5-9 8-9s8 4 8 9c0 4-3 7-8 7z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 5v14M7 8c2 2 3 5 3 8M17 8c-2 2-3 5-3 8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'acorn': "<path d=\"M8 9h8c0 2-1 3-4 3s-4-1-4-3zM9 12c0 4 1.5 7 3 8 1.5-1 3-4 3-8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/><path d=\"M12 5v4M10 6c1 .5 2 .5 4 0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'carrot': "<path d=\"M10 5c1 2 1 3 0 4M14 5c-1 2-1 3 0 4M12 8c3 3 6 8 4 11-3 1-7-2-9-6 2-3 4-5 5-5z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'apple': "<path d=\"M12 7c2-3 5-3 5-1-2 1-3 2-3 3M9 9c-2.5 1-4 3.5-4 6.5C5 19 8 22 12 22s7-3 7-6.5c0-3.5-2-5.5-4-6.5-1-.4-2-.5-3 0-1-.5-2-.4-3 0z\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'milk': "<path d=\"M8 6h8l1 3v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l1-3zM8 9h8\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
  'tea': "<path d=\"M6 9h10v6a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V9zM16 11h2a2 2 0 0 1 0 4h-2M8 5c1 1 2 1 3 0M12 5c1 1 2 1 3 0\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" fill=\"none\"/>",
}

function createIcon(displayName: string, markup: string) {
  function SvgIcon({
    size = 24,
    color = 'currentColor',
    style,
    className,
    ...rest
  }: IconComponentProps) {
    const { dangerouslySetInnerHTML: _ignored, children: _c, ...safeRest } = rest as IconComponentProps & {
      dangerouslySetInnerHTML?: unknown
      children?: unknown
    }
    return createElement('svg', {
      ...safeRest,
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
      dangerouslySetInnerHTML: { __html: markup },
    })
  }
  SvgIcon.displayName = `MochiIcon${displayName}`
  return SvgIcon
}

/** name → React SVG component */
export const icons = Object.fromEntries(
  (Object.keys(ICON_MARKUP) as IconName[]).map((name) => {
    const pascal = name
      .split('-')
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
      .join('')
    return [name, createIcon(pascal, ICON_MARKUP[name])]
  }),
) as unknown as { [K in IconName]: (props: IconComponentProps) => ReactElement }

export const Cloud = icons['cloud']
export const Star = icons['star']
export const Bubble = icons['bubble']
export const Raindrop = icons['raindrop']
export const Clock = icons['clock']
export const Sparkle = icons['sparkle']
export const Leaf = icons['leaf']
export const Heart = icons['heart']
export const Note = icons['note']
export const Check = icons['check']
export const ArrowLeft = icons['arrow-left']
export const ArrowRight = icons['arrow-right']
export const ArrowUp = icons['arrow-up']
export const ArrowDown = icons['arrow-down']
export const Left = icons['left']
export const Right = icons['right']
export const Up = icons['up']
export const Down = icons['down']
export const CaretLeft = icons['caret-left']
export const CaretRight = icons['caret-right']
export const CaretUp = icons['caret-up']
export const CaretDown = icons['caret-down']
export const DoubleLeft = icons['double-left']
export const DoubleRight = icons['double-right']
export const Swap = icons['swap']
export const Reload = icons['reload']
export const Sync = icons['sync']
export const Enter = icons['enter']
export const Fullscreen = icons['fullscreen']
export const FullscreenExit = icons['fullscreen-exit']
export const Expand = icons['expand']
export const Compress = icons['compress']
export const Close = icons['close']
export const Plus = icons['plus']
export const Minus = icons['minus']
export const Question = icons['question']
export const Info = icons['info']
export const Warning = icons['warning']
export const Error = icons['error']
export const Stop = icons['stop']
export const Ban = icons['ban']
export const CheckCircle = icons['check-circle']
export const CloseCircle = icons['close-circle']
export const PlusCircle = icons['plus-circle']
export const MinusCircle = icons['minus-circle']
export const ExclamationCircle = icons['exclamation-circle']
export const Loading = icons['loading']
export const Edit = icons['edit']
export const Delete = icons['delete']
export const Copy = icons['copy']
export const Cut = icons['cut']
export const Save = icons['save']
export const Undo = icons['undo']
export const Redo = icons['redo']
export const Bold = icons['bold']
export const Italic = icons['italic']
export const Underline = icons['underline']
export const Link = icons['link']
export const Unlink = icons['unlink']
export const AlignLeft = icons['align-left']
export const AlignCenter = icons['align-center']
export const AlignRight = icons['align-right']
export const OrderedList = icons['ordered-list']
export const UnorderedList = icons['unordered-list']
export const Search = icons['search']
export const Home = icons['home']
export const User = icons['user']
export const Team = icons['team']
export const Setting = icons['setting']
export const Menu = icons['menu']
export const More = icons['more']
export const MoreVertical = icons['more-vertical']
export const Filter = icons['filter']
export const SortAscending = icons['sort-ascending']
export const SortDescending = icons['sort-descending']
export const Calendar = icons['calendar']
export const Mail = icons['mail']
export const Phone = icons['phone']
export const Camera = icons['camera']
export const Picture = icons['picture']
export const File = icons['file']
export const Folder = icons['folder']
export const FolderOpen = icons['folder-open']
export const Download = icons['download']
export const Upload = icons['upload']
export const Share = icons['share']
export const Eye = icons['eye']
export const EyeInvisible = icons['eye-invisible']
export const Lock = icons['lock']
export const Unlock = icons['unlock']
export const Key = icons['key']
export const Bell = icons['bell']
export const Message = icons['message']
export const Comment = icons['comment']
export const Like = icons['like']
export const Dislike = icons['dislike']
export const ShoppingCart = icons['shopping-cart']
export const Gift = icons['gift']
export const Tag = icons['tag']
export const Bookmark = icons['bookmark']
export const Flag = icons['flag']
export const Pushpin = icons['pushpin']
export const Environment = icons['environment']
export const Global = icons['global']
export const Wifi = icons['wifi']
export const Poweroff = icons['poweroff']
export const Desktop = icons['desktop']
export const Mobile = icons['mobile']
export const Tablet = icons['tablet']
export const Printer = icons['printer']
export const Qrcode = icons['qrcode']
export const Dashboard = icons['dashboard']
export const Appstore = icons['appstore']
export const Table = icons['table']
export const Database = icons['database']
export const CloudUpload = icons['cloud-upload']
export const CloudDownload = icons['cloud-download']
export const History = icons['history']
export const Api = icons['api']
export const Code = icons['code']
export const Bug = icons['bug']
export const Experiment = icons['experiment']
export const Rocket = icons['rocket']
export const Trophy = icons['trophy']
export const Fire = icons['fire']
export const Thunderbolt = icons['thunderbolt']
export const Sun = icons['sun']
export const Moon = icons['moon']
export const Smile = icons['smile']
export const Frown = icons['frown']
export const Meh = icons['meh']
export const Fish = icons['fish']
export const Flower = icons['flower']
export const Mushroom = icons['mushroom']
export const Tree = icons['tree']
export const Rainbow = icons['rainbow']
export const Candy = icons['candy']
export const Cake = icons['cake']
export const Cookie = icons['cookie']
export const Balloon = icons['balloon']
export const Paw = icons['paw']
export const Bird = icons['bird']
export const Bee = icons['bee']
export const Butterfly = icons['butterfly']
export const Shell = icons['shell']
export const Acorn = icons['acorn']
export const Carrot = icons['carrot']
export const Apple = icons['apple']
export const Milk = icons['milk']
export const Tea = icons['tea']

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
  { name: 'arrow-left', label: 'ArrowLeft' },
  { name: 'arrow-right', label: 'ArrowRight' },
  { name: 'arrow-up', label: 'ArrowUp' },
  { name: 'arrow-down', label: 'ArrowDown' },
  { name: 'left', label: 'Left' },
  { name: 'right', label: 'Right' },
  { name: 'up', label: 'Up' },
  { name: 'down', label: 'Down' },
  { name: 'caret-left', label: 'CaretLeft' },
  { name: 'caret-right', label: 'CaretRight' },
  { name: 'caret-up', label: 'CaretUp' },
  { name: 'caret-down', label: 'CaretDown' },
  { name: 'double-left', label: 'DoubleLeft' },
  { name: 'double-right', label: 'DoubleRight' },
  { name: 'swap', label: 'Swap' },
  { name: 'reload', label: 'Reload' },
  { name: 'sync', label: 'Sync' },
  { name: 'enter', label: 'Enter' },
  { name: 'fullscreen', label: 'Fullscreen' },
  { name: 'fullscreen-exit', label: 'FullscreenExit' },
  { name: 'expand', label: 'Expand' },
  { name: 'compress', label: 'Compress' },
  { name: 'close', label: 'Close' },
  { name: 'plus', label: 'Plus' },
  { name: 'minus', label: 'Minus' },
  { name: 'question', label: 'Question' },
  { name: 'info', label: 'Info' },
  { name: 'warning', label: 'Warning' },
  { name: 'error', label: 'Error' },
  { name: 'stop', label: 'Stop' },
  { name: 'ban', label: 'Ban' },
  { name: 'check-circle', label: 'CheckCircle' },
  { name: 'close-circle', label: 'CloseCircle' },
  { name: 'plus-circle', label: 'PlusCircle' },
  { name: 'minus-circle', label: 'MinusCircle' },
  { name: 'exclamation-circle', label: 'ExclamationCircle' },
  { name: 'loading', label: 'Loading' },
  { name: 'edit', label: 'Edit' },
  { name: 'delete', label: 'Delete' },
  { name: 'copy', label: 'Copy' },
  { name: 'cut', label: 'Cut' },
  { name: 'save', label: 'Save' },
  { name: 'undo', label: 'Undo' },
  { name: 'redo', label: 'Redo' },
  { name: 'bold', label: 'Bold' },
  { name: 'italic', label: 'Italic' },
  { name: 'underline', label: 'Underline' },
  { name: 'link', label: 'Link' },
  { name: 'unlink', label: 'Unlink' },
  { name: 'align-left', label: 'AlignLeft' },
  { name: 'align-center', label: 'AlignCenter' },
  { name: 'align-right', label: 'AlignRight' },
  { name: 'ordered-list', label: 'OrderedList' },
  { name: 'unordered-list', label: 'UnorderedList' },
  { name: 'search', label: 'Search' },
  { name: 'home', label: 'Home' },
  { name: 'user', label: 'User' },
  { name: 'team', label: 'Team' },
  { name: 'setting', label: 'Setting' },
  { name: 'menu', label: 'Menu' },
  { name: 'more', label: 'More' },
  { name: 'more-vertical', label: 'MoreVertical' },
  { name: 'filter', label: 'Filter' },
  { name: 'sort-ascending', label: 'SortAscending' },
  { name: 'sort-descending', label: 'SortDescending' },
  { name: 'calendar', label: 'Calendar' },
  { name: 'mail', label: 'Mail' },
  { name: 'phone', label: 'Phone' },
  { name: 'camera', label: 'Camera' },
  { name: 'picture', label: 'Picture' },
  { name: 'file', label: 'File' },
  { name: 'folder', label: 'Folder' },
  { name: 'folder-open', label: 'FolderOpen' },
  { name: 'download', label: 'Download' },
  { name: 'upload', label: 'Upload' },
  { name: 'share', label: 'Share' },
  { name: 'eye', label: 'Eye' },
  { name: 'eye-invisible', label: 'EyeInvisible' },
  { name: 'lock', label: 'Lock' },
  { name: 'unlock', label: 'Unlock' },
  { name: 'key', label: 'Key' },
  { name: 'bell', label: 'Bell' },
  { name: 'message', label: 'Message' },
  { name: 'comment', label: 'Comment' },
  { name: 'like', label: 'Like' },
  { name: 'dislike', label: 'Dislike' },
  { name: 'shopping-cart', label: 'ShoppingCart' },
  { name: 'gift', label: 'Gift' },
  { name: 'tag', label: 'Tag' },
  { name: 'bookmark', label: 'Bookmark' },
  { name: 'flag', label: 'Flag' },
  { name: 'pushpin', label: 'Pushpin' },
  { name: 'environment', label: 'Environment' },
  { name: 'global', label: 'Global' },
  { name: 'wifi', label: 'Wifi' },
  { name: 'poweroff', label: 'Poweroff' },
  { name: 'desktop', label: 'Desktop' },
  { name: 'mobile', label: 'Mobile' },
  { name: 'tablet', label: 'Tablet' },
  { name: 'printer', label: 'Printer' },
  { name: 'qrcode', label: 'Qrcode' },
  { name: 'dashboard', label: 'Dashboard' },
  { name: 'appstore', label: 'Appstore' },
  { name: 'table', label: 'Table' },
  { name: 'database', label: 'Database' },
  { name: 'cloud-upload', label: 'CloudUpload' },
  { name: 'cloud-download', label: 'CloudDownload' },
  { name: 'history', label: 'History' },
  { name: 'api', label: 'Api' },
  { name: 'code', label: 'Code' },
  { name: 'bug', label: 'Bug' },
  { name: 'experiment', label: 'Experiment' },
  { name: 'rocket', label: 'Rocket' },
  { name: 'trophy', label: 'Trophy' },
  { name: 'fire', label: 'Fire' },
  { name: 'thunderbolt', label: 'Thunderbolt' },
  { name: 'sun', label: 'Sun' },
  { name: 'moon', label: 'Moon' },
  { name: 'smile', label: 'Smile' },
  { name: 'frown', label: 'Frown' },
  { name: 'meh', label: 'Meh' },
  { name: 'fish', label: 'Fish' },
  { name: 'flower', label: 'Flower' },
  { name: 'mushroom', label: 'Mushroom' },
  { name: 'tree', label: 'Tree' },
  { name: 'rainbow', label: 'Rainbow' },
  { name: 'candy', label: 'Candy' },
  { name: 'cake', label: 'Cake' },
  { name: 'cookie', label: 'Cookie' },
  { name: 'balloon', label: 'Balloon' },
  { name: 'paw', label: 'Paw' },
  { name: 'bird', label: 'Bird' },
  { name: 'bee', label: 'Bee' },
  { name: 'butterfly', label: 'Butterfly' },
  { name: 'shell', label: 'Shell' },
  { name: 'acorn', label: 'Acorn' },
  { name: 'carrot', label: 'Carrot' },
  { name: 'apple', label: 'Apple' },
  { name: 'milk', label: 'Milk' },
  { name: 'tea', label: 'Tea' },
]

/** SVG asset URLs */
export const iconUrls = {
  'cloud': new URL('./svg/cloud.svg', import.meta.url).href,
  'star': new URL('./svg/star.svg', import.meta.url).href,
  'bubble': new URL('./svg/bubble.svg', import.meta.url).href,
  'raindrop': new URL('./svg/raindrop.svg', import.meta.url).href,
  'clock': new URL('./svg/clock.svg', import.meta.url).href,
  'sparkle': new URL('./svg/sparkle.svg', import.meta.url).href,
  'leaf': new URL('./svg/leaf.svg', import.meta.url).href,
  'heart': new URL('./svg/heart.svg', import.meta.url).href,
  'note': new URL('./svg/note.svg', import.meta.url).href,
  'check': new URL('./svg/check.svg', import.meta.url).href,
  'arrow-left': new URL('./svg/arrow-left.svg', import.meta.url).href,
  'arrow-right': new URL('./svg/arrow-right.svg', import.meta.url).href,
  'arrow-up': new URL('./svg/arrow-up.svg', import.meta.url).href,
  'arrow-down': new URL('./svg/arrow-down.svg', import.meta.url).href,
  'left': new URL('./svg/left.svg', import.meta.url).href,
  'right': new URL('./svg/right.svg', import.meta.url).href,
  'up': new URL('./svg/up.svg', import.meta.url).href,
  'down': new URL('./svg/down.svg', import.meta.url).href,
  'caret-left': new URL('./svg/caret-left.svg', import.meta.url).href,
  'caret-right': new URL('./svg/caret-right.svg', import.meta.url).href,
  'caret-up': new URL('./svg/caret-up.svg', import.meta.url).href,
  'caret-down': new URL('./svg/caret-down.svg', import.meta.url).href,
  'double-left': new URL('./svg/double-left.svg', import.meta.url).href,
  'double-right': new URL('./svg/double-right.svg', import.meta.url).href,
  'swap': new URL('./svg/swap.svg', import.meta.url).href,
  'reload': new URL('./svg/reload.svg', import.meta.url).href,
  'sync': new URL('./svg/sync.svg', import.meta.url).href,
  'enter': new URL('./svg/enter.svg', import.meta.url).href,
  'fullscreen': new URL('./svg/fullscreen.svg', import.meta.url).href,
  'fullscreen-exit': new URL('./svg/fullscreen-exit.svg', import.meta.url).href,
  'expand': new URL('./svg/expand.svg', import.meta.url).href,
  'compress': new URL('./svg/compress.svg', import.meta.url).href,
  'close': new URL('./svg/close.svg', import.meta.url).href,
  'plus': new URL('./svg/plus.svg', import.meta.url).href,
  'minus': new URL('./svg/minus.svg', import.meta.url).href,
  'question': new URL('./svg/question.svg', import.meta.url).href,
  'info': new URL('./svg/info.svg', import.meta.url).href,
  'warning': new URL('./svg/warning.svg', import.meta.url).href,
  'error': new URL('./svg/error.svg', import.meta.url).href,
  'stop': new URL('./svg/stop.svg', import.meta.url).href,
  'ban': new URL('./svg/ban.svg', import.meta.url).href,
  'check-circle': new URL('./svg/check-circle.svg', import.meta.url).href,
  'close-circle': new URL('./svg/close-circle.svg', import.meta.url).href,
  'plus-circle': new URL('./svg/plus-circle.svg', import.meta.url).href,
  'minus-circle': new URL('./svg/minus-circle.svg', import.meta.url).href,
  'exclamation-circle': new URL('./svg/exclamation-circle.svg', import.meta.url).href,
  'loading': new URL('./svg/loading.svg', import.meta.url).href,
  'edit': new URL('./svg/edit.svg', import.meta.url).href,
  'delete': new URL('./svg/delete.svg', import.meta.url).href,
  'copy': new URL('./svg/copy.svg', import.meta.url).href,
  'cut': new URL('./svg/cut.svg', import.meta.url).href,
  'save': new URL('./svg/save.svg', import.meta.url).href,
  'undo': new URL('./svg/undo.svg', import.meta.url).href,
  'redo': new URL('./svg/redo.svg', import.meta.url).href,
  'bold': new URL('./svg/bold.svg', import.meta.url).href,
  'italic': new URL('./svg/italic.svg', import.meta.url).href,
  'underline': new URL('./svg/underline.svg', import.meta.url).href,
  'link': new URL('./svg/link.svg', import.meta.url).href,
  'unlink': new URL('./svg/unlink.svg', import.meta.url).href,
  'align-left': new URL('./svg/align-left.svg', import.meta.url).href,
  'align-center': new URL('./svg/align-center.svg', import.meta.url).href,
  'align-right': new URL('./svg/align-right.svg', import.meta.url).href,
  'ordered-list': new URL('./svg/ordered-list.svg', import.meta.url).href,
  'unordered-list': new URL('./svg/unordered-list.svg', import.meta.url).href,
  'search': new URL('./svg/search.svg', import.meta.url).href,
  'home': new URL('./svg/home.svg', import.meta.url).href,
  'user': new URL('./svg/user.svg', import.meta.url).href,
  'team': new URL('./svg/team.svg', import.meta.url).href,
  'setting': new URL('./svg/setting.svg', import.meta.url).href,
  'menu': new URL('./svg/menu.svg', import.meta.url).href,
  'more': new URL('./svg/more.svg', import.meta.url).href,
  'more-vertical': new URL('./svg/more-vertical.svg', import.meta.url).href,
  'filter': new URL('./svg/filter.svg', import.meta.url).href,
  'sort-ascending': new URL('./svg/sort-ascending.svg', import.meta.url).href,
  'sort-descending': new URL('./svg/sort-descending.svg', import.meta.url).href,
  'calendar': new URL('./svg/calendar.svg', import.meta.url).href,
  'mail': new URL('./svg/mail.svg', import.meta.url).href,
  'phone': new URL('./svg/phone.svg', import.meta.url).href,
  'camera': new URL('./svg/camera.svg', import.meta.url).href,
  'picture': new URL('./svg/picture.svg', import.meta.url).href,
  'file': new URL('./svg/file.svg', import.meta.url).href,
  'folder': new URL('./svg/folder.svg', import.meta.url).href,
  'folder-open': new URL('./svg/folder-open.svg', import.meta.url).href,
  'download': new URL('./svg/download.svg', import.meta.url).href,
  'upload': new URL('./svg/upload.svg', import.meta.url).href,
  'share': new URL('./svg/share.svg', import.meta.url).href,
  'eye': new URL('./svg/eye.svg', import.meta.url).href,
  'eye-invisible': new URL('./svg/eye-invisible.svg', import.meta.url).href,
  'lock': new URL('./svg/lock.svg', import.meta.url).href,
  'unlock': new URL('./svg/unlock.svg', import.meta.url).href,
  'key': new URL('./svg/key.svg', import.meta.url).href,
  'bell': new URL('./svg/bell.svg', import.meta.url).href,
  'message': new URL('./svg/message.svg', import.meta.url).href,
  'comment': new URL('./svg/comment.svg', import.meta.url).href,
  'like': new URL('./svg/like.svg', import.meta.url).href,
  'dislike': new URL('./svg/dislike.svg', import.meta.url).href,
  'shopping-cart': new URL('./svg/shopping-cart.svg', import.meta.url).href,
  'gift': new URL('./svg/gift.svg', import.meta.url).href,
  'tag': new URL('./svg/tag.svg', import.meta.url).href,
  'bookmark': new URL('./svg/bookmark.svg', import.meta.url).href,
  'flag': new URL('./svg/flag.svg', import.meta.url).href,
  'pushpin': new URL('./svg/pushpin.svg', import.meta.url).href,
  'environment': new URL('./svg/environment.svg', import.meta.url).href,
  'global': new URL('./svg/global.svg', import.meta.url).href,
  'wifi': new URL('./svg/wifi.svg', import.meta.url).href,
  'poweroff': new URL('./svg/poweroff.svg', import.meta.url).href,
  'desktop': new URL('./svg/desktop.svg', import.meta.url).href,
  'mobile': new URL('./svg/mobile.svg', import.meta.url).href,
  'tablet': new URL('./svg/tablet.svg', import.meta.url).href,
  'printer': new URL('./svg/printer.svg', import.meta.url).href,
  'qrcode': new URL('./svg/qrcode.svg', import.meta.url).href,
  'dashboard': new URL('./svg/dashboard.svg', import.meta.url).href,
  'appstore': new URL('./svg/appstore.svg', import.meta.url).href,
  'table': new URL('./svg/table.svg', import.meta.url).href,
  'database': new URL('./svg/database.svg', import.meta.url).href,
  'cloud-upload': new URL('./svg/cloud-upload.svg', import.meta.url).href,
  'cloud-download': new URL('./svg/cloud-download.svg', import.meta.url).href,
  'history': new URL('./svg/history.svg', import.meta.url).href,
  'api': new URL('./svg/api.svg', import.meta.url).href,
  'code': new URL('./svg/code.svg', import.meta.url).href,
  'bug': new URL('./svg/bug.svg', import.meta.url).href,
  'experiment': new URL('./svg/experiment.svg', import.meta.url).href,
  'rocket': new URL('./svg/rocket.svg', import.meta.url).href,
  'trophy': new URL('./svg/trophy.svg', import.meta.url).href,
  'fire': new URL('./svg/fire.svg', import.meta.url).href,
  'thunderbolt': new URL('./svg/thunderbolt.svg', import.meta.url).href,
  'sun': new URL('./svg/sun.svg', import.meta.url).href,
  'moon': new URL('./svg/moon.svg', import.meta.url).href,
  'smile': new URL('./svg/smile.svg', import.meta.url).href,
  'frown': new URL('./svg/frown.svg', import.meta.url).href,
  'meh': new URL('./svg/meh.svg', import.meta.url).href,
  'fish': new URL('./svg/fish.svg', import.meta.url).href,
  'flower': new URL('./svg/flower.svg', import.meta.url).href,
  'mushroom': new URL('./svg/mushroom.svg', import.meta.url).href,
  'tree': new URL('./svg/tree.svg', import.meta.url).href,
  'rainbow': new URL('./svg/rainbow.svg', import.meta.url).href,
  'candy': new URL('./svg/candy.svg', import.meta.url).href,
  'cake': new URL('./svg/cake.svg', import.meta.url).href,
  'cookie': new URL('./svg/cookie.svg', import.meta.url).href,
  'balloon': new URL('./svg/balloon.svg', import.meta.url).href,
  'paw': new URL('./svg/paw.svg', import.meta.url).href,
  'bird': new URL('./svg/bird.svg', import.meta.url).href,
  'bee': new URL('./svg/bee.svg', import.meta.url).href,
  'butterfly': new URL('./svg/butterfly.svg', import.meta.url).href,
  'shell': new URL('./svg/shell.svg', import.meta.url).href,
  'acorn': new URL('./svg/acorn.svg', import.meta.url).href,
  'carrot': new URL('./svg/carrot.svg', import.meta.url).href,
  'apple': new URL('./svg/apple.svg', import.meta.url).href,
  'milk': new URL('./svg/milk.svg', import.meta.url).href,
  'tea': new URL('./svg/tea.svg', import.meta.url).href,
} as const satisfies Record<IconName, string>
