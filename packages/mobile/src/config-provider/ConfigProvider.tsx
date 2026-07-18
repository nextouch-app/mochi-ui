import { createContext, useContext, useMemo, type ReactNode } from 'react'
import { normalizeSize, type ConfigProviderProps, type SizeType } from '@mochi-ui/core'

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

export function ConfigProvider({
  children,
  size = 'md',
  theme = {},
}: ConfigProviderProps & { children?: ReactNode }) {
  const value = useMemo(
    () => ({ size: normalizeSize(size), theme }),
    [size, theme],
  )

  const styleVars = useMemo(() => {
    const vars: Record<string, string> = {}
    for (const [k, v] of Object.entries(theme)) {
      vars[k.startsWith('--') ? k : `--mochi-${k}`] = v
    }
    return vars
  }, [theme])

  return (
    <ConfigContext.Provider value={value}>
      <div className="mochi-config-provider" style={styleVars as React.CSSProperties}>
        {children}
      </div>
    </ConfigContext.Provider>
  )
}
