import { Input, Icon, Space, Button } from '@mochi-ui/react'
import type { DemoItem } from '../../types'

function BasicDemo() {
  return <Input placeholder="请输入昵称" prefix={<Icon name="cloud" size={16} />} style={{ width: 280 }} />
}

function ConfigDemo() {
  return (
    <Space direction="vertical" size="lg" style={{ width: '100%' }}>
      <Input placeholder="allowClear" allowClear defaultValue="可清除" style={{ width: 280 }} />
      <Input
        placeholder="字数统计"
        showCount
        maxLength={20}
        defaultValue="麻薯"
        style={{ width: 280 }}
      />
      <Input
        addonBefore="https://"
        addonAfter=".com"
        placeholder="域名"
        style={{ width: 320 }}
      />
      <Input status="error" placeholder="error 状态" style={{ width: 280 }} />
      <Input status="warning" placeholder="warning 状态" style={{ width: 280 }} />
      <Input variant="filled" placeholder="filled 变体" style={{ width: 280 }} />
    </Space>
  )
}

function SizeDemo() {
  return (
    <Space direction="vertical" size="md">
      <Input size="small" placeholder="small" style={{ width: 240 }} />
      <Input size="middle" placeholder="middle" style={{ width: 240 }} />
      <Input size="large" placeholder="large" style={{ width: 240 }} />
    </Space>
  )
}

function EnterDemo() {
  return (
    <Space>
      <Input
        placeholder="回车触发"
        onPressEnter={() => alert('onPressEnter')}
        style={{ width: 220 }}
      />
      <Button type="primary">旁边的按钮</Button>
    </Space>
  )
}

export const demos: DemoItem[] = [
  { title: '基础用法', description: 'pill 输入框 + prefix', component: BasicDemo },
  { title: '配置项', description: 'allowClear / showCount / addon / status / variant', component: ConfigDemo },
  { title: '尺寸', description: 'small / middle / large', component: SizeDemo },
  { title: '回车回调', description: 'onPressEnter', component: EnterDemo },
]
