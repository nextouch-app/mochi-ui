import { useMemo, useState } from 'react'
import { Card, ConfigProvider, Title } from '@mochi-ui/react'
import type { ShowcaseEntry } from './types'
import './showcase.css'

export function ShowcaseLayout({ registry }: { registry: ShowcaseEntry[] }) {
  const categories = useMemo(() => {
    const map = new Map<string, ShowcaseEntry[]>()
    for (const entry of registry) {
      const list = map.get(entry.category) ?? []
      list.push(entry)
      map.set(entry.category, list)
    }
    return [...map.entries()]
  }, [registry])

  const [active, setActive] = useState(registry[0]?.component ?? '')
  const current = registry.find((r) => r.component === active) ?? registry[0]

  return (
    <ConfigProvider>
      <div className="showcase">
        <aside className="showcase__sidebar">
          <div className="showcase__brand">
            <Title>Mochi UI</Title>
            <p>组件示例库 · Sky blue & soft</p>
          </div>
          {categories.map(([cat, entries]) => (
            <div key={cat} className="showcase__group">
              <div className="showcase__cat">{cat}</div>
              {entries.map((e) => (
                <button
                  key={e.component}
                  type="button"
                  className={
                    e.component === current?.component
                      ? 'showcase__nav is-active'
                      : 'showcase__nav'
                  }
                  onClick={() => setActive(e.component)}
                >
                  {e.component}
                </button>
              ))}
            </div>
          ))}
        </aside>
        <main className="showcase__main">
          <h1 className="showcase__heading">{current?.component}</h1>
          {current?.demos.map((demo) => (
            <Card key={demo.title} className="showcase__demo" title={demo.title}>
              <p className="showcase__desc">{demo.description}</p>
              <div className="showcase__preview">
                <demo.component />
              </div>
            </Card>
          ))}
        </main>
      </div>
    </ConfigProvider>
  )
}
