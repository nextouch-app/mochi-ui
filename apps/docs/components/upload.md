# Upload 上传


## 代码演示

<mochi-demos name="Upload"></mochi-demos>

## API

| 属性 | 说明 | 类型 | 默认 |
|------|------|------|------|
| accept / multiple | 文件类型 / 多选 | — | — |
| fileList / defaultFileList | 文件列表 | `UploadFile[]` | — |
| maxCount | 最大数量 | `number` | — |
| action | 上传地址 | `string` | — |
| headers | 请求头 | `Record<string, string>` | — |
| data | 额外字段 | `Record \| (file) => Record` | — |
| customRequest | 自定义上传 | `(options) => void` | — |
| listType | 列表样式 | `text \| picture \| picture-card` | `text` |
| showUploadList | 展示列表 | `boolean` | `true` |
| beforeUpload | 上传前 | `(file) => boolean \| void` | — |
| onChange / onRemove / onPreview | 变化 / 移除 / 预览 | — | — |

### UploadFile

| 属性 | 说明 | 类型 |
|------|------|------|
| uid / name / status / url | 基础字段 | — |
| percent | 上传进度 | `number` |
| response | 响应体 | `unknown` |
| originFileObj | 原始 File | `File` |

```tsx
import { Upload } from '@mochi-ui/react'

<Upload multiple maxCount={5} listType="picture-card" onChange={({ fileList }) => console.log(fileList)} />
```
