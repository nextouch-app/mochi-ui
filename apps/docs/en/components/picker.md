# Picker 选择器

底部弹出多列选择，适合移动端。


## Examples

<mochi-demos name="Picker"></mochi-demos>

```tsx
import { Picker, Button } from '@mochi-ui/react'

const [open, setOpen] = useState(false)

<>
  <Button onClick={() => setOpen(true)}>选择</Button>
  <Picker
    open={open}
    columns={[[{ label: '原味', value: 'a' }, { label: '抹茶', value: 'b' }]]}
    onClose={() => setOpen(false)}
    onConfirm={(v) => { console.log(v); setOpen(false) }}
  />
</>
```
