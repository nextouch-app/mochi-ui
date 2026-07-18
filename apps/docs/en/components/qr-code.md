# QRCode

Encode a URL or text into a scannable QR code.

## Examples

<mochi-demos name="QRCode"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| value | Content | `string` | — |
| size | Size | `number` | `160` |
| color / bgColor | Colors | `string` | — |
| errorLevel | ECC | `L \| M \| Q \| H` | `M` |
| status | Status | `active \| expired \| loading \| scanned` | `active` |
| onRefresh | Refresh when expired | `() => void` | — |

```tsx
import { QRCode } from '@nextouch-app/mochi-react'

<QRCode value="https://github.com/nextouch-app/mochi-ui" />
```
