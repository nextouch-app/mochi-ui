# Statistic 统计数值

展示统计数值，支持前缀、后缀与精度。

## 代码演示

<mochi-demos name="Statistic"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| title | 标题 | `ReactNode` | — |
| value | 数值 | `string \| number` | — |
| precision | 小数精度 | `number` | — |
| prefix / suffix | 前后缀 | `ReactNode` | — |
| loading | 加载中 | `boolean` | `false` |
| valueStyle | 数值样式 | `CSSProperties` | — |

```tsx
import { Statistic } from '@nextouch-app/mochi-react'

<Statistic title="销量" value={1128} suffix="杯" />
```
