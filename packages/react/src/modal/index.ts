import { ModalBase } from './Modal'
import { confirm, destroyAll, error, info, success, warning } from './confirm'

export const Modal = Object.assign(ModalBase, {
  confirm,
  info,
  success,
  error,
  warning,
  destroyAll,
})

export type { ModalProps, ModalFuncProps } from '@mochi-ui/core'
