# 设计变量

CSS 变量前缀：`--mochi-*`

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--mochi-color-primary` | `#6CB4EE` | 天空蓝主色 |
| `--mochi-color-bg` | `#FFF8F0` | 奶油纸背景 |
| `--mochi-color-text` | `#5C4A3A` | 暖棕文字 |
| `--mochi-radius-pill` | `999px` | 胶囊圆角 |
| `--mochi-shadow-md` | `0 4px 0 #E8D5C4` | 3D 色块阴影 |

完整表见 `packages/tokens/src/tokens.css` 与根目录 `DESIGN.md`。

通过 `ConfigProvider` 的 `theme` 可覆写：

```tsx
<ConfigProvider theme={{ 'color-primary': '#F8B4C4' }}>
  ...
</ConfigProvider>
```
