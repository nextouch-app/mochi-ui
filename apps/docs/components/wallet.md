# Wallet 钱包卡

余额展示卡片。

## 代码演示

<mochi-demos name="Wallet"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| title | 标题 | `ReactNode` | `我的钱包` |
| balance | 余额 | `ReactNode` | — |
| currency | 货币符号 | `ReactNode` | `¥` |
| subtitle | 副标题 | `ReactNode` | `可用余额` |
| tone | 色调 | `sky \| peach \| mint \| gold` | `sky` |
| actions | 操作区 | `ReactNode` | — |

```tsx
import { Wallet, Button } from '@nextouch-app/mochi-react'

<Wallet balance="88.00" actions={<Button size="sm">充值</Button>} />
```
