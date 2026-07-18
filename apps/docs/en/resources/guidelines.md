# Guidelines

## Stylesheets

Load design tokens first, then component styles:

```tsx
import '@nextouch-app/mochi-tokens/tokens.css'
import { Button, ConfigProvider } from '@nextouch-app/mochi-react'
import '@nextouch-app/mochi-react/style.css'
```

For Mobile, swap `@nextouch-app/mochi-react` for `@nextouch-app/mochi-mobile`.

## Visual conventions

- Primary: sky blue `#6CB4EE`
- Background: cream paper (see tokens)
- Buttons: pill shape with solid bottom block shadow
- Cards: large organic radius; optional cloud accents

Full language: [DESIGN.md](https://github.com/nextouch-app/mochi-ui/blob/main/DESIGN.md) in the repository root.

## Mobile notes

`@nextouch-app/mochi-mobile` targets constrained CSS runtimes. Avoid `:hover` and sibling combinator `~` in Mobile styles; interaction state is driven by component classes such as `.is-pressed` and `.is-checked`.

## Assets & license

MIT licensed. Icons and styles are original — do not mix in third-party assets with incompatible licenses.
