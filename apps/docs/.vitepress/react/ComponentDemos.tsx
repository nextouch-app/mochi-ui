import type { ComponentType } from 'react'
import { ConfigProvider } from '@nextouch-app/mochi-react'
import { demosByName } from '../demo-map'

export function ComponentDemos({ name }: { name: string }) {
  const demos = demosByName[name] ?? []
  if (!demos.length) {
    return (
      <p className="mochi-demos-empty">暂无在线演示（{name}）</p>
    )
  }

  return (
    <ConfigProvider>
      <div className="mochi-demos">
        {demos.map((demo, index) => {
          const Demo = demo.component as ComponentType
          return (
            <div key={`${name}-${index}`} className="mochi-demo vp-raw">
              <div className="mochi-demo__meta">
                <h3 className="mochi-demo__title">{demo.title}</h3>
                {demo.description ? (
                  <p className="mochi-demo__desc">{demo.description}</p>
                ) : null}
              </div>
              <div className="mochi-demo__preview">
                <Demo />
              </div>
            </div>
          )
        })}
      </div>
    </ConfigProvider>
  )
}
