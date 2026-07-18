# Watermark 水印

给容器添加文字水印。

## 代码演示

<mochi-demos name="Watermark"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| content | 水印文案 | `string \| string[]` | — |
| width / height | 单元尺寸 | `number` | `120` / `64` |
| rotate | 旋转角度 | `number` | `-22` |
| gap | 间距 | `[number, number]` | `[100, 100]` |
| font | 字体样式 | `{ color?, fontSize?, fontWeight?, fontFamily? }` | — |
| zIndex | 层级 | `number` | `9` |

```tsx
import { Watermark } from '@mochi-ui/react'

<Watermark content="Mochi UI">
  <div style={{ height: 160 }}>内容区</div>
</Watermark>
```
