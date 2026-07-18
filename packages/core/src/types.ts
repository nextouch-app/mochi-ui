import type {
  CSSProperties,
  ReactNode,
  MouseEvent,
  ChangeEvent,
  FocusEvent,
  FormEvent,
  KeyboardEvent,
} from 'react'

export type SizeType = 'sm' | 'md' | 'lg'
/** 尺寸别名：small→sm / middle→md / large→lg */
export type SizeAlias = SizeType | 'small' | 'middle' | 'large'

export type ButtonType = 'primary' | 'default' | 'text' | 'dashed' | 'link'
export type ButtonShape = 'default' | 'circle' | 'round'
export type ButtonIconPlacement = 'start' | 'end'
export type ButtonLoading = boolean | { delay?: number; icon?: ReactNode }

export interface BaseProps {
  className?: string
  style?: CSSProperties
  children?: ReactNode
}

export interface ButtonProps extends BaseProps {
  /** 按钮类型 */
  type?: ButtonType
  /** 尺寸：sm | md | lg（也接受 small | middle | large） */
  size?: SizeAlias
  /** 形状：default 胶囊 / round 更圆 / circle 圆形图标钮 */
  shape?: ButtonShape
  /** 危险按钮（删除等） */
  danger?: boolean
  /** 幽灵按钮：透明底，适合深色/复杂背景 */
  ghost?: boolean
  disabled?: boolean
  /** 加载中；支持 `{ delay }` 延迟进入 loading */
  loading?: ButtonLoading
  block?: boolean
  /** 前/后图标 */
  icon?: ReactNode
  iconPlacement?: ButtonIconPlacement
  /** 有 href 时渲染为 `<a>` */
  href?: string
  target?: string
  htmlType?: 'button' | 'submit' | 'reset'
  onClick?: (e: MouseEvent) => void
}

export type InputStatus = 'error' | 'warning' | ''
export type InputVariant = 'outlined' | 'filled' | 'borderless'

export interface InputProps {
  className?: string
  style?: CSSProperties
  size?: SizeAlias
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  readOnly?: boolean
  /** @deprecated 请用 status="error" */
  error?: boolean
  /** 校验状态 */
  status?: InputStatus
  /** 外观变体 */
  variant?: InputVariant
  allowClear?: boolean
  maxLength?: number
  showCount?: boolean
  type?: string
  prefix?: ReactNode
  suffix?: ReactNode
  addonBefore?: ReactNode
  addonAfter?: ReactNode
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onPressEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
  onClear?: () => void
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void
}

export type NamePath = string | Array<string | number>

export interface InputPasswordProps extends Omit<InputProps, 'type'> {
  visibilityToggle?: boolean
}

export interface InputSearchProps extends InputProps {
  enterButton?: ReactNode | boolean
  loading?: boolean
  onSearch?: (value: string, e?: unknown) => void
}

export type CardVariant = 'default' | 'dashed' | 'pink' | 'mint' | 'lavender' | 'peach'
export type CardSize = SizeAlias | 'default'

export interface CardProps extends BaseProps {
  /** 贴纸色 / 虚线变体 */
  variant?: CardVariant
  /** 内嵌卡片（`type="inner"`） */
  type?: 'default' | 'inner'
  size?: CardSize
  title?: ReactNode
  extra?: ReactNode
  cover?: ReactNode
  /** 底部操作区 */
  actions?: ReactNode[]
  bordered?: boolean
  hoverable?: boolean
  loading?: boolean
  /** 是否显示云朵装饰 */
  decorated?: boolean
}

export interface IconComponentProps extends BaseProps {
  name?: string
  size?: number | string
  color?: string
}

export interface LoadingProps extends BaseProps {
  size?: SizeType
  tip?: string
  spinning?: boolean
}

export type TagVariant = 'solid' | 'outlined' | 'dashed'
export type TagColor = 'primary' | 'pink' | 'mint' | 'lavender' | 'peach' | 'success' | 'warning' | 'error'

export interface TagProps extends BaseProps {
  variant?: TagVariant
  color?: TagColor
  size?: SizeType
  closable?: boolean
  onClose?: (e: MouseEvent) => void
  icon?: ReactNode
  bordered?: boolean
}

export type DividerType = 'solid' | 'dashed' | 'wave'

export interface DividerProps extends BaseProps {
  type?: DividerType
  orientation?: 'horizontal' | 'vertical'
  children?: ReactNode
}

