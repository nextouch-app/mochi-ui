# FloatButton 悬浮按钮

页面级悬浮操作按钮，支持分组展开。

## 代码演示

<mochi-demos name="FloatButton"></mochi-demos>

## API

### FloatButton

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| icon | 图标 | `ReactNode` | — |
| description | 描述 | `ReactNode` | — |
| type | 类型 | `'default' \| 'primary'` | `'default'` |
| shape | 形状 | `'circle' \| 'square'` | `'circle'` |
| href / target | 链接 | `string` | — |
| tooltip | 提示 | `ReactNode` | — |
| onClick | 点击 | `(e) => void` | — |

### FloatButton.Group

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| trigger | 触发方式 | `'click' \| 'hover'` | `'click'` |
| open / defaultOpen | 展开 | `boolean` | — |
| icon / type / shape | 主按钮 | — | — |
| onOpenChange | 展开回调 | `(open) => void` | — |

```tsx
import { FloatButton } from '@nextouch-app/mochi-react'

<FloatButton type="primary" icon="↑" />
```
