# Image 图片

圆角纸感图片，支持预览与失败回退。

## Examples

<mochi-demos name="Image"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| src / alt | 地址 / 文案 | `string` | — |
| width / height | 尺寸 | `number \| string` | — |
| preview | 预览 | `boolean \| { src?, visible?, onVisibleChange? }` | `true` |
| fallback | 失败回退图 | `string` | — |
| placeholder | 加载占位 | `ReactNode` | — |
| onClick / onLoad / onError | 回调 | — | — |

```tsx
import { Image } from '@mochi-ui/react'

<Image
  width={200}
  src="https://picsum.photos/400/300"
  alt="麻薯"
/>
```
