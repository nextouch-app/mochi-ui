# Mentions 提及

在文本中通过 `@`（或自定义前缀）提及选项。

## 代码演示

<mochi-demos name="Mentions"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| value / defaultValue | 文本 | `string` | — |
| options | 提及选项 | `MentionsOption[]` | `[]` |
| prefix | 触发前缀 | `string \| string[]` | `@` |
| rows | 行数 | `number` | `3` |
| split | 选中后分隔符 | `string` | `' '` |
| filterOption | 过滤 | `boolean \| (input, option) => boolean` | `true` |
| status / disabled / placeholder | 状态 | — | — |
| onChange / onSelect / onSearch | 回调 | — | — |

## Web

```tsx
import { Mentions } from '@nextouch-app/mochi-react'

<Mentions
  options={[
    { value: 'mochi', label: '麻薯' },
    { value: 'turing', label: 'Turing' },
  ]}
/>
```
