# Time 时间展示

日期时间展示，可实时刷新。

## 代码演示

<mochi-demos name="Time"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| value | 时间值 | `Date \| number \| string` | 当前时间 |
| format | 格式 | `string \| (date) => string` | — |
| live | 实时刷新 | `boolean` | `false` |
| showDate / showSeconds | 显示日期 / 秒 | `boolean` | `false` / `true` |
| label | 标签 | `ReactNode` | — |

```tsx
import { Time } from '@nextouch-app/mochi-react'

<Time live showDate label="服务器时间" />
```
