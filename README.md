# Mochi UI

**麻薯 UI** — 软糯卡通 React 组件库 · Sky blue & soft

Maintained by [Nextouch](https://github.com/nextouch-app) · [MIT License](./LICENSE)

文档站：https://nextouch-app.github.io/mochi-ui/  
仓库：https://github.com/nextouch-app/mochi-ui

## 特性

- 卡通可爱：大圆角、粉彩、纸感背景、3D 色块阴影
- 双运行时：`@nextouch-app/mochi-react`（Web）与 `@nextouch-app/mochi-mobile`（H5 / 轻量端）
- Props 两端一致，常用尺寸别名（`small` / `middle` / `large`）可用
- MIT 可商用，原创图标与样式

## 安装

支持 **npm / yarn / pnpm / bun**（任选其一）。

**Web**

```bash
# npm
npm install @nextouch-app/mochi-react @nextouch-app/mochi-tokens

# yarn
yarn add @nextouch-app/mochi-react @nextouch-app/mochi-tokens

# pnpm
pnpm add @nextouch-app/mochi-react @nextouch-app/mochi-tokens

# bun
bun add @nextouch-app/mochi-react @nextouch-app/mochi-tokens
```

**Mobile**

```bash
# npm
npm install @nextouch-app/mochi-mobile @nextouch-app/mochi-tokens

# yarn
yarn add @nextouch-app/mochi-mobile @nextouch-app/mochi-tokens

# pnpm
pnpm add @nextouch-app/mochi-mobile @nextouch-app/mochi-tokens

# bun
bun add @nextouch-app/mochi-mobile @nextouch-app/mochi-tokens
```

```tsx
import '@nextouch-app/mochi-tokens/tokens.css'
import { Button, ConfigProvider } from '@nextouch-app/mochi-react'
import '@nextouch-app/mochi-react/style.css'

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

| 版本 | 状态 | 内容 |
|------|------|------|
| **v0.1** | ✅ | Button、Input、Card、Icon、Loading、Tag、Divider、ConfigProvider |
| **v0.2** | ✅ | 表单 / 导航 / 展示 / 反馈主干 + Transfer / Tree / DatePicker / Typography / Layout / Menu / QRCode / Tour / Plus 等（当前发布线） |
| **v1.0** | 规划 | 质量打磨、无障碍与测试覆盖、更多业务场景 |

完整列表见文档站「组件总览」与 `apps/demo-web` Showcase。

## Mobile 注意事项

Mobile 样式**禁止** `:hover`、`~` 兄弟选择器；状态用 `.is-pressed` / `.is-checked` 等 class。  
`pnpm check:mobile-styles` 会在 CI 中校验。

## 设计规范

见 [DESIGN.md](./DESIGN.md)。静态 mock：`docs/mock/index.html`。

## 发布到 npm

发布目标为 [npmjs.org](https://www.npmjs.com/)（`registry.npmjs.org`）。国内镜像（如 npmmirror）一般会自动同步，**不要**把镜像当成发布地址。

需发布权限的 scope：`@nextouch-app/mochi-tokens`、`@nextouch-app/mochi-icons`、`@nextouch-app/mochi-core`、`@nextouch-app/mochi-react`、`@nextouch-app/mochi-mobile`（均为 `publishConfig.access: public`）。

```bash
# 1) 登录（一次性）
npm login

# 2) 发布前校验
pnpm release:check

# 3) 按依赖顺序发布（workspace 包请在对应目录执行，或使用 pnpm -r publish）
pnpm --filter @nextouch-app/mochi-tokens publish --access public --no-git-checks
pnpm --filter @nextouch-app/mochi-icons publish --access public --no-git-checks
pnpm --filter @nextouch-app/mochi-core publish --access public --no-git-checks
pnpm --filter @nextouch-app/mochi-react publish --access public --no-git-checks
pnpm --filter @nextouch-app/mochi-mobile publish --access public --no-git-checks
```

同一次 release 请保持五个包版本号一致（当前 **0.2.0**）。发布前请确认已打 tag / 更新 `CHANGELOG.md`。
