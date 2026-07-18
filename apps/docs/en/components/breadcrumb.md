# Breadcrumb 面包屑

显示当前页面在系统层级中的位置。

## Examples

<mochi-demos name="Breadcrumb"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| items | 路径项 | `BreadcrumbItem[]` | `[]` |
| separator | 分隔符 | `ReactNode` | `/` |

### BreadcrumbItem

| 属性 | 说明 | 类型 |
|------|------|------|
| title | 标题 | `ReactNode` |
| href | 链接 | `string` |
| onClick | 点击 | `(e) => void` |

```tsx
import { Breadcrumb } from '@nextouch-app/mochi-react'

<Breadcrumb
  items={[
    { title: '首页', href: '/' },
    { title: '组件', href: '/components' },
    { title: 'Breadcrumb' },
  ]}
/>
```
