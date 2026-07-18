# Modal

Cloud-blob dialog with mask, Esc to close, and confirm loading. API aligns with common Ant Design props.

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| open | Open state | `boolean` | `false` |
| title | Title | `ReactNode` | — |
| onClose / onCancel | Close handlers | `() => void` | — |
| onOk | OK handler | `() => void` | — |
| okText / cancelText | Button labels | `string` | `确定` / `取消` |
| confirmLoading | OK button loading | `boolean` | `false` |
| okButtonProps / cancelButtonProps | Button props | `Partial<ButtonProps>` | — |
| footer | Footer; `null` hides | `ReactNode \| null` | — |
| maskClosable | Close on mask click | `boolean` | `true` |
| closable | Show close button | `boolean` | `true` |
| mask | Show mask | `boolean` | `true` |
| width | Width | `number \| string` | — |
| centered | Vertically centered | `boolean` | `true` |
| keyboard | Esc to close | `boolean` | `true` |
| destroyOnClose | Destroy on close | `boolean` | `true` |
| afterClose | After close | `() => void` | — |
| zIndex | z-index | `number` | — |

## Web

```tsx
import { Modal, Button } from '@mochi-ui/react'

const [open, setOpen] = useState(false)

<>
  <Button type="primary" onClick={() => setOpen(true)}>Open</Button>
  <Modal open={open} title="Confirm?" onClose={() => setOpen(false)} onOk={() => setOpen(false)}>
    Content
  </Modal>
</>
```

## Mobile

```tsx
import { Modal } from '@mochi-ui/mobile'
;<Modal open title="Notice" onClose={() => {}}>Content</Modal>
```
