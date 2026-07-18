# Message

Lightweight top toast for action feedback.


## Examples

<mochi-demos name="Message"></mochi-demos>

## API

### Message.open / info / success / warning / error / loading

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| content | Content | `ReactNode` | — |
| type | Type | `info \| success \| warning \| error \| loading` | `info` |
| duration | Duration (ms, 0 = no auto close) | `number` | `2400` |
| key | Unique key; same key updates existing | `string \| number` | — |
| icon | Custom icon | `ReactNode` | — |
| onClose | Close callback | `() => void` | — |

Returns: `() => void` close function.

### Message.config

| Prop | Description | Type |
|------|-------------|------|
| maxCount | Max visible count | `number` |
| duration | Default duration | `number` |
| top | Offset from top | `number` |

### Message.destroy / destroyAll

- `Message.destroy(key?)` — destroy by key
- `Message.destroyAll()` — destroy all

```tsx
import { Message, Button } from '@mochi-ui/react'

<Button onClick={() => Message.success('Saved')}>Toast</Button>
<Button onClick={() => Message.destroy('save')}>Close</Button>
```
