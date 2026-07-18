# Input 输入框

胶囊输入框，focus 使用黄色光晕。支持 `Input.Password`、`Input.Search` 子组件。


## 代码演示

<mochi-demos name="Input"></mochi-demos>

## Input API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| size | 尺寸 | `sm \| md \| lg \| small \| middle \| large` | `md` |
| variant | 外观 | `outlined \| filled \| borderless` | `outlined` |
| status | 状态 | `error \| warning \| ''` | — |
| prefix / suffix | 前后缀 | `ReactNode` | — |
| addonBefore / addonAfter | 前置/后置标签 | `ReactNode` | — |
| allowClear | 清除按钮 | `boolean` | `false` |
| showCount | 字数统计 | `boolean` | `false` |
| maxLength | 最大长度 | `number` | — |
| disabled / readOnly | 禁用 / 只读 | `boolean` | `false` |
| onPressEnter | 回车回调 | `(e) => void` | — |
| onClear | 清除回调 | `() => void` | — |

## Input.Password API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| visibilityToggle | 是否显示密码可见切换 | `boolean` | `true` |

继承 `Input` 属性（不含 `type`）。

## Input.Search API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| enterButton | 搜索按钮；`true` 为后置按钮，`ReactNode` 为自定义 | `boolean \| ReactNode` | `false` |
| loading | 搜索按钮 loading | `boolean` | `false` |
| onSearch | 点击搜索或回车时触发 | `(value, e?) => void` | — |

继承 `Input` 属性。

## 示例

```tsx
import { Input, Icon } from '@nextouch-app/mochi-react'

<Input
  placeholder="请输入"
  prefix={<Icon name="cloud" />}
  allowClear
  showCount
  maxLength={20}
  status="error"
/>

<Input.Password placeholder="密码" />
<Input.Search placeholder="搜索" onSearch={(v) => console.log(v)} enterButton />
```
