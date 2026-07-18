# Footer 页脚

页面底部版权与链接区。

## 代码演示

<mochi-demos name="Footer"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| copyright | 版权文案 | `ReactNode` | `© Nextouch` |
| links | 链接 | `{ title, href?, onClick? }[]` | `[]` |

```tsx
import { Footer } from '@nextouch-app/mochi-react'

<Footer
  copyright="© 2026 Nextouch"
  links={[{ title: 'GitHub', href: 'https://github.com/nextouch-app/mochi-ui' }]}
/>
```
