import React from 'react'
import styled from 'styled-components'
import Spacer from '../../core/spacer'
import { ComponentProps, ComponentSet, DESKTOP_MIN_WIDTH } from '../props'
import { useRouting, useExistLink } from '../hooks'
import { useMediaQuery } from 'react-responsive'

const Footer = ({ node, push, paths = [], artboardSize }: ComponentProps) => {
  const componentSet = node as ComponentSet
  const onClick = useRouting(push)
  const onCheckExistLink = useExistLink()

  const useIsDesktop = () => {
    const isDesktop = useMediaQuery({ minWidth: DESKTOP_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'desktop' ? true : false) : isDesktop
  }

  const isDesktop = useIsDesktop()

  return (
    <Root>
      <Nav>
        <ListWrapper>
          <List>
            {componentSet.sections.map((section, index) => (
              <React.Fragment key={index}>
                <Spacer layout="vertical" size="l" />
                <ListItem data-existlink={onCheckExistLink(section.fields.text, paths)} onClick={() => onClick(section.fields.text, paths)}>
                  <ListItemText is-desktop={isDesktop}>{section.fields.text.value}</ListItemText>
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
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 60px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100%;
`

// const Logo = styled.img`
//   height: 80px;

// &[is-desktop='false'] {
//   height: 120px;
// }

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

  &[is-desktop='false'] {
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

  &[is-desktop='false'] {
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
