import React from 'react'
import styled from 'styled-components'
import Spacer from '../../core/spacer'
import { ComponentProps } from '../props'
import { useRouting, useExistLink } from '../hooks'

// TODO: Logoデータをどうするか考えないといけない。
const Header = ({ sections, push, paths = [] }: ComponentProps) => {
  const onClick = useRouting(push)
  const onCheckExistLink = useExistLink()

  return (
    <Root>
      <Nav>
        {/* <LogoWrapper>
          <Logo src="/funii.svg" />
        </LogoWrapper>
        <Spacer layout="vertical" size="l" /> */}
        <ListWrapper>
          <List>
            {sections.map((section, index) => (
              <React.Fragment key={index}>
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

const Root = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: ${(props) => props.theme.backgrounds.tertiary};
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2);
`

Root.defaultProps = {
  theme: {
    backgrounds: {
      tertiary: '#ffffff',
    },
  },
}

const Nav = styled.nav`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1080px;
`

// const Logo = styled.img`
//   height: 60px;

//   @media (min-width: 400px) {
//     height: 120px;
//   }
// `

// const LogoWrapper = styled.div`
//   display: flex;
//   justify-content: center;
// `

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-right: 12px;
  padding-left: 12px;
`

const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 400px) {
    justify-content: start;
  }
`

const ListItem = styled.li`
  &[data-existlink='true'] {
    cursor: pointer;
  }
`

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

export default Header
