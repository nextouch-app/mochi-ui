import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import '@mochi-ui/tokens/tokens.css'
import './custom.css'

function registerMochiDemos() {
  if (typeof window === 'undefined') return
  if (customElements.get('mochi-demos')) return

  class MochiDemosElement extends HTMLElement {
    connectedCallback() {
      void import('../react/mount').then(({ mountMochiDemos }) => {
        mountMochiDemos(this)
      })
    }

    disconnectedCallback() {
      void import('../react/mount').then(({ unmountMochiDemos }) => {
        unmountMochiDemos(this)
      })
    }

    static get observedAttributes() {
      return ['name']
    }

    attributeChangedCallback() {
      if (!this.isConnected) return
      void import('../react/mount').then(({ mountMochiDemos }) => {
        mountMochiDemos(this)
      })
    }
  }

  customElements.define('mochi-demos', MochiDemosElement)
}

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.config.compilerOptions ??= {}
    app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('mochi-')

    if (typeof window !== 'undefined') {
      registerMochiDemos()
      router.onAfterRouteChanged = () => {
        document.querySelectorAll('mochi-demos').forEach((node) => {
          void import('../react/mount').then(({ mountMochiDemos }) => {
            mountMochiDemos(node as HTMLElement)
          })
        })
      }
    }
  },
} satisfies Theme
