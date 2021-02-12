import React from 'react'
import styled from 'styled-components'
import { ComponentProps, Frame as FrameNode } from '../props'

const Frame: React.FC<ComponentProps> = ({ node, children }) => {
  const frame = node as FrameNode
  return <div style={frame.style}>{children}</div>
}

export const FrameItemWrapper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
`

export default Frame
