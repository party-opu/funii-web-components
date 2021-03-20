import React from 'react'
import styled from 'styled-components'
import { Frame as FrameNode } from '@party-opu/funii-assist-types'
import { ComponentProps, DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from '../props'
import { useMediaQuery } from 'react-responsive'

const Frame: React.FC<ComponentProps> = ({ node, children, artboardSize }) => {
  const frame = node as FrameNode

  const useIsDesktop = () => {
    const isDesktop = useMediaQuery({ minWidth: DESKTOP_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'desktop' ? true : false) : isDesktop
  }
  const useIsTablet = () => {
    const isTablet = useMediaQuery({ minWidth: TABLET_MIN_WIDTH, maxWidth: DESKTOP_MIN_WIDTH - 1 })
    return artboardSize ? (artboardSize === 'tablet' ? true : false) : isTablet
  }

  const isDesktop = useIsDesktop()
  const isTablet = useIsTablet()
  return <div style={frame.styleMode === 'common' ? frame.style : isDesktop ? frame.style : isTablet ? frame.styleTb : frame.styleMb}>{children}</div>
}

export const FrameItemWrapper = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
`

export default Frame
