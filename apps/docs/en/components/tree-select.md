# TreeSelect 树选择

下拉树形选择，支持多选与勾选。

## Examples

<mochi-demos name="TreeSelect"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| treeData | 树数据 | `TreeDataNode[]` | `[]` |
| value / defaultValue | 值 | `string \| string[]` | — |
| multiple | 多选 | `boolean` | `false` |
| treeCheckable | 勾选模式 | `boolean` | `false` |
| treeDefaultExpandAll | 默认展开 | `boolean` | `true` |
| showSearch | 可搜索 | `boolean` | `false` |
| allowClear | 可清除 | `boolean` | `true` |
| placeholder / size / status / disabled | 基础属性 | — | — |
| onChange / onSearch / onClear | 回调 | — | — |

## Web

```tsx
import { TreeSelect } from '@mochi-ui/react'

<TreeSelect
  showSearch
  treeData={[
    {
      key: 'a',
      title: '甜味',
      children: [{ key: 'a1', title: '抹茶' }],
    },
  ]}
/>
```
