# Progress

Line / circle progress.

## Examples

<mochi-demos name="Progress"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| percent | Percent | `number` | `0` |
| type | Type | `line \| circle \| dashboard` | `line` |
| status | Status | `normal \| success \| exception \| active \| error` | `normal` |
| strokeColor / trailColor | Colors | `string` | — |

```tsx
import { Progress } from '@nextouch-app/mochi-react'

<Progress type="circle" percent={75} />
```
