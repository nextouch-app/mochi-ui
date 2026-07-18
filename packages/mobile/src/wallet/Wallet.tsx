import { cn, type WalletProps } from '@mochi-ui/core'
import './wallet.css'

export function Wallet({
  title = '我的钱包',
  balance = '128.00',
  currency = '¥',
  subtitle = '可用余额',
  tone = 'sky',
  actions,
  className,
  style,
  children,
}: WalletProps) {
  return (
    <div className={cn('mochi-wallet', `mochi-wallet--${tone}`, className)} style={style}>
      <div className="mochi-wallet__shine" aria-hidden />
      <div className="mochi-wallet__title">{title}</div>
      {subtitle ? <div className="mochi-wallet__subtitle">{subtitle}</div> : null}
      <div className="mochi-wallet__balance">
        <span className="mochi-wallet__currency">{currency}</span>
        <span className="mochi-wallet__amount">{balance}</span>
      </div>
      {actions ? <div className="mochi-wallet__actions">{actions}</div> : null}
      {children}
      <div className="mochi-wallet__chip" aria-hidden />
    </div>
  )
}
