export type SizeAlias = 'sm' | 'md' | 'lg' | 'small' | 'middle' | 'large'

/** 统一尺寸：兼容 Ant Design small/middle/large */
export function normalizeSize(size?: SizeAlias): 'sm' | 'md' | 'lg' {
  if (size === 'small' || size === 'sm') return 'sm'
  if (size === 'large' || size === 'lg') return 'lg'
  return 'md'
}
