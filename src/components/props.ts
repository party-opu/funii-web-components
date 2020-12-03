export type FieldItem = {
  label: string
  type: 'text' | 'image'
  value: string
  order: number
  externalLink: string | null
  internalLink: string | null
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
  preview?: boolean
}

export type WrappedComponentProps = {
  type: string // section group type
  sections: Section[]
  push?: (internal: boolean, href: string) => void // routing
  preview?: boolean
}
