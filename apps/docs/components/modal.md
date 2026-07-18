# Modal 对话框

云朵形对话框：遮罩、Esc 关闭、确认 loading。

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| open | 是否打开 | `boolean` | `false` |
| title | 标题 | `ReactNode` | — |
| onClose / onCancel | 关闭回调 | `() => void` | — |
| onOk | 确认回调 | `() => void` | — |
| okText / cancelText | 按钮文案 | `string` | `确定` / `取消` |
| confirmLoading | 确认按钮 loading | `boolean` | `false` |
| okButtonProps / cancelButtonProps | 按钮透传 | `Partial<ButtonProps>` | — |
| footer | 底栏；`null` 隐藏 | `ReactNode \| null` | — |
| maskClosable | 点击遮罩关闭 | `boolean` | `true` |
| closable | 显示右上角关闭 | `boolean` | `true` |
| mask | 是否展示遮罩 | `boolean` | `true` |
| width | 宽度 | `number \| string` | — |
| centered | 垂直居中 | `boolean` | `true` |
| keyboard | Esc 关闭 | `boolean` | `true` |
| destroyOnClose | 关闭后销毁 | `boolean` | `true` |
| afterClose | 关闭后回调 | `() => void` | — |
| zIndex | 层级 | `number` | — |

## Web

```tsx
import { Modal, Button } from '@mochi-ui/react'

const [open, setOpen] = useState(false)

<>
  <Button type="primary" onClick={() => setOpen(true)}>打开</Button>
  <Modal open={open} title="确认？" onClose={() => setOpen(false)} onOk={() => setOpen(false)}>
    内容
  </Modal>
</>
```

## Mobile

```tsx
import { Modal } from '@mochi-ui/mobile'
;<Modal open title="提示" onClose={() => {}}>内容</Modal>
```
