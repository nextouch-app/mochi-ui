# Progress 进度条

线形 / 环形进度。

## 代码演示

<mochi-demos name="Progress"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| percent | 进度 | `number` | `0` |
| type | 类型 | `line \| circle \| dashboard` | `line` |
| status | 状态 | `normal \| success \| exception \| active \| error` | `normal` |
| showInfo | 显示数值 | `boolean` | `true` |
| strokeColor / trailColor | 颜色 | `string` | — |
| strokeWidth | 线宽 | `number` | — |
| size | 尺寸 | `number \| [number, number]` | — |
| format | 文案格式化 | `(percent?) => ReactNode` | — |

```tsx
import { Progress } from '@mochi-ui/react'

<Progress percent={70} />
<Progress type="circle" percent={75} />
```
