# Segmented

Toggle among a few options.

## Examples

<mochi-demos name="Segmented"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| options | Options | `(string \| number \| SegmentedOption)[]` | `[]` |
| value / defaultValue | Controlled / default | `string \| number` | — |
| disabled | Disabled | `boolean` | `false` |
| size | Size | `SizeAlias` | — |
| block | Full width | `boolean` | `false` |
| onChange | Change handler | `(value) => void` | — |

```tsx
import { Segmented } from '@nextouch-app/mochi-react'

<Segmented options={['Day', 'Week', 'Month']} defaultValue="Day" />
```
