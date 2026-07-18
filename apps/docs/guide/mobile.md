# 移动端指南

`@mochi-ui/mobile` 面向 **H5 / 轻量端** 等 CSS 能力受限的运行时。

## 硬性约束

禁止在 Mobile 样式中使用：

- `~` 兄弟选择器
- `:hover`
- `:checked~` 等伪类组合

改用 React class 状态：`.is-checked`、`.is-pressed`、`.is-disabled`、`.is-active`。

CI 脚本 `pnpm check:mobile-styles` 会扫描构建产物。

## 使用建议

- 触控反馈靠 `is-pressed` / active class，不要依赖 hover
- Checkbox / Radio 选中态由组件内部 class 驱动
- 安全区使用 `SafeArea` 组件

## Web / Mobile 组件差异

多数组件两端 API 一致，但交互形态会按平台调整：

| 组件 | Web（`@mochi-ui/react`） | Mobile（`@mochi-ui/mobile`） |
|------|--------------------------|-------------------------------|
| Dropdown | 锚定悬浮菜单，支持 hover/click | 底部操作面板（仅点击） |
| Popover | 气泡定位 | 底部信息面板（仅点击） |
| DatePicker | 触发器下方日历浮层 | 底部抽屉 + Calendar |
| Notification | 四角 placement | 顶部通栏 |
| Table | 宽表展示 | 横向滚动（复杂列表仍建议用 List） |
| Picker / PullToRefresh | 可用 | 更贴合移动端场景 |
| TabBar / NavBar / SafeArea | 可用 | 推荐用于 App 壳 |

选择原则：

- 电脑端页面 → `@mochi-ui/react`
- H5 / 小程序 WebView / 触控壳 → `@mochi-ui/mobile`
- 同一产品双端：两边都装，Props 尽量对齐，个别组件交互不同属预期行为
