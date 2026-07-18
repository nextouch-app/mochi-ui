# Button

Capsule game button with a solid 3D block shadow, press sink, and striped loading. API aligns with common Ant Design props.

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| type | Variant | `primary \| default \| dashed \| text \| link` | `default` |
| size | Size (AntD aliases accepted) | `sm \| md \| lg \| small \| middle \| large` | `md` |
| shape | Shape | `default \| circle \| round` | `default` |
| danger | Danger style | `boolean` | `false` |
| ghost | Ghost / transparent face | `boolean` | `false` |
| icon | Icon | `ReactNode` | — |
| iconPlacement | Icon placement | `start \| end` | `start` |
| loading | Loading state | `boolean \| { delay?: number }` | `false` |
| disabled | Disabled | `boolean` | `false` |
| block | Full width | `boolean` | `false` |
| href | Link URL (renders `<a>`) | `string` | — |
| target | Link target | `string` | — |
| htmlType | Native button type | `button \| submit \| reset` | `button` |
| onClick | Click handler | `(e) => void` | — |

## Web

```tsx
import { Button, Icon } from '@mochi-ui/react'

<Button type="primary" icon={<Icon name="star" />} loading>
  Start
</Button>
<Button danger ghost>Danger ghost</Button>
<Button type="link" href="/docs">Docs</Button>
```

## Mobile

```tsx
import { Button } from '@mochi-ui/mobile'
;<Button type="primary" block>Start</Button>
```
