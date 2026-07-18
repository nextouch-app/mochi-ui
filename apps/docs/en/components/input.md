# Input

Capsule input with a game-yellow focus glow. Supports `Input.Password` and `Input.Search`.


## Examples

<mochi-demos name="Input"></mochi-demos>

## Input API

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

## Input.Password API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| visibilityToggle | Show password visibility toggle | `boolean` | `true` |

Inherits `Input` props except `type`.

## Input.Search API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| enterButton | Search button; `true` for addon button, `ReactNode` for custom | `boolean \| ReactNode` | `false` |
| loading | Search button loading | `boolean` | `false` |
| onSearch | Fired on search click or Enter | `(value, e?) => void` | — |

Inherits `Input` props.

## Example

```tsx
import { Input, Icon } from '@nextouch-app/mochi-react'

<Input
  placeholder="Type here"
  prefix={<Icon name="cloud" />}
  allowClear
  showCount
  maxLength={20}
  status="error"
/>

<Input.Password placeholder="Password" />
<Input.Search placeholder="Search" onSearch={(v) => console.log(v)} enterButton />
```
