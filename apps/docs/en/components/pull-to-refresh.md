# PullToRefresh 下拉刷新

适合移动端触控。


## Examples

<mochi-demos name="PullToRefresh"></mochi-demos>

```tsx
import { PullToRefresh } from '@nextouch-app/mochi-react'

<PullToRefresh onRefresh={async () => { /* fetch */ }}>
  <div>列表内容</div>
</PullToRefresh>
```
