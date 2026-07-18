# DatePicker 日期选择

## Web

触发器下方弹出 Calendar。

```tsx
import { DatePicker } from '@mochi-ui/react'

<DatePicker onChange={(d) => console.log(d)} />
```

## Mobile

底部抽屉内嵌 Calendar（触控更合适）。

```tsx
import { DatePicker } from '@mochi-ui/mobile'

<DatePicker onChange={(d) => console.log(d)} />
```

