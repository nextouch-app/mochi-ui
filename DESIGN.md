# Mochi UI Design Language

**Mochi UI（麻薯 UI）** — 软糯卡通 React 组件库  
Maintained by [Nextouch](https://github.com/nextouch-app) · MIT License

## 定位

游戏菜单式界面语言：羊皮纸底、胶囊按钮、底部 3D 色块按压、有机圆角贴纸卡片、云朵装饰。  
API 命名清晰、Props 两端一致；视觉以天空蓝麻薯建立品牌识别。

### 辨识符号

| 符号 | 表现 |
|------|------|
| 天空蓝主色 | `#6CB4EE` |
| 羊皮纸底 | `#F7F3DF` / `#F8F8F0` |
| 游戏黄 focus | 输入框 focus `#FFCC00` 光晕 |
| 云朵耳朵 | Card / Modal 角落云朵装饰 |
| 麻薯 Loading | 带眼睛的软球弹跳，不是普通三点 |
| 斜纹 Loading 按钮 | primary loading 用对角斜纹动画 |
| 燕尾丝带 Title | clip-path 旗帜 + 折角 |

## 四个关键词

| 关键词 | 表现 |
|--------|------|
| 卡通 | 2px 描边、pill 圆角、贴纸式卡片 |
| 可爱 | 马卡龙色、暖棕文字、圆体字体 |
| 软糯 | 底部实色阴影按压、translateY、弹性 easing |
| 动漫 | 对话框裁切、丝带标题、云朵/星星/气泡装饰 |

## Design Tokens

### 色彩

| Token | 值 | 用途 |
|-------|-----|------|
| `--mochi-color-primary` | `#7EC8F5` | 主色（软天空蓝） |
| `--mochi-color-primary-dark` | `#3D9AD4` | 主色按压 / 描边 |
| `--mochi-color-bg` | `#FFF6EB` | 奶油纸背景 |
| `--mochi-color-surface` | `#FFFDF9` | 暖白表面 |
| `--mochi-color-surface-muted` | `#FFF0E0` | Muted 表面 |
| `--mochi-color-text` | `#5A4030` | 暖棕文字 |
| `--mochi-color-text-disabled` | `#D0BFB0` | 禁用文字 |
| `--mochi-color-border` | `#F0D4BC` | 边框 |
| `--mochi-color-pink` | `#FFB6C8` | 樱花粉 |
| `--mochi-color-mint` | `#9EEBC8` | 薄荷绿 |
| `--mochi-color-lavender` | `#D8C4F8` | 薰衣草紫 |
| `--mochi-color-peach` | `#FFC9A8` | 蜜桃橙 |
| `--mochi-color-success` | `#86D48A` | 成功 |
| `--mochi-color-warning` | `#FFD56A` | 警告 |
| `--mochi-color-error` | `#FF9A9A` | 错误 |

### 形状

| Token | 值 |
|-------|-----|
| `--mochi-radius-sm` | `14px` |
| `--mochi-radius-md` | `24px` |
| `--mochi-radius-lg` | `32px` |
| `--mochi-radius-pill` | `999px` |
| `--mochi-border-width` | `3px`（卡通粗描边） |

### 阴影（3D 色块，非 blur）

| Token | 值 |
|-------|-----|
| `--mochi-shadow-sm` | `0 3px 0 #E8C4A8` |
| `--mochi-shadow-md` | `0 5px 0 #E8C4A8` |
| `--mochi-shadow-primary` | `0 5px 0 #3D9AD4` |
| `--mochi-shadow-pressed` | `0 1px 0 #E8C4A8` |

### 字体

默认使用系统字体栈，可通过 `--mochi-font-family` 替换：

```css
--mochi-font-family:
  system-ui,
  -apple-system,
  'PingFang SC',
  'Microsoft YaHei',
  'Helvetica Neue',
  sans-serif;
```

字重：正文 400–500、按钮/标签 600、标题 700–800。

### 动效

| Token | 值 |
|-------|-----|
| `--mochi-duration-fast` | `180ms` |
| `--mochi-duration-normal` | `320ms` |
| `--mochi-easing-bounce` | `cubic-bezier(0.34, 1.56, 0.64, 1)`（更弹） |

组件层额外使用：jelly 按压、pop 选中、float 漂浮、wiggle 轻晃、bounce-in 入场。

### 间距

| Token | 值 |
|-------|-----|
| `--mochi-space-xs` | `4px` |
| `--mochi-space-sm` | `8px` |
| `--mochi-space-md` | `12px` |
| `--mochi-space-lg` | `16px` |
| `--mochi-space-xl` | `24px` |
| `--mochi-space-2xl` | `32px` |

## 受限样式约束（Mobile 硬性）

`@mochi-ui/mobile` 禁止：

- `~` 兄弟选择器
- `:hover`
- `:checked~` 等伪类组合选择器

改用 React class 状态：`.is-checked`、`.is-pressed`、`.is-disabled`、`.is-active`。

## 资产与品牌

- 图标、插画与样式均为原创，请勿混入第三方受限素材
- 宣传与产品说明请使用 Mochi UI 自有品牌表述

## BEM 类名前缀

`mochi-`（如 `mochi-btn`、`mochi-card`、`mochi-input`）

## CSS 变量前缀

`--mochi-*`
