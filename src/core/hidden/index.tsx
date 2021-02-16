import React from 'react'
import styled from 'styled-components'
import { TABLET_MIN_WIDTH, ArtboardSize } from '../../components/props'
import { useMediaQuery } from 'react-responsive'

type Props = {
  smUp: boolean
  children: React.ReactNode
  artboardSize: ArtboardSize
}

const Hidden: React.FC<Props> = ({ smUp = true, children, artboardSize }) => {
  const useIsLargeDevice = () => {
    const isLargeDevice = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' || artboardSize === 'desktop' ? true : false) : isLargeDevice
  }

  const isLargeDevice = useIsLargeDevice()

  return <BaseHidden style={(isLargeDevice && smUp) || (!isLargeDevice && !smUp) ? { display: 'none' } : { display: 'block' }}>{children}</BaseHidden>
}

const BaseHidden = styled.div`
  width: 100%;
  height: 100%;
`

export default Hidden
