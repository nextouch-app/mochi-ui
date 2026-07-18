# ColorPicker 颜色选择器

选择颜色，支持预设色板。

## 代码演示

<mochi-demos name="ColorPicker"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| value / defaultValue | 受控 / 默认色 | `string` | `#6cb4ee` |
| showText | 显示色值文本 | `boolean` | `false` |
| disabled | 禁用 | `boolean` | `false` |
| size | 尺寸 | `SizeAlias` | — |
| presets | 预设组 | `{ label, colors: string[] }[]` | — |
| onChange / onChangeComplete | 回调 | `(color) => void` | — |

```tsx
import { ColorPicker } from '@mochi-ui/react'

<ColorPicker defaultValue="#6cb4ee" showText />
```
