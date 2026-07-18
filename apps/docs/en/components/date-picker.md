# DatePicker


## Examples

<mochi-demos name="DatePicker"></mochi-demos>

## API

### DatePicker

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| value / defaultValue | Date | `Date \| null` | — |
| placeholder | Placeholder | `string` | `选择日期` |
| disabled | Disabled | `boolean` | `false` |
| allowClear | Allow clear | `boolean` | `true` |
| open / defaultOpen | Panel open | `boolean` | — |
| disabledDate | Disabled dates | `(date) => boolean` | — |
| status | Status | `InputStatus` | — |
| size | Size | `SizeAlias` | `md` |
| format | Display format | `string \| (date) => string` | `YYYY-MM-DD` |
| showTime | Pick hour/minute after date | `boolean` | `false` |
| picker | Panel mode | `date \| week \| month \| year` | `date` |
| onChange | Change handler | `(date) => void` | — |
| onOpenChange | Panel open change | `(open) => void` | — |

### DatePicker.RangePicker

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| value / defaultValue | Range | `RangeValue` | — |
| placeholder | Start/end placeholders | `[string, string]` | `['开始日期','结束日期']` |
| showTime | Include time in range | `boolean` | `false` |
| format / disabledDate / status / size / allowClear | Same as DatePicker | — | — |
| onChange | Change handler | `(dates: RangeValue) => void` | — |

## Web

Calendar panel below the trigger. With `showTime`, hour/minute selects and a confirm button stay in the panel.

```tsx
import { DatePicker } from '@mochi-ui/react'

<DatePicker showTime format="YYYY-MM-DD HH:mm" onChange={(d) => console.log(d)} />

<DatePicker.RangePicker onChange={(range) => console.log(range)} />
```

## Mobile

Bottom sheet with embedded Calendar. RangePicker uses the same drawer pattern.

```tsx
import { DatePicker } from '@mochi-ui/mobile'

<DatePicker picker="month" onChange={(d) => console.log(d)} />

<DatePicker.RangePicker showTime onChange={(range) => console.log(range)} />
```
