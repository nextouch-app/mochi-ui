# Card 卡片

贴纸式有机圆角卡片，可带云朵装饰。

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| variant | 贴纸色变体 | `default \| dashed \| pink \| mint \| lavender \| peach` | `default` |
| type | 兼容 AntD | `default \| inner` | `default` |
| size | 尺寸 | `sm \| md \| lg \| small \| middle \| large` | `md` |
| title / extra | 标题区 | `ReactNode` | — |
| cover | 封面 | `ReactNode` | — |
| actions | 底部操作 | `ReactNode[]` | — |
| bordered | 边框 | `boolean` | `true` |
| hoverable | 悬停抬起 | `boolean` | `false` |
| loading | 骨架加载 | `boolean` | `false` |
| decorated | 云朵装饰 | `boolean` | `true` |

```tsx
<Card title="标题" hoverable actions={[<a key="a">操作</a>]}>
  内容
</Card>
```
