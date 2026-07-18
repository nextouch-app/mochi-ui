# InputNumber

Numeric input with step controls.

## Examples

<mochi-demos name="InputNumber"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| value / defaultValue | Value | `number \| null` | — |
| min / max / step | Range & step | `number` | `step=1` |
| precision | Precision | `number` | — |
| controls | Show handlers | `boolean` | `true` |
| onChange / onStep | Callbacks | — | — |

```tsx
import { InputNumber } from '@mochi-ui/react'

<InputNumber defaultValue={3} min={0} max={99} />
```
