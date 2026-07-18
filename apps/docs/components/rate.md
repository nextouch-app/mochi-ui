# Rate 评分


## 代码演示

<mochi-demos name="Rate"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| value / defaultValue | 当前值 | `number` | `0` |
| count | 星数 | `number` | `5` |
| allowHalf | 半星 | `boolean` | `false` |
| allowClear | 再次点击清零 | `boolean` | `true` |
| disabled | 禁用 | `boolean` | `false` |
| character | 自定义字符 | `ReactNode` | `★` |
| tooltips | 悬停提示 | `string[]` | — |
| onChange | 变化 | `(value) => void` | — |
| onHoverChange | 悬停变化 | `(value) => void` | — |

```tsx
import { Rate } from '@mochi-ui/react'

<Rate defaultValue={3} allowHalf tooltips={['差', '一般', '好', '很好', '极好']} />
```
