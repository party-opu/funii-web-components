type FieldItem = {
  label: string
  type: 'text' | 'image'
  value: string
  order: number
}

export type Section = {
  label: string
  type: string
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
  preview?: boolean
}

export type WrappedComponentProps = {
  type: string // section group type
  sections: Section[]
  preview?: boolean
}
