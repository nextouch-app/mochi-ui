# QRCode 二维码

将链接或文本编码为可扫描二维码。

## 代码演示

<mochi-demos name="QRCode"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| value | 扫码内容 | `string` | — |
| size | 尺寸 | `number` | `160` |
| color / bgColor | 前景 / 背景 | `string` | — |
| errorLevel | 容错 | `L \| M \| Q \| H` | `M` |
| status | 状态 | `active \| expired \| loading \| scanned` | `active` |
| icon / iconSize | 中心图标 | — | — |
| bordered | 边框 | `boolean` | `true` |
| onRefresh | 过期刷新 | `() => void` | — |

```tsx
import { QRCode } from '@mochi-ui/react'

<QRCode value="https://github.com/nextouch-app/mochi-ui" />
```
