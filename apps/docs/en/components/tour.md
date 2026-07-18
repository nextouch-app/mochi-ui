# Tour

Step-by-step spotlight guide.

## Examples

<mochi-demos name="Tour"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| open / defaultOpen | Open | `boolean` | — |
| current / defaultCurrent | Step index | `number` | `0` |
| steps | Steps | `TourStep[]` | `[]` |
| mask | Mask | `boolean` | `true` |
| onClose / onFinish / onChange | Callbacks | — | — |

```tsx
import { Tour } from '@mochi-ui/react'

<Tour open={open} steps={[{ title: 'Start', target: () => el }]} />
```
