# Mobile Guide

`@mochi-ui/mobile` targets **H5 / lightweight runtimes** with constrained CSS.

## Hard constraints

Do not use in Mobile styles:

- sibling combinator `~`
- `:hover`
- combinations like `:checked~`

Prefer React class state: `.is-checked`, `.is-pressed`, `.is-disabled`, `.is-active`.

CI runs `pnpm check:mobile-styles` against the build output.

## Tips

- Touch feedback should use `is-pressed` / active classes, not hover
- Checkbox / Radio checked states are class-driven
- Use `SafeArea` for notches and home indicators

## Web vs Mobile differences

Most APIs match, but interaction shells differ by platform:

| Component | Web (`@mochi-ui/react`) | Mobile (`@mochi-ui/mobile`) |
|-----------|-------------------------|-----------------------------|
| Dropdown | Anchored menu (hover/click) | Bottom action sheet (click only) |
| Popover | Positioned bubble | Bottom info sheet (click only) |
| DatePicker | Calendar under trigger | Bottom sheet + Calendar |
| Notification | Corner placement | Top full-width banner |
| Table | Wide layout | Horizontal scroll (prefer List for dense mobile UIs) |
| Picker / PullToRefresh | Available | Preferred for touch apps |
| TabBar / NavBar / SafeArea | Available | Recommended for app shells |

Rule of thumb: desktop apps use `@mochi-ui/react`; touch / H5 shells use `@mochi-ui/mobile`.
