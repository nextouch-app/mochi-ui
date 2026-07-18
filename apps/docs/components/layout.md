# Layout 布局

页面级结构：Header / Sider / Content / Footer。

## 代码演示

<mochi-demos name="Layout"></mochi-demos>

## API

### Layout / Header / Content / Footer

继承 `className` / `style` / `children`。`Layout` 另有 `hasSider`。

### Layout.Sider

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| width | 宽度 | `number \| string` | `200` |
| collapsed | 收起 | `boolean` | — |
| collapsedWidth | 收起宽度 | `number \| string` | `64` |
| collapsible | 可折叠 | `boolean` | `false` |
| onCollapse | 折叠回调 | `(collapsed) => void` | — |

```tsx
import { Layout } from '@mochi-ui/react'

<Layout>
  <Layout.Header>Mochi</Layout.Header>
  <Layout.Content>内容</Layout.Content>
  <Layout.Footer>© Nextouch</Layout.Footer>
</Layout>
```
