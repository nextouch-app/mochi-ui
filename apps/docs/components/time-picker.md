# TimePicker 时间选择框

选择时分秒。

## 代码演示

<mochi-demos name="TimePicker"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| value / defaultValue | 值 | `Date \| null` | — |
| format | 展示格式 | `string \| (date) => string` | `HH:mm:ss` |
| showSecond | 显示秒 | `boolean` | `true` |
| use12Hours | 12 小时制 | `boolean` | `false` |
| hourStep / minuteStep / secondStep | 步长 | `number` | `1` |
| allowClear / disabled / size | — | — | — |
| onChange | 回调 | `(date, timeString) => void` | — |

```tsx
import { TimePicker } from '@mochi-ui/react'

<TimePicker showSecond={false} />
```
