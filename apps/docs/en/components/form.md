# Form

Form layout and validation status display. API aligns with common Ant Design layout props.

## Form API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| layout | Layout | `vertical \| horizontal \| inline` | `vertical` |
| size | Size context | `SizeAlias` | — |
| disabled | Disable all | `boolean` | `false` |
| colon | Show colon | `boolean` | `true` |
| requiredMark | Required mark | `boolean \| 'optional'` | `true` |
| labelAlign | Label align | `left \| right` | `right` |
| onFinish | Submit success | `(values) => void` | — |
| onFinishFailed | Validation failed | `(info) => void` | — |

## FormItem API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| label | Label | `ReactNode` | — |
| required | Required asterisk | `boolean` | — |
| error / help | Help / error text | `ReactNode` | — |
| extra | Extra tip | `ReactNode` | — |
| validateStatus | Validate status | `success \| warning \| error \| validating \| ''` | — |
| labelCol / wrapperCol | Grid span (24) | `number` | — |

## Web

```tsx
import { Form, FormItem, Input, Button } from '@mochi-ui/react'

<Form layout="horizontal" onFinish={(v) => console.log(v)}>
  <FormItem label="Account" required labelCol={6} wrapperCol={18}>
    <Input name="user" />
  </FormItem>
  <Button type="primary" htmlType="submit">Submit</Button>
</Form>
```
