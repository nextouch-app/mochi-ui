# Menu 导航菜单

侧栏 / 顶栏导航菜单。

## 代码演示

<mochi-demos name="Menu"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| mode | 模式 | `vertical \| horizontal \| inline` | `vertical` |
| items | 菜单项 | `MenuItemType[]` | `[]` |
| selectedKeys / defaultSelectedKeys | 选中 | `string[]` | — |
| openKeys / defaultOpenKeys | 展开 | `string[]` | — |
| onClick / onSelect / onOpenChange | 回调 | — | — |

```tsx
import { Menu } from '@nextouch-app/mochi-react'

<Menu
  defaultSelectedKeys={['home']}
  items={[
    { key: 'home', label: '首页' },
    { key: 'shop', label: '商店', children: [{ key: 'mochi', label: '麻薯' }] },
  ]}
/>
```
