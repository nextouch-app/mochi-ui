# Timeline 时间轴

垂直时间线，展示事件流。

## Examples

<mochi-demos name="Timeline"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| items | 节点 | `TimelineItem[]` | `[]` |
| mode | 布局 | `left \| right \| alternate` | `left` |
| pending | 末尾进行中节点 | `boolean \| ReactNode` | `false` |
| reverse | 倒序 | `boolean` | `false` |

### TimelineItem

| 属性 | 说明 | 类型 |
|------|------|------|
| children / label | 内容 / 标签 | `ReactNode` |
| color | 圆点色 | `primary \| success \| warning \| error \| gray \| string` |
| dot | 自定义圆点 | `ReactNode` |

```tsx
import { Timeline } from '@nextouch-app/mochi-react'

<Timeline
  items={[
    { children: '创建麻薯库', color: 'success' },
    { children: '发布 0.2', color: 'primary' },
    { children: '下一步', color: 'gray' },
  ]}
/>
```
