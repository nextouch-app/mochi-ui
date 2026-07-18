# Table

Rounded parchment-style table with sorting, column filters, and pagination.


## Examples

<mochi-demos name="Table"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| columns | Column config | `TableColumn[]` | `[]` |
| dataSource | Data rows | `T[]` | `[]` |
| rowKey | Row key | `string \| (record, index) => string` | `key` |
| loading | Loading state | `boolean` | `false` |
| bordered | Border | `boolean` | `true` |
| size | Size | `SizeAlias` | `md` |
| rowSelection | Row selection | `{ selectedRowKeys?, type?, onChange?, getCheckboxProps? }` | — |
| pagination | Pagination | `false \| PaginationProps` | — |
| scroll | Scroll | `{ x?, y? }` | — |
| onRow | Row props | `(record, index) => { onClick?, className? }` | — |

### TableColumn

| Prop | Description | Type |
|------|-------------|------|
| key / title / dataIndex | Column identity | — |
| width / align / render | Width, align, custom cell | — |
| sorter | Sorting | `boolean \| (a, b) => number` |
| fixed | Fixed column | `left \| right` |
| ellipsis | Ellipsis | `boolean` |
| filters | Filter options | `{ text, value }[]` |
| onFilter | Filter predicate | `(value, record) => boolean` |
| filteredValue | Controlled filter values | `Array<string \| number \| boolean> \| null` |

Filter icon appears when `filters` is set. Selected values filter data before sort/pagination.

```tsx
import { Table, Tag } from '@nextouch-app/mochi-react'

<Table
  columns={[
    {
      key: 'tag',
      title: 'Tag',
      filters: [{ text: 'Seasonal', value: 'season' }],
      onFilter: (value, record) => record.tag === value,
      render: (_, r) => <Tag>{String(r.tag)}</Tag>,
    },
  ]}
  dataSource={[{ key: '1', tag: 'season' }]}
/>
```
