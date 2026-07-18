import { useState } from 'react'
import { Button, Icon, Space } from '@mochi-ui/react'
import type { DemoItem } from '../../types'

function BasicDemo() {
  return (
    <Space size="lg" wrap>
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link" href="#">Link</Button>
    </Space>
  )
}

function IconDemo() {
  return (
    <Space size="lg" wrap>
      <Button type="primary" icon={<Icon name="star" size={16} />}>
        带图标
      </Button>
      <Button
        type="default"
        icon={<Icon name="cloud" size={16} />}
        iconPlacement="end"
      >
        图标在后
      </Button>
      <Button type="primary" shape="circle" icon={<Icon name="heart" size={18} />} />
      <Button type="default" shape="round" icon={<Icon name="sparkle" size={16} />}>
        Round
      </Button>
    </Space>
  )
}

function SizeDemo() {
  return (
    <Space size="lg" align="center" wrap>
      <Button type="primary" size="small">small</Button>
      <Button type="primary" size="middle">middle</Button>
      <Button type="primary" size="large">large</Button>
    </Space>
  )
}

function StateDemo() {
  const [loading, setLoading] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%' }}>
      <Space size="lg" wrap>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button
          type="primary"
          loading={loading ? { delay: 400 } : false}
          onClick={() => {
            setLoading(true)
            window.setTimeout(() => setLoading(false), 2000)
          }}
        >
          点击后 loading
        </Button>
        <Button type="default" disabled>
          Disabled
        </Button>
        <Button type="primary" danger>
          Danger
        </Button>
        <Button type="default" danger>
          Danger Default
        </Button>
      </Space>
      <div
        style={{
          padding: 16,
          borderRadius: 20,
          background: 'linear-gradient(135deg, #6cb4ee, #3d9ad4)',
        }}
      >
        <Space wrap>
          <Button type="primary" ghost>
            Ghost Primary
          </Button>
          <Button type="default" ghost>
            Ghost Default
          </Button>
          <Button danger ghost>
            Ghost Danger
          </Button>
        </Space>
      </div>
      <Button type="primary" block>
        Block 通栏
      </Button>
    </div>
  )
}

export const demos: DemoItem[] = [
  { title: '类型 type', description: 'primary / default / dashed / text / link', component: BasicDemo },
  { title: '图标 icon', description: 'icon / iconPlacement / shape', component: IconDemo },
  { title: '尺寸 size', description: 'small / middle / large 或 sm / md / lg', component: SizeDemo },
  { title: '状态与变体', description: 'loading / disabled / danger / ghost / block', component: StateDemo },
]
