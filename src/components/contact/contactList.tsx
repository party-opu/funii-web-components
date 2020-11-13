import React from 'react'
import styled from 'styled-components'

const ContactList: React.FC = ({ children }) => {
  return (
    <Root>
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

export default ContactList
