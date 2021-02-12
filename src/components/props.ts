// BaseNode
// --------------------------------
export interface BaseNode {
  id: string
  label: string
  order: number
  type: string
}

// ComponentSet
// --------------------------------
export interface ComponentSet extends BaseNode {
  sections: Section[]
}

export type Section = {
  fields: {
    [key: string]: FieldItem
  }
}

export type FieldItem = {
  label: string
  type: 'text' | 'image'
  value: string
  order: number
  externalLink: string | null
  internalLink: string | null
  linkType: LinkType
  style?: React.CSSProperties
}

export type LinkType = 'internal' | 'external'

// Image
// --------------------------------
export interface Image extends BaseNode {
  imageURL: string
  styleMode: StyleMode
  style: React.CSSProperties
  styleMb?: React.CSSProperties
  styleTb?: React.CSSProperties
  containerStyle: React.CSSProperties
  containerStyleMb?: React.CSSProperties
  containerStyleTb?: React.CSSProperties
  imageSizeType: ImageSizeType
  externalLink: string | null
  internalLink: string | null
  linkType: LinkType
}
export type ImageSizeType = 'percentage' | 'pixel'

export type StyleMode = 'common' | 'responsive'
export const DESKTOP_MIN_WIDTH = 992
export const TABLET_MAX_WIDTH = 991
export const TABLET_MIN_WIDTH = 500

// Text
// --------------------------------
export interface Text extends BaseNode {
  value: string
  styleMode: StyleMode
  style: React.CSSProperties
  externalLink: string | null
  internalLink: string | null
  styleMb?: React.CSSProperties
  styleTb?: React.CSSProperties
  linkType: LinkType
}

// BasicNode
// --------------------------------
export type BasicNode = Image | Text

// Frame
// --------------------------------
export interface Frame extends BaseNode {
  type: 'frame'
  style: React.CSSProperties
  children: Node[]
}

// Node
// --------------------------------
export type Node = Frame | ComponentSet | BasicNode

export type ComponentProps = {
  node: Node
  push?: (internal: boolean, href: string) => void
  paths?: string[]
  preview?: boolean
  onSend?: (value: CreateContact) => Promise<void>
}

export type Contact = {
  id: string
  tableName: string | null
  department: string | null
  name: string
  email: string
  phoneNumber: string
  message: string
  createdAt: Date
  updatedAt: Date
}

export type CreateContact = {
  label: string
  value: string
  order: number
}[]
