# Table 表格

圆角羊皮纸表格。

- **Web**：完整宽表展示
- **Mobile**：横向滚动可用；复杂列表更推荐 `List`

```tsx
import { Table, Tag } from '@mochi-ui/react'

<Table
  columns={[
    { key: 'name', title: '名称', dataIndex: 'name' },
    { key: 'tag', title: '标签', render: (_, r) => <Tag>{String(r.tag)}</Tag> },
  ]}
  dataSource={[{ key: '1', name: '抹茶', tag: '季节' }]}
/>
```

