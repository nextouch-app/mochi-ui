import { Button, ConfigProvider, Space } from '@nextouch-app/mochi-react'
import type { DemoItem } from '../../types'

function BasicDemo() {
  return (
    <ConfigProvider size="lg">
      <Space>
        <Button type="primary">继承 lg</Button>
        <Button>Default lg</Button>
      </Space>
    </ConfigProvider>
  )
}

function VariantDemo() {
  return (
    <ConfigProvider
      theme={{
        token: { colorPrimary: '#F8B4C4' },
        cssVars: { 'color-primary-dark': '#E898A8' },
      }}
    >
      <Button type="primary">主题粉</Button>
    </ConfigProvider>
  )
}

function SizeDemo() {
  return (
    <ConfigProvider size="sm">
      <Button type="primary">全局 sm</Button>
    </ConfigProvider>
  )
}

export const demos: DemoItem[] = [
  { title: '全局尺寸', description: 'ConfigProvider size', component: BasicDemo },
  { title: '主题覆写', description: 'theme CSS 变量', component: VariantDemo },
  { title: '小尺寸', description: 'size=sm', component: SizeDemo },
]
