# Menu

Navigation menu for sider or header.

## Examples

<mochi-demos name="Menu"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| mode | Mode | `vertical \| horizontal \| inline` | `vertical` |
| items | Items | `MenuItemType[]` | `[]` |
| selectedKeys / defaultSelectedKeys | Selected | `string[]` | — |
| openKeys / defaultOpenKeys | Open keys | `string[]` | — |
| onClick / onSelect / onOpenChange | Callbacks | — | — |

```tsx
import { Menu } from '@nextouch-app/mochi-react'

<Menu defaultSelectedKeys={['home']} items={[{ key: 'home', label: 'Home' }]} />
```
