# Descriptions

Display a group of read-only fields.

## Examples

<mochi-demos name="Descriptions"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| title / extra | Header | `ReactNode` | — |
| items | Items | `DescriptionsItemType[]` | `[]` |
| column | Columns | `number` | `3` |
| layout | Layout | `'horizontal' \| 'vertical'` | `'horizontal'` |
| bordered | Bordered | `boolean` | `false` |
| size | Size | `SizeAlias` | — |

```tsx
import { Descriptions } from '@nextouch-app/mochi-react'

<Descriptions
  title="Order"
  items={[
    { key: '1', label: 'Flavor', children: 'Original' },
    { key: '2', label: 'Qty', children: '2' },
  ]}
/>
```
