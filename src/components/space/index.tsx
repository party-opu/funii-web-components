import React from 'react'
import styled from 'styled-components'
import { Space as SpaceNode } from '@party-opu/funii-assist-types'
import { ComponentProps, DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from '../props'
import { useMediaQuery } from 'react-responsive'

const Space = ({ node, artboardSize }: ComponentProps) => {
  const space = node as SpaceNode

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

  return (
    <React.Fragment>
      <BaseSpace style={space.styleMode === 'common' ? space.style : isDesktop ? space.style : isTablet ? space.styleTb : space.styleMb} />
    </React.Fragment>
  )
}

const BaseSpace = styled.div``

export default Space
