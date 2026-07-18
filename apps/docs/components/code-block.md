# CodeBlock 代码块

带复制按钮的纸感代码展示。

## 代码演示

<mochi-demos name="CodeBlock"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| code | 代码 | `string` | — |
| language | 语言标签 | `string` | `tsx` |
| title | 标题 | `ReactNode` | — |
| showCopy | 显示复制 | `boolean` | `true` |

```tsx
import { CodeBlock } from '@mochi-ui/react'

<CodeBlock language="tsx" code={`import { Button } from '@mochi-ui/react'`} />
```
