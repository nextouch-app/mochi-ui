# Tour 漫游式引导

分步高亮引导用户了解界面。

## 代码演示

<mochi-demos name="Tour"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| open / defaultOpen | 是否打开 | `boolean` | — |
| current / defaultCurrent | 当前步 | `number` | `0` |
| steps | 步骤 | `TourStep[]` | `[]` |
| mask | 遮罩 | `boolean` | `true` |
| onClose / onFinish / onChange | 回调 | — | — |

`TourStep.target` 返回要高亮的 DOM 节点。

```tsx
import { Tour, Button } from '@mochi-ui/react'

<Tour
  open={open}
  steps={[{ title: '开始', description: '这是第一步', target: () => ref.current }]}
/>
```
