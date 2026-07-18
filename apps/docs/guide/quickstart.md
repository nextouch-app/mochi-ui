# 快速上手

## 安装

::: code-group

```bash [npm]
npm install @mochi-ui/react @mochi-ui/tokens
```

```bash [yarn]
yarn add @mochi-ui/react @mochi-ui/tokens
```

```bash [pnpm]
pnpm add @mochi-ui/react @mochi-ui/tokens
```

```bash [bun]
bun add @mochi-ui/react @mochi-ui/tokens
```

:::

## Web

```tsx
import '@mochi-ui/tokens/tokens.css'
import { Button, ConfigProvider } from '@mochi-ui/react'
import '@mochi-ui/react/style.css'

export default function App() {
  return (
    <ConfigProvider>
      <Button type="primary">你好，麻薯</Button>
    </ConfigProvider>
  )
}
```

## Mobile

先安装 `@mochi-ui/mobile`（同样支持 npm / yarn / pnpm / bun），再：

```tsx
import '@mochi-ui/tokens/tokens.css'
import { Button, ConfigProvider } from '@mochi-ui/mobile'
import '@mochi-ui/mobile/style.css'
```

Props 与 Web 一致，仅 import 路径不同。
