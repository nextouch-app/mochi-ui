import { useRef, useState } from 'react'
import { cn, type UploadFile, type UploadProps } from '@nextouch-app/mochi-core'
import './upload.css'

function toUploadFile(file: File): UploadFile {
  return {
    uid: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: file.name,
    status: 'done',
    originFileObj: file,
  }
}

function xhrUpload(
  file: File,
  action: string,
  headers: Record<string, string> | undefined,
  data: Record<string, string | Blob> | undefined,
  onProgress: (percent: number) => void,
): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const form = new FormData()
    form.append('file', file)
    if (data) {
      Object.entries(data).forEach(([k, v]) => form.append(k, v))
    }
    const req = new XMLHttpRequest()
    req.open('POST', action)
    if (headers) {
      Object.entries(headers).forEach(([k, v]) => req.setRequestHeader(k, v))
    }
    req.upload.onprogress = (e) => {
      if (e.lengthComputable) onProgress(Math.round((e.loaded / e.total) * 100))
    }
    req.onload = () => {
      if (req.status >= 200 && req.status < 300) {
        try {
          resolve(JSON.parse(req.responseText))
        } catch {
          resolve(req.responseText)
        }
      } else {
        reject(new Error(`Upload failed: ${req.status}`))
      }
    }
    req.onerror = () => reject(new Error('Upload failed'))
    req.send(form)
  })
}

export function Upload({
  accept,
  multiple = false,
  disabled = false,
  fileList,
  defaultFileList = [],
  maxCount,
  action,
  headers,
  data,
  customRequest,
  listType = 'text',
  showUploadList = true,
  className,
  style,
  children,
  onChange,
  onRemove,
  onPreview,
  beforeUpload,
}: UploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inner, setInner] = useState<UploadFile[]>(defaultFileList)
  const list = fileList ?? inner

  const patchList = (next: UploadFile[], file: UploadFile) => {
    if (fileList === undefined) setInner(next)
    onChange?.({ file, fileList: next })
  }

  const updateFile = (uid: string, patch: Partial<UploadFile>) => {
    const next = list.map((f) => (f.uid === uid ? { ...f, ...patch } : f))
    const file = next.find((f) => f.uid === uid)
    if (file) patchList(next, file)
  }

  const uploadFile = async (file: File) => {
    let item = toUploadFile(file)
    item = { ...item, status: 'uploading', percent: 0 }
    let next = multiple ? [...list, item] : [item]
    patchList(next, item)

    const onProgress = (e: { percent: number }) =>
      updateFile(item.uid, { percent: e.percent, status: 'uploading' })
    const onSuccess = (body?: unknown) =>
      updateFile(item.uid, { status: 'done', percent: 100, response: body })
    const onError = () => updateFile(item.uid, { status: 'error' })

    if (customRequest) {
      customRequest({ file, onSuccess, onError, onProgress })
      return
    }

    if (action) {
      try {
        const extra = typeof data === 'function' ? data(file) : data
        const body = await xhrUpload(file, action, headers, extra, (percent) =>
          onProgress({ percent }),
        )
        onSuccess(body)
      } catch {
        onError()
      }
      return
    }

    onSuccess()
  }

  const pick = (files: FileList | null) => {
    if (!files || disabled) return
    Array.from(files).forEach((file) => {
      if (beforeUpload && beforeUpload(file) === false) return
      if (maxCount != null && list.length >= maxCount) return
      void uploadFile(file)
    })
    if (inputRef.current) inputRef.current.value = ''
  }

  const showTrigger = listType !== 'picture-card' || list.length < (maxCount ?? Infinity)

  return (
    <div
      className={cn(
        'mochi-upload',
        `mochi-upload--${listType}`,
        disabled && 'is-disabled',
        className,
      )}
      style={style}
    >
      <input
        ref={inputRef}
        type="file"
        className="mochi-upload__input"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={(e) => pick(e.target.files)}
      />
      {showTrigger ? (
        <button
          type="button"
          className={cn('mochi-upload__trigger', listType === 'picture-card' && 'is-card')}
          disabled={disabled}
          onClick={() => inputRef.current?.click()}
        >
          {children ?? (
            <>
              <span className="mochi-upload__cloud" aria-hidden>
                ☁
              </span>
              <span>{listType === 'picture-card' ? '上传' : '点击或选择文件上传'}</span>
            </>
          )}
        </button>
      ) : null}
      {showUploadList && list.length > 0 ? (
        <ul className={cn('mochi-upload__list', listType === 'picture-card' && 'is-card-grid')}>
          {list.map((file) => (
            <li
              key={file.uid}
              className={cn(
                'mochi-upload__item',
                file.status && `is-${file.status}`,
                listType === 'picture-card' && 'is-card',
              )}
            >
              {listType !== 'text' ? (
                <button
                  type="button"
                  className="mochi-upload__thumb"
                  onClick={() => onPreview?.(file)}
                >
                  {file.url ? <img src={file.url} alt={file.name} /> : <span>📄</span>}
                </button>
              ) : null}
              <span className="mochi-upload__name">{file.name}</span>
              {file.status === 'uploading' && file.percent != null ? (
                <span className="mochi-upload__percent">{file.percent}%</span>
              ) : null}
              <button
                type="button"
                className="mochi-upload__remove"
                aria-label="移除"
                onClick={() => {
                  if (onRemove?.(file) === false) return
                  patchList(
                    list.filter((f) => f.uid !== file.uid),
                    file,
                  )
                }}
              >
                ×
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
