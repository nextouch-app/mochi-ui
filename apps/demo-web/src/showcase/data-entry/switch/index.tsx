import { Switch, Space } from '@nextouch-app/mochi-react'
import type { DemoItem } from '../../types'

function BasicDemo() {
  return <Switch defaultChecked />
}

function TextDemo() {
  return (
    <Space>
      <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked />
      <Switch checkedChildren="ON" unCheckedChildren="OFF" />
    </Space>
  )
}

function SizeDemo() {
  return (
    <Space>
      <Switch size="small" defaultChecked />
      <Switch size="middle" defaultChecked />
      <Switch size="large" defaultChecked />
    </Space>
  )
}

function StateDemo() {
  return (
    <Space>
      <Switch loading defaultChecked />
      <Switch disabled defaultChecked />
      <Switch disabled />
    </Space>
  )
}

export const demos: DemoItem[] = [
  { title: '基础用法', description: '开 / 关', component: BasicDemo },
  { title: '文案', description: 'checkedChildren / unCheckedChildren', component: TextDemo },
  { title: '尺寸', description: 'small / middle / large', component: SizeDemo },
  { title: '状态', description: 'loading / disabled', component: StateDemo },
]
