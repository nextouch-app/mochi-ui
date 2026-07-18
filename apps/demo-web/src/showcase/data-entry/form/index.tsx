import { Form, FormItem, Input, Switch, Button, Toast, Select, Space } from '@mochi-ui/react'
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
      <FormItem label="记住我" name="remember">
        <Switch defaultChecked />
      </FormItem>
      <Button type="primary" htmlType="submit" block>
        登录
      </Button>
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

export const demos: DemoItem[] = [
  { title: '基础用法', description: 'Form + FormItem', component: BasicDemo },
  { title: '水平布局', description: 'layout=horizontal + labelCol', component: LayoutDemo },
  { title: '校验状态', description: 'validateStatus / help / error', component: StatusDemo },
  { title: '行内表单', description: 'layout=inline', component: InlineDemo },
]
