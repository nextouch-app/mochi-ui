# Typography

Titles, text, paragraphs, and links.

## Examples

<mochi-demos name="Typography"></mochi-demos>

## API

### Typography.Title

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| level | Heading level | `1 \| 2 \| 3 \| 4 \| 5` | `1` |
| type | Semantic color | `secondary \| success \| warning \| danger` | — |
| ellipsis | Ellipsis | `boolean` | — |

### Typography.Text / Paragraph

Supports `type`, `strong`, `italic`, `underline`, `delete`, `code`, `mark`, `copyable`, `ellipsis`, `disabled`.

### Typography.Link

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| href / target | Link | `string` | — |
| disabled | Disabled | `boolean` | — |

```tsx
import { Typography } from '@mochi-ui/react'

<Typography.Title level={3}>Mochi Menu</Typography.Title>
```
