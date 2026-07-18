# Tag 标签

pill 标签，solid / outlined / dashed。


## 代码演示

<mochi-demos name="Tag"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| variant | 变体 | `solid \| outlined \| dashed` | `solid` |
| color | 颜色 | `TagColor` | `primary` |
| size | 尺寸 | `sm \| md \| lg` | `md` |
| closable | 可关闭 | `boolean` | `false` |
| icon | 前缀图标 | `ReactNode` | — |
| bordered | 显式边框 | `boolean` | `false` |
| onClose | 关闭回调 | `(e: MouseEvent) => void` | — |

```tsx
<Tag color="pink" variant="solid" closable onClose={() => {}}>
  Pink
</Tag>
```
