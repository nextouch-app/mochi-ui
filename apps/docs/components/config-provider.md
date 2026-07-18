# ConfigProvider

注入全局 `size` 与主题 token / CSS 变量。

## 代码演示

<mochi-demos name="ConfigProvider"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| size | 全局尺寸 | `SizeAlias` | `md` |
| theme | 主题 | `ThemeConfig \| Record<string, string>` | — |

### theme.token

| 字段 | CSS 变量 |
|------|----------|
| colorPrimary | `--mochi-color-primary` |
| colorSuccess / colorWarning / colorError | 对应语义色 |
| colorText / colorBgBase | 文本 / 背景 |
| borderRadius / fontFamily | 圆角 / 字体 |

```tsx
<ConfigProvider
  size="lg"
  theme={{
    token: { colorPrimary: '#F8B4C4' },
    cssVars: { 'color-primary-dark': '#E898A8' },
  }}
>
  <App />
</ConfigProvider>
```
