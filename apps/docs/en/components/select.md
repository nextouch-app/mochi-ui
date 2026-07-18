# Select

Capsule trigger with parchment dropdown.


## Examples

<mochi-demos name="Select"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| options | Options | `SelectOption[]` | `[]` |
| mode | Mode | `multiple \| tags` | — |
| value / defaultValue | Value | `string \| number \| Array<string \| number>` | — |
| placeholder | Placeholder | `string` | `请选择` |
| size | Size | `SizeAlias` | `md` |
| status | Status | `error \| warning \| ''` | — |
| maxTagCount | Max tags shown | `number \| responsive` | — |
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
  mode="multiple"
  maxTagCount={2}
  allowClear
  showSearch
  placeholder="Pick a flavor"
  options={[
    { label: 'Plain', value: 'plain' },
    { label: 'Matcha', value: 'matcha' },
  ]}
/>
```
