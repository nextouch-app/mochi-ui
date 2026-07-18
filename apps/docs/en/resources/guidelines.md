# Guidelines

## Stylesheets

Load design tokens first, then component styles:

```tsx
import '@mochi-ui/tokens/tokens.css'
import { Button, ConfigProvider } from '@mochi-ui/react'
import '@mochi-ui/react/style.css'
```

For Mobile, swap `@mochi-ui/react` for `@mochi-ui/mobile`.

## Visual conventions

- Primary: sky blue `#6CB4EE`
- Background: cream paper (see tokens)
- Buttons: pill shape with solid bottom block shadow
- Cards: large organic radius; optional cloud accents

Full language: [DESIGN.md](https://gitlab.com/nextouch/mochi-ui/-/blob/main/DESIGN.md) in the repository root.

## Mobile notes

`@mochi-ui/mobile` targets constrained CSS runtimes. Avoid `:hover` and sibling combinator `~` in Mobile styles; interaction state is driven by component classes such as `.is-pressed` and `.is-checked`.

## Assets & license

MIT licensed. Icons and styles are original — do not mix in third-party assets with incompatible licenses.
