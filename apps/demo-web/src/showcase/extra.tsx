import { useRef, useState, type ReactNode } from 'react'
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
  Transfer,
  Tree,
  TreeSelect,
  AutoComplete,
  Mentions,
  Timeline,
  Steps,
  Breadcrumb,
  Anchor,
  Affix,
  Image,
  Statistic,
  Descriptions,
  Segmented,
  Watermark,
  FloatButton,
  ColorPicker,
  Typography,
  Flex,
  Row,
  Col,
  Layout,
  Menu,
  InputNumber,
  QRCode,
  Tour,
  Spin,
  Splitter,
  TimePicker,
  Drawer,
  Typewriter,
  CodeBlock,
  Footer,
  Phone,
  Wallet,
  Time,
  Cursor,
  Title,
} from '@nextouch-app/mochi-react'
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
      {
        title: '复选组',
        description: 'Checkbox.Group',
        component: () => (
          <Checkbox.Group
            defaultValue={['mochi']}
            options={[
              { label: '麻薯', value: 'mochi' },
              { label: '奶茶', value: 'tea' },
              { label: '布丁', value: 'pudding' },
            ]}
          />
        ),
      },
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
        title: '环形',
        description: 'type=circle',
        component: () => <Progress type="circle" percent={72} />,
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
    category: '数据录入',
    component: 'Transfer',
    demos: [
      {
        title: '穿梭框',
        description: '左右转移',
        component: () => (
          <Transfer
            showSearch
            dataSource={[
              { key: '1', title: '抹茶', description: '季节限定' },
              { key: '2', title: '原味' },
              { key: '3', title: '草莓' },
              { key: '4', title: '芝麻', disabled: true },
            ]}
            defaultTargetKeys={['1']}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Tree',
    demos: [
      {
        title: '树形控件',
        description: '展开 / 勾选',
        component: () => (
          <Tree
            checkable
            defaultExpandAll
            treeData={[
              {
                key: 'sweet',
                title: '甜味',
                children: [
                  { key: 'matcha', title: '抹茶' },
                  { key: 'strawberry', title: '草莓' },
                ],
              },
              {
                key: 'salty',
                title: '咸味',
                children: [{ key: 'seaweed', title: '海苔' }],
              },
            ]}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'TreeSelect',
    demos: [
      {
        title: '树选择',
        description: '下拉树',
        component: () => (
          <TreeSelect
            showSearch
            style={{ width: 260 }}
            treeData={[
              {
                key: 'a',
                title: '甜味',
                children: [
                  { key: 'a1', title: '抹茶' },
                  { key: 'a2', title: '草莓' },
                ],
              },
            ]}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'AutoComplete',
    demos: [
      {
        title: '自动完成',
        description: '输入补全',
        component: () => (
          <AutoComplete
            allowClear
            style={{ width: 260 }}
            options={[
              { value: '抹茶麻薯' },
              { value: '草莓麻薯' },
              { value: '原味麻薯' },
            ]}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'Mentions',
    demos: [
      {
        title: '提及',
        description: '输入 @',
        component: () => (
          <Mentions
            style={{ width: 320 }}
            options={[
              { value: 'mochi', label: '麻薯' },
              { value: 'sky', label: '天空蓝' },
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
    category: '数据展示',
    component: 'Timeline',
    demos: [
      {
        title: '时间轴',
        description: '事件流',
        component: () => (
          <Timeline
            pending
            items={[
              { children: '创建仓库', color: 'success', label: 'Day 1' },
              { children: '发布组件', color: 'primary', label: 'Day 2' },
              { children: '完善文档', color: 'warning', label: 'Day 3' },
            ]}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '导航',
    component: 'Steps',
    demos: [
      {
        title: '步骤条',
        description: '分步流程',
        component: () => (
          <Steps
            current={1}
            items={[
              { title: '填写', description: '基础信息' },
              { title: '确认', description: '核对内容' },
              { title: '完成' },
            ]}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '导航',
    component: 'Breadcrumb',
    demos: [
      {
        title: '面包屑',
        description: '路径导航',
        component: () => (
          <Breadcrumb
            items={[
              { title: '首页', href: '#' },
              { title: '组件', href: '#' },
              { title: 'Breadcrumb' },
            ]}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '导航',
    component: 'Anchor',
    demos: [
      {
        title: '锚点',
        description: '页内导航',
        component: () => (
          <div style={{ display: 'flex', gap: 24 }}>
            <Anchor
              affix={false}
              items={[
                { key: 'a', href: '#mochi-anchor-a', title: '第一节' },
                { key: 'b', href: '#mochi-anchor-b', title: '第二节' },
              ]}
            />
            <div style={{ flex: 1 }}>
              <div id="mochi-anchor-a" style={{ height: 120, marginBottom: 12, background: '#e8f5fc', borderRadius: 12, padding: 12 }}>
                第一节
              </div>
              <div id="mochi-anchor-b" style={{ height: 120, background: '#eef8e4', borderRadius: 12, padding: 12 }}>
                第二节
              </div>
            </div>
          </div>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '布局',
    component: 'Affix',
    demos: [
      {
        title: '固钉',
        description: '滚动吸顶（页面滚动时更明显）',
        component: () => (
          <Affix offsetTop={12}>
            <Button type="primary">吸顶按钮</Button>
          </Affix>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Image',
    demos: [
      {
        title: '图片预览',
        description: '点击放大',
        component: () => (
          <Image
            width={180}
            height={120}
            alt="demo"
            src="https://picsum.photos/seed/mochi/360/240"
          />
        ),
      },
      {
        title: '图集预览',
        description: 'Image.PreviewGroup',
        component: () => (
          <Image.PreviewGroup>
            <Image width={100} height={72} src="https://picsum.photos/seed/a/200/140" alt="a" />
            <Image width={100} height={72} src="https://picsum.photos/seed/b/200/140" alt="b" />
            <Image width={100} height={72} src="https://picsum.photos/seed/c/200/140" alt="c" />
          </Image.PreviewGroup>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Statistic',
    demos: [
      {
        title: '统计数值',
        description: '前缀 / 后缀 / 精度',
        component: () => (
          <Space size="lg">
            <Statistic title="今日销量" value={1280} suffix="杯" />
            <Statistic title="好评率" value={98.6} precision={1} suffix="%" />
          </Space>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Descriptions',
    demos: [
      {
        title: '描述列表',
        description: 'bordered + 多列',
        component: () => (
          <Descriptions
            title="麻薯订单"
            bordered
            column={2}
            items={[
              { key: '1', label: '口味', children: '抹茶' },
              { key: '2', label: '糖度', children: '三分糖' },
              { key: '3', label: '备注', children: '少冰', span: 2 },
            ]}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'Segmented',
    demos: [
      {
        title: '分段控制',
        description: '日 / 周 / 月',
        component: () => <Segmented options={['日', '周', '月']} defaultValue="日" />,
      },
    ] as DemoItem[],
  },
  {
    category: '布局',
    component: 'Watermark',
    demos: [
      {
        title: '水印',
        description: '覆盖内容区',
        component: () => (
          <Watermark content={['Mochi UI', '麻薯']}>
            <CardLike>
              <div style={{ height: 140 }}>文档内容区域</div>
            </CardLike>
          </Watermark>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '通用',
    component: 'FloatButton',
    demos: [
      {
        title: '悬浮按钮',
        description: '演示内使用相对定位',
        component: () => (
          <div style={{ position: 'relative', height: 120 }}>
            <FloatButton
              type="primary"
              icon="↑"
              style={{ position: 'absolute', right: 8, bottom: 8 }}
            />
          </div>
        ),
      },
      {
        title: '分组',
        description: '点击展开',
        component: () => (
          <div style={{ position: 'relative', height: 180 }}>
            <FloatButton.Group
              trigger="click"
              type="primary"
              style={{ position: 'absolute', right: 8, bottom: 8 }}
            >
              <FloatButton icon="☎" style={{ position: 'static' }} />
              <FloatButton icon="✎" style={{ position: 'static' }} />
            </FloatButton.Group>
          </div>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'ColorPicker',
    demos: [
      {
        title: '颜色选择',
        description: '预设 + 文本',
        component: () => <ColorPicker defaultValue="#6cb4ee" showText />,
      },
    ] as DemoItem[],
  },
  {
    category: '通用',
    component: 'Typography',
    demos: [
      {
        title: '排版',
        description: 'Title / Text / Link',
        component: () => (
          <div>
            <Typography.Title level={3}>麻薯菜单</Typography.Title>
            <Typography.Paragraph>
              软糯圆润的组件库，主色天空蓝。
              <Typography.Text code>@nextouch-app/mochi-react</Typography.Text>
            </Typography.Paragraph>
            <Typography.Link href="https://github.com/nextouch-app/mochi-ui" target="_blank">
              GitHub
            </Typography.Link>
          </div>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '布局',
    component: 'Flex',
    demos: [
      {
        title: '弹性布局',
        description: 'gap + justify',
        component: () => (
          <Flex gap="md" justify="space-between" style={{ width: '100%' }}>
            <Button>左</Button>
            <Button type="primary">右</Button>
          </Flex>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '布局',
    component: 'Grid',
    demos: [
      {
        title: '栅格',
        description: 'Row / Col',
        component: () => (
          <Row gutter={12}>
            <Col span={12}>
              <CardLike>A</CardLike>
            </Col>
            <Col span={12}>
              <CardLike>B</CardLike>
            </Col>
          </Row>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '布局',
    component: 'Layout',
    demos: [
      {
        title: '页面布局',
        description: 'Header / Content / Footer',
        component: () => (
          <Layout style={{ minHeight: 180, border: '2.5px solid #c4b89e', borderRadius: 16, overflow: 'hidden' }}>
            <Layout.Header>Mochi UI</Layout.Header>
            <Layout.Content>内容区</Layout.Content>
            <Layout.Footer>© Nextouch</Layout.Footer>
          </Layout>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '导航',
    component: 'Menu',
    demos: [
      {
        title: '导航菜单',
        description: '可展开子项',
        component: () => (
          <Menu
            style={{ width: 220 }}
            defaultSelectedKeys={['home']}
            defaultOpenKeys={['shop']}
            items={[
              { key: 'home', label: '首页', icon: '☁' },
              {
                key: 'shop',
                label: '商店',
                icon: '🛒',
                children: [
                  { key: 'mochi', label: '麻薯' },
                  { key: 'tea', label: '奶茶' },
                ],
              },
              { key: 'danger', label: '危险项', danger: true },
            ]}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'InputNumber',
    demos: [
      {
        title: '数字输入',
        description: '步进 / 范围',
        component: () => <InputNumber defaultValue={3} min={0} max={99} addonAfter="杯" />,
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'QRCode',
    demos: [
      {
        title: '二维码',
        description: '可扫描链接',
        component: () => <QRCode value="https://github.com/nextouch-app/mochi-ui" size={140} />,
      },
    ] as DemoItem[],
  },
  {
    category: '反馈',
    component: 'Tour',
    demos: [
      {
        title: '漫游引导',
        description: '点击开始',
        component: function TourDemo() {
          const [open, setOpen] = useState(false)
          const btnRef = useRef<HTMLButtonElement>(null)
          return (
            <div>
              <button
                ref={btnRef}
                type="button"
                className="mochi-btn mochi-btn--primary mochi-btn--md"
                onClick={() => setOpen(true)}
              >
                开始引导
              </button>
              <Tour
                open={open}
                onClose={() => setOpen(false)}
                onFinish={() => setOpen(false)}
                steps={[
                  {
                    title: '欢迎',
                    description: '这是 Mochi UI 漫游引导。',
                    target: () => btnRef.current,
                  },
                  {
                    title: '完成',
                    description: '你可以继续探索其他组件。',
                    target: () => btnRef.current,
                  },
                ]}
              />
            </div>
          )
        },
      },
    ] as DemoItem[],
  },
  {
    category: '通用',
    component: 'Spin',
    demos: [
      {
        title: '加载中',
        description: '包裹内容',
        component: () => (
          <Spin spinning tip="煮麻薯中…">
            <CardLike>
              <div style={{ width: 200, height: 80 }}>内容区域</div>
            </CardLike>
          </Spin>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '布局',
    component: 'Splitter',
    demos: [
      {
        title: '分隔面板',
        description: '拖拽调整',
        component: () => (
          <Splitter style={{ height: 140 }}>
            <Splitter.Panel defaultSize={140}>
              <div>左侧</div>
            </Splitter.Panel>
            <Splitter.Panel>
              <div>右侧</div>
            </Splitter.Panel>
          </Splitter>
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据录入',
    component: 'TimePicker',
    demos: [
      {
        title: '时间选择',
        description: '时:分',
        component: () => <TimePicker showSecond={false} />,
      },
    ] as DemoItem[],
  },
  {
    category: '反馈',
    component: 'Drawer',
    demos: [
      {
        title: '抽屉',
        description: 'footer + extra',
        component: function DrawerDemo() {
          const [open, setOpen] = useState(false)
          return (
            <>
              <Button type="primary" onClick={() => setOpen(true)}>
                打开抽屉
              </Button>
              <Drawer
                open={open}
                title="订单详情"
                extra={<Tag color="mint">配送中</Tag>}
                footer={
                  <Button type="primary" onClick={() => setOpen(false)}>
                    知道了
                  </Button>
                }
                onClose={() => setOpen(false)}
              >
                麻薯 × 2，少冰三分糖。
              </Drawer>
            </>
          )
        },
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'Typewriter',
    demos: [
      {
        title: '打字机',
        description: '多句循环',
        component: () => (
          <Typewriter text={['软糯圆润', '天空蓝主色', 'Mochi UI']} loop speed={50} />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '数据展示',
    component: 'CodeBlock',
    demos: [
      {
        title: '代码块',
        description: '可复制',
        component: () => (
          <CodeBlock
            language="tsx"
            code={`import { Button } from '@nextouch-app/mochi-react'\n\n<Button type="primary">麻薯</Button>`}
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '其他',
    component: 'Title',
    demos: [
      {
        title: '丝带标题',
        description: '燕尾丝带',
        component: () => <Title>麻薯菜单</Title>,
      },
    ] as DemoItem[],
  },
  {
    category: '其他',
    component: 'Phone',
    demos: [
      {
        title: '手机框',
        description: '客服热线展示',
        component: () => <Phone number="400-600-0888" tone="peach" />,
      },
    ] as DemoItem[],
  },
  {
    category: '其他',
    component: 'Wallet',
    demos: [
      {
        title: '钱包卡',
        description: '余额展示',
        component: () => (
          <Wallet
            balance="128.50"
            tone="gold"
            actions={
              <Button size="sm" type="primary">
                充值
              </Button>
            }
          />
        ),
      },
    ] as DemoItem[],
  },
  {
    category: '其他',
    component: 'Time',
    demos: [
      {
        title: '时间',
        description: '实时时钟',
        component: () => <Time live showDate label="现在" />,
      },
    ] as DemoItem[],
  },
  {
    category: '其他',
    component: 'Cursor',
    demos: [
      {
        title: '装饰光标',
        description: '静态展示',
        component: () => <Cursor label="点我" />,
      },
    ] as DemoItem[],
  },
  {
    category: '其他',
    component: 'Footer',
    demos: [
      {
        title: '页脚',
        description: '版权与链接',
        component: () => (
          <Footer
            copyright="© 2026 Nextouch"
            links={[
              { title: 'GitHub', href: 'https://github.com/nextouch-app/mochi-ui' },
              { title: '文档', href: 'https://nextouch-app.github.io/mochi-ui/' },
            ]}
          />
        ),
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
