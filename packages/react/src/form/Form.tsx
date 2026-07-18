import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useRef,
  type FormEvent as ReactFormEvent,
  type ReactElement,
  type ReactNode,
} from 'react'
import {
  cn,
  normalizeSize,
  type FormInstance,
  type FormItemProps,
  type FormLayout,
  type FormListFieldData,
  type FormListOperation,
  type FormListProps,
  type FormProps,
  type FormRule,
  type NamePath,
  type SizeAlias,
} from '@nextouch-app/mochi-core'
import { useConfig } from '../config-provider/ConfigProvider'
import './form.css'

interface FieldMeta {
  rules?: FormRule[]
  valuePropName: string
  trigger: string
  validateTrigger: string[]
  required?: boolean
  initialValue?: unknown
}

interface FormStore {
  values: Record<string, unknown>
  initialValues: Record<string, unknown>
  errors: Record<string, string | undefined>
  fields: Map<string, FieldMeta>
  listeners: Set<() => void>
}

type InternalFormInstance = FormInstance & {
  __store: FormStore
  __submitRef: { current: (() => void) | null }
}

function toPathArray(name: NamePath): Array<string | number> {
  return Array.isArray(name) ? name : [name]
}

function namePathToKey(name: NamePath): string {
  return toPathArray(name).join('.')
}

function concatNamePath(prefix: NamePath | undefined, name: NamePath): NamePath {
  if (prefix === undefined) return name
  return [...toPathArray(prefix), ...toPathArray(name)]
}

function getIn(obj: Record<string, unknown>, path: NamePath): unknown {
  const keys = toPathArray(path)
  let current: unknown = obj
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return undefined
    current = (current as Record<string | number, unknown>)[key]
  }
  return current
}

function setIn(obj: Record<string, unknown>, path: NamePath, value: unknown): void {
  const keys = toPathArray(path)
  if (keys.length === 0) return
  let current: Record<string | number, unknown> = obj
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    const nextKey = keys[i + 1]
    let next = current[key]
    if (next == null || typeof next !== 'object') {
      next = typeof nextKey === 'number' ? [] : {}
      current[key] = next
    }
    current = next as Record<string | number, unknown>
  }
  current[keys[keys.length - 1]] = value
}

function hasIn(obj: Record<string, unknown>, path: NamePath): boolean {
  const keys = toPathArray(path)
  let current: unknown = obj
  for (const key of keys) {
    if (current == null || typeof current !== 'object') return false
    if (!(String(key) in (current as object))) return false
    current = (current as Record<string | number, unknown>)[key]
  }
  return true
}

function deleteIn(obj: Record<string, unknown>, path: NamePath): void {
  const keys = toPathArray(path)
  if (keys.length === 0) return
  let current: Record<string | number, unknown> = obj
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i]
    const next = current[key]
    if (next == null || typeof next !== 'object') return
    current = next as Record<string | number, unknown>
  }
  delete current[keys[keys.length - 1]]
}

function createStore(initialValues: Record<string, unknown> = {}): FormStore {
  return {
    values: { ...initialValues },
    initialValues: { ...initialValues },
    errors: {},
    fields: new Map(),
    listeners: new Set(),
  }
}

function notifyStore(store: FormStore) {
  store.listeners.forEach((listener) => listener())
}

function isEmptyValue(value: unknown): boolean {
  return value === undefined || value === null || value === ''
}

