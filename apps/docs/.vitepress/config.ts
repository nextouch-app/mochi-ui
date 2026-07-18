import { defineConfig, type DefaultTheme } from 'vitepress'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(fileURLToPath(new URL('.', import.meta.url)), '../../..')

function nav(prefix: '' | '/en', labels: { guide: string; components: string; resources: string }): DefaultTheme.NavItem[] {
  return [
    { text: labels.guide, link: `${prefix}/guide/introduction` },
    { text: labels.components, link: `${prefix}/components/` },
    { text: labels.resources, link: `${prefix}/resources/changelog` },
  ]
}

function guideSidebar(
  prefix: '' | '/en',
  labels: {
    guide: string
    introduction: string
    installation: string
    quickstart: string
    tokens: string
    mobile: string
    faq: string
  },
): DefaultTheme.SidebarItem[] {
  return [
    {
      text: labels.guide,
      items: [
        { text: labels.introduction, link: `${prefix}/guide/introduction` },
        { text: labels.installation, link: `${prefix}/guide/installation` },
        { text: labels.quickstart, link: `${prefix}/guide/quickstart` },
        { text: labels.tokens, link: `${prefix}/guide/tokens` },
        { text: labels.mobile, link: `${prefix}/guide/mobile` },
        { text: labels.faq, link: `${prefix}/guide/faq` },
      ],
    },
  ]
}

function componentsSidebar(
  prefix: '' | '/en',
  labels: {
    overview: string
    overviewItem: string
    general: string
    layout: string
    navigation: string
    dataEntry: string
    dataDisplay: string
    feedback: string
    other: string
  },
): DefaultTheme.SidebarItem[] {
  return [
    {
      text: labels.overview,
      items: [{ text: labels.overviewItem, link: `${prefix}/components/` }],
    },
    {
      text: labels.general,
      items: [
        { text: 'Button', link: `${prefix}/components/button` },
        { text: 'FloatButton', link: `${prefix}/components/float-button` },
        { text: 'Icon', link: `${prefix}/components/icon` },
        { text: 'Typography', link: `${prefix}/components/typography` },
        { text: 'Loading', link: `${prefix}/components/loading` },
        { text: 'Spin', link: `${prefix}/components/spin` },
        { text: 'ConfigProvider', link: `${prefix}/components/config-provider` },
      ],
    },
    {
      text: labels.layout,
      items: [
        { text: 'Divider', link: `${prefix}/components/divider` },
        { text: 'Flex', link: `${prefix}/components/flex` },
        { text: 'Grid', link: `${prefix}/components/grid` },
        { text: 'Layout', link: `${prefix}/components/layout` },
        { text: 'Splitter', link: `${prefix}/components/splitter` },
        { text: 'Affix', link: `${prefix}/components/affix` },
        { text: 'Watermark', link: `${prefix}/components/watermark` },
      ],
    },
    {
      text: labels.navigation,
      items: [
        { text: 'Breadcrumb', link: `${prefix}/components/breadcrumb` },
        { text: 'Menu', link: `${prefix}/components/menu` },
        { text: 'Steps', link: `${prefix}/components/steps` },
        { text: 'Anchor', link: `${prefix}/components/anchor` },
      ],
    },
    {
      text: labels.dataEntry,
      items: [
        { text: 'Input', link: `${prefix}/components/input` },
        { text: 'InputNumber', link: `${prefix}/components/input-number` },
        { text: 'Switch', link: `${prefix}/components/switch` },
        { text: 'Select', link: `${prefix}/components/select` },
        { text: 'Form', link: `${prefix}/components/form` },
        { text: 'Rate', link: `${prefix}/components/rate` },
        { text: 'Upload', link: `${prefix}/components/upload` },
        { text: 'DatePicker', link: `${prefix}/components/date-picker` },
        { text: 'TimePicker', link: `${prefix}/components/time-picker` },
        { text: 'Cascader', link: `${prefix}/components/cascader` },
        { text: 'Transfer', link: `${prefix}/components/transfer` },
        { text: 'TreeSelect', link: `${prefix}/components/tree-select` },
        { text: 'AutoComplete', link: `${prefix}/components/auto-complete` },
        { text: 'Mentions', link: `${prefix}/components/mentions` },
        { text: 'Segmented', link: `${prefix}/components/segmented` },
        { text: 'ColorPicker', link: `${prefix}/components/color-picker` },
        { text: 'Picker', link: `${prefix}/components/picker` },
      ],
    },
    {
      text: labels.dataDisplay,
      items: [
        { text: 'Card', link: `${prefix}/components/card` },
        { text: 'Tag', link: `${prefix}/components/tag` },
        { text: 'Table', link: `${prefix}/components/table` },
        { text: 'Tree', link: `${prefix}/components/tree` },
        { text: 'Timeline', link: `${prefix}/components/timeline` },
        { text: 'Image', link: `${prefix}/components/image` },
        { text: 'Statistic', link: `${prefix}/components/statistic` },
        { text: 'Descriptions', link: `${prefix}/components/descriptions` },
        { text: 'Progress', link: `${prefix}/components/progress` },
        { text: 'QRCode', link: `${prefix}/components/qr-code` },
        { text: 'Pagination', link: `${prefix}/components/pagination` },
        { text: 'Skeleton', link: `${prefix}/components/skeleton` },
        { text: 'Swiper', link: `${prefix}/components/swiper` },
        { text: 'Calendar', link: `${prefix}/components/calendar` },
        { text: 'Typewriter', link: `${prefix}/components/typewriter` },
        { text: 'CodeBlock', link: `${prefix}/components/code-block` },
      ],
    },
    {
      text: labels.feedback,
      items: [
        { text: 'Modal', link: `${prefix}/components/modal` },
        { text: 'Drawer', link: `${prefix}/components/drawer` },
        { text: 'Message', link: `${prefix}/components/message` },
        { text: 'Notification', link: `${prefix}/components/notification` },
        { text: 'Tour', link: `${prefix}/components/tour` },
        { text: 'Dropdown', link: `${prefix}/components/dropdown` },
        { text: 'Popover', link: `${prefix}/components/popover` },
        { text: 'Popconfirm', link: `${prefix}/components/popconfirm` },
        { text: 'PullToRefresh', link: `${prefix}/components/pull-to-refresh` },
      ],
    },
    {
      text: labels.other,
      items: [
        { text: 'Title', link: `${prefix}/components/title` },
        { text: 'Phone', link: `${prefix}/components/phone` },
        { text: 'Wallet', link: `${prefix}/components/wallet` },
        { text: 'Time', link: `${prefix}/components/time` },
        { text: 'Cursor', link: `${prefix}/components/cursor` },
        { text: 'Footer', link: `${prefix}/components/footer` },
      ],
    },
  ]
}

