# Select 选择器

胶囊触发器 + 羊皮纸下拉。


## 代码演示

<mochi-demos name="Select"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| options | 选项 | `SelectOption[]` | `[]` |
| mode | 模式 | `multiple \| tags` | — |
| value / defaultValue | 值 | `string \| number \| Array<string \| number>` | — |
| placeholder | 占位 | `string` | `请选择` |
| size | 尺寸 | `SizeAlias` | `md` |
| status | 状态 | `error \| warning \| ''` | — |
| maxTagCount | 最多展示 tag 数 | `number \| responsive` | — |
| allowClear | 可清除 | `boolean` | `false` |
| showSearch | 可搜索 | `boolean` | `false` |
| loading | 加载中 | `boolean` | `false` |
| open / defaultOpen | 下拉显隐 | `boolean` | — |
| filterOption | 过滤 | `boolean \| (input, option) => boolean` | `true` |
| notFoundContent | 空内容 | `ReactNode` | `暂无数据` |
| listHeight | 列表高度 | `number` | `220` |
| onChange | 变化 | `(value, option?) => void` | — |
| onClear / onSearch | 清除 / 搜索 | — | — |

## Web

```tsx
import { Select } from '@mochi-ui/react'

<Select
  mode="multiple"
  maxTagCount={2}
  allowClear
  showSearch
  placeholder="选择口味"
  options={[
    { label: '原味', value: 'plain' },
    { label: '抹茶', value: 'matcha' },
  ]}
/>
```
