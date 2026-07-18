import {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  type KeyboardEvent,
} from 'react'
import type { InputSearchProps } from '@mochi-ui/core'
import { Button } from '../button/Button'
import { InternalInput } from './Input'

export const Search = forwardRef<HTMLInputElement, InputSearchProps>(function Search(
  {
    enterButton = false,
    loading = false,
    onSearch,
    onPressEnter,
    suffix,
    addonAfter,
    value,
    defaultValue,
    disabled,
    ...rest
  },
  ref,
) {
  const inputRef = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, () => inputRef.current as HTMLInputElement)

  const getValue = useCallback(() => {
    if (value !== undefined) return String(value ?? '')
    return inputRef.current?.value ?? ''
  }, [value])

  const triggerSearch = useCallback(
    (e?: unknown) => {
      onSearch?.(getValue(), e)
    },
    [getValue, onSearch],
  )

  const handlePressEnter = (e: KeyboardEvent<HTMLInputElement>) => {
    onPressEnter?.(e)
    triggerSearch(e)
  }

  const searchButton =
    enterButton === false ? (
      <button
        type="button"
        className="mochi-input__search-btn"
        aria-label="搜索"
        disabled={disabled || loading}
        onClick={(e) => triggerSearch(e)}
      >
        {loading ? '…' : '搜'}
      </button>
    ) : typeof enterButton === 'boolean' ? (
      <Button
        type="primary"
        size="small"
        loading={loading}
        disabled={disabled}
        onClick={(e) => triggerSearch(e)}
      >
        搜索
      </Button>
    ) : (
      enterButton
    )

  if (enterButton) {
    return (
      <InternalInput
        ref={inputRef}
        value={value}
        defaultValue={defaultValue}
        disabled={disabled}
        addonAfter={
          <>
            {addonAfter}
            {searchButton}
          </>
        }
        onPressEnter={handlePressEnter}
        {...rest}
      />
    )
  }

  return (
    <InternalInput
      ref={inputRef}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      suffix={
        <>
          {suffix}
          {searchButton}
        </>
      }
      onPressEnter={handlePressEnter}
      {...rest}
    />
  )
})
