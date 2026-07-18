# Cascader 级联选择

多级选项，面板按列展开。


## 代码演示

<mochi-demos name="Cascader"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| options | 选项树 | `CascaderOption[]` | `[]` |
| value / defaultValue | 选中路径 | `Array<string \| number>` | `[]` |
| placeholder | 占位 | `string` | `请选择` |
| disabled | 禁用 | `boolean` | `false` |
| allowClear | 可清除 | `boolean` | `true` |
| changeOnSelect | 选中即变更（非末级也可） | `boolean` | `false` |
| expandTrigger | 展开子级（Web） | `click \| hover` | `click` |
| size / status | 尺寸 / 状态 | `SizeAlias` / `InputStatus` | — |
| displayRender | 自定义展示 | `(labels, selectedOptions) => ReactNode` | — |
| onChange | 变化 | `(value, selectedOptions) => void` | — |

### CascaderOption

| 属性 | 说明 | 类型 |
|------|------|------|
| value / label | 值与文案 | — |
| disabled | 禁用 | `boolean` |
| children | 子级 | `CascaderOption[]` |

## Web

触发器下方多列面板。

```tsx
import { Cascader } from '@mochi-ui/react'

<Cascader
  options={[
    {
      value: 'zhejiang',
      label: '浙江',
      children: [
        { value: 'hangzhou', label: '杭州' },
        { value: 'ningbo', label: '宁波' },
      ],
    },
  ]}
  onChange={(value) => console.log(value)}
/>
```

## Mobile

底部抽屉内横向滚动多列面板。

```tsx
import { Cascader } from '@mochi-ui/mobile'

<Cascader options={[{ value: 'a', label: '选项 A', children: [{ value: 'a1', label: '子项' }] }]} />
```
