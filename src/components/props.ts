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
  onSend?: (value: CreateContact) => Promise<void>
}

export type WrappedComponentProps = {
  type: string // section group type
  sections: Section[]
  push?: (internal: boolean, href: string) => void // routing
  paths?: string[] // enabled routing paths
  preview?: boolean
  onSend?: (value: CreateContact) => Promise<void>
}

export type Contact = {
  id: string
  companyName: string | null
  department: string | null
  name: string
  email: string
  phoneNumber: string
  message: string
  createdAt: Date
  updatedAt: Date
}

export type CreateContact = {
  [key: string]: string
}
