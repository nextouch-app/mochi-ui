# Image 图片

圆角纸感图片，支持预览、图集与失败回退。

## 代码演示

<mochi-demos name="Image"></mochi-demos>

## API

### Image

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| src / alt | 地址 / 文案 | `string` | — |
| width / height | 尺寸 | `number \| string` | — |
| preview | 预览 | `boolean \| { src?, visible?, onVisibleChange? }` | `true` |
| fallback | 失败回退图 | `string` | — |
| placeholder | 加载占位 | `ReactNode` | — |

### Image.PreviewGroup

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| items | 图片列表 | `(string \| { src, alt? })[]` | — |
| preview | 预览控制 | `boolean \| { visible?, current?, onChange?, onVisibleChange? }` | `true` |

```tsx
import { Image } from '@nextouch-app/mochi-react'

<Image.PreviewGroup>
  <Image width={120} src="https://picsum.photos/seed/a/240/160" />
  <Image width={120} src="https://picsum.photos/seed/b/240/160" />
</Image.PreviewGroup>
```
