# Form 表单

表单布局、字段绑定与校验规则。


## 代码演示

<mochi-demos name="Form"></mochi-demos>

## Form API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| layout | 布局 | `vertical \| horizontal \| inline` | `vertical` |
| size | 尺寸上下文 | `SizeAlias` | — |
| disabled | 整体禁用 | `boolean` | `false` |
| colon | 是否显示冒号 | `boolean` | `true` |
| requiredMark | 必填标记 | `boolean \| 'optional'` | `true` |
| labelAlign | label 对齐 | `left \| right` | `right` |
| form | 表单实例（`useForm`） | `FormInstance` | — |
| initialValues | 初始值 | `Record<string, unknown>` | — |
| name | 表单名称 | `string` | — |
| scrollToFirstError | 校验失败时滚动到首个错误 | `boolean` | `false` |
| onFinish | 提交成功 | `(values) => void` | — |
| onFinishFailed | 校验失败 | `(info) => void` | — |

## FormItem API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| label | 标签 | `ReactNode` | — |
| name | 字段名，支持嵌套路径 | `NamePath` | — |
| required | 必填星号 | `boolean` | — |
| rules | 校验规则 | `FormRule[]` | — |
| valuePropName | 子组件 value 属性名 | `string` | `value` |
| trigger | 收集值的回调名 | `string` | `onChange` |
| validateTrigger | 触发校验的事件 | `string \| string[]` | `onBlur` |
| error / help | 帮助/错误文案 | `ReactNode` | — |
| extra | 额外说明 | `ReactNode` | — |
| validateStatus | 校验状态 | `success \| warning \| error \| validating \| ''` | — |
| labelCol / wrapperCol | 栅格占比（24） | `number` | — |

## Form.List API

动态增减表单项，适用于数组字段。

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| name | 列表字段名 | `string` | — |
| initialValue | 初始数组 | `unknown[]` | — |
| children | 渲染函数 | `(fields, operation, meta) => ReactNode` | — |

`fields` 中每项含 `name`（索引）与 `key`。`operation` 提供 `add`、`remove`、`move`。

在 `Form.List` 内，`Form.Item` 的 `name` 会相对列表路径拼接，例如 `name={[field.name, 'first']}` 对应 `listName.0.first`。

## FormInstance

| 方法 | 说明 |
|------|------|
| getFieldValue | 获取单个字段值（`NamePath`） |
| getFieldsValue | 获取全部字段值 |
| setFieldValue | 设置单个字段值（`NamePath`） |
| setFieldsValue | 批量设置字段值 |
| resetFields | 重置字段（可选 `NamePath[]`） |
| validateFields | 校验并返回 values，失败抛出 `{ values, errors }` |
| submit | 触发表单提交 |

## FormRule

| 属性 | 说明 | 类型 |
|------|------|------|
| required | 必填 | `boolean` |
| message | 错误提示 | `string` |
| min / max | 最小/最大（长度或数值） | `number` |
| pattern | 正则 | `RegExp` |
| validator | 自定义校验 | `(value) => void \| string \| Promise<...>` |

## Web

```tsx
import { Form, Input, Button } from '@mochi-ui/react'

const [form] = Form.useForm()

<Form form={form} initialValues={{ user: '' }} onFinish={(v) => console.log(v)}>
  <Form.Item
    label="账号"
    name="user"
    rules={[{ required: true, message: '请输入账号' }]}
  >
    <Input placeholder="请输入" />
  </Form.Item>
  <Button type="primary" htmlType="submit">提交</Button>
</Form>
```

## Form.List

```tsx
<Form initialValues={{ users: [{ name: '麻薯' }] }} onFinish={console.log}>
  <Form.List name="users">
    {(fields, { add, remove }) => (
      <>
        {fields.map((field) => (
          <Form.Item key={field.key} label="姓名" name={[field.name, 'name']} rules={[{ required: true }]}>
            <Input placeholder="姓名" />
          </Form.Item>
        ))}
        <Button onClick={() => add({ name: '' })}>添加</Button>
      </>
    )}
  </Form.List>
</Form>
```
