import { Icon, Space, Tag } from '@mochi-ui/react'
import { ICON_LIST } from '@mochi-ui/icons'
import type { DemoItem } from '../../types'

function BasicDemo() {
  return (
    <Space size="lg">
      <Icon name="cloud" size={32} color="#6cb4ee" bounce />
      <Icon name="star" size={32} color="#f5c31c" bounce />
      <Icon name="heart" size={32} color="#e05a5a" bounce />
      <Icon name="sparkle" size={32} color="#c8b8e8" bounce />
    </Space>
  )
}

function SizeDemo() {
  return (
    <Space size="lg" align="center">
      <Icon name="bubble" size={16} color="#6cb4ee" />
      <Icon name="bubble" size={28} color="#6cb4ee" />
      <Icon name="bubble" size={48} color="#6cb4ee" />
    </Space>
  )
}

function CatalogDemo() {
  return (
    <div style={{ maxHeight: 320, overflow: 'auto', paddingRight: 4 }}>
      <Space wrap size="md">
        {ICON_LIST.map(({ name, label }) => (
          <Tag key={name} color="primary" variant="outlined">
            <Icon name={name} size={16} /> {label}
          </Tag>
        ))}
      </Space>
    </div>
  )
}

export const demos: DemoItem[] = [
  { title: '基础用法', description: '原创 SVG + bounce 弹跳', component: BasicDemo },
  { title: '尺寸', description: 'size 可调', component: SizeDemo },
  { title: '图标一览', description: `${ICON_LIST.length} 个图标`, component: CatalogDemo },
]
