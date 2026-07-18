import { ShowcaseLayout } from './ShowcaseLayout'
import { showcaseRegistry } from './registry'

export default function Showcase() {
  return <ShowcaseLayout registry={showcaseRegistry} />
}
