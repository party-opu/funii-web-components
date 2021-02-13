// Action
// --------------------------------
export interface BaseAction {
  trigger: 'click'
  type: 'externalLink' | 'internalLink'
}

export interface LinkAction extends BaseAction {
  type: 'externalLink' | 'internalLink'
  value: string
}

export type Action = LinkAction

// BaseNode
// --------------------------------
export interface BaseNode {
  id: string
  label: string
  order: number
  type: string
}

export type ArtboardSize = 'desktop' | 'tablet' | 'mobile'

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
  actions: Action[]
  style?: React.CSSProperties
}

// Image
// --------------------------------
export interface Image extends BaseNode {
  imageURL: string
  styleMode: StyleMode
  style: React.CSSProperties
  styleMb: React.CSSProperties
  styleTb: React.CSSProperties
  containerStyle: React.CSSProperties
  containerStyleMb: React.CSSProperties
  containerStyleTb: React.CSSProperties
  imageSizeType: ImageSizeType
  actions: Action[]
}
export type ImageSizeType = 'percentage' | 'pixel'

export type StyleMode = 'common' | 'responsive'
export const DESKTOP_MIN_WIDTH = 1200
export const TABLET_MIN_WIDTH = 700

// Text
// --------------------------------
export interface Text extends BaseNode {
  value: string
  styleMode: StyleMode
  style: React.CSSProperties
  styleMb: React.CSSProperties
  styleTb: React.CSSProperties
  actions: Action[]
}

// Space
// --------------------------------
export interface Space extends BaseNode {
  styleMode: StyleMode
  style: React.CSSProperties
  styleMb: React.CSSProperties
  styleTb: React.CSSProperties
}

// BasicNode
// --------------------------------
export type BasicNode = Image | Text | Space

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
  artboardSize?: ArtboardSize
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
