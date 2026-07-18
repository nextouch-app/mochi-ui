# Typography 排版

标题、正文、段落与链接。

## 代码演示

<mochi-demos name="Typography"></mochi-demos>

## API

### Typography.Title

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| level | 标题级别 | `1 \| 2 \| 3 \| 4 \| 5` | `1` |
| type | 语义色 | `secondary \| success \| warning \| danger` | — |
| ellipsis | 省略 | `boolean` | — |

### Typography.Text / Paragraph

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| type / strong / italic / underline / delete / code / mark | 样式 | — | — |
| copyable | 可复制 | `boolean \| { text?, onCopy? }` | — |
| ellipsis / disabled | — | `boolean` | — |

### Typography.Link

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| href / target | 链接 | `string` | — |
| disabled | 禁用 | `boolean` | — |

```tsx
import { Typography } from '@mochi-ui/react'

<Typography.Title level={3}>麻薯菜单</Typography.Title>
<Typography.Paragraph>软糯圆润的组件库。</Typography.Paragraph>
```
