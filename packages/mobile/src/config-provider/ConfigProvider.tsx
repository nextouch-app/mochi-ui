import { createContext, useContext, useMemo, type CSSProperties, type ReactNode } from 'react'
import {
  normalizeSize,
  type ConfigProviderProps,
  type SizeType,
  type ThemeConfig,
} from '@nextouch-app/mochi-core'

export interface ConfigContextValue {
  size: SizeType
  theme: Record<string, string>
}

const ConfigContext = createContext<ConfigContextValue>({
  size: 'md',
  theme: {},
})

export function useConfig() {
  return useContext(ConfigContext)
}

const TOKEN_MAP: Record<string, string> = {
  colorPrimary: '--mochi-color-primary',
  colorSuccess: '--mochi-color-success',
  colorWarning: '--mochi-color-warning',
  colorError: '--mochi-color-error',
  colorText: '--mochi-color-text',
  colorBgBase: '--mochi-color-bg',
  borderRadius: '--mochi-radius-md',
  fontFamily: '--mochi-font-family',
}

function isThemeConfig(theme: ConfigProviderProps['theme']): theme is ThemeConfig {
  return !!theme && ('token' in theme || 'cssVars' in theme)
}

function resolveThemeVars(theme: ConfigProviderProps['theme'] = {}): Record<string, string> {
  const vars: Record<string, string> = {}

  if (isThemeConfig(theme)) {
    if (theme.token) {
      for (const [key, value] of Object.entries(theme.token)) {
        if (value == null) continue
        const cssKey = TOKEN_MAP[key] ?? (key.startsWith('--') ? key : `--mochi-${key}`)
        vars[cssKey] = typeof value === 'number' ? `${value}px` : String(value)
      }
    }
    if (theme.cssVars) {
      for (const [k, v] of Object.entries(theme.cssVars)) {
        vars[k.startsWith('--') ? k : `--mochi-${k}`] = v
      }
    }
    return vars
  }

  for (const [k, v] of Object.entries(theme)) {
    vars[k.startsWith('--') ? k : `--mochi-${k}`] = v
  }
  return vars
}

export function ConfigProvider({
  children,
  size = 'md',
  theme = {},
}: ConfigProviderProps & { children?: ReactNode }) {
  const styleVars = useMemo(() => resolveThemeVars(theme), [theme])
  const value = useMemo(
    () => ({ size: normalizeSize(size), theme: styleVars }),
    [size, styleVars],
  )

  return (
    <ConfigContext.Provider value={value}>
      <div className="mochi-config-provider" style={styleVars as CSSProperties}>
        {children}
      </div>
    </ConfigContext.Provider>
  )
}
