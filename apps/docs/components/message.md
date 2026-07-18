# Message 全局提示

顶部轻提示，适合操作反馈。


## 代码演示

<mochi-demos name="Message"></mochi-demos>

## API

### Message.open / info / success / warning / error / loading

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| content | 内容 | `ReactNode` | — |
| type | 类型 | `info \| success \| warning \| error \| loading` | `info` |
| duration | 时长（ms，0 不自动关闭） | `number` | `2400` |
| key | 唯一 key，相同 key 会更新 | `string \| number` | — |
| icon | 自定义图标 | `ReactNode` | — |
| onClose | 关闭回调 | `() => void` | — |

返回值：`() => void` 手动关闭函数。

### Message.config

| 属性 | 说明 | 类型 |
|------|------|------|
| maxCount | 最大显示数 | `number` |
| duration | 默认时长 | `number` |
| top | 距顶部距离 | `number` |

### Message.destroy / destroyAll

- `Message.destroy(key?)` — 按 key 销毁
- `Message.destroyAll()` — 销毁全部

```tsx
import { Message, Button } from '@nextouch-app/mochi-react'

<Button onClick={() => Message.success('保存成功')}>提示</Button>
<Button onClick={() => Message.destroy('save')}>关闭</Button>
```
