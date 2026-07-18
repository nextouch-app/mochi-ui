# Dropdown

Nested submenus: flyout to the right on Web, inline accordion in the mobile bottom sheet.


## Examples

<mochi-demos name="Dropdown"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| items | Menu items | `DropdownItem[]` | `[]` |
| trigger | Trigger (Web) | `click \| hover` | `click` |
| open / defaultOpen | Open state | `boolean` | — |
| placement | Placement (Web) | `bottomLeft \| bottomRight` | `bottomLeft` |
| disabled | Disabled | `boolean` | `false` |
| onOpenChange | Open change | `(open) => void` | — |

### DropdownItem

| Prop | Description | Type |
|------|-------------|------|
| key / label | Identity and label | — |
| icon | Icon | `ReactNode` |
| type | Item type | `item \| divider` |
| children | Submenu items | `DropdownItem[]` |
| danger / disabled | Danger / disabled | `boolean` |
| onClick | Click handler | `() => void` |

## Web

Anchored menu with `trigger="click" | "hover"`. Items with `children` render a submenu (`.mochi-dropdown__submenu`).

```tsx
import { Dropdown, Button } from '@nextouch-app/mochi-react'

<Dropdown
  items={[
    { key: '1', label: 'Edit' },
    {
      key: 'more',
      label: 'More',
      children: [{ key: 'share', label: 'Share' }],
    },
  ]}
>
  <Button>Actions</Button>
</Dropdown>
```

## Mobile

Same API in a bottom action sheet. Items with `children` expand inline as an accordion.

```tsx
import { Dropdown, Button } from '@nextouch-app/mochi-mobile'

<Dropdown items={[{ key: '1', label: 'Edit' }]}>
  <Button>Actions</Button>
</Dropdown>
```
