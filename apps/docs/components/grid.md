# Grid 栅格

24 栅格系统：`Row` + `Col`。

## 代码演示

<mochi-demos name="Grid"></mochi-demos>

## API

### Row

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| gutter | 间距 | `number \| [number, number]` | `0` |
| align | 垂直对齐 | `top \| middle \| bottom \| stretch` | `top` |
| justify | 水平排列 | `start \| end \| center \| space-around \| space-between \| space-evenly` | `start` |
| wrap | 换行 | `boolean` | `true` |

### Col

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| span | 栅格占位 | `number` | `24` |
| offset | 左侧间隔 | `number` | `0` |
| order / flex | 排序 / flex | — | — |

```tsx
import { Row, Col } from '@mochi-ui/react'

<Row gutter={12}>
  <Col span={12}>A</Col>
  <Col span={12}>B</Col>
</Row>
```
