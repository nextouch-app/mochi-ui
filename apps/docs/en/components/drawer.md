# Drawer

Panel that slides from the edge.

## Examples

<mochi-demos name="Drawer"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| open | Open | `boolean` | `false` |
| title / extra / footer | Header / footer | `ReactNode` | — |
| placement | Placement | `left \| right \| top \| bottom` | `right` |
| width / height | Size | `number \| string` | `378` |
| maskClosable / closable / destroyOnClose | Behavior | `boolean` | — |

```tsx
import { Drawer } from '@mochi-ui/react'

<Drawer open={open} title="Details" onClose={...}>Content</Drawer>
```
