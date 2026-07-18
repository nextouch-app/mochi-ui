# Tree 树形控件

层级数据展示，支持展开、选择与勾选。

## Examples

<mochi-demos name="Tree"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| treeData | 树数据 | `TreeDataNode[]` | `[]` |
| checkable | 显示复选框 | `boolean` | `false` |
| selectable | 可选中 | `boolean` | `true` |
| multiple | 多选 | `boolean` | `false` |
| defaultExpandAll | 默认展开全部 | `boolean` | `false` |
| expandedKeys / defaultExpandedKeys | 展开节点 | `string[]` | — |
| selectedKeys / defaultSelectedKeys | 选中节点 | `string[]` | — |
| checkedKeys / defaultCheckedKeys | 勾选节点 | `string[] \| { checked, halfChecked }` | — |
| checkStrictly | 父子不关联 | `boolean` | `false` |
| showLine | 连接线风格 | `boolean` | `false` |
| disabled | 禁用 | `boolean` | `false` |
| onExpand / onSelect / onCheck | 回调 | — | — |

## TreeDataNode

| 属性 | 说明 | 类型 |
|------|------|------|
| key / title | 标识与标题 | `string` / `ReactNode` |
| children | 子节点 | `TreeDataNode[]` |
| disabled / disableCheckbox / selectable / checkable / isLeaf | 节点状态 | `boolean` |

## Web

```tsx
import { Tree } from '@mochi-ui/react'

<Tree
  checkable
  defaultExpandAll
  treeData={[
    {
      key: 'sweet',
      title: '甜味',
      children: [
        { key: 'matcha', title: '抹茶' },
        { key: 'strawberry', title: '草莓' },
      ],
    },
  ]}
/>
```
