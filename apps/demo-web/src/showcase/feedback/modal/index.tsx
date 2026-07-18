import { useState } from 'react'
import { Modal, Button, Space } from '@mochi-ui/react'
import type { DemoItem } from '../../types'

function BasicDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        打开 Modal
      </Button>
      <Modal open={open} title="提示" onClose={() => setOpen(false)} onOk={() => setOpen(false)}>
        按 Esc 或点击遮罩可关闭。
      </Modal>
    </>
  )
}

function ConfigDemo() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  return (
    <>
      <Button onClick={() => setOpen(true)}>配置项 Demo</Button>
      <Modal
        open={open}
        title="确认提交？"
        width={420}
        maskClosable={false}
        confirmLoading={loading}
        okText="提交"
        cancelText="再想想"
        onCancel={() => setOpen(false)}
        onClose={() => setOpen(false)}
        onOk={() => {
          setLoading(true)
          setTimeout(() => {
            setLoading(false)
            setOpen(false)
          }, 1200)
        }}
      >
        maskClosable=false · confirmLoading · 自定义文案
      </Modal>
    </>
  )
}

function FooterDemo() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Button type="dashed" onClick={() => setOpen(true)}>
        自定义 Footer
      </Button>
      <Modal
        open={open}
        title="自定义底栏"
        onClose={() => setOpen(false)}
        footer={
          <Space>
            <Button onClick={() => setOpen(false)}>关闭</Button>
            <Button type="primary" danger onClick={() => setOpen(false)}>
              危险操作
            </Button>
          </Space>
        }
      >
        通过 footer 完全自定义底部按钮。
      </Modal>
    </>
  )
}

export const demos: DemoItem[] = [
  { title: '基础用法', description: '云朵对话框', component: BasicDemo },
  { title: '配置项', description: 'maskClosable / confirmLoading / width', component: ConfigDemo },
  { title: '自定义 Footer', description: 'footer 插槽', component: FooterDemo },
]
