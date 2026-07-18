# Anchor 锚点

页面内导航，滚动时高亮当前章节。

## 代码演示

<mochi-demos name="Anchor"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| items | 锚点树 | `AnchorLinkItem[]` | `[]` |
| affix | sticky 固定 | `boolean` | `true` |
| offsetTop | 吸顶偏移 | `number` | `0` |
| bounds | 高亮判定边界 | `number` | `8` |
| onClick / onChange | 回调 | — | — |

```tsx
import { Anchor } from '@nextouch-app/mochi-react'

<Anchor
  items={[
    { key: '1', href: '#intro', title: '介绍' },
    { key: '2', href: '#api', title: 'API' },
  ]}
/>
```
