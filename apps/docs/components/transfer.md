# Transfer 穿梭框

双栏选择，在源列表与目标列表之间移动条目。

## 代码演示

<mochi-demos name="Transfer"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| dataSource | 数据源 | `TransferItem[]` | `[]` |
| targetKeys / defaultTargetKeys | 右侧选中项 key | `string[]` | — |
| selectedKeys / defaultSelectedKeys | 勾选项 | `string[]` | — |
| titles | 两侧标题 | `[ReactNode, ReactNode]` | `['源列表','目标列表']` |
| operations | 操作按钮文案 | `[ReactNode, ReactNode]` | `['>','<']` |
| showSearch | 显示搜索 | `boolean` | `false` |
| oneWay | 仅向右转移 | `boolean` | `false` |
| disabled | 禁用 | `boolean` | `false` |
| filterOption | 搜索过滤 | `(input, item) => boolean` | — |
| render | 自定义渲染 | `(item) => ReactNode` | — |
| onChange | 转移回调 | `(targetKeys, direction, moveKeys) => void` | — |
| onSelectChange | 勾选变化 | `(sourceKeys, targetKeys) => void` | — |

## Web

```tsx
import { Transfer } from '@nextouch-app/mochi-react'

<Transfer
  showSearch
  dataSource={[
    { key: '1', title: '抹茶' },
    { key: '2', title: '原味' },
  ]}
  defaultTargetKeys={['1']}
/>
```
