import { createElement, type ReactElement } from 'react'
import { cn, type FlexProps } from '@mochi-ui/core'
import './flex.css'

const gapMap = { sm: 8, md: 12, lg: 16 }

function resolveGap(gap?: FlexProps['gap']): number | string | undefined {
  if (gap == null) return undefined
  if (Array.isArray(gap)) return `${gap[1]}px ${gap[0]}px`
  if (typeof gap === 'number') return gap
  return gapMap[gap]
}

export function Flex({
  vertical = false,
  wrap = false,
  justify,
  align,
  gap,
  flex,
  component = 'div',
  className,
  style,
  children,
}: FlexProps): ReactElement {
  const wrapValue: 'wrap' | 'nowrap' | 'wrap-reverse' | undefined =
    wrap === true ? 'wrap' : wrap === false ? undefined : wrap

  return createElement(
    component,
    {
      className: cn('mochi-flex', vertical && 'mochi-flex--vertical', className),
      style: {
        display: 'flex',
        flexDirection: vertical ? 'column' : 'row',
        flexWrap: wrapValue,
        justifyContent: justify,
        alignItems: align,
        gap: resolveGap(gap),
        flex,
        ...style,
      },
    },
    children,
  )
}
