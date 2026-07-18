# Segmented 分段控制器

用于在少数选项间切换。

## 代码演示

<mochi-demos name="Segmented"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| options | 选项 | `(string \| number \| SegmentedOption)[]` | `[]` |
| value / defaultValue | 受控 / 默认值 | `string \| number` | — |
| disabled | 禁用 | `boolean` | `false` |
| size | 尺寸 | `SizeAlias` | — |
| block | 撑满宽度 | `boolean` | `false` |
| onChange | 变化回调 | `(value) => void` | — |

```tsx
import { Segmented } from '@nextouch-app/mochi-react'

<Segmented options={['日', '周', '月']} defaultValue="日" />
```
