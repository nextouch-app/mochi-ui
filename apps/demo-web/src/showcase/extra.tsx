import { useState, type ReactNode } from 'react'
import {
  Checkbox, Radio, RadioGroup, Space, SearchBar, Button, Tabs, Toast, Collapse, List, ListItem,
  Progress, Alert, Empty, Avatar, Badge, Stepper, Slider, Tag, TextArea,
  Table, Pagination, Skeleton, Message, Notification, Rate, Upload, Dropdown, Popover, Popconfirm,
  Swiper, Calendar, DatePicker, Picker, PullToRefresh,
} from '@mochi-ui/react'
import type { DemoItem } from './types'

export const extraRegistry = [
  {
    category: '数据录入',
    component: 'Checkbox',
    demos: [
      { title: '基础', description: '圆形勾选', component: () => <Checkbox defaultChecked>同意协议</Checkbox> },
      { title: '未选', description: '默认未选', component: () => <Checkbox>选项 A</Checkbox> },
      { title: '禁用', description: 'disabled', component: () => <Checkbox disabled checked>禁用</Checkbox> },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'Radio',
    demos: [
      { title: '单选组', description: 'RadioGroup', component: () => (
        <RadioGroup defaultValue="a">
          <Radio value="a">选项 A</Radio>
          <Radio value="b">选项 B</Radio>
        </RadioGroup>
      )},
      { title: '禁用', description: 'disabled', component: () => <Radio disabled>禁用</Radio> },
      { title: '选中', description: 'checked', component: () => <Radio checked>选中</Radio> },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'TextArea',
    demos: [
      { title: '文本域', description: '多行输入', component: () => <TextArea placeholder="多行输入" style={{ width: 280 }} /> },
      { title: '搜索', description: 'SearchBar', component: () => <SearchBar placeholder="搜索麻薯…" style={{ width: 280 }} /> },
    ] as DemoItem[],
  },
  {
    category: '导航',
    component: 'Tabs',
    demos: [
      { title: '基础', description: 'pill 标签', component: () => (
        <Tabs
          defaultActiveKey="1"
          items={[
            { key: '1', label: '首页', children: '内容一' },
            { key: '2', label: '发现', children: '内容二' },
            { key: '3', label: '我的', children: '内容三' },
          ]}
        />
      )},
      { title: '受控', description: 'activeKey', component: () => (
        <Tabs activeKey="2" items={[{ key: '1', label: 'A' }, { key: '2', label: 'B' }]} />
      )},
      { title: '提示', description: 'Toast', component: () => (
        <Button onClick={() => Toast.show('你好，麻薯！')}>弹出 Toast</Button>
      )},
    ] as DemoItem[],
  },
  {
    category: '反馈',
    component: 'Alert',
    demos: [
      { title: '警告条', description: 'Alert', component: () => (
        <Space direction="vertical" style={{ width: '100%' }}>
          <Alert type="info" message="信息提示" />
          <Alert type="success" message="成功" description="操作已完成" />
        </Space>
      )},
      { title: '折叠', description: 'Collapse', component: () => (
        <Collapse
          accordion
          items={[
            { key: '1', label: '什么是 Mochi UI？', children: '软糯卡通 React 组件库。' },
            { key: '2', label: '可商用吗？', children: 'MIT 许可，可商用。' },
          ]}
        />
      )},
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'List',
    demos: [
      { title: '列表', description: '虚线分隔', component: () => (
        <List header="今日任务" style={{ width: 320 }}>
          <ListItem description="完成组件库" extra={<Tag color="mint">进行中</Tag>}>实现 Button</ListItem>
          <ListItem description="写文档">VitePress</ListItem>
        </List>
      )},
      { title: '空状态', description: 'Empty', component: () => <Empty description="还没有麻薯～" /> },
      { title: '头像徽标', description: 'Avatar + Badge', component: () => (
        <Space>
          <Badge count={5}><Avatar>M</Avatar></Badge>
          <Badge dot><Avatar>☁</Avatar></Badge>
        </Space>
      )},
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Progress',
    demos: [
      { title: '进度条', description: '斜纹动画', component: () => <Progress percent={64} style={{ width: 280 }} /> },
      { title: '成功', description: 'status=success', component: () => <Progress percent={100} status="success" style={{ width: 280 }} /> },
      { title: '步进/滑块', description: 'Stepper + Slider', component: () => (
        <Space direction="vertical" style={{ width: 280 }}>
          <Stepper defaultValue={3} />
          <Slider defaultValue={40} />
        </Space>
      )},
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Table',
    demos: [
      {
        title: '基础表格',
        description: 'columns + dataSource',
        component: () => (
          <Table
            columns={[
              { key: 'name', title: '口味', dataIndex: 'name' },
              { key: 'stock', title: '库存', dataIndex: 'stock', align: 'center' },
              { key: 'tag', title: '标签', render: (_, r) => <Tag color="mint">{String(r.tag)}</Tag> },
            ]}
            dataSource={[
              { key: '1', name: '原味', stock: 12, tag: '经典' },
              { key: '2', name: '抹茶', stock: 8, tag: '季节' },
            ]}
          />
        ),
      },
      { title: '分页', description: 'Pagination', component: () => <Pagination total={85} showTotal /> },
      { title: '骨架屏', description: 'Skeleton', component: () => <Skeleton avatar paragraph={{ rows: 3 }} /> },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'Rate',
    demos: [
      { title: '评分', description: 'Rate', component: () => <Rate defaultValue={3} /> },
      { title: '上传', description: 'Upload', component: () => <Upload /> },
      { title: '日期', description: 'DatePicker + Calendar', component: () => (
        <Space direction="vertical">
          <DatePicker />
          <Calendar />
        </Space>
      )},
    ] as DemoItem[],
  },
  {
    category: '导航',
    component: 'Dropdown',
    demos: [
      {
        title: '下拉菜单',
        description: 'Dropdown',
        component: () => (
          <Dropdown
            items={[
              { key: '1', label: '编辑' },
              { key: '2', label: '分享' },
              { key: '3', label: '删除', danger: true },
            ]}
          >
            <Button>更多操作</Button>
          </Dropdown>
        ),
      },
      {
        title: '气泡 / 确认',
        description: 'Popover + Popconfirm',
        component: () => (
          <Space>
            <Popover title="提示" content="这是一段说明文字">
              <Button>Popover</Button>
            </Popover>
            <Popconfirm title="确认删除？" onConfirm={() => Toast.show('已删除')}>
              <Button danger>删除</Button>
            </Popconfirm>
          </Space>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '反馈',
    component: 'Message',
    demos: [
      {
        title: '全局提示',
        description: 'Message / Notification',
        component: () => (
          <Space>
            <Button type="primary" onClick={() => Message.success('保存成功')}>Message</Button>
            <Button onClick={() => Notification.open({ title: '新消息', description: '麻薯库存已更新', type: 'info' })}>
              Notification
            </Button>
          </Space>
        ),
      },
      {
        title: '轮播',
        description: 'Swiper',
        component: () => (
          <Swiper autoplay style={{ width: 320 }}>
            <div style={{ background: '#e8f5fc', width: '100%', textAlign: 'center' }}>天空蓝</div>
            <div style={{ background: '#eef8e4', width: '100%', textAlign: 'center' }}>薄荷绿</div>
            <div style={{ background: '#fff0f4', width: '100%', textAlign: 'center' }}>樱花粉</div>
          </Swiper>
        ),
      },
      {
        title: 'Picker / 下拉刷新',
        description: '移动端常用',
        component: function MobileExtrasDemo() {
          const [open, setOpen] = useState(false)
          const [flavor, setFlavor] = useState('抹茶')
          return (
            <Space direction="vertical" style={{ width: 320 }}>
              <Button onClick={() => setOpen(true)}>打开 Picker（当前：{flavor}）</Button>
              <Picker
                open={open}
                title="选择口味"
                columns={[[
                  { label: '原味', value: '原味' },
                  { label: '抹茶', value: '抹茶' },
                  { label: '草莓', value: '草莓' },
                ]]}
                onClose={() => setOpen(false)}
                onConfirm={(v) => {
                  setFlavor(String(v[0]))
                  setOpen(false)
                }}
              />
              <PullToRefresh
                onRefresh={() => new Promise((r) => setTimeout(() => { Toast.show('已刷新'); r() }, 800))}
              >
                <CardLike>下拉试试刷新（触控设备更明显）</CardLike>
              </PullToRefresh>
            </Space>
          )
        },
      },
    ] as DemoItem[],
  },
]

function CardLike({ children }: { children: ReactNode }) {
  return (
    <div style={{ padding: 16, background: '#fff8e7', border: '2.5px solid #c4b89e', borderRadius: 16, fontWeight: 700 }}>
      {children}
    </div>
  )
}
