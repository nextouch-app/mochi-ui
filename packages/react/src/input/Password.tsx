import { forwardRef, useState } from 'react'
import type { InputPasswordProps } from '@nextouch-app/mochi-core'
import { InternalInput } from './Input'

export const Password = forwardRef<HTMLInputElement, InputPasswordProps>(function Password(
  { visibilityToggle = true, suffix, ...rest },
  ref,
) {
  const [visible, setVisible] = useState(false)

  const toggle = visibilityToggle ? (
    <button
      type="button"
      className="mochi-input__visibility"
      aria-label={visible ? '隐藏密码' : '显示密码'}
      tabIndex={-1}
      onClick={() => setVisible((v) => !v)}
    >
      {visible ? '隐藏' : '显示'}
    </button>
  ) : null

  return (
    <InternalInput
      ref={ref}
      type={visible ? 'text' : 'password'}
      suffix={
        <>
          {suffix}
          {toggle}
        </>
      }
      {...rest}
    />
  )
})
