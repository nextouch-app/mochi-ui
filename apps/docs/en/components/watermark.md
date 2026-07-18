# Watermark

Add a text watermark over content.

## Examples

<mochi-demos name="Watermark"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| content | Watermark text | `string \| string[]` | — |
| width / height | Cell size | `number` | `120` / `64` |
| rotate | Rotation | `number` | `-22` |
| gap | Gap | `[number, number]` | `[100, 100]` |
| font | Font style | object | — |
| zIndex | Z-index | `number` | `9` |

```tsx
import { Watermark } from '@nextouch-app/mochi-react'

<Watermark content="Mochi UI">
  <div style={{ height: 160 }}>Content</div>
</Watermark>
```
