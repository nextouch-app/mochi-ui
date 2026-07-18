# Changelog

## 0.2.0 — 2026-07-18

### Added (API)

- **Form**: `useForm` / `Form.Item` / **`Form.List`**、`rules`、`initialValues`、`NamePath` 嵌套路径
- **Input**: **`Input.Password`** / **`Input.Search`** / **`Input.TextArea`**
- **Modal**: `Modal.confirm` / `info` / `success` / `error` / `warning`、`destroyAll`、`destroyOnClose`、`getContainer`
- **Select**: `mode="multiple" | "tags"`、`maxTagCount`
- **Table**: `rowSelection`、列 `sorter` / **`filters`**、`pagination`、`scroll`、`onRow`
- **DatePicker**: `showTime`、`picker`、**`DatePicker.RangePicker`**
- **Cascader**: 新组件（多级联动选择）
- **Message / Notification**: `destroy` / `destroyAll`、`config`、`key`、`loading`（Message）
- **Upload**: `action`、`customRequest`、进度与 `listType`
- **Tag**: `closable`、`icon`、`bordered`
- **Dropdown**: 受控 `open`、`divider`、item `icon`、**子菜单**
- **Rate**: `character`、`tooltips`、`onHoverChange`
- **Button**: `loading={{ delay, icon }}`

## 0.1.0 — 2026-07-18

### Added

- Packages: `@mochi-ui/tokens`, `core`, `icons`, `react`, `mobile`
- Design tokens and `DESIGN.md`
- Original SVG icon set
- Core components across general, form, navigation, display, and feedback categories
- `apps/demo-web` showcase, `apps/demo-mobile` preview, VitePress docs (`apps/docs`)
- Mobile style guard script (`scripts/check-mobile-styles.js`)
- MIT License

### Notes

- Default font stack is system UI fonts; override via `--mochi-font-family`
- Roadmap targets roughly 50 components for v1.0
