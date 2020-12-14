import React from 'react'
import styled from 'styled-components'

type Props = {
  smUp: boolean
  children: React.ReactNode
}

const Hidden: React.FC<Props> = ({ smUp = true, children }) => {
  return <BaseHidden data-smup={smUp}>{children}</BaseHidden>
}

const BaseHidden = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  &[data-smup='true'] {
    display: block;
  }

  @media (min-width: 400px) {
    display: block;
    &[data-smup='true'] {
      display: none;
    }
  }
`

export default Hidden
