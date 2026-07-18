# Notification 通知提醒框

角落通知卡片。

```tsx
import { Notification, Button } from '@mochi-ui/react'

<Button
  onClick={() =>
    Notification.open({ title: '提醒', description: '库存已更新', type: 'info' })
  }
>
  通知
</Button>
```
