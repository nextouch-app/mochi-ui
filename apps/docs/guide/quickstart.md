# 快速上手

## 安装

::: code-group

```bash [npm]
npm install @nextouch-app/mochi-react @nextouch-app/mochi-tokens
```

```bash [yarn]
yarn add @nextouch-app/mochi-react @nextouch-app/mochi-tokens
```

```bash [pnpm]
pnpm add @nextouch-app/mochi-react @nextouch-app/mochi-tokens
```

```bash [bun]
bun add @nextouch-app/mochi-react @nextouch-app/mochi-tokens
```

:::

## Web

```tsx
import '@nextouch-app/mochi-tokens/tokens.css'
import { Button, ConfigProvider } from '@nextouch-app/mochi-react'
import '@nextouch-app/mochi-react/style.css'

export default function App() {
  return (
    <ConfigProvider>
      <Button type="primary">你好，麻薯</Button>
    </ConfigProvider>
  )
}
```

## Mobile

先安装 `@nextouch-app/mochi-mobile`（同样支持 npm / yarn / pnpm / bun），再：

```tsx
import '@nextouch-app/mochi-tokens/tokens.css'
import { Button, ConfigProvider } from '@nextouch-app/mochi-mobile'
import '@nextouch-app/mochi-mobile/style.css'
```

Props 与 Web 一致，仅 import 路径不同。
