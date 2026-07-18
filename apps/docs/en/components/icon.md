# Icon

`@nextouch-app/mochi-icons` ships **150** original SVGs (rounded stroke style). Names align with common Ant Design Icons; cozy extras (cloud, animals, etc.) are included. Paths are original — no third-party asset copies.

## Examples

<mochi-demos name="Icon"></mochi-demos>

```tsx
import { Icon } from '@nextouch-app/mochi-react'
import { Search } from '@nextouch-app/mochi-icons'

<Icon name="search" size={24} bounce />
<Search size={24} />
```

Extend via `scripts/generate-icons.mjs` then `pnpm icons:generate`.
