import React from 'react'
import styled from 'styled-components'

const BorderList: React.FC = ({ children }) => {
  return (
    <Root>
      <Border />
      <List>{children}</List>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const List = styled.ul`
  width: 100%;
  list-style: none;
`

const Border = styled.div`
  width: 100%;
  border-style: solid;
  border-bottom-color: ${(props) => props.color ?? props.theme.foregrounds.separator};
  border-bottom-width: 1px;
`

Border.defaultProps = {
  theme: {
    foregrounds: {
      separator: '#d5d5d5',
    },
  },
}

export default BorderList
