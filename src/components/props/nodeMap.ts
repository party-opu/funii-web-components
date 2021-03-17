import { Action } from './action'

// StyleMode
// --------------------------------
export type StyleMode = 'common' | 'responsive'

// BaseNode
// --------------------------------
export interface BaseNode {
  id: string
  label: string
  // order: number
  type: string // for feature: frame, text, image, componentSet
  thumbnailURL: string
}

// ComponentSet
// --------------------------------
export interface ComponentSetMap extends BaseNode {
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
export type ImageSizeType = 'percentage' | 'pixel'

export interface ImageMap extends BaseNode {
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

// Text
// --------------------------------
export interface TextMap extends BaseNode {
  value: string
  styleMode: StyleMode
  style: React.CSSProperties
  styleMb: React.CSSProperties
  styleTb: React.CSSProperties
  actions: Action[]
}

// Space
// --------------------------------
export interface SpaceMap extends BaseNode {
  styleMode: StyleMode
  style: React.CSSProperties
  styleMb: React.CSSProperties
  styleTb: React.CSSProperties
}

// Button
// --------------------------------
export interface ButtonMap extends BaseNode {
  value: string
  styleMode: StyleMode
  style: React.CSSProperties
  styleMb: React.CSSProperties
  styleTb: React.CSSProperties
  textStyle: React.CSSProperties
  textStyleMb: React.CSSProperties
  textStyleTb: React.CSSProperties
  containerStyle: React.CSSProperties
  containerStyleMb: React.CSSProperties
  containerStyleTb: React.CSSProperties
  buttonSizeType: ButtonSizeType
  actions: Action[]
}

export type ButtonSizeType = 'percentage' | 'pixel'

// BasicNode
// --------------------------------
export type BasicNodeMap = ImageMap | TextMap | SpaceMap | ButtonMap

// Frame
// --------------------------------
export interface FrameMap extends BaseNode {
  type: 'frame'
  styleMode: StyleMode
  style: React.CSSProperties
  styleMb: React.CSSProperties
  styleTb: React.CSSProperties
}

// Node
// --------------------------------
export type NodeMap = FrameMap | ComponentSetMap | BasicNodeMap
