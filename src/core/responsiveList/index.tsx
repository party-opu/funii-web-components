import React from 'react'
import styled from 'styled-components'
import { TABLET_MIN_WIDTH, ArtboardSize } from '../../components/props'
import { useMediaQuery } from 'react-responsive'

type Props = {
  children: React.ReactNode
  artboardSize: ArtboardSize
}

const ResponsiveList: React.FC<Props> = ({ children, artboardSize }) => {
  const useIsLargeDevice = () => {
    const isLargeDevice = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' || artboardSize === 'desktop' ? true : false) : isLargeDevice
  }

  const isLargeDevice = useIsLargeDevice()
  return (
    <BaseResponsiveList
      style={isLargeDevice ? { flexDirection: 'column', justifyContent: 'center' } : { flexDirection: 'row', justifyContent: 'spaceBetween' }}
    >
      {children}
    </BaseResponsiveList>
  )
}

const BaseResponsiveList = styled.div`
  display: flex;
  flex: 1;
`

export default ResponsiveList
