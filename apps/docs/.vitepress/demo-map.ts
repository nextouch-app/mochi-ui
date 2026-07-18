import { showcaseRegistry } from '../../demo-web/src/showcase/registry'
import type { DemoItem } from '../../demo-web/src/showcase/types'

export const demosByName: Record<string, DemoItem[]> = Object.fromEntries(
  showcaseRegistry.map((entry) => [entry.component, entry.demos]),
)
