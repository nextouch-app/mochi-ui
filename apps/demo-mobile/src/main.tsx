import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import '@nextouch-app/mochi-tokens/tokens.css'
import {
  Button,
  Card,
  Input,
  ConfigProvider,
  Form,
  FormItem,
  NavBar,
  List,
  ListItem,
  TabBar,
  Icon,
  SafeArea,
  Toast,
  Tag,
} from '@nextouch-app/mochi-mobile'
import './app.css'

function App() {
  const [tab, setTab] = useState('home')

  return (
    <ConfigProvider>
      <SafeArea position="top">
        <div className="phone">
          <NavBar title="Mochi Mobile" />
          {tab === 'home' && (
            <div className="phone__body">
              <Card title="欢迎" variant="pink">
                预览：Button / Card / Input
              </Card>
              <Form
                onSubmit={(e) => {
                  e.preventDefault()
                  Toast.show('登录成功 ☁')
                }}
              >
                <FormItem label="昵称" required>
                  <Input placeholder="麻薯爱好者" prefix="☁" />
                </FormItem>
                <Button type="primary" htmlType="submit" block>
                  开始
                </Button>
              </Form>
            </div>
          )}
          {tab === 'list' && (
            <div className="phone__body">
              <List header="组件清单">
                <ListItem extra={<Tag color="mint">P0</Tag>}>Button</ListItem>
                <ListItem extra={<Tag color="mint">P0</Tag>}>Input</ListItem>
                <ListItem extra={<Tag color="lavender">P1</Tag>}>TabBar</ListItem>
              </List>
            </div>
          )}
          <TabBar
            activeKey={tab}
            onChange={setTab}
            items={[
              { key: 'home', title: '首页', icon: <Icon name="cloud" size={20} /> },
              { key: 'list', title: '列表', icon: <Icon name="star" size={20} /> },
            ]}
          />
        </div>
      </SafeArea>
    </ConfigProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
