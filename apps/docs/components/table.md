# Table 表格

圆角羊皮纸表格，支持排序、筛选与分页。


## 代码演示

<mochi-demos name="Table"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| columns | 列配置 | `TableColumn[]` | `[]` |
| dataSource | 数据 | `T[]` | `[]` |
| rowKey | 行 key | `string \| (record, index) => string` | `key` |
| loading | 加载中 | `boolean` | `false` |
| bordered | 边框 | `boolean` | `true` |
| size | 尺寸 | `SizeAlias` | `md` |
| rowSelection | 行选择 | `{ selectedRowKeys?, type?, onChange?, getCheckboxProps? }` | — |
| pagination | 分页 | `false \| PaginationProps` | — |
| scroll | 滚动 | `{ x?, y? }` | — |
| onRow | 行属性 | `(record, index) => { onClick?, className? }` | — |

### TableColumn

| 属性 | 说明 | 类型 |
|------|------|------|
| key / title / dataIndex | 列标识与标题 | — |
| width / align / render | 宽度、对齐、自定义渲染 | — |
| sorter | 排序 | `boolean \| (a, b) => number` |
| fixed | 固定列 | `left \| right` |
| ellipsis | 省略 | `boolean` |
| filters | 筛选项 | `{ text, value }[]` |
| onFilter | 筛选函数 | `(value, record) => boolean` |
| filteredValue | 受控筛选值 | `Array<string \| number \| boolean> \| null` |

列头带筛选图标；勾选后会在排序与分页前过滤数据。

- **Web**：完整宽表展示
- **Mobile**：横向滚动可用；复杂列表更推荐 `List`

```tsx
import { Table, Tag } from '@mochi-ui/react'

<Table
  rowSelection={{ type: 'checkbox' }}
  pagination={{ total: 20, pageSize: 5 }}
  columns={[
    { key: 'name', title: '名称', dataIndex: 'name', sorter: true },
    {
      key: 'tag',
      title: '标签',
      filters: [{ text: '季节', value: '季节' }, { text: '经典', value: '经典' }],
      onFilter: (value, record) => record.tag === value,
      render: (_, r) => <Tag>{String(r.tag)}</Tag>,
    },
  ]}
  dataSource={[{ key: '1', name: '抹茶', tag: '季节' }]}
/>
```
