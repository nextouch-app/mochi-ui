# Dropdown 下拉菜单

## Web

锚定悬浮菜单，支持 `trigger="click" | "hover"`。

```tsx
import { Dropdown, Button } from '@mochi-ui/react'

<Dropdown items={[{ key: '1', label: '编辑' }, { key: '2', label: '删除', danger: true }]}>
  <Button>更多</Button>
</Dropdown>
```

## Mobile

同一 API，交互为底部操作面板（仅点击，无 hover）。

```tsx
import { Dropdown, Button } from '@mochi-ui/mobile'

<Dropdown items={[{ key: '1', label: '编辑' }, { key: '2', label: '删除', danger: true }]}>
  <Button>更多</Button>
</Dropdown>
```

