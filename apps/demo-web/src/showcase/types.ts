import type { ComponentType } from 'react'

export interface DemoItem {
  title: string
  description: string
  component: ComponentType
}

export interface ShowcaseEntry {
  category: string
  component: string
  demos: DemoItem[]
}
