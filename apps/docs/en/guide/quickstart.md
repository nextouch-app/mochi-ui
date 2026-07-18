# Quick Start

## Install

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
      <Button type="primary">Hello, Mochi</Button>
    </ConfigProvider>
  )
}
```

## Mobile

Install `@mochi-ui/mobile` first (npm / yarn / pnpm / bun all work), then:

```tsx
import '@mochi-ui/tokens/tokens.css'
import { Button, ConfigProvider } from '@mochi-ui/mobile'
import '@mochi-ui/mobile/style.css'
```

Props match the Web package — only the import path changes.
