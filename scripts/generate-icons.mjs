/**
 * Generate original Mochi SVG icons + packages/icons/src/index.ts
 * Inspired by common Ant Design / cozy-UI icon sets — all paths are original.
 */
import { mkdirSync, writeFileSync, readdirSync, unlinkSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const svgDir = join(root, 'packages', 'icons', 'src', 'svg')
const indexPath = join(root, 'packages', 'icons', 'src', 'index.ts')

const s = 'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"'
const f = 'fill="currentColor"'

/** @type {Array<{ name: string, label: string, body: string }>} */
const icons = [
  // —— existing cozy set ——
  { name: 'cloud', label: 'Cloud', body: `<path d="M7 16c-2.2 0-4-1.6-4-3.6C3 10.3 4.7 8.7 6.8 8.5 7.3 6.5 9.1 5 11.3 5c2.5 0 4.5 1.8 4.9 4.2.4-.1.8-.2 1.3-.2 2.2 0 4 1.7 4 3.8S19.7 16.6 17.5 16.6H7z" ${f} opacity=".9"/>` },
  { name: 'star', label: 'Star', body: `<path d="M12 2.5l2.4 5.6 6.1.5-4.6 4.1 1.4 5.9L12 15.5 6.7 18.6l1.4-5.9L3.5 8.6l6.1-.5L12 2.5z" ${f}/>` },
  { name: 'bubble', label: 'Bubble', body: `<ellipse cx="12" cy="13" rx="8" ry="7" ${f} opacity=".85"/><circle cx="9" cy="11.5" r="1.2" fill="#FFF8F0"/><circle cx="15" cy="11.5" r="1.2" fill="#FFF8F0"/><path d="M10 15.5c.8.8 3.2.8 4 0" stroke="#FFF8F0" stroke-width="1.5" stroke-linecap="round"/>` },
  { name: 'raindrop', label: 'Raindrop', body: `<path d="M12 3c3.5 4.2 6 7.2 6 10a6 6 0 1 1-12 0c0-2.8 2.5-5.8 6-10z" ${s}/><path d="M10 14c0 1.5.8 2.5 2 3" ${s}/>` },
  { name: 'clock', label: 'Clock', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M12 7v5.5l3.5 2" ${s}/>` },
  { name: 'sparkle', label: 'Sparkle', body: `<path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3z" ${f}/><path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8L18 14z" ${f} opacity=".7"/>` },
  { name: 'leaf', label: 'Leaf', body: `<path d="M12 20c0-6 4-9 8-10-1 5-4 8-8 10zM12 20C12 14 8 11 4 10c1 5 4 8 8 10z" ${s}/><path d="M12 20V10" ${s}/>` },
  { name: 'heart', label: 'Heart', body: `<path d="M12 20s-6-4.2-6-9a3.8 3.8 0 0 1 6-3 3.8 3.8 0 0 1 6 3c0 4.8-6 9-6 9z" ${f}/>` },
  { name: 'note', label: 'Note', body: `<path d="M9 18V8a2 2 0 0 1 2-2h7v10a2 2 0 1 1-2-2h2" ${s}/><circle cx="9" cy="18" r="2" ${s}/>` },
  { name: 'check', label: 'Check', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M8 12l2.5 2.5L16 9" ${s}/>` },

  // —— direction ——
  { name: 'arrow-left', label: 'ArrowLeft', body: `<path d="M19 12H5M11 6l-6 6 6 6" ${s}/>` },
  { name: 'arrow-right', label: 'ArrowRight', body: `<path d="M5 12h14M13 6l6 6-6 6" ${s}/>` },
  { name: 'arrow-up', label: 'ArrowUp', body: `<path d="M12 19V5M6 11l6-6 6 6" ${s}/>` },
  { name: 'arrow-down', label: 'ArrowDown', body: `<path d="M12 5v14M6 13l6 6 6-6" ${s}/>` },
  { name: 'left', label: 'Left', body: `<path d="M15 6l-6 6 6 6" ${s}/>` },
  { name: 'right', label: 'Right', body: `<path d="M9 6l6 6-6 6" ${s}/>` },
  { name: 'up', label: 'Up', body: `<path d="M6 14l6-6 6 6" ${s}/>` },
  { name: 'down', label: 'Down', body: `<path d="M6 10l6 6 6-6" ${s}/>` },
  { name: 'caret-left', label: 'CaretLeft', body: `<path d="M14 6l-6 6 6 6" ${f}/>` },
  { name: 'caret-right', label: 'CaretRight', body: `<path d="M10 6l6 6-6 6" ${f}/>` },
  { name: 'caret-up', label: 'CaretUp', body: `<path d="M6 14l6-6 6 6" ${f}/>` },
  { name: 'caret-down', label: 'CaretDown', body: `<path d="M6 10l6 6 6-6" ${f}/>` },
  { name: 'double-left', label: 'DoubleLeft', body: `<path d="M11 6l-6 6 6 6M19 6l-6 6 6 6" ${s}/>` },
  { name: 'double-right', label: 'DoubleRight', body: `<path d="M5 6l6 6-6 6M13 6l6 6-6 6" ${s}/>` },
  { name: 'swap', label: 'Swap', body: `<path d="M7 8h11M15 4l4 4-4 4M17 16H6M9 12l-4 4 4 4" ${s}/>` },
  { name: 'reload', label: 'Reload', body: `<path d="M4 12a8 8 0 0 1 13.7-5.6M20 12a8 8 0 0 1-13.7 5.6" ${s}/><path d="M18 3v5h-5M6 21v-5h5" ${s}/>` },
  { name: 'sync', label: 'Sync', body: `<path d="M4 12a8 8 0 0 1 14-5M20 12a8 8 0 0 1-14 5" ${s}/><path d="M18 4v4h-4M6 20v-4h4" ${s}/>` },
  { name: 'enter', label: 'Enter', body: `<path d="M4 12h12a4 4 0 0 0 0-8H12" ${s}/><path d="M9 8l-5 4 5 4" ${s}/>` },
  { name: 'fullscreen', label: 'Fullscreen', body: `<path d="M4 9V4h5M15 4h5v5M20 15v5h-5M9 20H4v-5" ${s}/>` },
  { name: 'fullscreen-exit', label: 'FullscreenExit', body: `<path d="M9 4v5H4M15 4v5h5M4 15h5v5M20 15h-5v5" ${s}/>` },
  { name: 'expand', label: 'Expand', body: `<path d="M8 3H3v5M16 3h5v5M3 16v5h5M21 16v5h-5" ${s}/>` },
  { name: 'compress', label: 'Compress', body: `<path d="M9 3v6H3M15 3v6h6M3 15h6v6M21 15h-6v6" ${s}/>` },

  // —— suggested ——
  { name: 'close', label: 'Close', body: `<path d="M6 6l12 12M18 6L6 18" ${s}/>` },
  { name: 'plus', label: 'Plus', body: `<path d="M12 5v14M5 12h14" ${s}/>` },
  { name: 'minus', label: 'Minus', body: `<path d="M5 12h14" ${s}/>` },
  { name: 'question', label: 'Question', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.2 2.4c-.8.4-1.2 1-1.2 1.8V14" ${s}/><circle cx="12" cy="17" r="1" ${f}/>` },
  { name: 'info', label: 'Info', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M12 11v6M12 7h.01" ${s}/>` },
  { name: 'warning', label: 'Warning', body: `<path d="M12 4l9 16H3L12 4z" ${s}/><path d="M12 10v4M12 17h.01" ${s}/>` },
  { name: 'error', label: 'Error', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M12 8v5M12 16h.01" ${s}/>` },
  { name: 'stop', label: 'Stop', body: `<circle cx="12" cy="12" r="9" ${s}/><rect x="9" y="9" width="6" height="6" rx="1" ${f}/>` },
  { name: 'ban', label: 'Ban', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M6.5 6.5l11 11" ${s}/>` },
  { name: 'check-circle', label: 'CheckCircle', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M8 12l2.5 2.5L16 9" ${s}/>` },
  { name: 'close-circle', label: 'CloseCircle', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M9 9l6 6M15 9l-6 6" ${s}/>` },
  { name: 'plus-circle', label: 'PlusCircle', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M12 8v8M8 12h8" ${s}/>` },
  { name: 'minus-circle', label: 'MinusCircle', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M8 12h8" ${s}/>` },
  { name: 'exclamation-circle', label: 'ExclamationCircle', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M12 7v6M12 16h.01" ${s}/>` },
  { name: 'loading', label: 'Loading', body: `<path d="M12 3a9 9 0 1 1-9 9" ${s}/>` },

  // —— editor ——
  { name: 'edit', label: 'Edit', body: `<path d="M4 20h4l11-11-4-4L4 16v4zM14 6l4 4" ${s}/>` },
  { name: 'delete', label: 'Delete', body: `<path d="M5 7h14M9 7V5h6v2M8 7l1 12h6l1-12" ${s}/>` },
  { name: 'copy', label: 'Copy', body: `<rect x="8" y="8" width="11" height="11" rx="2" ${s}/><path d="M6 16V6a2 2 0 0 1 2-2h10" ${s}/>` },
  { name: 'cut', label: 'Cut', body: `<circle cx="7" cy="17" r="2.5" ${s}/><circle cx="17" cy="17" r="2.5" ${s}/><path d="M9 15.5L18 4M15 15.5L6 4" ${s}/>` },
  { name: 'save', label: 'Save', body: `<path d="M5 5h11l3 3v11H5V5z" ${s}/><path d="M8 5v5h7V5M8 19v-6h8v6" ${s}/>` },
  { name: 'undo', label: 'Undo', body: `<path d="M9 14H5v-4" ${s}/><path d="M5 10a7 7 0 1 1 2 6" ${s}/>` },
  { name: 'redo', label: 'Redo', body: `<path d="M15 14h4v-4" ${s}/><path d="M19 10a7 7 0 1 0-2 6" ${s}/>` },
  { name: 'bold', label: 'Bold', body: `<path d="M7 5h6a3 3 0 0 1 0 6H7V5zM7 11h7a3 3 0 0 1 0 6H7v-6z" ${s}/>` },
  { name: 'italic', label: 'Italic', body: `<path d="M14 5H8M16 19H10M13 5l-2 14" ${s}/>` },
  { name: 'underline', label: 'Underline', body: `<path d="M7 5v6a5 5 0 0 0 10 0V5M6 20h12" ${s}/>` },
  { name: 'link', label: 'Link', body: `<path d="M10 13a5 5 0 0 0 7 0l2-2a5 5 0 0 0-7-7l-1 1" ${s}/><path d="M14 11a5 5 0 0 0-7 0l-2 2a5 5 0 0 0 7 7l1-1" ${s}/>` },
  { name: 'unlink', label: 'Unlink', body: `<path d="M10 13a5 5 0 0 0 5.5 1M17 10a5 5 0 0 0-5.5-1M14 11a5 5 0 0 0-5.5-1M7 14a5 5 0 0 0 5.5 1M4 4l16 16" ${s}/>` },
  { name: 'align-left', label: 'AlignLeft', body: `<path d="M4 6h16M4 12h10M4 18h14" ${s}/>` },
  { name: 'align-center', label: 'AlignCenter', body: `<path d="M4 6h16M7 12h10M5 18h14" ${s}/>` },
  { name: 'align-right', label: 'AlignRight', body: `<path d="M4 6h16M10 12h10M6 18h14" ${s}/>` },
  { name: 'ordered-list', label: 'OrderedList', body: `<path d="M9 6h11M9 12h11M9 18h11M4 6h1v4M4.5 16.5l1.5-.5v3" ${s}/>` },
  { name: 'unordered-list', label: 'UnorderedList', body: `<path d="M9 6h11M9 12h11M9 18h11M5 6h.01M5 12h.01M5 18h.01" ${s}/>` },

  // —— data / app ——
  { name: 'search', label: 'Search', body: `<circle cx="11" cy="11" r="6.5" ${s}/><path d="M16 16l4 4" ${s}/>` },
  { name: 'home', label: 'Home', body: `<path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9z" ${s}/>` },
  { name: 'user', label: 'User', body: `<circle cx="12" cy="8" r="3.5" ${s}/><path d="M5 20c1.5-3.5 4-5 7-5s5.5 1.5 7 5" ${s}/>` },
  { name: 'team', label: 'Team', body: `<circle cx="9" cy="8" r="3" ${s}/><circle cx="17" cy="9" r="2.5" ${s}/><path d="M3.5 19c1-3 2.8-4.5 5.5-4.5S14 16 15 19M14 14.5c1.5-.4 2.8-.2 4 .8 1.2 1 2 2.4 2.5 3.7" ${s}/>` },
  { name: 'setting', label: 'Setting', body: `<circle cx="12" cy="12" r="3" ${s}/><path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" ${s}/>` },
  { name: 'menu', label: 'Menu', body: `<path d="M4 7h16M4 12h16M4 17h16" ${s}/>` },
  { name: 'more', label: 'More', body: `<circle cx="6" cy="12" r="1.5" ${f}/><circle cx="12" cy="12" r="1.5" ${f}/><circle cx="18" cy="12" r="1.5" ${f}/>` },
  { name: 'more-vertical', label: 'MoreVertical', body: `<circle cx="12" cy="6" r="1.5" ${f}/><circle cx="12" cy="12" r="1.5" ${f}/><circle cx="12" cy="18" r="1.5" ${f}/>` },
  { name: 'filter', label: 'Filter', body: `<path d="M4 6h16l-6 7v5l-4 2v-7L4 6z" ${s}/>` },
  { name: 'sort-ascending', label: 'SortAscending', body: `<path d="M8 7v10M5 10l3-3 3 3M13 7h7M13 12h5M13 17h3" ${s}/>` },
  { name: 'sort-descending', label: 'SortDescending', body: `<path d="M8 7v10M5 14l3 3 3-3M13 7h3M13 12h5M13 17h7" ${s}/>` },
  { name: 'calendar', label: 'Calendar', body: `<rect x="4" y="5" width="16" height="15" rx="2" ${s}/><path d="M8 3v4M16 3v4M4 10h16" ${s}/>` },
  { name: 'mail', label: 'Mail', body: `<rect x="3" y="6" width="18" height="12" rx="2" ${s}/><path d="M3 8l9 6 9-6" ${s}/>` },
  { name: 'phone', label: 'Phone', body: `<path d="M7 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5L16 13l4 1.5V18a2 2 0 0 1-2 2A14 14 0 0 1 4 6a2 2 0 0 1 3-2z" ${s}/>` },
  { name: 'camera', label: 'Camera', body: `<path d="M4 8h3l2-2h6l2 2h3v11H4V8z" ${s}/><circle cx="12" cy="13" r="3.5" ${s}/>` },
  { name: 'picture', label: 'Picture', body: `<rect x="3" y="5" width="18" height="14" rx="2" ${s}/><circle cx="9" cy="10" r="1.5" ${f}/><path d="M3 16l5-4 4 3 3-2 6 4" ${s}/>` },
  { name: 'file', label: 'File', body: `<path d="M7 3h7l4 4v14H7V3z" ${s}/><path d="M14 3v4h4" ${s}/>` },
  { name: 'folder', label: 'Folder', body: `<path d="M3 7h6l2 2h10v10H3V7z" ${s}/>` },
  { name: 'folder-open', label: 'FolderOpen', body: `<path d="M3 8h6l2 2h7v2H5l-2 7V8zM5 12h16l-2 8H4" ${s}/>` },
  { name: 'download', label: 'Download', body: `<path d="M12 4v10M8 10l4 4 4-4M5 19h14" ${s}/>` },
  { name: 'upload', label: 'Upload', body: `<path d="M12 14V4M8 8l4-4 4 4M5 19h14" ${s}/>` },
  { name: 'share', label: 'Share', body: `<circle cx="6" cy="12" r="2.5" ${s}/><circle cx="18" cy="6" r="2.5" ${s}/><circle cx="18" cy="18" r="2.5" ${s}/><path d="M8.2 11l7.5-4M8.2 13l7.5 4" ${s}/>` },
  { name: 'eye', label: 'Eye', body: `<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12z" ${s}/><circle cx="12" cy="12" r="2.5" ${s}/>` },
  { name: 'eye-invisible', label: 'EyeInvisible', body: `<path d="M3 4l18 16M9.5 9.7A3 3 0 0 0 12 15a3 3 0 0 0 2.8-1.9M6.1 6.5C4 8 2 12 2 12s3.5 6 10 6c1.5 0 2.8-.3 4-.7M14.5 5.4C15.7 5.7 16.8 6.3 18 7.2 20.5 9 22 12 22 12s-.7 1.3-2 2.8" ${s}/>` },
  { name: 'lock', label: 'Lock', body: `<rect x="5" y="10" width="14" height="10" rx="2" ${s}/><path d="M8 10V7a4 4 0 0 1 8 0v3" ${s}/>` },
  { name: 'unlock', label: 'Unlock', body: `<rect x="5" y="10" width="14" height="10" rx="2" ${s}/><path d="M8 10V7a4 4 0 0 1 7.5-2" ${s}/>` },
  { name: 'key', label: 'Key', body: `<circle cx="8" cy="14" r="3.5" ${s}/><path d="M11 12.5l8-8M16 5l3 3M15 8l2 2" ${s}/>` },
  { name: 'bell', label: 'Bell', body: `<path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4l2-2zM10 19a2 2 0 0 0 4 0" ${s}/>` },
  { name: 'message', label: 'Message', body: `<path d="M5 6h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H10l-4 3v-3H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2z" ${s}/>` },
  { name: 'comment', label: 'Comment', body: `<path d="M6 18l-2 3v-3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6z" ${s}/>` },
  { name: 'like', label: 'Like', body: `<path d="M8 11v9H5v-9h3zM8 11l3-6a2 2 0 0 1 2 2v3h5.5a2 2 0 0 1 2 2.3l-1 6A2 2 0 0 1 17.5 20H8" ${s}/>` },
  { name: 'dislike', label: 'Dislike', body: `<path d="M8 13V4H5v9h3zM8 13l3 6a2 2 0 0 0 2-2v-3h5.5a2 2 0 0 0 2-2.3l-1-6A2 2 0 0 0 17.5 4H8" ${s}/>` },
  { name: 'shopping-cart', label: 'ShoppingCart', body: `<path d="M4 5h2l2 11h10l2-8H7" ${s}/><circle cx="10" cy="19" r="1.5" ${f}/><circle cx="17" cy="19" r="1.5" ${f}/>` },
  { name: 'gift', label: 'Gift', body: `<rect x="4" y="10" width="16" height="10" rx="1" ${s}/><path d="M4 14h16M12 10v10M12 10c-2-3-5-3-5 0 2 0 4 0 5 0zm0 0c2-3 5-3 5 0-2 0-4 0-5 0z" ${s}/>` },
  { name: 'tag', label: 'Tag', body: `<path d="M3 12V5h7l9 9-7 7-9-9z" ${s}/><circle cx="8" cy="8" r="1.2" ${f}/>` },
  { name: 'bookmark', label: 'Bookmark', body: `<path d="M7 4h10v17l-5-3-5 3V4z" ${s}/>` },
  { name: 'flag', label: 'Flag', body: `<path d="M6 21V4M6 4h10l-2 4 2 4H6" ${s}/>` },
  { name: 'pushpin', label: 'Pushpin', body: `<path d="M12 14v7M9 4h6l1 5-3 2v3H11v-3L8 9l1-5z" ${s}/>` },
  { name: 'environment', label: 'Environment', body: `<path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" ${s}/><circle cx="12" cy="10" r="2.5" ${s}/>` },
  { name: 'global', label: 'Global', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" ${s}/>` },
  { name: 'wifi', label: 'Wifi', body: `<path d="M5 10.5a10 10 0 0 1 14 0M8 13.5a6 6 0 0 1 8 0M12 18h.01" ${s}/>` },
  { name: 'poweroff', label: 'Poweroff', body: `<path d="M12 3v8M7 6.5a8 8 0 1 0 10 0" ${s}/>` },
  { name: 'desktop', label: 'Desktop', body: `<rect x="3" y="4" width="18" height="12" rx="2" ${s}/><path d="M8 20h8M12 16v4" ${s}/>` },
  { name: 'mobile', label: 'Mobile', body: `<rect x="7" y="3" width="10" height="18" rx="2" ${s}/><path d="M11 18h2" ${s}/>` },
  { name: 'tablet', label: 'Tablet', body: `<rect x="4" y="3" width="16" height="18" rx="2" ${s}/><path d="M11 18h2" ${s}/>` },
  { name: 'printer', label: 'Printer', body: `<path d="M7 8V4h10v4M6 12h12v8H6v-8z" ${s}/><path d="M4 8h16v6h-3" ${s}/>` },
  { name: 'qrcode', label: 'Qrcode', body: `<path d="M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6zM14 14h2v2M18 14h2v2M14 18h2v2M18 18h2v2" ${s}/>` },
  { name: 'dashboard', label: 'Dashboard', body: `<path d="M4 13a8 8 0 1 1 16 0" ${s}/><path d="M12 13l4-4" ${s}/><circle cx="12" cy="13" r="1.5" ${f}/>` },
  { name: 'appstore', label: 'Appstore', body: `<rect x="4" y="4" width="6" height="6" rx="1.5" ${s}/><rect x="14" y="4" width="6" height="6" rx="1.5" ${s}/><rect x="4" y="14" width="6" height="6" rx="1.5" ${s}/><rect x="14" y="14" width="6" height="6" rx="1.5" ${s}/>` },
  { name: 'table', label: 'Table', body: `<rect x="3" y="5" width="18" height="14" rx="2" ${s}/><path d="M3 10h18M3 15h18M9 5v14M15 5v14" ${s}/>` },
  { name: 'database', label: 'Database', body: `<ellipse cx="12" cy="6" rx="7" ry="2.5" ${s}/><path d="M5 6v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5V6M5 12v6c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-6" ${s}/>` },
  { name: 'cloud-upload', label: 'CloudUpload', body: `<path d="M7 17H6a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.6-1.5A3.5 3.5 0 0 1 18 17h-1" ${s}/><path d="M12 19v-8M9 14l3-3 3 3" ${s}/>` },
  { name: 'cloud-download', label: 'CloudDownload', body: `<path d="M7 17H6a4 4 0 0 1 0-8 5.5 5.5 0 0 1 10.6-1.5A3.5 3.5 0 0 1 18 17h-1" ${s}/><path d="M12 11v8M9 16l3 3 3-3" ${s}/>` },
  { name: 'history', label: 'History', body: `<path d="M4 12a8 8 0 1 0 2.3-5.5M4 5v4h4" ${s}/><path d="M12 8v5l3 2" ${s}/>` },
  { name: 'api', label: 'Api', body: `<path d="M8 8h2v8H8zM14 8h2v8h-2zM6 10h4M14 14h4" ${s}/><circle cx="5" cy="10" r="1.5" ${s}/><circle cx="19" cy="14" r="1.5" ${s}/>` },
  { name: 'code', label: 'Code', body: `<path d="M8 8l-4 4 4 4M16 8l4 4-4 4M13 5l-2 14" ${s}/>` },
  { name: 'bug', label: 'Bug', body: `<path d="M8 10a4 4 0 0 1 8 0v6a4 4 0 0 1-8 0v-6zM4 12h4M16 12h4M6 7l2.5 2M18 7l-2.5 2M6 18l2.5-2M18 18l-2.5-2M12 6V4" ${s}/>` },
  { name: 'experiment', label: 'Experiment', body: `<path d="M9 3h6M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3" ${s}/>` },
  { name: 'rocket', label: 'Rocket', body: `<path d="M12 3c3 3 5 7 5 11l-2 1-1 3h-4l-1-3-2-1c0-4 2-8 5-11zM9 17c-2 1-4 3-4 4 2 0 4-1 5-2M15 17c2 1 4 3 4 4-2 0-4-1-5-2" ${s}/><circle cx="12" cy="10" r="1.5" ${s}/>` },
  { name: 'trophy', label: 'Trophy', body: `<path d="M8 4h8v5a4 4 0 0 1-8 0V4zM8 6H5a2 2 0 0 0 2 4M16 6h3a2 2 0 0 1-2 4M10 15h4v3H10zM8 21h8" ${s}/>` },
  { name: 'fire', label: 'Fire', body: `<path d="M12 21c-4 0-6-2.5-6-6 0-3 2-5 3-7 0 2 1.5 3 2.5 3C12 8 13 5 15 3c1 3 3 5.5 3 9 0 4.5-2.5 9-6 9z" ${s}/>` },
  { name: 'thunderbolt', label: 'Thunderbolt', body: `<path d="M13 2L6 13h5l-1 9 8-12h-5l0-8z" ${s}/>` },
  { name: 'sun', label: 'Sun', body: `<circle cx="12" cy="12" r="4" ${s}/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M5 19l1.5-1.5" ${s}/>` },
  { name: 'moon', label: 'Moon', body: `<path d="M18 14.5A7.5 7.5 0 1 1 9.5 5 6 6 0 0 0 18 14.5z" ${s}/>` },
  { name: 'smile', label: 'Smile', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M8.5 10h.01M15.5 10h.01M8.5 14c1.2 1.5 5.8 1.5 7 0" ${s}/>` },
  { name: 'frown', label: 'Frown', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M8.5 10h.01M15.5 10h.01M8.5 16c1.2-1.5 5.8-1.5 7 0" ${s}/>` },
  { name: 'meh', label: 'Meh', body: `<circle cx="12" cy="12" r="9" ${s}/><path d="M8.5 10h.01M15.5 10h.01M9 15h6" ${s}/>` },

  // —— cozy / island ——
  { name: 'fish', label: 'Fish', body: `<path d="M4 12c4-5 10-5 14-2 1.5 0 3 .5 4 1-1 .5-2.5 1-4 1-4 3-10 3-14-2z" ${s}/><circle cx="8" cy="11" r="1" ${f}/><path d="M18 10l3-3M18 14l3 3" ${s}/>` },
  { name: 'flower', label: 'Flower', body: `<circle cx="12" cy="12" r="2.5" ${f}/><path d="M12 4c1.5 2 1.5 4 0 6-1.5-2-1.5-4 0-6zM12 14c1.5 2 1.5 4 0 6-1.5-2-1.5-4 0-6zM4 12c2-1.5 4-1.5 6 0-2 1.5-4 1.5-6 0zM14 12c2-1.5 4-1.5 6 0-2 1.5-4 1.5-6 0zM7 7c2 0 3.5 1 4 3-2 .5-3.5-.5-4-3zM13 14c2 .5 3.5-.5 4-3-2 0-3.5 1-4 3zM17 7c-2 0-3.5 1-4 3 2 .5 3.5-.5 4-3zM7 17c2 0 3.5-1 4-3-2-.5-3.5.5-4 3z" ${s}/>` },
  { name: 'mushroom', label: 'Mushroom', body: `<path d="M6 11c0-4 2.5-7 6-7s6 3 6 7H6z" ${s}/><path d="M10 11v6a2 2 0 0 0 4 0v-6" ${s}/><circle cx="9" cy="8" r=".8" ${f}/><circle cx="14" cy="7.5" r=".8" ${f}/>` },
  { name: 'tree', label: 'Tree', body: `<path d="M12 21v-6M8 10c0-3 1.8-5 4-5s4 2 4 5c2 0 3 1.5 3 3.2S18 16 16 16H8c-2 0-3-1.2-3-2.8S6 10 8 10z" ${s}/>` },
  { name: 'rainbow', label: 'Rainbow', body: `<path d="M4 16a8 8 0 0 1 16 0M6.5 16a5.5 5.5 0 0 1 11 0M9 16a3 3 0 0 1 6 0" ${s}/>` },
  { name: 'candy', label: 'Candy', body: `<path d="M9 10c-2-2-4-2-5-1 1 1 1 3-1 5 2-1 4-1 5-3zM15 14c2 2 4 2 5 1-1-1-1-3 1-5-2 1-4 1-5 3z" ${s}/><ellipse cx="12" cy="12" rx="4" ry="3" transform="rotate(-35 12 12)" ${s}/>` },
  { name: 'cake', label: 'Cake', body: `<path d="M4 13h16v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6zM4 13c0-2 2-3 4-3s3 1.5 4 1.5S14 10 16 10s4 1 4 3M9 7l.5-2M12 7l.5-2M15 7l.5-2" ${s}/>` },
  { name: 'cookie', label: 'Cookie', body: `<circle cx="12" cy="12" r="8" ${s}/><circle cx="9" cy="10" r="1" ${f}/><circle cx="14" cy="9" r="1" ${f}/><circle cx="11" cy="14" r="1" ${f}/><circle cx="15" cy="14" r="1" ${f}/>` },
  { name: 'balloon', label: 'Balloon', body: `<path d="M12 3c3 0 5.5 2.8 5.5 6.2S14.5 16 12 16 6.5 12.6 6.5 9.2 9 3 12 3zM12 16c0 2-.5 3.5-1.5 5M12 16c0 1 .3 2 0 3" ${s}/>` },
  { name: 'paw', label: 'Paw', body: `<circle cx="8" cy="8" r="2" ${f}/><circle cx="16" cy="8" r="2" ${f}/><circle cx="6.5" cy="12.5" r="1.8" ${f}/><circle cx="17.5" cy="12.5" r="1.8" ${f}/><ellipse cx="12" cy="16" rx="4" ry="3.2" ${f}/>` },
  { name: 'bird', label: 'Bird', body: `<path d="M4 14c3-1 5-4 6-7 2 2 5 3 8 3-1 3-4 6-8 7-1 1-2 2-3 3 0 0-1-1 0-2z" ${s}/><circle cx="15" cy="9" r=".8" ${f}/>` },
  { name: 'bee', label: 'Bee', body: `<path d="M8 10c0-2 1.8-4 4-4s4 2 4 4v3c0 2-1.8 4-4 4s-4-2-4-4v-3zM7 11H4M17 11h3M9 8L7 5M15 8l2-3" ${s}/><path d="M8 12h8M8 14h8" ${s}/>` },
  { name: 'butterfly', label: 'Butterfly', body: `<path d="M12 8v10M8 10c-3-1-4-4-3-6 3 0 5 2 5 4M16 10c3-1 4-4 3-6-3 0-5 2-5 4M8 14c-3 1-4 4-2 6 2-.5 4-2.5 4-4.5M16 14c3 1 4 4 2 6-2-.5-4-2.5-4-4.5" ${s}/>` },
  { name: 'shell', label: 'Shell', body: `<path d="M12 19c-5 0-8-3-8-7 0-5 3.5-9 8-9s8 4 8 9c0 4-3 7-8 7z" ${s}/><path d="M12 5v14M7 8c2 2 3 5 3 8M17 8c-2 2-3 5-3 8" ${s}/>` },
  { name: 'acorn', label: 'Acorn', body: `<path d="M8 9h8c0 2-1 3-4 3s-4-1-4-3zM9 12c0 4 1.5 7 3 8 1.5-1 3-4 3-8" ${s}/><path d="M12 5v4M10 6c1 .5 2 .5 4 0" ${s}/>` },
  { name: 'carrot', label: 'Carrot', body: `<path d="M10 5c1 2 1 3 0 4M14 5c-1 2-1 3 0 4M12 8c3 3 6 8 4 11-3 1-7-2-9-6 2-3 4-5 5-5z" ${s}/>` },
  { name: 'apple', label: 'Apple', body: `<path d="M12 7c2-3 5-3 5-1-2 1-3 2-3 3M9 9c-2.5 1-4 3.5-4 6.5C5 19 8 22 12 22s7-3 7-6.5c0-3.5-2-5.5-4-6.5-1-.4-2-.5-3 0-1-.5-2-.4-3 0z" ${s}/>` },
  { name: 'milk', label: 'Milk', body: `<path d="M8 6h8l1 3v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9l1-3zM8 9h8" ${s}/>` },
  { name: 'tea', label: 'Tea', body: `<path d="M6 9h10v6a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V9zM16 11h2a2 2 0 0 1 0 4h-2M8 5c1 1 2 1 3 0M12 5c1 1 2 1 3 0" ${s}/>` },
]

function toPascal(name) {
  return name
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('')
}

function svgFile(body) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" aria-hidden="true">\n  ${body}\n</svg>\n`
}

mkdirSync(svgDir, { recursive: true })

// remove old svgs not in catalog
const keep = new Set(icons.map((i) => `${i.name}.svg`))
for (const file of readdirSync(svgDir)) {
  if (file.endsWith('.svg') && !keep.has(file)) unlinkSync(join(svgDir, file))
}

for (const icon of icons) {
  writeFileSync(join(svgDir, `${icon.name}.svg`), svgFile(icon.body), 'utf8')
}

const names = icons.map((i) => i.name)
const nameUnion = names.map((n) => `  | '${n}'`).join('\n')

const markupEntries = icons
  .map((i) => `  '${i.name}': ${JSON.stringify(i.body)},`)
  .join('\n')

const listEntries = icons
  .map((i) => `  { name: '${i.name}', label: '${i.label}' },`)
  .join('\n')

const urlEntries = names.map((n) => `  '${n}': new URL('./svg/${n}.svg', import.meta.url).href,`).join('\n')

const componentExports = icons
  .map((i) => `export const ${toPascal(i.name)} = icons['${i.name}']`)
  .join('\n')

const index = `import type { CSSProperties, ReactElement, SVGProps } from 'react'
import { createElement } from 'react'

export type IconName =
${nameUnion}

export type IconComponentProps = SVGProps<SVGSVGElement> & {
  size?: number | string
  color?: string
}

export type IconProps = IconComponentProps

const ICON_MARKUP: Record<IconName, string> = {
${markupEntries}
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
  SvgIcon.displayName = \`MochiIcon\${displayName}\`
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

${componentExports}

/** Icon catalogue for demos and docs */
export const ICON_LIST: { name: IconName; label: string }[] = [
${listEntries}
]

/** SVG asset URLs */
export const iconUrls = {
${urlEntries}
} as const satisfies Record<IconName, string>
`

writeFileSync(indexPath, index, 'utf8')
console.log(`[generate-icons] wrote ${icons.length} icons → packages/icons/src`)
