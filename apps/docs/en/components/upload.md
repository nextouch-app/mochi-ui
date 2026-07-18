# Upload


## Examples

<mochi-demos name="Upload"></mochi-demos>

## API

| Prop | Description | Type | Default |
|------|-------------|------|---------|
| accept / multiple | Accept / multiple | — | — |
| fileList / defaultFileList | File list | `UploadFile[]` | — |
| maxCount | Max count | `number` | — |
| action | Upload URL | `string` | — |
| headers | Request headers | `Record<string, string>` | — |
| data | Extra fields | `Record \| (file) => Record` | — |
| customRequest | Custom upload | `(options) => void` | — |
| listType | List style | `text \| picture \| picture-card` | `text` |
| showUploadList | Show list | `boolean` | `true` |
| beforeUpload | Before upload | `(file) => boolean \| void` | — |
| onChange / onRemove / onPreview | Change / remove / preview | — | — |

### UploadFile

| Prop | Description | Type |
|------|-------------|------|
| uid / name / status / url | Base fields | — |
| percent | Upload progress | `number` |
| response | Response body | `unknown` |
| originFileObj | Original File | `File` |

```tsx
import { Upload } from '@mochi-ui/react'

<Upload multiple maxCount={5} listType="picture-card" onChange={({ fileList }) => console.log(fileList)} />
```
