import { useState } from 'react'
import { createRoot, type Root } from 'react-dom/client'
import { cn, type ModalFuncProps } from '@nextouch-app/mochi-core'
import { ModalBase } from './Modal'
import { Button } from '../button/Button'

type ModalHandler = {
  destroy: () => void
  update: (props: Partial<ModalFuncProps>) => void
}

const instances: Array<{ destroy: () => void }> = []

const TYPE_ICON: Record<NonNullable<ModalFuncProps['type']>, string> = {
  info: 'ℹ️',
  success: '✅',
  error: '❌',
  warning: '⚠️',
  confirm: '❓',
}

function ConfirmDialog({
  open,
  props,
  onClose,
}: {
  open: boolean
  props: ModalFuncProps
  onClose: () => void
}) {
  const [loading, setLoading] = useState(false)
  const type = props.type ?? 'confirm'
  const showCancel = type === 'confirm' || type === 'warning'
  const icon = props.icon ?? TYPE_ICON[type]

  const handleOk = async () => {
    try {
      const result = props.onOk?.()
      if (result instanceof Promise) {
        setLoading(true)
        await result
      }
      onClose()
    } catch {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    props.onCancel?.()
    onClose()
  }

  return (
    <ModalBase
      open={open}
      title={props.title}
      width={props.width}
      centered={props.centered ?? true}
      maskClosable={false}
      onCancel={handleCancel}
      onClose={handleCancel}
      confirmLoading={loading}
      okText={props.okText ?? '确定'}
      cancelText={props.cancelText ?? '取消'}
      okButtonProps={props.okButtonProps}
      cancelButtonProps={props.cancelButtonProps}
      footer={
        showCancel ? undefined : (
          <Button type="primary" loading={loading} onClick={handleOk} {...props.okButtonProps}>
            {props.okText ?? '确定'}
          </Button>
        )
      }
      onOk={handleOk}
    >
      <div className={cn('mochi-modal-confirm', `mochi-modal-confirm--${type}`)}>
        {icon ? <span className="mochi-modal-confirm__icon">{icon}</span> : null}
        <div className="mochi-modal-confirm__content">{props.content}</div>
      </div>
    </ModalBase>
  )
}

function openModal(props: ModalFuncProps): ModalHandler {
  if (typeof document === 'undefined') {
    return { destroy: () => {}, update: () => {} }
  }

  const container = document.createElement('div')
  document.body.appendChild(container)
  const root: Root = createRoot(container)
  let currentProps = props
  let open = true

  const close = () => {
    open = false
    render()
    window.setTimeout(() => {
      root.unmount()
      container.remove()
      const index = instances.findIndex((item) => item.destroy === destroy)
      if (index >= 0) instances.splice(index, 1)
    }, 200)
  }

  const destroy = () => {
    close()
  }

  const render = () => {
    root.render(<ConfirmDialog open={open} props={currentProps} onClose={close} />)
  }

  render()
  instances.push({ destroy })

  return {
    destroy,
    update: (next) => {
      currentProps = { ...currentProps, ...next }
      render()
    },
  }
}

function createTypeMethod(type: ModalFuncProps['type']) {
  return (props: ModalFuncProps) => openModal({ ...props, type })
}

export const confirm = (props: ModalFuncProps) => openModal({ ...props, type: 'confirm' })
export const info = createTypeMethod('info')
export const success = createTypeMethod('success')
export const error = createTypeMethod('error')
export const warning = createTypeMethod('warning')

export function destroyAll() {
  ;[...instances].forEach((item) => item.destroy())
}
