import { Card, Button, Icon, Space, Tag } from '@mochi-ui/react'
import type { DemoItem } from '../../types'

function BasicDemo() {
  return (
    <Card title="贴纸卡片" extra={<a href="#">更多</a>} style={{ width: 280 }}>
      有机圆角 + 云朵装饰，像游戏里的面板。
    </Card>
  )
}

function VariantDemo() {
  return (
    <Space wrap size="lg">
      <Card variant="dashed" title="Dashed" style={{ width: 160 }} decorated={false}>
        虚线
      </Card>
      <Card variant="pink" title="Pink" style={{ width: 160 }}>
        樱花粉
      </Card>
      <Card variant="mint" title="Mint" style={{ width: 160 }}>
        薄荷绿
      </Card>
    </Space>
  )
}

function ConfigDemo() {
  return (
    <Space wrap size="lg">
      <Card
        title="可悬停"
        hoverable
        style={{ width: 220 }}
        actions={[
          <Icon key="h" name="heart" />,
          <Icon key="s" name="star" />,
          <Icon key="c" name="cloud" />,
        ]}
      >
        hoverable + actions
      </Card>
      <Card title="加载中" loading style={{ width: 220 }}>
        不会显示
      </Card>
      <Card
        type="inner"
        size="small"
        decorated={false}
        title="Inner"
        extra={<Tag color="mint">small</Tag>}
        style={{ width: 220 }}
      >
        type=&quot;inner&quot; + size
      </Card>
    </Space>
  )
}

function CoverDemo() {
  return (
    <Card
      style={{ width: 260 }}
      cover={
        <div
          style={{
            height: 100,
            background: 'linear-gradient(135deg, #9ed4f6, #f7b6c8)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 800,
          }}
        >
          Cover
        </div>
      }
      title="带封面"
      actions={[<Button key="ok" type="primary" size="small">打开</Button>]}
    >
      cover / title / actions
    </Card>
  )
}

export const demos: DemoItem[] = [
  { title: '基础用法', description: 'title / extra', component: BasicDemo },
  { title: '变体 variant', description: 'dashed / pink / mint…', component: VariantDemo },
  { title: '配置项', description: 'hoverable / loading / actions / type / size', component: ConfigDemo },
  { title: '封面 cover', description: 'cover 插槽', component: CoverDemo },
]
