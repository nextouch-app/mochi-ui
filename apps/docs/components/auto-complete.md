# AutoComplete 自动完成

输入时根据选项给出补全建议。

## 代码演示

<mochi-demos name="AutoComplete"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| value / defaultValue | 输入值 | `string` | — |
| options | 选项 | `AutoCompleteOption[]` | `[]` |
| placeholder | 占位 | `string` | `请输入` |
| allowClear | 可清除 | `boolean` | `false` |
| disabled | 禁用 | `boolean` | `false` |
| size / status | 尺寸 / 状态 | — | — |
| filterOption | 过滤 | `boolean \| (input, option) => boolean` | `true` |
| onChange / onSelect / onSearch / onClear | 回调 | — | — |

## Web

```tsx
import { AutoComplete } from '@nextouch-app/mochi-react'

<AutoComplete
  allowClear
  options={[
    { value: '抹茶麻薯' },
    { value: '草莓麻薯' },
    { value: '原味麻薯' },
  ]}
/>
```