async function validateRule(value: unknown, rule: FormRule): Promise<string | undefined> {
  if (rule.required && isEmptyValue(value)) {
    return rule.message ?? '此项为必填项'
  }
  if (isEmptyValue(value)) return undefined

  if (rule.min != null) {
    const size =
      typeof value === 'string' || Array.isArray(value)
        ? value.length
        : typeof value === 'number'
          ? value
          : 0
    if (size < rule.min) return rule.message ?? `不能小于 ${rule.min}`
  }

  if (rule.max != null) {
    const size =
      typeof value === 'string' || Array.isArray(value)
        ? value.length
        : typeof value === 'number'
          ? value
          : 0
    if (size > rule.max) return rule.message ?? `不能大于 ${rule.max}`
  }

  if (rule.pattern) {
    const text = String(value ?? '')
    if (!rule.pattern.test(text)) return rule.message ?? '格式不正确'
  }

  if (rule.validator) {
    const result = await rule.validator(value)
    if (typeof result === 'string' && result) return result
  }

  return undefined
}

async function validateField(store: FormStore, name: NamePath): Promise<string | undefined> {
  const key = namePathToKey(name)
  const meta = store.fields.get(key)
  const rules = meta?.rules ?? []
  const value = getIn(store.values, name) ?? meta?.initialValue

  for (const rule of rules) {
    const message = await validateRule(value, rule)
    if (message) return message
  }

  if (meta?.required && isEmptyValue(value)) {
    return '此项为必填项'
  }

  return undefined
}

function getValueFromEvent(valuePropName: string, ...args: unknown[]): unknown {
  const first = args[0]
  if (valuePropName === 'checked') return first
  if (first && typeof first === 'object' && 'target' in first) {
    const target = (first as { target: Record<string, unknown> }).target
    if (valuePropName in target) return target[valuePropName]
    return target.value
  }
  return first
}

function getChildInitialValue(child: ReactElement, valuePropName: string): unknown {
  const props = child.props as Record<string, unknown>
  if (valuePropName in props && props[valuePropName] !== undefined) return props[valuePropName]
  if ('defaultValue' in props) return props.defaultValue
  if ('defaultChecked' in props) return props.defaultChecked
  return undefined
}

function createFormInstance(store: FormStore, submitRef: { current: (() => void) | null }): InternalFormInstance {
  return {
    __store: store,
    __submitRef: submitRef,
    getFieldValue: (name) => getIn(store.values, name),
    getFieldsValue: () => ({ ...store.values }),
    setFieldValue: (name, value) => {
      setIn(store.values, name, value)
      notifyStore(store)
    },
    setFieldsValue: (values) => {
      Object.assign(store.values, values)
      notifyStore(store)
    },
    resetFields: (names) => {
      const targets = names ?? [...store.fields.keys()].map((key) => key.split('.').map((part) => {
        const num = Number(part)
        return Number.isNaN(num) ? part : num
      }))
      targets.forEach((name) => {
        const key = namePathToKey(name)
        const meta = store.fields.get(key)
        const initial = getIn(store.initialValues, name) ?? meta?.initialValue
        if (initial === undefined) {
          deleteIn(store.values, name)
        } else {
          setIn(store.values, name, initial)
        }
        store.errors[key] = undefined
      })
      notifyStore(store)
    },
    validateFields: async (names) => {
      const targets =
        names ??
        [...store.fields.keys()].map((key) =>
          key.split('.').map((part) => {
            const num = Number(part)
            return Number.isNaN(num) ? part : num
          }),
        )
      const errors: string[] = []

      for (const name of targets) {
        const key = namePathToKey(name)
        const message = await validateField(store, name)
        store.errors[key] = message
        if (message) errors.push(message)
      }

      notifyStore(store)

      if (errors.length > 0) {
        throw { values: { ...store.values }, errors }
      }

      return { ...store.values }
    },
    submit: () => {
      submitRef.current?.()
    },
  }
}

export function useForm(): [FormInstance] {
  const storeRef = useRef<FormStore>()
  const submitRef = useRef<(() => void) | null>(null)

  if (!storeRef.current) {
    storeRef.current = createStore()
  }

  const [, forceUpdate] = useReducer((count: number) => count + 1, 0)

  useEffect(() => {
    const store = storeRef.current!
    const listener = () => forceUpdate()
    store.listeners.add(listener)
    return () => {
      store.listeners.delete(listener)
    }
  }, [])

  const instance = useMemo(
    () => createFormInstance(storeRef.current!, submitRef),
    [],
  )

  return [instance]
}

