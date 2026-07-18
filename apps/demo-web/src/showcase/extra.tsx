import { useState, type ReactNode } from 'react'
import {
  Checkbox,
  Radio,
  RadioGroup,
  TextArea,
  SearchBar,
  Button,
  Tabs,
  Toast,
  Collapse,
  List,
  ListItem,
  Progress,
  Alert,
  Empty,
  Avatar,
  Badge,
  Stepper,
  Slider,
  Tag,
  Select,
  Table,
  Pagination,
  Skeleton,
  Message,
  Notification,
  Rate,
  Upload,
  Dropdown,
  Popover,
  Popconfirm,
  Swiper,
  Calendar,
  DatePicker,
  Picker,
  PullToRefresh,
  Space,
  Cascader,
} from '@mochi-ui/react'
import type { DemoItem } from './types'

function CardLike({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        padding: 16,
        background: '#fff8e7',
        border: '2.5px solid #c4b89e',
        borderRadius: 16,
        fontWeight: 700,
      }}
    >
      {children}
    </div>
  )
}

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
      {
        title: '单选组',
        description: 'RadioGroup',
        component: () => (
          <RadioGroup defaultValue="a">
            <Radio value="a">选项 A</Radio>
            <Radio value="b">选项 B</Radio>
          </RadioGroup>
        ),
      },
      { title: '禁用', description: 'disabled', component: () => <Radio disabled>禁用</Radio> },
      { title: '选中', description: 'checked', component: () => <Radio checked>选中</Radio> },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'TextArea',
    demos: [
      {
        title: '文本域',
        description: '多行输入',
        component: () => <TextArea placeholder="多行输入" style={{ width: 280 }} />,
      },
      {
        title: '搜索',
        description: 'SearchBar',
        component: () => <SearchBar placeholder="搜索麻薯…" style={{ width: 280 }} />,
      },
    ] as DemoItem[],
  },
  {
    category: '导航',
    component: 'Tabs',
    demos: [
      {
        title: '基础',
        description: 'pill 标签',
        component: () => (
          <Tabs
            defaultActiveKey="1"
            items={[
              { key: '1', label: '首页', children: '内容一' },
              { key: '2', label: '发现', children: '内容二' },
              { key: '3', label: '我的', children: '内容三' },
            ]}
          />
        ),
      },
      {
        title: '受控',
        description: 'activeKey',
        component: () => (
          <Tabs activeKey="2" items={[{ key: '1', label: 'A' }, { key: '2', label: 'B' }]} />
        ),
      },
      {
        title: '提示',
        description: 'Toast',
        component: () => (
          <Button onClick={() => Toast.show('你好，麻薯！')}>弹出 Toast</Button>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '反馈',
    component: 'Alert',
    demos: [
      {
        title: '警告条',
        description: 'Alert',
        component: () => (
          <Space direction="vertical" style={{ width: '100%' }}>
            <Alert type="info" message="信息提示" />
            <Alert type="success" message="成功" description="操作已完成" />
          </Space>
        ),
      },
      {
        title: '折叠',
        description: 'Collapse',
        component: () => (
          <Collapse
            accordion
            items={[
              { key: '1', label: '什么是 Mochi UI？', children: '软糯卡通 React 组件库。' },
              { key: '2', label: '可商用吗？', children: 'MIT 许可，可商用。' },
            ]}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'List',
    demos: [
      {
        title: '列表',
        description: '虚线分隔',
        component: () => (
          <List header="今日任务" style={{ width: 320 }}>
            <ListItem description="完成组件库" extra={<Tag color="mint">进行中</Tag>}>
              实现 Button
            </ListItem>
            <ListItem description="写文档">VitePress</ListItem>
          </List>
        ),
      },
      { title: '空状态', description: 'Empty', component: () => <Empty description="还没有麻薯～" /> },
      {
        title: '头像徽标',
        description: 'Avatar + Badge',
        component: () => (
          <Space>
            <Badge count={5}>
              <Avatar>M</Avatar>
            </Badge>
            <Badge dot>
              <Avatar>☁</Avatar>
            </Badge>
          </Space>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Progress',
    demos: [
      {
        title: '进度条',
        description: '斜纹动画',
        component: () => <Progress percent={64} style={{ width: 280 }} />,
      },
      {
        title: '成功',
        description: 'status=success',
        component: () => <Progress percent={100} status="success" style={{ width: 280 }} />,
      },
      {
        title: '步进 / 滑块',
        description: 'Stepper + Slider',
        component: () => (
          <Space direction="vertical" style={{ width: 280 }}>
            <Stepper defaultValue={3} />
            <Slider defaultValue={40} />
          </Space>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'Select',
    demos: [
      {
        title: '多选',
        description: 'mode="multiple"',
        component: () => (
          <Select
            mode="multiple"
            maxTagCount={2}
            placeholder="选择口味"
            style={{ width: 280 }}
            options={[
              { label: '原味', value: 'plain' },
              { label: '抹茶', value: 'matcha' },
              { label: '草莓', value: 'strawberry' },
            ]}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Tag',
    demos: [
      {
        title: '可关闭',
        description: 'closable',
        component: () => (
          <Tag color="mint" closable onClose={() => Toast.show('已关闭标签')}>
            季节限定
          </Tag>
        ),
      },
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
              {
                key: 'tag',
                title: '标签',
                filters: [
                  { text: '经典', value: '经典' },
                  { text: '季节', value: '季节' },
                ],
                onFilter: (value, record) => record.tag === value,
                render: (_, r) => <Tag color="mint">{String(r.tag)}</Tag>,
              },
            ]}
            dataSource={[
              { key: '1', name: '原味', stock: 12, tag: '经典' },
              { key: '2', name: '抹茶', stock: 8, tag: '季节' },
            ]}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Pagination',
    demos: [
      {
        title: '基础分页',
        description: 'total + 当前页',
        component: () => <Pagination total={85} showTotal />,
      },
      {
        title: '受控',
        description: 'current',
        component: () => <Pagination total={40} current={2} pageSize={10} />,
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Skeleton',
    demos: [
      {
        title: '基础骨架',
        description: 'avatar + paragraph',
        component: () => <Skeleton avatar paragraph={{ rows: 3 }} />,
      },
      {
        title: '仅段落',
        description: 'paragraph',
        component: () => <Skeleton paragraph={{ rows: 4 }} style={{ width: 280 }} />,
      },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'Rate',
    demos: [
      { title: '基础评分', description: '默认半选/整星', component: () => <Rate defaultValue={3} /> },
      { title: '只读', description: 'disabled', component: () => <Rate value={4} disabled /> },
      { title: '允许半星', description: 'allowHalf', component: () => <Rate allowHalf defaultValue={2.5} /> },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'Upload',
    demos: [
      { title: '上传区', description: '虚线圆角区域', component: () => <Upload /> },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'DatePicker',
    demos: [
      { title: '日期选择', description: 'DatePicker', component: () => <DatePicker /> },
      {
        title: '日期时间',
        description: 'showTime',
        component: () => <DatePicker showTime format="YYYY-MM-DD HH:mm" />,
      },
      {
        title: '范围选择',
        description: 'RangePicker',
        component: () => <DatePicker.RangePicker />,
      },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'Cascader',
    demos: [
      {
        title: '级联选择',
        description: '省 / 市',
        component: () => (
          <Cascader
            style={{ width: 280 }}
            options={[
              {
                value: 'zhejiang',
                label: '浙江',
                children: [
                  { value: 'hangzhou', label: '杭州' },
                  { value: 'ningbo', label: '宁波' },
                ],
              },
              {
                value: 'jiangsu',
                label: '江苏',
                children: [{ value: 'nanjing', label: '南京' }],
              },
            ]}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Calendar',
    demos: [
      { title: '日历面板', description: 'Calendar', component: () => <Calendar /> },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'Picker',
    demos: [
      {
        title: '选择器',
        description: '底部滚轮 / 面板',
        component: function PickerDemo() {
          const [open, setOpen] = useState(false)
          const [flavor, setFlavor] = useState('抹茶')
          return (
            <Space direction="vertical">
              <Button onClick={() => setOpen(true)}>打开 Picker（当前：{flavor}）</Button>
              <Picker
                open={open}
                title="选择口味"
                columns={[
                  [
                    { label: '原味', value: '原味' },
                    { label: '抹茶', value: '抹茶' },
                    { label: '草莓', value: '草莓' },
                  ],
                ]}
                onClose={() => setOpen(false)}
                onConfirm={(v) => {
                  setFlavor(String(v[0]))
                  setOpen(false)
                }}
              />
            </Space>
          )
        },
      },
    ] as DemoItem[],
  },
  {
    category: '导航',
    component: 'Dropdown',
    demos: [
      {
        title: '下拉菜单',
        description: '点击触发菜单',
        component: () => (
          <Dropdown
            items={[
              { key: '1', label: '编辑' },
              {
                key: 'more',
                label: '更多',
                children: [
                  { key: 'share', label: '分享' },
                  { key: 'copy', label: '复制链接' },
                ],
              },
              { key: '3', label: '删除', danger: true },
            ]}
          >
            <Button>更多操作</Button>
          </Dropdown>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '反馈',
    component: 'Popover',
    demos: [
      {
        title: '气泡卡片',
        description: 'title + content',
        component: () => (
          <Popover title="提示" content="这是一段说明文字">
            <Button>Popover</Button>
          </Popover>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '反馈',
    component: 'Popconfirm',
    demos: [
      {
        title: '气泡确认',
        description: '二次确认',
        component: () => (
          <Popconfirm title="确认删除？" onConfirm={() => Toast.show('已删除')}>
            <Button danger>删除</Button>
          </Popconfirm>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '反馈',
    component: 'Message',
    demos: [
      {
        title: '全局轻提示',
        description: 'Message.success / info / destroy',
        component: () => (
          <Space>
            <Button
              type="primary"
              onClick={() => {
                Message.open({ key: 'save', content: '保存成功', type: 'success' })
              }}
            >
              成功
            </Button>
            <Button onClick={() => Message.info('温馨提示')}>信息</Button>
            <Button danger onClick={() => Message.error('出错了')}>
              错误
            </Button>
            <Button onClick={() => Message.destroy('save')}>关闭保存提示</Button>
          </Space>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '反馈',
    component: 'Notification',
    demos: [
      {
        title: '通知提醒',
        description: '带标题的通知卡片',
        component: () => (
          <Button
            onClick={() =>
              Notification.open({
                title: '新消息',
                description: '麻薯库存已更新',
                type: 'info',
              })
            }
          >
            打开 Notification
          </Button>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Swiper',
    demos: [
      {
        title: '基础轮播',
        description: 'autoplay',
        component: () => (
          <Swiper autoplay style={{ width: 320 }}>
            <div style={{ background: '#e8f5fc', width: '100%', textAlign: 'center' }}>天空蓝</div>
            <div style={{ background: '#eef8e4', width: '100%', textAlign: 'center' }}>薄荷绿</div>
            <div style={{ background: '#fff0f4', width: '100%', textAlign: 'center' }}>樱花粉</div>
          </Swiper>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '反馈',
    component: 'PullToRefresh',
    demos: [
      {
        title: '下拉刷新',
        description: '触控设备更明显',
        component: () => (
          <PullToRefresh
            onRefresh={() =>
              new Promise((r) =>
                setTimeout(() => {
                  Toast.show('已刷新')
                  r()
                }, 800),
              )
            }
          >
            <CardLike>下拉试试刷新</CardLike>
          </PullToRefresh>
        ),
      },
    ] as DemoItem[],
  },
]
