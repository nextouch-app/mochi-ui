# Rate


## Examples

<mochi-demos name="Rate"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| value / defaultValue | Current value | `number` | `0` |
| count | Star count | `number` | `5` |
| allowHalf | Half stars | `boolean` | `false` |
| allowClear | Clear on re-click | `boolean` | `true` |
| disabled | Disabled | `boolean` | `false` |
| character | Custom character | `ReactNode` | `★` |
| tooltips | Hover tooltips | `string[]` | — |
| onChange | Change handler | `(value) => void` | — |
| onHoverChange | Hover change | `(value) => void` | — |

```tsx
import { Rate } from '@nextouch-app/mochi-react'

<Rate defaultValue={3} allowHalf tooltips={['Bad', 'OK', 'Good', 'Great', 'Excellent']} />
```
