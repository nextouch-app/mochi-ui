# Descriptions 描述列表

成组展示多个只读字段。

## 代码演示

<mochi-demos name="Descriptions"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| title / extra | 标题 / 额外内容 | `ReactNode` | — |
| items | 列表项 | `DescriptionsItemType[]` | `[]` |
| column | 列数 | `number` | `3` |
| layout | 布局 | `'horizontal' \| 'vertical'` | `'horizontal'` |
| bordered | 边框 | `boolean` | `false` |
| size | 尺寸 | `SizeAlias` | — |

```tsx
import { Descriptions } from '@nextouch-app/mochi-react'

<Descriptions
  title="订单"
  items={[
    { key: '1', label: '口味', children: '原味' },
    { key: '2', label: '数量', children: '2' },
  ]}
/>
```
