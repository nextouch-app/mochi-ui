# Notification 通知提醒框

角落通知卡片。


## 代码演示

<mochi-demos name="Notification"></mochi-demos>

## API

### Notification.open / success / info / warning / error

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| title / description | 标题 / 描述 | `ReactNode` | — |
| type | 类型 | `info \| success \| warning \| error` | `info` |
| duration | 时长 | `number` | `3600` |
| placement | 位置 | `topRight \| topLeft \| bottomRight \| bottomLeft` | `topRight` |
| key | 唯一 key | `string \| number` | — |
| icon | 图标 | `ReactNode` | — |
| btn | 操作区 | `ReactNode` | — |
| onClose | 关闭回调 | `() => void` | — |

返回值：`() => void` 手动关闭函数。

### Notification.config

| 属性 | 说明 | 类型 |
|------|------|------|
| maxCount | 最大显示数 | `number` |
| duration | 默认时长 | `number` |
| placement | 默认位置 | 同上 |

### Notification.destroy / destroyAll

- `Notification.destroy(key?)` — 按 key 销毁
- `Notification.destroyAll()` — 销毁全部

```tsx
import { Notification, Button } from '@nextouch-app/mochi-react'

<Button
  onClick={() =>
    Notification.open({ title: '提醒', description: '库存已更新', type: 'info' })
  }
>
  通知
</Button>
```
