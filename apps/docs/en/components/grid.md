# Grid

24-column grid with `Row` and `Col`.

## Examples

<mochi-demos name="Grid"></mochi-demos>

## API

### Row

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| gutter | Gutter | `number \| [number, number]` | `0` |
| align | Vertical align | `top \| middle \| bottom \| stretch` | `top` |
| justify | Horizontal | `start \| end \| center \| space-*` | `start` |
| wrap | Wrap | `boolean` | `true` |

### Col

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| span | Column span | `number` | `24` |
| offset | Offset | `number` | `0` |

```tsx
import { Row, Col } from '@nextouch-app/mochi-react'

<Row gutter={12}>
  <Col span={12}>A</Col>
  <Col span={12}>B</Col>
</Row>
```
