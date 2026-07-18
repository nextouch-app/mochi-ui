# Affix 固钉

将元素固定在视口指定位置。

## 代码演示

<mochi-demos name="Affix"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| offsetTop | 距顶部触发固定 | `number` | `0` |
| offsetBottom | 距底部触发固定 | `number` | — |
| target | 滚动容器 | `() => HTMLElement \| Window \| null` | `window` |
| onChange | 固定状态变化 | `(affixed) => void` | — |

```tsx
import { Affix, Button } from '@mochi-ui/react'

<Affix offsetTop={16}>
  <Button type="primary">固定在顶部</Button>
</Affix>
```
