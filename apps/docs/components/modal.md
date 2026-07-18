# Modal 对话框

云朵形对话框：遮罩、Esc 关闭、确认 loading，以及命令式调用。


## 代码演示

<mochi-demos name="Modal"></mochi-demos>

## Modal API

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
| destroyOnClose | 关闭后销毁子节点；为 `false` 时保留 DOM 并隐藏 | `boolean` | `false` |
| afterClose | 完全关闭后回调 | `() => void` | — |
| zIndex | 层级 | `number` | — |
| getContainer | 挂载容器 | `HTMLElement \| false \| () => HTMLElement` | `document.body` |

## 静态方法

| 方法 | 说明 | 返回值 |
|------|------|--------|
| Modal.confirm | 确认对话框 | `{ destroy, update }` |
| Modal.info | 信息提示 | `{ destroy, update }` |
| Modal.success | 成功提示 | `{ destroy, update }` |
| Modal.error | 错误提示 | `{ destroy, update }` |
| Modal.warning | 警告提示 | `{ destroy, update }` |
| Modal.destroyAll | 销毁全部命令式对话框 | — |

## ModalFuncProps

| 属性 | 说明 | 类型 |
|------|------|------|
| title | 标题 | `ReactNode` |
| content | 内容 | `ReactNode` |
| okText / cancelText | 按钮文案 | `string` |
| onOk / onCancel | 回调 | `() => void \| Promise<void>` |
| okButtonProps / cancelButtonProps | 按钮透传 | `Partial<ButtonProps>` |
| width | 宽度 | `number \| string` |
| centered | 垂直居中 | `boolean` |
| type | 对话框类型 | `info \| success \| error \| warning \| confirm` |
| icon | 自定义图标 | `ReactNode` |

## Web

```tsx
import { Modal, Button } from '@mochi-ui/react'

const [open, setOpen] = useState(false)

<>
  <Button type="primary" onClick={() => setOpen(true)}>打开</Button>
  <Modal open={open} title="确认？" onClose={() => setOpen(false)} onOk={() => setOpen(false)}>
    内容
  </Modal>
  <Button onClick={() => Modal.confirm({ title: '删除', content: '确定删除？', onOk: () => {} })}>
    命令式确认
  </Button>
</>
```

## Mobile

```tsx
import { Modal } from '@mochi-ui/mobile'
;<Modal open title="提示" onClose={() => {}}>内容</Modal>
```
