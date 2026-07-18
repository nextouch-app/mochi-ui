# Select

Capsule trigger with parchment dropdown. API aligns with common Ant Design props.

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| options | Options | `SelectOption[]` | `[]` |
| value / defaultValue | Value | `string \| number` | — |
| placeholder | Placeholder | `string` | `请选择` |
| size | Size | `SizeAlias` | `md` |
| status | Status | `error \| warning \| ''` | — |
| allowClear | Allow clear | `boolean` | `false` |
| showSearch | Searchable | `boolean` | `false` |
| loading | Loading | `boolean` | `false` |
| open / defaultOpen | Dropdown open | `boolean` | — |
| filterOption | Filter | `boolean \| (input, option) => boolean` | `true` |
| notFoundContent | Empty content | `ReactNode` | `暂无数据` |
| listHeight | List height | `number` | `220` |
| onChange | Change handler | `(value, option?) => void` | — |
| onClear / onSearch | Clear / search | — | — |

## Web

```tsx
import { Select } from '@mochi-ui/react'

<Select
  allowClear
  showSearch
  placeholder="Pick a flavor"
  options={[
    { label: 'Plain', value: 'plain' },
    { label: 'Matcha', value: 'matcha' },
  ]}
/>
```
