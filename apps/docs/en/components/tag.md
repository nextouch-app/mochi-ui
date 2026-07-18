# Tag

Pill tags: solid / outlined / dashed.


## Examples

<mochi-demos name="Tag"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| variant | Variant | `solid \| outlined \| dashed` | `solid` |
| color | Color | `TagColor` | `primary` |
| size | Size | `sm \| md \| lg` | `md` |
| closable | Closable | `boolean` | `false` |
| icon | Prefix icon | `ReactNode` | — |
| bordered | Explicit border | `boolean` | `false` |
| onClose | Close handler | `(e: MouseEvent) => void` | — |

```tsx
<Tag color="pink" variant="solid" closable onClose={() => {}}>
  Pink
</Tag>
```
