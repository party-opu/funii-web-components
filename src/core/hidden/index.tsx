import React from 'react'
import styled from 'styled-components'
import { DESKTOP_MIN_WIDTH, ArtboardSize } from '../../components/props'
import { useMediaQuery } from 'react-responsive'

type Props = {
  smUp: boolean
  children: React.ReactNode
  artboardSize: ArtboardSize
}

const Hidden: React.FC<Props> = ({ smUp = true, children, artboardSize }) => {
  const useIsDesktop = () => {
    const isDesktop = useMediaQuery({ minWidth: DESKTOP_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'desktop' ? true : false) : isDesktop
  }

  const isDesktop = useIsDesktop()

  return (
    <BaseHidden is-desktop={isDesktop} data-smup={smUp}>
      {children}
    </BaseHidden>
  )
}

const BaseHidden = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  &[data-smup='true'] {
    display: block;
  }

  &[is-desktop='false'] {
    display: block;
    &[data-smup='true'] {
      display: none;
    }
  }
`

export default Hidden
