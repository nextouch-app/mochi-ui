import { Form, FormItem, Input, Switch, Button, Toast, Select, Space } from '@nextouch-app/mochi-react'
import type { DemoItem } from '../../types'

function BasicDemo() {
  return (
    <Form
      style={{ width: 320 }}
      onFinish={() => Toast.show('提交成功')}
      onSubmit={(e) => e.preventDefault()}
    >
      <FormItem label="账号" name="user" required>
        <Input name="user" placeholder="请输入账号" />
      </FormItem>
      <FormItem label="口味" name="flavor">
        <Select
          placeholder="选择口味"
          options={[
            { label: '原味', value: 'plain' },
            { label: '抹茶', value: 'matcha' },
          ]}
        />
      </FormItem>
      <FormItem label="记住我" name="remember" valuePropName="checked">
        <Switch defaultChecked />
      </FormItem>
      <Button type="primary" htmlType="submit" block>
        登录
      </Button>
    </Form>
  )
}

function RulesDemo() {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      style={{ width: 320 }}
      scrollToFirstError
      onFinish={(values) => Toast.show(JSON.stringify(values))}
    >
      <FormItem
        label="邮箱"
        name="email"
        rules={[
          { required: true, message: '请输入邮箱' },
          { pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: '邮箱格式不正确' },
        ]}
      >
        <Input placeholder="name@example.com" />
      </FormItem>
      <FormItem
        label="昵称"
        name="nickname"
        rules={[{ min: 2, max: 12, message: '2–12 个字符' }]}
      >
        <Input placeholder="你的昵称" />
      </FormItem>
      <Space>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
        <Button onClick={() => form.resetFields()}>重置</Button>
      </Space>
    </Form>
  )
}

function LayoutDemo() {
  return (
    <Form layout="horizontal" style={{ width: 400 }} colon>
      <FormItem label="昵称" labelCol={6} wrapperCol={18} required>
        <Input placeholder="麻薯" />
      </FormItem>
      <FormItem label="简介" labelCol={6} wrapperCol={18} help="最多 40 字">
        <Input placeholder="一句话介绍" />
      </FormItem>
    </Form>
  )
}

function StatusDemo() {
  return (
    <Form style={{ width: 320 }}>
      <FormItem label="成功" validateStatus="success" help="校验通过">
        <Input defaultValue="ok" />
      </FormItem>
      <FormItem label="警告" validateStatus="warning" help="建议再确认">
        <Input defaultValue="maybe" />
      </FormItem>
      <FormItem label="错误" error="不能为空" required>
        <Input status="error" />
      </FormItem>
      <FormItem label="校验中" validateStatus="validating" help="正在检查…">
        <Input defaultValue="…" />
      </FormItem>
    </Form>
  )
}

function InlineDemo() {
  return (
    <Form layout="inline">
      <FormItem label="关键词">
        <Input placeholder="搜索" style={{ width: 160 }} />
      </FormItem>
      <FormItem>
        <Space>
          <Button type="primary" htmlType="submit">
            查询
          </Button>
          <Button htmlType="reset">重置</Button>
        </Space>
      </FormItem>
    </Form>
  )
}

function ListDemo() {
  const [form] = Form.useForm()

  return (
    <Form
      form={form}
      style={{ width: 360 }}
      initialValues={{ contacts: [{ name: '麻薯', phone: '' }] }}
      onFinish={(values) => Toast.show(JSON.stringify(values))}
    >
      <Form.List name="contacts">
        {(fields, { add, remove }) => (
          <Space direction="vertical" size="md" style={{ width: '100%' }}>
            {fields.map((field) => (
              <Space key={field.key} align="start">
                <FormItem
                  label="姓名"
                  name={[field.name, 'name']}
                  rules={[{ required: true, message: '请输入姓名' }]}
                >
                  <Input placeholder="姓名" style={{ width: 120 }} />
                </FormItem>
                <FormItem label="电话" name={[field.name, 'phone']}>
                  <Input placeholder="电话" style={{ width: 140 }} />
                </FormItem>
                <Button danger onClick={() => remove(field.name)}>
                  删除
                </Button>
              </Space>
            ))}
            <Space>
              <Button onClick={() => add({ name: '', phone: '' })}>添加联系人</Button>
              <Button type="primary" htmlType="submit">
                提交
              </Button>
            </Space>
          </Space>
        )}
      </Form.List>
    </Form>
  )
}

export const demos: DemoItem[] = [
  { title: '基础用法', description: 'Form + FormItem', component: BasicDemo },
  { title: 'useForm + rules', description: 'form 实例与校验规则', component: RulesDemo },
  { title: '水平布局', description: 'layout=horizontal + labelCol', component: LayoutDemo },
  { title: '校验状态', description: 'validateStatus / help / error', component: StatusDemo },
  { title: '行内表单', description: 'layout=inline', component: InlineDemo },
  { title: 'Form.List', description: '动态增减表单项', component: ListDemo },
]
