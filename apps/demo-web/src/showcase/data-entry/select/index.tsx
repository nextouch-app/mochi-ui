import { Select, Space } from '@mochi-ui/react'
import type { DemoItem } from '../../types'

const flavors = [
  { label: '原味', value: 'plain' },
  { label: '抹茶', value: 'matcha' },
  { label: '草莓', value: 'berry' },
  { label: '巧克力', value: 'choco', disabled: true },
]

function BasicDemo() {
  return <Select placeholder="选择口味" options={flavors} style={{ width: 220 }} />
}

function ConfigDemo() {
  return (
    <Space direction="vertical">
      <Select
        allowClear
        defaultValue="matcha"
        options={flavors}
        placeholder="可清除"
        style={{ width: 220 }}
      />
      <Select
        showSearch
        options={flavors}
        placeholder="可搜索"
        style={{ width: 220 }}
      />
      <Select status="error" options={flavors} placeholder="error" style={{ width: 220 }} />
      <Select loading options={flavors} placeholder="loading" style={{ width: 220 }} />
    </Space>
  )
}

function SizeDemo() {
  return (
    <Space direction="vertical">
      <Select size="small" options={flavors} placeholder="small" style={{ width: 200 }} />
      <Select size="middle" options={flavors} placeholder="middle" style={{ width: 200 }} />
      <Select size="large" options={flavors} placeholder="large" style={{ width: 200 }} />
    </Space>
  )
}

export const demos: DemoItem[] = [
  { title: '基础用法', description: '下拉选择', component: BasicDemo },
  { title: '配置项', description: 'allowClear / showSearch / status / loading', component: ConfigDemo },
  { title: '尺寸', description: 'small / middle / large', component: SizeDemo },
]
