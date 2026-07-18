import { Divider } from '@nextouch-app/mochi-react'
import type { DemoItem } from '../../types'

function BasicDemo() {
  return <Divider />
}

function VariantDemo() {
  return (
    <div style={{ width: '100%' }}>
      <Divider type="dashed">Dashed</Divider>
      <Divider type="wave">Wave</Divider>
    </div>
  )
}

function StateDemo() {
  return <Divider>麻薯分割线</Divider>
}

export const demos: DemoItem[] = [
  { title: '基础用法', description: '实线分隔', component: BasicDemo },
  { title: '变体', description: 'dashed / wave', component: VariantDemo },
  { title: '带文字', description: '中间文案', component: StateDemo },
]
