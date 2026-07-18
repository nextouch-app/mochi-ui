import { Loading, Space } from '@nextouch-app/mochi-react'
import type { DemoItem } from '../../types'

function BasicDemo() {
  return <Loading tip="加载中…" />
}

function SizeDemo() {
  return (
    <Space>
      <Loading size="sm" />
      <Loading size="md" />
      <Loading size="lg" />
    </Space>
  )
}

function StateDemo() {
  return <Loading spinning tip="圆点脉冲动画" />
}

export const demos: DemoItem[] = [
  { title: '基础用法', description: '圆点脉冲', component: BasicDemo },
  { title: '尺寸', description: 'sm / md / lg', component: SizeDemo },
  { title: '提示文案', description: 'tip 属性', component: StateDemo },
]