function resourcesSidebar(
  prefix: '' | '/en',
  labels: { resources: string },
): DefaultTheme.SidebarItem[] {
  return [
    {
      text: labels.resources,
      items: [
        { text: 'CHANGELOG', link: `${prefix}/resources/changelog` },
        {
          text: prefix === '/en' ? 'Guidelines' : '使用建议',
          link: `${prefix}/resources/guidelines`,
        },
      ],
    },
  ]
}

const githubRepo = 'https://github.com/nextouch-app/mochi-ui'

/** GitHub/GitLab Pages 子路径部署时由 CI 注入，例如 `/mochi-ui/` */
const docsBase = process.env.DOCS_BASE || '/'

export default defineConfig({
  base: docsBase.endsWith('/') ? docsBase : `${docsBase}/`,
  title: 'Mochi UI',
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('mochi-'),
      },
    },
  },

  vite: {
    plugins: [react()],
    resolve: {
      alias: {
        '@nextouch-app/mochi-react': resolve(root, 'packages/react/src'),
        '@nextouch-app/mochi-core': resolve(root, 'packages/core/src'),
        '@nextouch-app/mochi-icons': resolve(root, 'packages/icons/src/index.ts'),
        '@nextouch-app/mochi-tokens/tokens.css': resolve(root, 'packages/tokens/src/tokens.css'),
        '@nextouch-app/mochi-tokens': resolve(root, 'packages/tokens/src'),
      },
    },
    ssr: {
      noExternal: ['@nextouch-app/mochi-react', '@nextouch-app/mochi-core', '@nextouch-app/mochi-icons', '@nextouch-app/mochi-tokens'],
    },
    optimizeDeps: {
      include: ['react', 'react-dom', 'react/jsx-runtime'],
    },
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      description: 'Mochi UI — 软糯卡通 React 组件库',
      themeConfig: {
        logo: '/logo.svg',
        nav: nav('', { guide: '指南', components: '组件', resources: '资源' }),
        sidebar: {
          '/guide/': guideSidebar('', {
            guide: '指南',
            introduction: '介绍',
            installation: '安装',
            quickstart: '快速上手',
            tokens: '设计变量',
            mobile: '移动端指南',
            faq: 'FAQ',
          }),
          '/components/': componentsSidebar('', {
            overview: '组件总览',
            overviewItem: '总览',
            general: '通用',
            layout: '布局',
            navigation: '导航',
            dataEntry: '数据录入',
            dataDisplay: '数据展示',
            feedback: '反馈',
            other: '其他',
          }),
          '/resources/': resourcesSidebar('', { resources: '资源' }),
        },
        outline: { label: '本页目录' },
        docFooter: { prev: '上一页', next: '下一页' },
        lastUpdated: { text: '最后更新' },
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色',
        darkModeSwitchTitle: '切换到深色',
        langMenuLabel: '切换语言',
        socialLinks: [{ icon: 'github', link: githubRepo }],
        footer: {
          message: '基于 MIT 协议发布。',
          copyright: 'Copyright © 2026 Nextouch',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Mochi UI — a soft, cartoon React component library',
      themeConfig: {
        logo: '/logo.svg',
        nav: nav('/en', { guide: 'Guide', components: 'Components', resources: 'Resources' }),
        sidebar: {
          '/en/guide/': guideSidebar('/en', {
            guide: 'Guide',
            introduction: 'Introduction',
            installation: 'Installation',
            quickstart: 'Quick Start',
            tokens: 'Design Tokens',
            mobile: 'Mobile Guide',
            faq: 'FAQ',
          }),
          '/en/components/': componentsSidebar('/en', {
            overview: 'Components',
            overviewItem: 'Overview',
            general: 'General',
            layout: 'Layout',
            navigation: 'Navigation',
            dataEntry: 'Data Entry',
            dataDisplay: 'Data Display',
            feedback: 'Feedback',
            other: 'Other',
          }),
          '/en/resources/': resourcesSidebar('/en', { resources: 'Resources' }),
        },
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' },
        lastUpdated: { text: 'Last updated' },
        returnToTopLabel: 'Back to top',
        sidebarMenuLabel: 'Menu',
        darkModeSwitchLabel: 'Theme',
        lightModeSwitchTitle: 'Switch to light',
        darkModeSwitchTitle: 'Switch to dark',
        langMenuLabel: 'Change language',
        socialLinks: [{ icon: 'github', link: githubRepo }],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2026 Nextouch',
        },
      },
    },
  },
})
