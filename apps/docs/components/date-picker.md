# DatePicker 日期选择

支持单日期、日期时间、月份/年份面板，以及 `DatePicker.RangePicker` 范围选择。


## 代码演示

<mochi-demos name="DatePicker"></mochi-demos>

## API

### DatePicker

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| value / defaultValue | 日期 | `Date \| null` | — |
| placeholder | 占位 | `string` | `选择日期` |
| disabled | 禁用 | `boolean` | `false` |
| allowClear | 可清除 | `boolean` | `true` |
| open / defaultOpen | 面板显隐 | `boolean` | — |
| disabledDate | 禁用日期 | `(date) => boolean` | — |
| status | 状态 | `InputStatus` | — |
| size | 尺寸 | `SizeAlias` | `md` |
| format | 展示格式 | `string \| (date) => string` | `YYYY-MM-DD` |
| showTime | 选择日期后配置时分 | `boolean` | `false` |
| picker | 面板类型 | `date \| week \| month \| year` | `date` |
| onChange | 变化 | `(date) => void` | — |
| onOpenChange | 面板显隐 | `(open) => void` | — |

### DatePicker.RangePicker

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| value / defaultValue | 范围 | `RangeValue` | — |
| placeholder | 起止占位 | `[string, string]` | `['开始日期','结束日期']` |
| showTime | 范围含时分 | `boolean` | `false` |
| format / disabledDate / status / size / allowClear | 同 DatePicker | — | — |
| onChange | 变化 | `(dates: RangeValue) => void` | — |

## Web

触发器下方弹出 Calendar；`showTime` 时面板底部出现时分选择与确定按钮。

```tsx
import { DatePicker } from '@nextouch-app/mochi-react'

<DatePicker showTime format="YYYY-MM-DD HH:mm" onChange={(d) => console.log(d)} />

<DatePicker.RangePicker onChange={(range) => console.log(range)} />
```

## Mobile

底部抽屉内嵌 Calendar（触控更合适），RangePicker 同样以抽屉呈现。

```tsx
import { DatePicker } from '@nextouch-app/mochi-mobile'

<DatePicker picker="month" onChange={(d) => console.log(d)} />

<DatePicker.RangePicker showTime onChange={(range) => console.log(range)} />
```
