# Dropdown 下拉菜单

支持嵌套子菜单：Web 端向右展开；Mobile 端在底部面板内手风琴展开。


## 代码演示

<mochi-demos name="Dropdown"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| items | 菜单项 | `DropdownItem[]` | `[]` |
| trigger | 触发方式（Web） | `click \| hover` | `click` |
| open / defaultOpen | 显隐 | `boolean` | — |
| placement | 位置（Web） | `bottomLeft \| bottomRight` | `bottomLeft` |
| disabled | 禁用 | `boolean` | `false` |
| onOpenChange | 显隐变化 | `(open) => void` | — |

### DropdownItem

| 属性 | 说明 | 类型 |
|------|------|------|
| key / label | 标识与文案 | — |
| icon | 图标 | `ReactNode` |
| type | 类型 | `item \| divider` |
| children | 子菜单项 | `DropdownItem[]` |
| danger / disabled | 危险 / 禁用 | `boolean` |
| onClick | 点击 | `() => void` |

## Web

锚定悬浮菜单，支持 `trigger="click" | "hover"`。带 `children` 的项会渲染子菜单（`.mochi-dropdown__submenu`）。

```tsx
import { Dropdown, Button } from '@mochi-ui/react'

<Dropdown
  items={[
    { key: '1', label: '编辑' },
    {
      key: 'more',
      label: '更多',
      children: [
        { key: 'share', label: '分享' },
        { key: 'copy', label: '复制链接' },
      ],
    },
    { key: '2', label: '删除', danger: true },
  ]}
>
  <Button>更多</Button>
</Dropdown>
```

## Mobile

同一 API，交互为底部操作面板；含 `children` 的项在面板内手风琴展开。

```tsx
import { Dropdown, Button } from '@mochi-ui/mobile'

<Dropdown items={[{ key: '1', label: '编辑' }, { key: '2', label: '删除', danger: true }]}>
  <Button>更多</Button>
</Dropdown>
```
