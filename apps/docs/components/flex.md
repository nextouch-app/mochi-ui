# Flex 弹性布局

基于 flexbox 的轻量布局容器。

## 代码演示

<mochi-demos name="Flex"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| vertical | 纵向 | `boolean` | `false` |
| wrap | 换行 | `boolean \| 'wrap' \| 'nowrap' \| 'wrap-reverse'` | `false` |
| justify | 主轴对齐 | `CSSProperties['justifyContent']` | — |
| align | 交叉轴对齐 | `CSSProperties['alignItems']` | — |
| gap | 间距 | `SizeType \| number \| [number, number]` | — |
| flex | flex 值 | `CSSProperties['flex']` | — |
| component | 根节点标签 | `keyof HTMLElementTagNameMap` | `'div'` |

```tsx
import { Flex, Button } from '@nextouch-app/mochi-react'

<Flex gap="md" justify="space-between">
  <Button>左</Button>
  <Button type="primary">右</Button>
</Flex>
```
