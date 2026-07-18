# Cascader

Multi-level selection with side-by-side columns.


## Examples

<mochi-demos name="Cascader"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| options | Option tree | `CascaderOption[]` | `[]` |
| value / defaultValue | Selected path | `Array<string \| number>` | `[]` |
| placeholder | Placeholder | `string` | `请选择` |
| disabled | Disabled | `boolean` | `false` |
| allowClear | Allow clear | `boolean` | `true` |
| changeOnSelect | Fire onChange before leaf | `boolean` | `false` |
| expandTrigger | Expand children (Web) | `click \| hover` | `click` |
| size / status | Size / status | `SizeAlias` / `InputStatus` | — |
| displayRender | Custom display | `(labels, selectedOptions) => ReactNode` | — |
| onChange | Change handler | `(value, selectedOptions) => void` | — |

### CascaderOption

| Prop | Description | Type |
|------|-------------|------|
| value / label | Value and label | — |
| disabled | Disabled | `boolean` |
| children | Nested options | `CascaderOption[]` |

## Web

Multi-column panel below the trigger.

```tsx
import { Cascader } from '@mochi-ui/react'

<Cascader
  options={[
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [{ value: 'hangzhou', label: 'Hangzhou' }],
    },
  ]}
/>
```

## Mobile

Bottom sheet with horizontally scrollable columns.

```tsx
import { Cascader } from '@mochi-ui/mobile'

<Cascader options={[{ value: 'a', label: 'Option A', children: [{ value: 'a1', label: 'Child' }] }]} />
```
