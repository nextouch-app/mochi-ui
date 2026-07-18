# Design Tokens

CSS variable prefix: `--mochi-*`

| Token | Default | Description |
|-------|---------|-------------|
| `--mochi-color-primary` | `#6CB4EE` | Sky-blue primary |
| `--mochi-color-bg` | `#FFF8F0` | Cream paper background |
| `--mochi-color-text` | `#5C4A3A` | Warm brown text |
| `--mochi-radius-pill` | `999px` | Pill radius |
| `--mochi-shadow-md` | `0 4px 0 #E8D5C4` | 3D block shadow |

Full list: `packages/tokens/src/tokens.css` and root `DESIGN.md`.

Override via `ConfigProvider` `theme`:

```tsx
<ConfigProvider theme={{ 'color-primary': '#F8B4C4' }}>
  ...
</ConfigProvider>
```
