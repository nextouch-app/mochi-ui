# Spin

Loading indicator with optional content wrap / fullscreen.

## Examples

<mochi-demos name="Spin"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| spinning | Spinning | `boolean` | `true` |
| size | Size | `sm \| md \| lg` | `md` |
| tip | Tip | `ReactNode` | — |
| delay | Delay ms | `number` | `0` |
| fullscreen | Fullscreen | `boolean` | `false` |

```tsx
import { Spin } from '@mochi-ui/react'

<Spin spinning tip="Loading…"><div>Content</div></Spin>
```
