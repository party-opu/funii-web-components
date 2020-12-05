export type FieldItem = {
  label: string
  type: 'text' | 'image'
  value: string
  order: number
  externalLink: string | null
  internalLink: string | null
  linkType: 'internal' | 'external'
  style?: React.CSSProperties
}

export type Section = {
  fields: {
    [key: string]: FieldItem
  }
}

export type SectionGroup = {
  id: string
  label: string
  order: number
  type: string
  sections: Section[]
}

export type ComponentProps = {
  sections: Section[]
  push?: (internal: boolean, href: string) => void
  paths?: string[]
  preview?: boolean
}

export type WrappedComponentProps = {
  type: string // section group type
  sections: Section[]
  push?: (internal: boolean, href: string) => void // routing
  paths?: string[] // enabled routing paths
  preview?: boolean
}
