# Splitter

Resizable multi-pane layout.

## Examples

<mochi-demos name="Splitter"></mochi-demos>

## API

### Splitter

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| layout | Direction | `horizontal \| vertical` | `horizontal` |
| onResize / onResizeEnd | Callbacks | `(sizes: number[]) => void` | — |

### Splitter.Panel

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| defaultSize / size | Size | `number \| string` | — |
| min / max | Bounds | `number \| string` | — |
| resizable | Resizable | `boolean` | `true` |

```tsx
import { Splitter } from '@nextouch-app/mochi-react'

<Splitter>
  <Splitter.Panel defaultSize={200}>Left</Splitter.Panel>
  <Splitter.Panel>Right</Splitter.Panel>
</Splitter>
```
