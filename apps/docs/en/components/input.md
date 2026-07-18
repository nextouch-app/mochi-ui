# Input

Capsule input with a game-yellow focus glow. API aligns with common Ant Design props.

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| size | Size | `sm \| md \| lg \| small \| middle \| large` | `md` |
| variant | Appearance | `outlined \| filled \| borderless` | `outlined` |
| status | Status | `error \| warning \| ''` | — |
| prefix / suffix | Affixes | `ReactNode` | — |
| addonBefore / addonAfter | Addons | `ReactNode` | — |
| allowClear | Clear button | `boolean` | `false` |
| showCount | Character count | `boolean` | `false` |
| maxLength | Max length | `number` | — |
| disabled / readOnly | Disabled / read-only | `boolean` | `false` |
| onPressEnter | Enter key handler | `(e) => void` | — |
| onClear | Clear handler | `() => void` | — |

## Example

```tsx
import { Input, Icon } from '@mochi-ui/react'

<Input
  placeholder="Type here"
  prefix={<Icon name="cloud" />}
  allowClear
  showCount
  maxLength={20}
  status="error"
/>
```
