# Notification

Corner notification cards.


## Examples

<mochi-demos name="Notification"></mochi-demos>

## API

### Notification.open / success / info / warning / error

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| title / description | Title / description | `ReactNode` | — |
| type | Type | `info \| success \| warning \| error` | `info` |
| duration | Duration | `number` | `3600` |
| placement | Placement | `topRight \| topLeft \| bottomRight \| bottomLeft` | `topRight` |
| key | Unique key | `string \| number` | — |
| icon | Icon | `ReactNode` | — |
| btn | Action area | `ReactNode` | — |
| onClose | Close callback | `() => void` | — |

Returns: `() => void` close function.

### Notification.config

| Prop | Description | Type |
|------|-------------|------|
| maxCount | Max visible count | `number` |
| duration | Default duration | `number` |
| placement | Default placement | same as above |

### Notification.destroy / destroyAll

- `Notification.destroy(key?)` — destroy by key
- `Notification.destroyAll()` — destroy all

```tsx
import { Notification, Button } from '@mochi-ui/react'

<Button
  onClick={() =>
    Notification.open({ title: 'Notice', description: 'Stock updated', type: 'info' })
  }
>
  Notify
</Button>
```
