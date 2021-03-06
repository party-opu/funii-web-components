import React, { useState } from 'react'
import styled from 'styled-components'
import { BiMenu } from 'react-icons/bi'
import { useMediaQuery } from 'react-responsive'
import { ComponentSet } from '@party-opu/funii-assist-types'
import { ComponentProps, TABLET_MIN_WIDTH } from '../props'
import { useCallableActions, useExistValidActions } from '../hooks'
import Spacer from '../../core/spacer'
import Hidden from '../../core/hidden'
import IconButton from '../../core/iconButton'
import Drawer from '../../core/drawer'

const PCMenu = ({ node, actionHandler, paths = [], artboardSize }: ComponentProps) => {
  const componentSet = node as ComponentSet

  const onCall = useCallableActions(actionHandler)
  const exist = useExistValidActions(paths)

  const useIsLargeDevice = () => {
    const isLargeDevice = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' || artboardSize === 'desktop' ? true : false) : isLargeDevice
  }

  const isLargeDevice = useIsLargeDevice()

  return (
    <Nav>
      <ListWrapper>
        <List style={isLargeDevice ? { flexDirection: 'row', alignItems: 'center', justifyContent: 'start' } : { flexDirection: 'column' }}>
          {componentSet.sections.map((section, index) => {
            if (section.fields.text) {
              return (
                <React.Fragment key={index}>
                  <ListItem data-existlink={exist(section.fields.text.actions)} onClick={() => onCall(section.fields.text.actions)}>
                    <ListItemText style={isLargeDevice ? { fontSize: '14px' } : { fontSize: '12px' }}>{section.fields.text.value}</ListItemText>
                  </ListItem>
                  <Spacer layout="vertical" size="l" />
                </React.Fragment>
              )
            }

            if (section.fields.imageURL) {
              return (
                <React.Fragment key={index}>
                  <ListItem data-existlink={exist(section.fields.imageURL.actions)} onClick={() => onCall(section.fields.imageURL.actions)}>
                    <ListItemImage src={section.fields.imageURL.value} />
                  </ListItem>
                  <Spacer layout="vertical" size="l" />
                </React.Fragment>
              )
            }
          })}
        </List>
      </ListWrapper>
    </Nav>
  )
}

type SMMenuProps = {
  onOpen: () => void
}

const SMMenu = ({ onOpen }: SMMenuProps) => {
  return (
    <Nav>
      <IconButton onClick={onOpen}>
        <BiMenu size={20} />
      </IconButton>
    </Nav>
  )
}

const Header = ({ node, actionHandler, paths = [], artboardSize = 'desktop' }: ComponentProps) => {
  const componentSet = node as ComponentSet
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)

  const onCall = useCallableActions(actionHandler)
  const exist = useExistValidActions(paths)

  const useIsLargeDevice = () => {
    const isLargeDevice = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' || artboardSize === 'desktop' ? true : false) : isLargeDevice
  }

  const isLargeDevice = useIsLargeDevice()

  return (
    <Root>
      <Hidden smUp={false} artboardSize={artboardSize}>
        <PCMenu node={node} actionHandler={actionHandler} paths={paths} artboardSize={artboardSize} />
      </Hidden>
      <Hidden smUp={true} artboardSize={artboardSize}>
        <SMMenu onOpen={() => setOpenDrawer(true)} />
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <DrawerInner>
            <List style={isLargeDevice ? { flexDirection: 'row', alignItems: 'center', justifyContent: 'start' } : { flexDirection: 'column' }}>
              {componentSet.sections.map((section, index) => {
                if (section.fields.text) {
                  return (
                    <React.Fragment key={index}>
                      <ListItem
                        data-existlink={exist(section.fields.text.actions)}
                        onClick={() => {
                          onCall(section.fields.text.actions)
                          if (exist(section.fields.text.actions)) {
                            setOpenDrawer(false)
                          }
                        }}
                      >
                        <ListItemText style={isLargeDevice ? { fontSize: '14px' } : { fontSize: '12px' }}>{section.fields.text.value}</ListItemText>
                      </ListItem>
                      <Spacer size="l" />
                    </React.Fragment>
                  )
                }

                if (section.fields.imageURL) {
                  return (
                    <React.Fragment key={index}>
                      <ListItem
                        data-existlink={exist(section.fields.imageURL.actions)}
                        onClick={() => {
                          onCall(section.fields.imageURL.actions)
                          if (exist(section.fields.imageURL.actions)) {
                            setOpenDrawer(false)
                          }
                        }}
                      >
                        <ListItemImage src={section.fields.imageURL.value} />
                      </ListItem>
                      <Spacer size="l" />
                    </React.Fragment>
                  )
                }
              })}
            </List>
          </DrawerInner>
        </Drawer>
      </Hidden>
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
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 1080px;
  padding-right: 12px;
  padding-left: 12px;
`

const DrawerInner = styled.div`
  padding: 24px;
`

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

const List = styled.ul`
  display: flex;
  width: 100%;
  list-style-type: none;
`

const ListItem = styled.li`
  display: flex;
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

const ListItemImage = styled.img`
  height: 40px;
`

export default Header
