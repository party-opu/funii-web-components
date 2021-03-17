// NodeTreeType
// --------------------------------
export type NodeTreeType = 'unit' | 'layout'

// Node
// --------------------------------
export type Layout = {
  id: string // nodeID
  order: number
  nodeTreeType: NodeTreeType
  children?: {
    id: string // childNodeID
    order: number
  }[]
}

export type UnitNode = {
  id: string // nodeID
  order: number
  nodeTreeType: NodeTreeType
}

export type NodeTree = Layout | UnitNode
