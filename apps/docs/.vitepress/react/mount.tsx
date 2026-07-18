import { createElement } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { ComponentDemos } from './ComponentDemos'

const roots = new WeakMap<Element, Root>()

export function mountMochiDemos(el: HTMLElement) {
  const name = el.getAttribute('name')
  if (!name) return

  let root = roots.get(el)
  if (!root) {
    root = createRoot(el)
    roots.set(el, root)
  }

  root.render(createElement(ComponentDemos, { name }))
}

export function unmountMochiDemos(el: HTMLElement) {
  const root = roots.get(el)
  if (!root) return
  root.unmount()
  roots.delete(el)
}
