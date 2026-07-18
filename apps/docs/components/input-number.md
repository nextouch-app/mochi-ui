# InputNumber 数字输入框

带步进按钮的数字输入。

## 代码演示

<mochi-demos name="InputNumber"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| value / defaultValue | 值 | `number \| null` | — |
| min / max / step | 范围与步长 | `number` | `step=1` |
| precision | 精度 | `number` | — |
| controls | 显示步进钮 | `boolean` | `true` |
| disabled / size | — | — | — |
| prefix / addonBefore / addonAfter | 前后缀 | `ReactNode` | — |
| onChange / onStep | 回调 | — | — |

```tsx
import { InputNumber } from '@mochi-ui/react'

<InputNumber defaultValue={3} min={0} max={99} />
```
