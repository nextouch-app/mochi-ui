import type { ShowcaseEntry } from './types'
import { demos as buttonDemos } from './general/button'
import { demos as iconDemos } from './general/icon'
import { demos as loadingDemos } from './general/loading'
import { demos as configDemos } from './general/config-provider'
import { demos as inputDemos } from './data-entry/input'
import { demos as switchDemos } from './data-entry/switch'
import { demos as formDemos } from './data-entry/form'
import { demos as selectDemos } from './data-entry/select'
import { demos as cardDemos } from './data-display/card'
import { demos as tagDemos } from './data-display/tag'
import { demos as dividerDemos } from './layout/divider'
import { demos as modalDemos } from './feedback/modal'
import { extraRegistry } from './extra'

export const showcaseRegistry: ShowcaseEntry[] = [
  { category: '通用', component: 'Button', demos: buttonDemos },
  { category: '通用', component: 'Icon', demos: iconDemos },
  { category: '通用', component: 'Loading', demos: loadingDemos },
  { category: '通用', component: 'ConfigProvider', demos: configDemos },
  { category: '布局', component: 'Divider', demos: dividerDemos },
  { category: '数据录入', component: 'Input', demos: inputDemos },
  { category: '数据录入', component: 'Switch', demos: switchDemos },
  { category: '数据录入', component: 'Select', demos: selectDemos },
  { category: '数据录入', component: 'Form', demos: formDemos },
  { category: '数据展示', component: 'Card', demos: cardDemos },
  { category: '数据展示', component: 'Tag', demos: tagDemos },
  { category: '反馈', component: 'Modal', demos: modalDemos },
  ...extraRegistry,
]
