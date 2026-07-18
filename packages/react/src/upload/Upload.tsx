import { useRef, useState } from 'react'
import { cn, type UploadFile, type UploadProps } from '@mochi-ui/core'
import './upload.css'

function toUploadFile(file: File): UploadFile {
  return {
    uid: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    name: file.name,
    status: 'done',
  }
}

export function Upload({
  accept,
  multiple = false,
  disabled = false,
  fileList,
  defaultFileList = [],
  maxCount,
  className,
  style,
  children,
  onChange,
  onRemove,
  beforeUpload,
}: UploadProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const [inner, setInner] = useState<UploadFile[]>(defaultFileList)
  const list = fileList ?? inner

  const update = (next: UploadFile[], file: UploadFile) => {
    if (fileList === undefined) setInner(next)
    onChange?.({ file, fileList: next })
  }

  const pick = (files: FileList | null) => {
    if (!files || disabled) return
    let next = [...list]
    Array.from(files).forEach((file) => {
      if (beforeUpload && beforeUpload(file) === false) return
      if (maxCount != null && next.length >= maxCount) return
      const item = toUploadFile(file)
      next = multiple ? [...next, item] : [item]
      update(next, item)
    })
    if (inputRef.current) inputRef.current.value = ''
  }

  return (
    <div className={cn('mochi-upload', disabled && 'is-disabled', className)} style={style}>
      <input
        ref={inputRef}
        type="file"
        className="mochi-upload__input"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={(e) => pick(e.target.files)}
      />
      <button
        type="button"
        className="mochi-upload__trigger"
        disabled={disabled}
        onClick={() => inputRef.current?.click()}
      >
        {children ?? (
          <>
            <span className="mochi-upload__cloud" aria-hidden>
              ☁
            </span>
            <span>点击或选择文件上传</span>
          </>
        )}
      </button>
      {list.length > 0 ? (
        <ul className="mochi-upload__list">
          {list.map((file) => (
            <li key={file.uid} className="mochi-upload__item">
              <span className="mochi-upload__name">{file.name}</span>
              <button
                type="button"
                className="mochi-upload__remove"
                aria-label="移除"
                onClick={() => {
                  if (onRemove?.(file) === false) return
                  update(
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
