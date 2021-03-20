import { Node } from '@party-opu/funii-assist-types'

export type ArtboardSize = 'desktop' | 'tablet' | 'mobile'

export const DESKTOP_MIN_WIDTH = 1200
export const TABLET_MIN_WIDTH = 700

export type ComponentProps = {
  node: Node
  push?: (url: string) => void
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
