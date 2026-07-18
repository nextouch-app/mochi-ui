# Card

Sticker-like organic card with optional cloud decorations.

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| variant | Sticker color | `default \| dashed \| pink \| mint \| lavender \| peach` | `default` |
| type | AntD-compatible | `default \| inner` | `default` |
| size | Size | `sm \| md \| lg \| small \| middle \| large` | `md` |
| title / extra | Header | `ReactNode` | — |
| cover | Cover | `ReactNode` | — |
| actions | Footer actions | `ReactNode[]` | — |
| bordered | Border | `boolean` | `true` |
| hoverable | Lift on hover (Web) | `boolean` | `false` |
| loading | Skeleton loading | `boolean` | `false` |
| decorated | Cloud decorations | `boolean` | `true` |

```tsx
<Card title="Title" hoverable actions={[<a key="a">Action</a>]}>
  Content
</Card>
```
