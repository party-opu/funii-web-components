import React from 'react'
import styled from 'styled-components'
import Spacer from '../../core/spacer'
import { ComponentProps } from '../props'
import { useRouting, useExistLink } from '../hooks'

const Footer = ({ sections, push, paths = [] }: ComponentProps) => {
  const onClick = useRouting(push)
  const onCheckExistLink = useExistLink()

  return (
    <Root>
      <Nav>
        <ListWrapper>
          <List>
            {sections.map((section, index) => (
              <React.Fragment key={index}>
                <Spacer layout="vertical" size="l" />
                <ListItem data-existlink={onCheckExistLink(section.fields.text, paths)} onClick={() => onClick(section.fields.text, paths)}>
                  <ListItemText>{section.fields.text.value}</ListItemText>
                </ListItem>
                <Spacer layout="vertical" size="l" />
              </React.Fragment>
            ))}
          </List>
        </ListWrapper>
      </Nav>
    </Root>
  )
}

const Root = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1080px;
`

// const Logo = styled.img`
//   height: 80px;

//   @media (min-width: 400px) {
//     height: 120px;
//   }
// `

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
`

const ListItem = styled.li``

const ListItemText = styled.p`
  text-decoration: none;
  font-weight: bold;
  font-size: 9px;
  color: ${(props) => props.theme.foregrounds.primary};

  @media (min-width: 400px) {
    font-size: 12px;
  }
`

ListItemText.defaultProps = {
  theme: {
    foregrounds: {
      primary: '#404040',
    },
  },
}

const CopyrightText = styled.p`
  font-weight: bold;
  font-size: 9px;
  color: ${(props) => props.theme.foregrounds.primary};
  text-align: center;

  @media (min-width: 400px) {
    font-size: 12px;
  }
`

CopyrightText.defaultProps = {
  theme: {
    foregrounds: {
      primary: '#404040',
    },
  },
}

export default Footer
