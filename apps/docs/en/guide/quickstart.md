# Quick Start

## Install

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
      <Button type="primary">Hello, Mochi</Button>
    </ConfigProvider>
  )
}
```

## Mobile

Install `@nextouch-app/mochi-mobile` first (npm / yarn / pnpm / bun all work), then:

```tsx
import '@nextouch-app/mochi-tokens/tokens.css'
import { Button, ConfigProvider } from '@nextouch-app/mochi-mobile'
import '@nextouch-app/mochi-mobile/style.css'
```

Props match the Web package — only the import path changes.
