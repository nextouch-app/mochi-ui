# Modal

Cloud-blob dialog with mask, Esc to close, confirm loading, and imperative API.


## Examples

<mochi-demos name="Modal"></mochi-demos>

## Modal API

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
| destroyOnClose | Unmount children when closed; when `false`, keep DOM hidden | `boolean` | `false` |
| afterClose | After fully closed | `() => void` | — |
| zIndex | z-index | `number` | — |
| getContainer | Mount container | `HTMLElement \| false \| () => HTMLElement` | `document.body` |

## Static methods

| Method | Description | Returns |
|--------|-------------|---------|
| Modal.confirm | Confirm dialog | `{ destroy, update }` |
| Modal.info | Info dialog | `{ destroy, update }` |
| Modal.success | Success dialog | `{ destroy, update }` |
| Modal.error | Error dialog | `{ destroy, update }` |
| Modal.warning | Warning dialog | `{ destroy, update }` |
| Modal.destroyAll | Destroy all imperative modals | — |

## ModalFuncProps

| Prop | Description | Type |
|------|-------------|------|
| title | Title | `ReactNode` |
| content | Content | `ReactNode` |
| okText / cancelText | Button labels | `string` |
| onOk / onCancel | Handlers | `() => void \| Promise<void>` |
| okButtonProps / cancelButtonProps | Button props | `Partial<ButtonProps>` |
| width | Width | `number \| string` |
| centered | Vertically centered | `boolean` |
| type | Dialog type | `info \| success \| error \| warning \| confirm` |
| icon | Custom icon | `ReactNode` |

## Web

```tsx
import { Modal, Button } from '@nextouch-app/mochi-react'

const [open, setOpen] = useState(false)

<>
  <Button type="primary" onClick={() => setOpen(true)}>Open</Button>
  <Modal open={open} title="Confirm?" onClose={() => setOpen(false)} onOk={() => setOpen(false)}>
    Content
  </Modal>
  <Button onClick={() => Modal.confirm({ title: 'Delete', content: 'Are you sure?', onOk: () => {} })}>
    Imperative confirm
  </Button>
</>
```

## Mobile

```tsx
import { Modal } from '@nextouch-app/mochi-mobile'
;<Modal open title="Notice" onClose={() => {}}>Content</Modal>
```
