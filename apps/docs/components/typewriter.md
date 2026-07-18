# Typewriter 打字机

逐字输出文案，支持多句循环。

## 代码演示

<mochi-demos name="Typewriter"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| text | 文案 | `string \| string[]` | — |
| speed / deleteSpeed | 打字 / 删除速度 | `number` | `60` / `40` |
| loop | 循环 | `boolean` | `false` |
| cursor | 光标 | `boolean \| string` | `true` |
| pause | 句间停顿 | `number` | `1200` |
| onComplete | 完成回调 | `() => void` | — |

```tsx
import { Typewriter } from '@nextouch-app/mochi-react'

<Typewriter text={['软糯圆润', 'Mochi UI']} loop />
```
