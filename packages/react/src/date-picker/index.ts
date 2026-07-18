import { DatePicker as DatePickerBase } from './DatePicker'
import { RangePicker } from './RangePicker'

export const DatePicker = Object.assign(DatePickerBase, { RangePicker })

export { RangePicker }
export type { RangePickerProps, RangeValue } from '@nextouch-app/mochi-core'
