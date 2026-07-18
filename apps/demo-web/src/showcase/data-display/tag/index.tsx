import { Space, Tag } from '@nextouch-app/mochi-react'
import type { DemoItem } from '../../types'

function BasicDemo() {
  return (
    <Space>
      <Tag color="primary">Primary</Tag>
      <Tag color="pink">Pink</Tag>
      <Tag color="mint">Mint</Tag>
    </Space>
  )
}

function VariantDemo() {
  return (
    <Space>
      <Tag variant="solid" color="lavender">Solid</Tag>
      <Tag variant="outlined" color="primary">Outlined</Tag>
      <Tag variant="dashed" color="peach">Dashed</Tag>
    </Space>
  )
}

function SizeDemo() {
  return (
    <Space>
      <Tag size="sm">sm</Tag>
      <Tag size="md">md</Tag>
      <Tag size="lg">lg</Tag>
    </Space>
  )
}

export const demos: DemoItem[] = [
  { title: '基础用法', description: '马卡龙色标签', component: BasicDemo },
  { title: '变体', description: 'solid / outlined / dashed', component: VariantDemo },
  { title: '尺寸', description: 'sm / md / lg', component: SizeDemo },
]
