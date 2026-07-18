# Statistic

Display statistic numbers with prefix, suffix, and precision.

## Examples

<mochi-demos name="Statistic"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| title | Title | `ReactNode` | — |
| value | Value | `string \| number` | — |
| precision | Decimal places | `number` | — |
| prefix / suffix | Affixes | `ReactNode` | — |
| loading | Loading state | `boolean` | `false` |
| valueStyle | Value style | `CSSProperties` | — |

```tsx
import { Statistic } from '@mochi-ui/react'

<Statistic title="Sales" value={1128} suffix="cups" />
```
