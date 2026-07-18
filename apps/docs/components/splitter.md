# Splitter 分隔面板

可拖拽调整的多栏布局。

## 代码演示

<mochi-demos name="Splitter"></mochi-demos>

## API

### Splitter

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| layout | 方向 | `horizontal \| vertical` | `horizontal` |
| onResize / onResizeEnd | 回调 | `(sizes: number[]) => void` | — |

### Splitter.Panel

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| defaultSize / size | 尺寸 | `number \| string` | — |
| min / max | 范围 | `number \| string` | — |
| resizable | 可拖拽 | `boolean` | `true` |

```tsx
import { Splitter } from '@mochi-ui/react'

<Splitter>
  <Splitter.Panel defaultSize={200}>左</Splitter.Panel>
  <Splitter.Panel>右</Splitter.Panel>
</Splitter>
```
