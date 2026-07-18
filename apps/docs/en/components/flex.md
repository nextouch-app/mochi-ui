# Flex

Lightweight flexbox layout container.

## Examples

<mochi-demos name="Flex"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| vertical | Column direction | `boolean` | `false` |
| wrap | Wrap | `boolean \| 'wrap' \| 'nowrap' \| 'wrap-reverse'` | `false` |
| justify / align | Alignment | CSS values | — |
| gap | Gap | `SizeType \| number \| [number, number]` | — |
| flex | Flex value | CSS flex | — |
| component | Root tag | `keyof HTMLElementTagNameMap` | `'div'` |

```tsx
import { Flex, Button } from '@mochi-ui/react'

<Flex gap="md" justify="space-between">
  <Button>Left</Button>
  <Button type="primary">Right</Button>
</Flex>
```
