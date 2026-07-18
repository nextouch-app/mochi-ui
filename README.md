# Mochi UI

**麻薯 UI** — 软糯卡通 React 组件库 · Sky blue & soft

Maintained by [Nextouch](https://gitlab.com/nextouch) · [MIT License](./LICENSE)

## 特性

- 卡通可爱：大圆角、粉彩、纸感背景、3D 色块阴影
- 双运行时：`@mochi-ui/react`（Web）与 `@mochi-ui/mobile`（H5 / 轻量端）
- API 对齐 Ant Design 习惯，Props 两端一致
- MIT 可商用，原创图标与样式

## 安装

支持 **npm / yarn / pnpm / bun**（任选其一）。

**Web**

```bash
# npm
npm install @mochi-ui/react @mochi-ui/tokens

# yarn
yarn add @mochi-ui/react @mochi-ui/tokens

# pnpm
pnpm add @mochi-ui/react @mochi-ui/tokens

# bun
bun add @mochi-ui/react @mochi-ui/tokens
```

**Mobile**

```bash
# npm
npm install @mochi-ui/mobile @mochi-ui/tokens

# yarn
yarn add @mochi-ui/mobile @mochi-ui/tokens

# pnpm
pnpm add @mochi-ui/mobile @mochi-ui/tokens

# bun
bun add @mochi-ui/mobile @mochi-ui/tokens
```

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

## 仓库结构

```
mochi-ui/
  DESIGN.md
  packages/tokens | icons | core | react | mobile
  apps/demo-web | demo-mobile | docs
  scripts/check-mobile-styles.js
```

## 本地开发

本仓库为 **pnpm workspace** monorepo，参与开发请使用 pnpm ≥ 9（业务项目安装组件包仍可用 npm / yarn / bun）。

```bash
pnpm install
pnpm build
pnpm --filter demo-web dev      # http://localhost:5173 组件示例
pnpm --filter demo-mobile dev  # http://localhost:5174 Mobile 预览
pnpm docs:dev                  # VitePress 文档（中文 / English）
pnpm check:mobile-styles       # Mobile 样式约束检查
```

## 文档站部署

仓库同时支持 **GitHub Pages** 与 **GitLab Pages**（推送到默认分支自动构建）。

| 平台 | 配置 | 默认地址 |
|------|------|----------|
| GitHub | `.github/workflows/deploy-docs.yml` | `https://<user>.github.io/mochi-ui/` |
| GitLab | `.gitlab-ci.yml` 的 `pages` job | `https://<group>.gitlab.io/<project>/` |

GitHub 需在仓库 Settings → Pages 中将 Source 设为 **GitHub Actions**。若仓库名不是 `mochi-ui`，请改 workflow 里的 `DOCS_BASE`。

## 组件范围

| 版本 | 内容 |
|------|------|
| **v0.1** | Button、Input、Card、Icon、Loading、Tag、Divider、ConfigProvider |
| **v0.2** | Switch、Checkbox、Radio、Form、Modal、Toast、Tabs、TabBar、NavBar、List… |
| **v0.3** | Select、Slider、Stepper、Progress、Drawer、Alert、Empty、Avatar、Badge… |
| **v0.4** | Table、Pagination、Skeleton、Message、Notification、Rate、Upload、Dropdown、Popover、Popconfirm、Swiper、Calendar、DatePicker、Picker、PullToRefresh |
| **v1.0** | 约 50 个常用组件 |

当前已覆盖 v0.1–v0.4 主体与 Plus `Title`，详见 `apps/docs` 与 `apps/demo-web`。

## Mobile 注意事项

Mobile 样式**禁止** `:hover`、`~` 兄弟选择器；状态用 `.is-pressed` / `.is-checked` 等 class。  
`pnpm check:mobile-styles` 会在 CI 中校验。

## 设计规范

见 [DESIGN.md](./DESIGN.md)。静态 mock：`docs/mock/index.html`。

## 发布

packages 均配置 `publishConfig.access: public`，scope 为 `@mochi-ui/*`。建议同一次 release 统一 bump 版本。
