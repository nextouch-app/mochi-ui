import { createContext, useContext, type FormEvent as ReactFormEvent } from 'react'
import {
  cn,
  normalizeSize,
  type FormProps,
  type FormItemProps,
  type FormLayout,
  type SizeAlias,
} from '@mochi-ui/core'
import { useConfig } from '../config-provider/ConfigProvider'
import './form.css'

interface FormContextValue {
  layout: FormLayout
  size: 'sm' | 'md' | 'lg'
  disabled: boolean
  colon: boolean
  requiredMark: boolean | 'optional'
  labelAlign: 'left' | 'right'
}

const FormContext = createContext<FormContextValue>({
  layout: 'vertical',
  size: 'md',
  disabled: false,
  colon: true,
  requiredMark: true,
  labelAlign: 'right',
})

export function Form({
  layout = 'vertical',
  size,
  disabled = false,
  colon = true,
  requiredMark = true,
  labelAlign = 'right',
  className,
  style,
  children,
  onSubmit,
  onFinish,
  onFinishFailed,
}: FormProps) {
  const { size: ctxSize } = useConfig()
  const finalSize = normalizeSize((size ?? ctxSize) as SizeAlias)

  const handleSubmit = (e: ReactFormEvent<HTMLFormElement>) => {
    onSubmit?.(e)
    if (!onFinish && !onFinishFailed) return
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const values: Record<string, unknown> = {}
    data.forEach((v, k) => {
      values[k] = v
    })
    const invalid = form.querySelectorAll(':invalid')
    if (invalid.length > 0) {
      onFinishFailed?.({ values, errors: [`${invalid.length} 项未通过校验`] })
      return
    }
    onFinish?.(values)
  }

  return (
    <FormContext.Provider
      value={{ layout, size: finalSize, disabled, colon, requiredMark, labelAlign }}
    >
      <form
        className={cn(
          'mochi-form',
          `mochi-form--${layout}`,
          `mochi-form--${finalSize}`,
          disabled && 'is-disabled',
          className,
        )}
        style={style}
        onSubmit={handleSubmit}
      >
        <fieldset disabled={disabled} className="mochi-form__fieldset">
          {children}
        </fieldset>
      </form>
    </FormContext.Provider>
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
  className,
  style,
  children,
}: FormItemProps) {
  const ctx = useContext(FormContext)
  const status = validateStatus || (error ? 'error' : '')
  const helpNode = help ?? error
  const showRequired =
    required &&
    ctx.requiredMark !== false &&
    !hideRequiredMark &&
    ctx.requiredMark !== 'optional'
  const showOptional = required === false && ctx.requiredMark === 'optional'

  const labelStyle =
    ctx.layout === 'horizontal' && labelCol != null
      ? { flex: `0 0 ${(labelCol / 24) * 100}%`, maxWidth: `${(labelCol / 24) * 100}%` }
      : undefined
  const controlStyle =
    ctx.layout === 'horizontal' && wrapperCol != null
      ? { flex: `0 0 ${(wrapperCol / 24) * 100}%`, maxWidth: `${(wrapperCol / 24) * 100}%` }
      : undefined

  return (
    <div
      className={cn(
        'mochi-form-item',
        `mochi-form-item--${ctx.layout}`,
        status && `is-${status}`,
        className,
      )}
      style={style}
      data-name={name}
    >
      {label ? (
        <label
          className={cn(
            'mochi-form-item__label',
            `is-align-${ctx.labelAlign}`,
          )}
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
        {children}
        {helpNode ? <div className="mochi-form-item__help">{helpNode}</div> : null}
        {extra ? <div className="mochi-form-item__extra">{extra}</div> : null}
      </div>
    </div>
  )
}
