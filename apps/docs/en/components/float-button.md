# FloatButton

Page-level floating action button with optional group.

## Examples

<mochi-demos name="FloatButton"></mochi-demos>

## API

### FloatButton

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| icon | Icon | `ReactNode` | — |
| description | Description | `ReactNode` | — |
| type | Type | `'default' \| 'primary'` | `'default'` |
| shape | Shape | `'circle' \| 'square'` | `'circle'` |
| href / target | Link | `string` | — |
| tooltip | Tooltip | `ReactNode` | — |
| onClick | Click handler | `(e) => void` | — |

### FloatButton.Group

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| trigger | Trigger | `'click' \| 'hover'` | `'click'` |
| open / defaultOpen | Open state | `boolean` | — |
| onOpenChange | Open change | `(open) => void` | — |

```tsx
import { FloatButton } from '@mochi-ui/react'

<FloatButton type="primary" icon="↑" />
```
