# ColorPicker

Pick a color with optional presets.

## Examples

<mochi-demos name="ColorPicker"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| value / defaultValue | Color | `string` | `#6cb4ee` |
| showText | Show text | `boolean` | `false` |
| disabled | Disabled | `boolean` | `false` |
| size | Size | `SizeAlias` | — |
| presets | Preset groups | `{ label, colors: string[] }[]` | — |
| onChange / onChangeComplete | Handlers | `(color) => void` | — |

```tsx
import { ColorPicker } from '@nextouch-app/mochi-react'

<ColorPicker defaultValue="#6cb4ee" showText />
```