export interface ConfigProviderProps {
  children?: ReactNode
  size?: SizeAlias
  theme?: Record<string, string>
}

export interface SwitchProps {
  className?: string
  style?: CSSProperties
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  loading?: boolean
  size?: SizeAlias
  /** 选中时显示的内容 */
  checkedChildren?: ReactNode
  /** 非选中时显示的内容 */
  unCheckedChildren?: ReactNode
  autoFocus?: boolean
  onChange?: (checked: boolean, e?: MouseEvent) => void
  onClick?: (checked: boolean, e?: MouseEvent) => void
}

export interface CheckboxProps {
  className?: string
  style?: CSSProperties
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  children?: ReactNode
  onChange?: (checked: boolean) => void
}

export interface RadioProps {
  className?: string
  style?: CSSProperties
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  value?: string | number
  children?: ReactNode
  onChange?: (checked: boolean) => void
}

export interface TextAreaProps {
  className?: string
  style?: CSSProperties
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  rows?: number
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export interface ModalProps extends BaseProps {
  open?: boolean
  title?: ReactNode
  /** 关闭回调（遮罩/Esc/取消） */
  onClose?: () => void
  /** 取消回调（与 onClose 等价） */
  onCancel?: () => void
  onOk?: () => void
  okText?: string
  cancelText?: string
  /** 确认按钮 loading */
  confirmLoading?: boolean
  okButtonProps?: Partial<ButtonProps>
  cancelButtonProps?: Partial<ButtonProps>
  footer?: ReactNode | null
  /** 点击遮罩是否关闭 */
  maskClosable?: boolean
  /** 是否显示右上角关闭 */
  closable?: boolean
  /** 是否展示遮罩 */
  mask?: boolean
  width?: number | string
  centered?: boolean
  destroyOnClose?: boolean
  afterClose?: () => void
  zIndex?: number
  /** 键盘 Esc 关闭 */
  keyboard?: boolean
  getContainer?: HTMLElement | false | (() => HTMLElement)
}

export interface ModalFuncProps {
  title?: ReactNode
  content?: ReactNode
  okText?: string
  cancelText?: string
  onOk?: () => void | Promise<void>
  onCancel?: () => void
  okButtonProps?: Partial<ButtonProps>
  cancelButtonProps?: Partial<ButtonProps>
  width?: number | string
  centered?: boolean
  type?: 'info' | 'success' | 'error' | 'warning' | 'confirm'
  icon?: ReactNode
}

export interface ToastOptions {
  content: ReactNode
  duration?: number
  position?: 'top' | 'bottom' | 'center'
}

export interface TabsProps extends BaseProps {
  activeKey?: string
  defaultActiveKey?: string
  items?: { key: string; label: ReactNode; children?: ReactNode }[]
  onChange?: (key: string) => void
}

export interface TabBarItem {
  key: string
  title: ReactNode
  icon?: ReactNode
}

export interface TabBarProps extends BaseProps {
  activeKey?: string
  defaultActiveKey?: string
  items?: TabBarItem[]
  onChange?: (key: string) => void
}

export interface NavBarProps extends BaseProps {
  title?: ReactNode
  back?: ReactNode
  onBack?: () => void
  right?: ReactNode
}

export interface ListProps extends BaseProps {
  header?: ReactNode
}

export interface ListItemProps extends BaseProps {
  prefix?: ReactNode
  extra?: ReactNode
  description?: ReactNode
  onClick?: () => void
}

export interface ProgressProps extends BaseProps {
  percent?: number
  status?: 'normal' | 'success' | 'error'
  showInfo?: boolean
}

export interface AlertProps extends BaseProps {
  type?: 'success' | 'info' | 'warning' | 'error'
  message?: ReactNode
  description?: ReactNode
  closable?: boolean
  onClose?: () => void
}

export interface BadgeProps extends BaseProps {
  count?: number | string
  dot?: boolean
  overflowCount?: number
}

export interface AvatarProps extends BaseProps {
  src?: string
  size?: number | SizeType
  shape?: 'circle' | 'square'
  alt?: string
}

export interface EmptyProps extends BaseProps {
  description?: ReactNode
}

export interface SliderProps {
  className?: string
  style?: CSSProperties
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  onChange?: (value: number) => void
}

export interface StepperProps {
  className?: string
  style?: CSSProperties
  value?: number
  defaultValue?: number
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  onChange?: (value: number) => void
}

export interface SelectOption {
  label: ReactNode
  value: string | number
  disabled?: boolean
}

export interface SelectProps {
  className?: string
  style?: CSSProperties
  mode?: 'multiple' | 'tags'
  value?: string | number | Array<string | number>
  defaultValue?: string | number | Array<string | number>
  options?: SelectOption[]
  placeholder?: string
  disabled?: boolean
  loading?: boolean
  allowClear?: boolean
  showSearch?: boolean
  size?: SizeAlias
  status?: InputStatus
  maxTagCount?: number | 'responsive'
  /** 下拉挂载是否打开（受控） */
  open?: boolean
  defaultOpen?: boolean
  onDropdownVisibleChange?: (open: boolean) => void
  onChange?: (
    value: string | number | Array<string | number> | undefined,
    option?: SelectOption | SelectOption[],
  ) => void
  onClear?: () => void
  onSearch?: (keyword: string) => void
  filterOption?: boolean | ((input: string, option: SelectOption) => boolean)
  notFoundContent?: ReactNode
  listHeight?: number
}

export interface CollapseItem {
  key: string
  label: ReactNode
  children?: ReactNode
}

export interface CollapseProps extends BaseProps {
  items?: CollapseItem[]
  activeKey?: string | string[]
  defaultActiveKey?: string | string[]
  accordion?: boolean
  onChange?: (keys: string[]) => void
}

export interface SafeAreaProps extends BaseProps {
  position?: 'top' | 'bottom'
}

export interface SearchBarProps {
  className?: string
  style?: CSSProperties
  value?: string
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  onChange?: (value: string) => void
  onSearch?: (value: string) => void
}

export type FormLayout = 'vertical' | 'horizontal' | 'inline'
export type FormValidateStatus = 'success' | 'warning' | 'error' | 'validating' | ''

export interface FormRule {
  required?: boolean
  message?: string
  min?: number
  max?: number
  pattern?: RegExp
  validator?: (value: unknown) => void | Promise<void> | string | Promise<string>
}

export interface FormInstance {
  getFieldValue: (name: NamePath) => unknown
  getFieldsValue: () => Record<string, unknown>
  setFieldValue: (name: NamePath, value: unknown) => void
  setFieldsValue: (values: Record<string, unknown>) => void
  resetFields: (names?: NamePath[]) => void
  validateFields: (names?: NamePath[]) => Promise<Record<string, unknown>>
  submit: () => void
}

export interface FormItemProps extends BaseProps {
  label?: ReactNode
  required?: boolean
  /** 错误文案（简写） */
  error?: ReactNode
  help?: ReactNode
  extra?: ReactNode
  name?: NamePath
  htmlFor?: string
  validateStatus?: FormValidateStatus
  /** label 占比，仅 horizontal */
  labelCol?: number
  wrapperCol?: number
  /** 隐藏必填星号但仍标记 required */
  hideRequiredMark?: boolean
  rules?: FormRule[]
  /** 子组件 value 属性名，Switch 为 `checked` */
  valuePropName?: string
  /** 收集值的回调名 */
  trigger?: string
  /** 触发校验的事件 */
  validateTrigger?: string | string[]
}

export interface FormListFieldData {
  name: number
  key: number
}

export interface FormListOperation {
  add: (defaultValue?: unknown, insertIndex?: number) => void
  remove: (index: number | number[]) => void
  move: (from: number, to: number) => void
}

export interface FormListProps {
  name: string
  children: (fields: FormListFieldData[], operation: FormListOperation, meta: { errors: string[] }) => ReactNode
  initialValue?: unknown[]
}

export interface FormProps extends BaseProps {
  layout?: FormLayout
  size?: SizeAlias
  disabled?: boolean
  /** 是否显示冒号（horizontal） */
  colon?: boolean
  requiredMark?: boolean | 'optional'
  labelAlign?: 'left' | 'right'
  form?: FormInstance
  initialValues?: Record<string, unknown>
  name?: string
  scrollToFirstError?: boolean
  onSubmit?: (e: FormEvent) => void
  onFinish?: (values: Record<string, unknown>) => void
  onFinishFailed?: (errorInfo: { values: Record<string, unknown>; errors: string[] }) => void
}

export interface DrawerProps extends BaseProps {
  open?: boolean
  title?: ReactNode
  placement?: 'left' | 'right' | 'bottom' | 'top'
  onClose?: () => void
}

export interface ActionSheetAction {
  key: string
  text: ReactNode
  danger?: boolean
  disabled?: boolean
  onClick?: () => void
}

export interface ActionSheetProps extends BaseProps {
  open?: boolean
  actions?: ActionSheetAction[]
  cancelText?: string
  onClose?: () => void
}

export interface ResultProps extends BaseProps {
  status?: 'success' | 'error' | 'info' | 'warning'
  title?: ReactNode
  subTitle?: ReactNode
  extra?: ReactNode
}

export interface TooltipProps extends BaseProps {
  title?: ReactNode
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

export interface SpaceProps extends BaseProps {
  size?: SizeType | number
  direction?: 'horizontal' | 'vertical'
  wrap?: boolean
  align?: 'start' | 'end' | 'center' | 'baseline'
}

export interface TableColumn<T = Record<string, unknown>> {
  key: string
  title: ReactNode
  dataIndex?: string
  width?: number | string
  align?: 'left' | 'center' | 'right'
  render?: (value: unknown, record: T, index: number) => ReactNode
  sorter?: boolean | ((a: T, b: T) => number)
  fixed?: 'left' | 'right'
  ellipsis?: boolean
  filters?: { text: ReactNode; value: string | number | boolean }[]
  onFilter?: (value: string | number | boolean, record: T) => boolean
  filteredValue?: Array<string | number | boolean> | null
}

export interface TableProps<T = Record<string, unknown>> extends BaseProps {
  columns?: TableColumn<T>[]
  dataSource?: T[]
  rowKey?: string | ((record: T, index: number) => string)
  loading?: boolean
  emptyText?: ReactNode
  bordered?: boolean
  size?: SizeAlias
  rowSelection?: {
    selectedRowKeys?: Array<string | number>
    defaultSelectedRowKeys?: Array<string | number>
    type?: 'checkbox' | 'radio'
    onChange?: (selectedRowKeys: Array<string | number>, selectedRows: T[]) => void
    getCheckboxProps?: (record: T) => { disabled?: boolean }
  }
  pagination?: false | PaginationProps
  scroll?: { x?: number | string; y?: number | string }
  onRow?: (record: T, index: number) => { onClick?: () => void; className?: string }
}

export interface PaginationProps {
  className?: string
  style?: CSSProperties
  current?: number
  defaultCurrent?: number
  total?: number
  pageSize?: number
  disabled?: boolean
  showTotal?: boolean | ((total: number, range: [number, number]) => ReactNode)
  onChange?: (page: number, pageSize: number) => void
}

export interface SkeletonProps extends BaseProps {
  loading?: boolean
  active?: boolean
  avatar?: boolean
  title?: boolean
  paragraph?: boolean | { rows?: number }
}

export interface MessageOptions {
  content: ReactNode
  type?: 'info' | 'success' | 'warning' | 'error' | 'loading'
  duration?: number
  key?: string | number
  onClose?: () => void
  icon?: ReactNode
}

export interface MessageConfig {
  maxCount?: number
  duration?: number
  top?: number
}

export interface NotificationOptions {
  title?: ReactNode
  description?: ReactNode
  type?: 'info' | 'success' | 'warning' | 'error'
  duration?: number
  placement?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'
  key?: string | number
  onClose?: () => void
  btn?: ReactNode
  icon?: ReactNode
}

export interface NotificationConfig {
  maxCount?: number
  duration?: number
  placement?: 'topRight' | 'topLeft' | 'bottomRight' | 'bottomLeft'
}

export interface RateProps {
  className?: string
  style?: CSSProperties
  value?: number
  defaultValue?: number
  count?: number
  allowHalf?: boolean
  allowClear?: boolean
  disabled?: boolean
  character?: ReactNode
  tooltips?: string[]
  onChange?: (value: number) => void
  onHoverChange?: (value: number) => void
}

export interface UploadFile {
  uid: string
  name: string
  status?: 'uploading' | 'done' | 'error'
  url?: string
  percent?: number
  response?: unknown
  originFileObj?: File
}

export interface UploadProps extends BaseProps {
  accept?: string
  multiple?: boolean
  disabled?: boolean
  fileList?: UploadFile[]
  defaultFileList?: UploadFile[]
  maxCount?: number
  action?: string
  headers?: Record<string, string>
  data?: Record<string, string | Blob> | ((file: File) => Record<string, string | Blob>)
  customRequest?: (options: {
    file: File
    onSuccess: (body?: unknown) => void
    onError: (e: Error) => void
    onProgress?: (e: { percent: number }) => void
  }) => void
  listType?: 'text' | 'picture' | 'picture-card'
  showUploadList?: boolean
  onChange?: (info: { file: UploadFile; fileList: UploadFile[] }) => void
  onRemove?: (file: UploadFile) => void | boolean
  onPreview?: (file: UploadFile) => void
  beforeUpload?: (file: File) => boolean | void
}

export interface DropdownItem {
  key: string
  label: ReactNode
  disabled?: boolean
  danger?: boolean
  icon?: ReactNode
  type?: 'item' | 'divider'
  children?: DropdownItem[]
  onClick?: () => void
}

export interface DropdownProps extends BaseProps {
  items?: DropdownItem[]
  trigger?: 'click' | 'hover'
  disabled?: boolean
  placement?: 'bottomLeft' | 'bottomRight'
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
}

export interface PopoverProps extends BaseProps {
  content?: ReactNode
  title?: ReactNode
  open?: boolean
  defaultOpen?: boolean
  trigger?: 'click' | 'hover'
  placement?: 'top' | 'bottom' | 'left' | 'right'
  onOpenChange?: (open: boolean) => void
}

export interface PopconfirmProps extends BaseProps {
  title?: ReactNode
  description?: ReactNode
  open?: boolean
  okText?: string
  cancelText?: string
  onConfirm?: () => void
  onCancel?: () => void
  onOpenChange?: (open: boolean) => void
}

export interface SwiperProps extends BaseProps {
  autoplay?: boolean | number
  loop?: boolean
  dots?: boolean
  index?: number
  defaultIndex?: number
  onChange?: (index: number) => void
}

export interface CalendarProps {
  className?: string
  style?: CSSProperties
  value?: Date
  defaultValue?: Date
  onChange?: (date: Date) => void
  disabledDate?: (date: Date) => boolean
  rangeStart?: Date | null
  rangeEnd?: Date | null
  hoverDate?: Date | null
  onHoverDate?: (date: Date | null) => void
}

export interface DatePickerProps {
  className?: string
  style?: CSSProperties
  value?: Date | null
  defaultValue?: Date | null
  placeholder?: string
  disabled?: boolean
  allowClear?: boolean
  open?: boolean
  defaultOpen?: boolean
  disabledDate?: (date: Date) => boolean
  status?: InputStatus
  size?: SizeAlias
  format?: string | ((date: Date) => string)
  showTime?: boolean
  picker?: 'date' | 'week' | 'month' | 'year'
  onChange?: (date: Date | null) => void
  onOpenChange?: (open: boolean) => void
}

export type RangeValue = [Date | null, Date | null] | null

export interface RangePickerProps {
  className?: string
  style?: CSSProperties
  value?: RangeValue
  defaultValue?: RangeValue
  placeholder?: [string, string]
  disabled?: boolean
  allowClear?: boolean
  disabledDate?: (date: Date) => boolean
  status?: InputStatus
  size?: SizeAlias
  format?: string | ((date: Date) => string)
  showTime?: boolean
  onChange?: (dates: RangeValue) => void
}

export interface CascaderOption {
  value: string | number
  label: ReactNode
  disabled?: boolean
  children?: CascaderOption[]
}

export interface CascaderProps {
  className?: string
  style?: CSSProperties
  options?: CascaderOption[]
  value?: Array<string | number>
  defaultValue?: Array<string | number>
  placeholder?: string
  disabled?: boolean
  allowClear?: boolean
  changeOnSelect?: boolean
  expandTrigger?: 'click' | 'hover'
  size?: SizeAlias
  status?: InputStatus
  displayRender?: (labels: ReactNode[], selectedOptions?: CascaderOption[]) => ReactNode
  onChange?: (value: Array<string | number>, selectedOptions: CascaderOption[]) => void
}

export interface PickerColumnOption {
  label: ReactNode
  value: string | number
}

export interface PickerProps {
  className?: string
  style?: CSSProperties
  open?: boolean
  title?: ReactNode
  columns?: PickerColumnOption[][]
  value?: Array<string | number>
  defaultValue?: Array<string | number>
  confirmText?: string
  cancelText?: string
  onConfirm?: (value: Array<string | number>) => void
  onCancel?: () => void
  onClose?: () => void
}

export interface PullToRefreshProps extends BaseProps {
  onRefresh?: () => void | Promise<void>
  pullingText?: ReactNode
  refreshingText?: ReactNode
  disabled?: boolean
}


