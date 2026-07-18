# Switch

Soft capsule toggle with block shadow and a bouncy thumb.


## Examples

<mochi-demos name="Switch"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| checked | Controlled checked | `boolean` | — |
| defaultChecked | Default checked | `boolean` | `false` |
| size | Size (`small` / `middle` / `large` also accepted) | `sm \| md \| lg \| small \| middle \| large` | `md` |
| checkedChildren | Content when checked | `ReactNode` | — |
| unCheckedChildren | Content when unchecked | `ReactNode` | — |
| loading | Loading | `boolean` | `false` |
| disabled | Disabled | `boolean` | `false` |
| autoFocus | Autofocus | `boolean` | `false` |
| onChange | Change handler | `(checked, e?) => void` | — |
| onClick | Click handler | `(checked, e?) => void` | — |

## Web

```tsx
import { Switch } from '@mochi-ui/react'

<Switch defaultChecked checkedChildren="ON" unCheckedChildren="OFF" />
<Switch loading size="large" />
```

## Mobile

```tsx
import { Switch } from '@mochi-ui/mobile'
;<Switch defaultChecked />
```
