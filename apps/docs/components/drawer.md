# Drawer 抽屉

从边缘滑出的面板。

## 代码演示

<mochi-demos name="Drawer"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| open | 是否打开 | `boolean` | `false` |
| title / extra / footer | 标题区 / 额外 / 页脚 | `ReactNode` | — |
| placement | 方向 | `left \| right \| top \| bottom` | `right` |
| width / height | 尺寸 | `number \| string` | `378` |
| mask / maskClosable / closable | 遮罩与关闭 | `boolean` | `true` |
| destroyOnClose | 关闭销毁 | `boolean` | `false` |
| onClose / afterOpenChange | 回调 | — | — |

```tsx
import { Drawer, Button } from '@mochi-ui/react'

<Drawer open={open} title="详情" footer={<Button type="primary">确定</Button>} onClose={...}>
  内容
</Drawer>
```
