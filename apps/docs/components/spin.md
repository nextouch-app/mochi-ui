# Spin 加载中

包裹内容或全屏展示加载态。

## 代码演示

<mochi-demos name="Spin"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| spinning | 是否加载 | `boolean` | `true` |
| size | 尺寸 | `sm \| md \| lg` | `md` |
| tip | 提示 | `ReactNode` | — |
| delay | 延迟显示 | `number` | `0` |
| fullscreen | 全屏 | `boolean` | `false` |

```tsx
import { Spin } from '@nextouch-app/mochi-react'

<Spin spinning tip="加载中">
  <div>内容</div>
</Spin>
```
