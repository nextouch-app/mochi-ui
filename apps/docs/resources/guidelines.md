# 使用建议

## 引入样式

先加载 Design Token，再加载组件样式：

```tsx
import '@mochi-ui/tokens/tokens.css'
import { Button, ConfigProvider } from '@mochi-ui/react'
import '@mochi-ui/react/style.css'
```

Mobile 端将 `@mochi-ui/react` 换成 `@mochi-ui/mobile` 即可。

## 视觉约定

- 主色：天空蓝 `#6CB4EE`
- 背景：奶油纸色（见 tokens）
- 按钮：胶囊形 + 底部实色阴影
- 卡片：大圆角贴纸感，可选云朵装饰

完整规范见仓库根目录 [DESIGN.md](https://gitlab.com/nextouch/mochi-ui/-/blob/main/DESIGN.md)。

## Mobile 注意

`@mochi-ui/mobile` 面向 CSS 能力受限的运行时，样式中不要使用 `:hover` 与 `~` 兄弟选择器；交互状态由组件 class（如 `.is-pressed`、`.is-checked`）驱动。

## 资源与许可

组件库为 MIT 许可。图标与样式为原创资产，请勿混用第三方受限素材。
