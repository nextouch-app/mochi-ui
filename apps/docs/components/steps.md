# Steps 步骤条

引导用户完成分步流程。

## 代码演示

<mochi-demos name="Steps"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| items | 步骤 | `StepItem[]` | `[]` |
| current | 当前步骤索引 | `number` | `0` |
| status | 当前步骤状态 | `wait \| process \| finish \| error` | `process` |
| direction | 方向 | `horizontal \| vertical` | `horizontal` |
| size | 尺寸 | `SizeAlias` | `md` |
| onChange | 切换步骤 | `(current) => void` | — |

```tsx
import { Steps } from '@nextouch-app/mochi-react'

<Steps
  current={1}
  items={[
    { title: '填写', description: '基础信息' },
    { title: '确认', description: '核对内容' },
    { title: '完成' },
  ]}
/>
```
