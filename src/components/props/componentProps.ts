import { Node, Action } from '@party-opu/funii-assist-types'

export type ArtboardSize = 'desktop' | 'tablet' | 'mobile'

export const DESKTOP_MIN_WIDTH = 1200
export const TABLET_MIN_WIDTH = 700

export type ComponentProps = {
  node: Node
  internalLinkActionHandler?: (action: Action) => void | Promise<void>
  externalLinkActionHandler?: (action: Action) => void | Promise<void>
  apiActionHandler?: (action: Action) => void | Promise<void>
  paths?: string[]
  preview?: boolean
  onSend?: (value: CreateContact) => Promise<void>
  artboardSize?: ArtboardSize
}

export type Contact = {
  id: string
  fields: {
    label: string
    value: string
    order: number
  }[]
  createdAt: Date
  updatedAt: Date
}

export type CreateContact = Omit<Contact, 'id' | 'createdAt' | 'updatedAt'> & {
  createdAt?: Date
  updatedAt?: Date
}
