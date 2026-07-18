# Layout

Page structure: Header / Sider / Content / Footer.

## Examples

<mochi-demos name="Layout"></mochi-demos>

## API

### Layout.Sider

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| width | Width | `number \| string` | `200` |
| collapsed | Collapsed | `boolean` | — |
| collapsedWidth | Collapsed width | `number \| string` | `64` |
| collapsible | Collapsible | `boolean` | `false` |
| onCollapse | Callback | `(collapsed) => void` | — |

```tsx
import { Layout } from '@mochi-ui/react'

<Layout>
  <Layout.Header>Mochi</Layout.Header>
  <Layout.Content>Content</Layout.Content>
</Layout>
```