interface FormContextValue {
  layout: FormLayout
  size: 'sm' | 'md' | 'lg'
  disabled: boolean
  colon: boolean
  requiredMark: boolean | 'optional'
  labelAlign: 'left' | 'right'
  store: FormStore
  scrollToFirstError?: boolean
}

interface FormListContextValue {
  prefixName: NamePath
}

const FormContext = createContext<FormContextValue | null>(null)
const FormListContext = createContext<FormListContextValue | null>(null)

function FormBase({
  layout = 'vertical',
  size,
  disabled = false,
  colon = true,
  requiredMark = true,
  labelAlign = 'right',
  form,
  initialValues,
  name,
  scrollToFirstError = false,
  className,
  style,
  children,
  onSubmit,
  onFinish,
  onFinishFailed,
}: FormProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize((size ?? ctxSize) as SizeAlias)
  const localStoreRef = useRef<FormStore>()
  const submitRef = useRef<(() => void) | null>(null)
  const formRef = useRef<HTMLFormElement>(null)

  if (!localStoreRef.current) {
    localStoreRef.current = createStore(initialValues ?? {})
  }

  const external = form as InternalFormInstance | undefined
  const store = external?.__store ?? localStoreRef.current
  const activeSubmitRef = external?.__submitRef ?? submitRef

  useEffect(() => {
    if (initialValues) {
      Object.assign(store.initialValues, initialValues)
      Object.entries(initialValues).forEach(([key, value]) => {
        if (!hasIn(store.values, key)) setIn(store.values, key, value)
      })
      notifyStore(store)
    }
  }, [store, initialValues])

  const [, forceUpdate] = useReducer((count: number) => count + 1, 0)

  useEffect(() => {
    const listener = () => forceUpdate()
    store.listeners.add(listener)
    return () => {
      store.listeners.delete(listener)
    }
  }, [store])

  const handleSubmit = useCallback(
    async (e: ReactFormEvent<HTMLFormElement>) => {
      onSubmit?.(e)
      const shouldValidate = Boolean(onFinish || onFinishFailed || form || store.fields.size > 0)
      if (!shouldValidate) return
      e.preventDefault()

      try {
        const values = await (form ?? createFormInstance(store, activeSubmitRef)).validateFields()
        onFinish?.(values)
      } catch (errorInfo) {
        const info = errorInfo as { values: Record<string, unknown>; errors: string[] }
        onFinishFailed?.(info)

        if (scrollToFirstError) {
          const root = e.currentTarget
          const firstError = root.querySelector('.mochi-form-item.is-error')
          firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }
    },
    [activeSubmitRef, form, onFinish, onFinishFailed, onSubmit, scrollToFirstError, store],
  )

  useEffect(() => {
    activeSubmitRef.current = () => {
      formRef.current?.requestSubmit()
    }
  }, [activeSubmitRef])

  const contextValue = useMemo<FormContextValue>(
    () => ({
      layout,
      size: finalSize,
      disabled,
      colon,
      requiredMark,
      labelAlign,
      store,
      scrollToFirstError,
    }),
    [colon, disabled, finalSize, labelAlign, layout, requiredMark, scrollToFirstError, store],
  )

  return (
    <FormContext.Provider value={contextValue}>
      <form
        ref={formRef}
        className={cn(
          'mochi-form',
          `mochi-form--${layout}`,
          `mochi-form--${finalSize}`,
          disabled && 'is-disabled',
          className,
        )}
        style={style}
        name={name}
        data-form-name={name ?? ''}
        onSubmit={handleSubmit}
      >
        <fieldset disabled={disabled} className="mochi-form__fieldset">
          {children}
        </fieldset>
      </form>
    </FormContext.Provider>
  )
}

function FormList({ name, children, initialValue }: FormListProps) {
  const ctx = useContext(FormContext)
  if (!ctx) throw new Error('FormList must be used inside Form')

  const listPath = name

  useEffect(() => {
    const current = getIn(ctx.store.values, listPath)
    if (current === undefined) {
      const init =
        initialValue ??
        getIn(ctx.store.initialValues, listPath) ??
        []
      setIn(ctx.store.values, listPath, Array.isArray(init) ? [...init] : [])
      notifyStore(ctx.store)
    }
  }, [ctx.store, initialValue, listPath])

  const listValue = getIn(ctx.store.values, listPath)
  const fields: FormListFieldData[] = Array.isArray(listValue)
    ? listValue.map((_, index) => ({ name: index, key: index }))
    : []

  const operation = useMemo<FormListOperation>(
    () => ({
      add: (defaultValue, insertIndex) => {
        const current = getIn(ctx.store.values, listPath)
        const arr = Array.isArray(current) ? [...current] : []
        if (insertIndex != null) {
          arr.splice(insertIndex, 0, defaultValue ?? {})
        } else {
          arr.push(defaultValue ?? {})
        }
        setIn(ctx.store.values, listPath, arr)
        notifyStore(ctx.store)
      },
      remove: (index) => {
        const indices = Array.isArray(index) ? [...index] : [index]
        const current = getIn(ctx.store.values, listPath)
        const arr = Array.isArray(current) ? [...current] : []
        indices.sort((a, b) => b - a).forEach((i) => arr.splice(i, 1))
        setIn(ctx.store.values, listPath, arr)
        notifyStore(ctx.store)
      },
      move: (from, to) => {
        const current = getIn(ctx.store.values, listPath)
        const arr = Array.isArray(current) ? [...current] : []
        const item = arr.splice(from, 1)[0]
        arr.splice(to, 0, item)
        setIn(ctx.store.values, listPath, arr)
        notifyStore(ctx.store)
      },
    }),
    [ctx.store, listPath],
  )

  const meta = useMemo(() => ({ errors: [] as string[] }), [])

  return (
    <FormListContext.Provider value={{ prefixName: listPath }}>
      {children(fields, operation, meta)}
    </FormListContext.Provider>
  )
}

export function FormItem({
  label,
  required,
  error,
  help,
  extra,
  name,
  htmlFor,
  validateStatus,
  labelCol,
  wrapperCol,
  hideRequiredMark,
  rules,
  valuePropName = 'value',
  trigger = 'onChange',
  validateTrigger = 'onBlur',
  className,
  style,
  children,
}: FormItemProps) {
  const ctx = useContext(FormContext)
  const listCtx = useContext(FormListContext)
  if (!ctx) throw new Error('FormItem must be used inside Form')

  const fullName = useMemo(() => {
    if (name === undefined) return undefined
    return listCtx ? concatNamePath(listCtx.prefixName, name) : name
  }, [listCtx, name])

  const fieldKey = fullName !== undefined ? namePathToKey(fullName) : undefined

  const child = Children.only(children) as ReactElement
  const triggers = useMemo(
    () => (Array.isArray(validateTrigger) ? validateTrigger : [validateTrigger]),
    [validateTrigger],
  )
  const ruleRequired = rules?.some((rule) => rule.required)
  const isRequired = required ?? ruleRequired
  const initialValueRef = useRef<unknown>(
    isValidElement(child) ? getChildInitialValue(child, valuePropName) : undefined,
  )

  useEffect(() => {
    if (fieldKey === undefined || fullName === undefined) return undefined
    ctx.store.fields.set(fieldKey, {
      rules,
      valuePropName,
      trigger,
      validateTrigger: triggers,
      required: isRequired,
      initialValue: initialValueRef.current,
    })
    if (!hasIn(ctx.store.values, fullName) && initialValueRef.current !== undefined) {
      setIn(ctx.store.values, fullName, initialValueRef.current)
    }
    notifyStore(ctx.store)
    return () => {
      ctx.store.fields.delete(fieldKey)
    }
  }, [ctx.store, fieldKey, fullName, isRequired, rules, trigger, triggers, valuePropName])

  const fieldError = fieldKey ? ctx.store.errors[fieldKey] : undefined
  const status = validateStatus || (error || fieldError ? 'error' : '')
  const helpNode = help ?? error ?? fieldError

  const showRequired =
    isRequired &&
    ctx.requiredMark !== false &&
    !hideRequiredMark &&
    ctx.requiredMark !== 'optional'
  const showOptional = isRequired === false && ctx.requiredMark === 'optional'

  const labelStyle =
    ctx.layout === 'horizontal' && labelCol != null
      ? { flex: `0 0 ${(labelCol / 24) * 100}%`, maxWidth: `${(labelCol / 24) * 100}%` }
      : undefined
  const controlStyle =
    ctx.layout === 'horizontal' && wrapperCol != null
      ? { flex: `0 0 ${(wrapperCol / 24) * 100}%`, maxWidth: `${(wrapperCol / 24) * 100}%` }
      : undefined

  let control: ReactNode = child

  if (fullName !== undefined && fieldKey !== undefined && isValidElement(child)) {
    const childProps = child.props as Record<string, unknown>
    const fieldValue = hasIn(ctx.store.values, fullName)
      ? getIn(ctx.store.values, fullName)
      : getIn(ctx.store.initialValues, fullName) ?? getChildInitialValue(child, valuePropName)

    const runValidate = async () => {
      const message = await validateField(ctx.store, fullName)
      ctx.store.errors[fieldKey] = message
      notifyStore(ctx.store)
    }

    const injected: Record<string, unknown> = {
      [valuePropName]: fieldValue,
      disabled: ctx.disabled || childProps.disabled,
      status: fieldError ? 'error' : childProps.status,
    }

    injected[trigger] = (...args: unknown[]) => {
      const nextValue = getValueFromEvent(valuePropName, ...args)
      setIn(ctx.store.values, fullName, nextValue)
      ctx.store.errors[fieldKey] = undefined
      notifyStore(ctx.store)
      const original = childProps[trigger]
      if (typeof original === 'function') (original as (...params: unknown[]) => void)(...args)
      if (triggers.includes(trigger)) void runValidate()
    }

    triggers.forEach((eventName) => {
      if (eventName === trigger) return
      injected[eventName] = (...args: unknown[]) => {
        const original = childProps[eventName]
        if (typeof original === 'function') (original as (...params: unknown[]) => void)(...args)
        void runValidate()
      }
    })

    control = cloneElement(child, injected)
  }

  return (
    <div
      className={cn(
        'mochi-form-item',
        `mochi-form-item--${ctx.layout}`,
        status && `is-${status}`,
        className,
      )}
      style={style}
      data-name={fieldKey}
    >
      {label ? (
        <label
          className={cn('mochi-form-item__label', `is-align-${ctx.labelAlign}`)}
          htmlFor={htmlFor}
          style={labelStyle}
        >
          {showRequired ? <span className="mochi-form-item__required">*</span> : null}
          {label}
          {ctx.layout !== 'vertical' && ctx.colon ? (
            <span className="mochi-form-item__colon">:</span>
          ) : null}
          {showOptional ? <span className="mochi-form-item__optional">（选填）</span> : null}
        </label>
      ) : null}
      <div className="mochi-form-item__control" style={controlStyle}>
        {control}
        {helpNode ? <div className="mochi-form-item__help">{helpNode}</div> : null}
        {extra ? <div className="mochi-form-item__extra">{extra}</div> : null}
      </div>
    </div>
  )
}

export const Form = Object.assign(FormBase, {
  Item: FormItem,
  List: FormList,
  useForm,
})
