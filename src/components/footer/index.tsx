import React from 'react'
import styled from 'styled-components'
import Spacer from '../../core/spacer'
import { ComponentProps, ComponentSet, TABLET_MIN_WIDTH } from '../props'
import { useActionForItem, useExistActionForItem } from '../hooks'
import { useMediaQuery } from 'react-responsive'

const Footer = ({ node, push, paths = [], artboardSize }: ComponentProps) => {
  const componentSet = node as ComponentSet
  const action = useActionForItem(push, paths)
  const existAction = useExistActionForItem(paths)

  const useIsTablet = () => {
    const isTablet = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' ? true : false) : isTablet
  }

  const isTablet = useIsTablet()

  return (
    <Root>
      <Nav>
        <ListWrapper>
          <List>
            {componentSet.sections.map((section, index) => (
              <React.Fragment key={index}>
                <Spacer layout="vertical" size="l" />
                <ListItem data-existlink={existAction(section.fields.text)} onClick={() => action(section.fields.text)}>
                  <ListItemText style={isTablet ? { fontSize: '12px' } : { fontSize: '9px' }} is-tablet={isTablet}>
                    {section.fields.text.value}
                  </ListItemText>
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

// &[is-tablet='false'] {
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
  color: ${(props) => props.theme.foregrounds.primary};
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

  // &[is-tablet='false'] {
  //   font-size: 12px;
  // }
`

CopyrightText.defaultProps = {
  theme: {
    foregrounds: {
      primary: '#404040',
    },
  },
}

export default Footer
