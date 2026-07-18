# Switch 开关

胶囊开关：底部色块阴影、弹跳滑块。

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| checked | 受控选中 | `boolean` | — |
| defaultChecked | 默认选中 | `boolean` | `false` |
| size | 尺寸（兼容 AntD 别名） | `sm \| md \| lg \| small \| middle \| large` | `md` |
| checkedChildren | 选中时内容 | `ReactNode` | — |
| unCheckedChildren | 非选中时内容 | `ReactNode` | — |
| loading | 加载中 | `boolean` | `false` |
| disabled | 禁用 | `boolean` | `false` |
| autoFocus | 自动聚焦 | `boolean` | `false` |
| onChange | 变化回调 | `(checked, e?) => void` | — |
| onClick | 点击回调 | `(checked, e?) => void` | — |

## Web

```tsx
import { Switch } from '@mochi-ui/react'

<Switch defaultChecked checkedChildren="开" unCheckedChildren="关" />
<Switch loading size="large" />
```

## Mobile

```tsx
import { Switch } from '@mochi-ui/mobile'
;<Switch defaultChecked />
```
