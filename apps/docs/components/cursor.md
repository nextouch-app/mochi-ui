# Cursor 光标

装饰性光标；可跟随鼠标（Web）。

## 代码演示

<mochi-demos name="Cursor"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| follow | 跟随鼠标 | `boolean` | `false` |
| size | 尺寸 | `sm \| md \| lg` | `md` |
| color | 颜色 | `string` | `#6cb4ee` |
| label | 标签 | `ReactNode` | — |
| hideNative | 隐藏系统光标 | `boolean` | `false` |

```tsx
import { Cursor } from '@mochi-ui/react'

<Cursor label="点击" />
```
