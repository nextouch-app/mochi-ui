# Button 按钮

胶囊按钮：底部 3D 色块阴影、按压下沉、斜纹 loading。

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| type | 类型 | `primary \| default \| dashed \| text \| link` | `default` |
| size | 尺寸（兼容 AntD 别名） | `sm \| md \| lg \| small \| middle \| large` | `md` |
| shape | 形状 | `default \| circle \| round` | `default` |
| danger | 危险按钮 | `boolean` | `false` |
| ghost | 幽灵按钮（透明底） | `boolean` | `false` |
| icon | 图标 | `ReactNode` | — |
| iconPlacement | 图标位置 | `start \| end` | `start` |
| loading | 加载中 | `boolean \| { delay?: number }` | `false` |
| disabled | 禁用 | `boolean` | `false` |
| block | 通栏 | `boolean` | `false` |
| href | 链接地址（渲染为 a） | `string` | — |
| target | 链接 target | `string` | — |
| htmlType | 原生 button type | `button \| submit \| reset` | `button` |
| onClick | 点击回调 | `(e) => void` | — |

## Web

```tsx
import { Button, Icon } from '@mochi-ui/react'

<Button type="primary" icon={<Icon name="star" />} loading>
  开始
</Button>
<Button danger ghost>危险幽灵</Button>
<Button type="link" href="/docs">文档</Button>
```

## Mobile

```tsx
import { Button } from '@mochi-ui/mobile'
;<Button type="primary" block>开始</Button>
```
