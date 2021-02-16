import React from 'react'
import styled from 'styled-components'
import { TABLET_MIN_WIDTH, ArtboardSize } from '../../components/props'
import { useMediaQuery } from 'react-responsive'

type Props = {
  children: React.ReactNode
  artboardSize: ArtboardSize
}

const ResponsiveListItem: React.FC<Props> = ({ children, artboardSize }) => {
  const useIsTablet = () => {
    const isTablet = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' ? true : false) : isTablet
  }

  const isTablet = useIsTablet()
  return <BaseResponsiveListItem style={isTablet ? { paddingBottom: '0px' } : { paddingBottom: '60px' }}>{children}</BaseResponsiveListItem>
}

const BaseResponsiveListItem = styled.div`
  flex: 1;
  padding-right: 18px;
  padding-left: 18px;
`
export default ResponsiveListItem
