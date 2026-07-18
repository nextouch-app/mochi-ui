# Icon 图标

`@nextouch-app/mochi-icons` 提供 **150** 个原创 SVG（线稿圆角风格）。命名与 Ant Design Icons 常用集合对齐，并补充云朵、小动物等岛风图标；路径均为原创，不复制第三方资源。

## 代码演示

<mochi-demos name="Icon"></mochi-demos>

## 用法

```tsx
import { Icon } from '@nextouch-app/mochi-react'
import { ICON_LIST, Search, Heart } from '@nextouch-app/mochi-icons'

<Icon name="search" size={24} bounce />
<Search size={24} color="#6cb4ee" />
```

## API

### Icon（@nextouch-app/mochi-react）

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| name | 图标名 | `IconName` | — |
| size | 尺寸 | `number \| string` | `24` |
| color | 颜色 | `string` | `currentColor` |
| bounce | 悬停弹跳（Web） | `boolean` | `false` |

### 目录

- `ICON_LIST`：全部 `{ name, label }`
- `icons`：`Record<IconName, Component>`
- `iconUrls`：SVG 资源 URL
- 具名导出：`Search`、`Home`、`Cloud`…

本地扩展：编辑 `scripts/generate-icons.mjs` 后执行 `pnpm icons:generate`。
