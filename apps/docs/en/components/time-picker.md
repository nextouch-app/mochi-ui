# TimePicker

Pick hour / minute / second.

## Examples

<mochi-demos name="TimePicker"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| value / defaultValue | Value | `Date \| null` | — |
| format | Format | `string \| (date) => string` | `HH:mm:ss` |
| showSecond | Show seconds | `boolean` | `true` |
| use12Hours | 12-hour | `boolean` | `false` |
| onChange | Callback | `(date, timeString) => void` | — |

```tsx
import { TimePicker } from '@mochi-ui/react'

<TimePicker showSecond={false} />
```
