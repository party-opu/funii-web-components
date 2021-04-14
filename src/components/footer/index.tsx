import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { ComponentSet } from '@party-opu/funii-assist-types'
import { ComponentProps, TABLET_MIN_WIDTH } from '../props'
import { useCallableActions, useExistValidActions } from '../hooks'
import Spacer from '../../core/spacer'

const Footer = ({ node, actionHandler, paths = [], artboardSize }: ComponentProps) => {
  const componentSet = node as ComponentSet

  const onCall = useCallableActions(actionHandler)
  const exist = useExistValidActions(paths)

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
                <ListItem data-existlink={exist(section.fields.text.actions)} onClick={() => onCall(section.fields.text.actions)}>
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
