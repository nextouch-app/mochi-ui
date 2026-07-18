# Phone 手机框

展示客服电话或信息的卡通手机框。

## 代码演示

<mochi-demos name="Phone"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| number | 号码 / 主文案 | `ReactNode` | — |
| label | 标签 | `ReactNode` | `客服热线` |
| tone | 色调 | `sky \| peach \| mint \| lavender` | `sky` |
| statusBar | 状态栏 | `boolean` | `true` |
| time | 状态栏时间 | `string` | `09:41` |

```tsx
import { Phone } from '@nextouch-app/mochi-react'

<Phone number="400-600-0000" tone="mint" />
```
