import React from 'react'
import styled from 'styled-components'

type Props = {
  smUp: boolean
  children: React.ReactNode
}

const Hidden: React.FC<Props> = ({ smUp = true, children }) => {
  return <BaseHidden data-smUp={smUp}>{children}</BaseHidden>
}

const BaseHidden = styled.div`
  width: 100%;
  height: 100%;
  display: none;
  &[data-smUp='true'] {
    display: block;
  }

  @media (min-width: 400px) {
    display: block;
    &[data-smUp='true'] {
      display: none;
    }
  }
`

export default Hidden
