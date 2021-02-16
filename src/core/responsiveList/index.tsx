import React from 'react'
import styled from 'styled-components'
import { TABLET_MIN_WIDTH, ArtboardSize } from '../../components/props'
import { useMediaQuery } from 'react-responsive'

type Props = {
  children: React.ReactNode
  artboardSize: ArtboardSize
}

const ResponsiveList: React.FC<Props> = ({ children, artboardSize }) => {
  const useIsTablet = () => {
    const isTablet = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' ? true : false) : isTablet
  }

  const isTablet = useIsTablet()
  return (
    <BaseResponsiveList style={isTablet ? { flexDirection: 'column', justifyContent: 'center' } : { flexDirection: 'row', justifyContent: 'spaceBetween' }}>
      {children}
    </BaseResponsiveList>
  )
}

const BaseResponsiveList = styled.div`
  display: flex;
  flex: 1;
`

export default ResponsiveList
