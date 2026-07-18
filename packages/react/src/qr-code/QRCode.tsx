import { useEffect, useState } from 'react'
import QR from 'qrcode'
import { cn, type QRCodeProps } from '@nextouch-app/mochi-core'
import './qr-code.css'

const ECC: Record<NonNullable<QRCodeProps['errorLevel']>, 'L' | 'M' | 'Q' | 'H'> = {
  L: 'L',
  M: 'M',
  Q: 'Q',
  H: 'H',
}

export function QRCode({
  value = '',
  size = 160,
  color = '#725d42',
  bgColor = '#fffdf4',
  bordered = true,
  status = 'active',
  errorLevel = 'M',
  icon,
  iconSize = 36,
  className,
  style,
  onRefresh,
}: QRCodeProps) {
  const [dataUrl, setDataUrl] = useState('')

  useEffect(() => {
    let cancelled = false
    if (!value || status === 'loading') {
      setDataUrl('')
      return
    }
    QR.toDataURL(value, {
      errorCorrectionLevel: ECC[errorLevel],
      margin: 1,
      width: size,
      color: { dark: color, light: bgColor },
    }).then((url) => {
      if (!cancelled) setDataUrl(url)
    })
    return () => {
      cancelled = true
    }
  }, [value, size, color, bgColor, errorLevel, status])

  const iconW = typeof iconSize === 'number' ? iconSize : iconSize.width
  const iconH = typeof iconSize === 'number' ? iconSize : iconSize.height

  return (
    <div
      className={cn(
        'mochi-qrcode',
        bordered && 'is-bordered',
        status !== 'active' && `is-${status}`,
        className,
      )}
      style={{ width: size, height: size, ...style }}
    >
      {status === 'loading' || !dataUrl ? (
        <div className="mochi-qrcode__placeholder" aria-busy={status === 'loading'}>
          {status === 'loading' ? '…' : 'QR'}
        </div>
      ) : (
        <img className="mochi-qrcode__img" src={dataUrl} alt={value} width={size} height={size} />
      )}
      {icon && status === 'active' ? (
        <img className="mochi-qrcode__icon" src={icon} alt="" width={iconW} height={iconH} />
      ) : null}
      {status === 'expired' || status === 'scanned' ? (
        <div className="mochi-qrcode__mask">
          <span>{status === 'expired' ? '已过期' : '已扫描'}</span>
          {status === 'expired' && onRefresh ? (
            <button type="button" className="mochi-qrcode__refresh" onClick={onRefresh}>
              刷新
            </button>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}
