# Input 输入框

胶囊输入框，focus 使用黄色光晕。

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| size | 尺寸 | `sm \| md \| lg \| small \| middle \| large` | `md` |
| variant | 外观 | `outlined \| filled \| borderless` | `outlined` |
| status | 状态 | `error \| warning \| ''` | — |
| prefix / suffix | 前后缀 | `ReactNode` | — |
| addonBefore / addonAfter | 前置/后置标签 | `ReactNode` | — |
| allowClear | 清除按钮 | `boolean` | `false` |
| showCount | 字数统计 | `boolean` | `false` |
| maxLength | 最大长度 | `number` | — |
| disabled / readOnly | 禁用 / 只读 | `boolean` | `false` |
| onPressEnter | 回车回调 | `(e) => void` | — |
| onClear | 清除回调 | `() => void` | — |

## 示例

```tsx
import { Input, Icon } from '@mochi-ui/react'

<Input
  placeholder="请输入"
  prefix={<Icon name="cloud" />}
  allowClear
  showCount
  maxLength={20}
  status="error"
/>
```
