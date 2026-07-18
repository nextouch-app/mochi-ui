# Form 表单

表单布局与校验状态展示。

## Form API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| layout | 布局 | `vertical \| horizontal \| inline` | `vertical` |
| size | 尺寸上下文 | `SizeAlias` | — |
| disabled | 整体禁用 | `boolean` | `false` |
| colon | 是否显示冒号 | `boolean` | `true` |
| requiredMark | 必填标记 | `boolean \| 'optional'` | `true` |
| labelAlign | label 对齐 | `left \| right` | `right` |
| onFinish | 提交成功 | `(values) => void` | — |
| onFinishFailed | 校验失败 | `(info) => void` | — |

## FormItem API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| label | 标签 | `ReactNode` | — |
| required | 必填星号 | `boolean` | — |
| error / help | 帮助/错误文案 | `ReactNode` | — |
| extra | 额外说明 | `ReactNode` | — |
| validateStatus | 校验状态 | `success \| warning \| error \| validating \| ''` | — |
| labelCol / wrapperCol | 栅格占比（24） | `number` | — |

## Web

```tsx
import { Form, FormItem, Input, Button } from '@mochi-ui/react'

<Form layout="horizontal" onFinish={(v) => console.log(v)}>
  <FormItem label="账号" required labelCol={6} wrapperCol={18}>
    <Input name="user" />
  </FormItem>
  <Button type="primary" htmlType="submit">提交</Button>
</Form>
```
