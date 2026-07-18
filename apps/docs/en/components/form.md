# Form

Form layout, field binding, and validation rules.


## Examples

<mochi-demos name="Form"></mochi-demos>

## Form API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| layout | Layout | `vertical \| horizontal \| inline` | `vertical` |
| size | Size context | `SizeAlias` | — |
| disabled | Disable all | `boolean` | `false` |
| colon | Show colon | `boolean` | `true` |
| requiredMark | Required mark | `boolean \| 'optional'` | `true` |
| labelAlign | Label align | `left \| right` | `right` |
| form | Form instance from `useForm` | `FormInstance` | — |
| initialValues | Initial values | `Record<string, unknown>` | — |
| name | Form name | `string` | — |
| scrollToFirstError | Scroll to first error on failure | `boolean` | `false` |
| onFinish | Submit success | `(values) => void` | — |
| onFinishFailed | Validation failed | `(info) => void` | — |

## FormItem API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| label | Label | `ReactNode` | — |
| name | Field name; supports nested paths | `NamePath` | — |
| required | Required asterisk | `boolean` | — |
| rules | Validation rules | `FormRule[]` | — |
| valuePropName | Child value prop name | `string` | `value` |
| trigger | Value collection event | `string` | `onChange` |
| validateTrigger | Events that trigger validation | `string \| string[]` | `onBlur` |
| error / help | Help / error text | `ReactNode` | — |
| extra | Extra tip | `ReactNode` | — |
| validateStatus | Validate status | `success \| warning \| error \| validating \| ''` | — |
| labelCol / wrapperCol | Grid span (24) | `number` | — |

## Form.List API

Dynamic list fields for array values.

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| name | List field name | `string` | — |
| initialValue | Initial array | `unknown[]` | — |
| children | Render function | `(fields, operation, meta) => ReactNode` | — |

Each field has `name` (index) and `key`. `operation` provides `add`, `remove`, and `move`.

Inside `Form.List`, `Form.Item` names are joined to the list path, e.g. `name={[field.name, 'first']}` maps to `listName.0.first`.

## FormInstance

| Method | Description |
|--------|-------------|
| getFieldValue | Get one field value (`NamePath`) |
| getFieldsValue | Get all field values |
| setFieldValue | Set one field value (`NamePath`) |
| setFieldsValue | Set multiple field values |
| resetFields | Reset fields (optional `NamePath[]`) |
| validateFields | Validate and return values; throws `{ values, errors }` on failure |
| submit | Trigger form submit |

## FormRule

| Prop | Description | Type |
|------|-------------|------|
| required | Required | `boolean` |
| message | Error message | `string` |
| min / max | Min / max (length or number) | `number` |
| pattern | RegExp | `RegExp` |
| validator | Custom validator | `(value) => void \| string \| Promise<...>` |

## Web

```tsx
import { Form, Input, Button } from '@mochi-ui/react'

const [form] = Form.useForm()

<Form form={form} initialValues={{ user: '' }} onFinish={(v) => console.log(v)}>
  <Form.Item
    label="Account"
    name="user"
    rules={[{ required: true, message: 'Required' }]}
  >
    <Input placeholder="Enter account" />
  </Form.Item>
  <Button type="primary" htmlType="submit">Submit</Button>
</Form>
```

## Form.List

```tsx
<Form initialValues={{ users: [{ name: 'Mochi' }] }} onFinish={console.log}>
  <Form.List name="users">
    {(fields, { add, remove }) => (
      <>
        {fields.map((field) => (
          <Form.Item key={field.key} label="Name" name={[field.name, 'name']} rules={[{ required: true }]}>
            <Input placeholder="Name" />
          </Form.Item>
        ))}
        <Button onClick={() => add({ name: '' })}>Add</Button>
      </>
    )}
  </Form.List>
</Form>
```
