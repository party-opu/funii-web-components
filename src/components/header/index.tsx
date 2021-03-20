import React, { useState } from 'react'
import styled from 'styled-components'
import { BiMenu } from 'react-icons/bi'
import { ComponentSet } from '@party-opu/funii-assist-types'
import { ComponentProps, TABLET_MIN_WIDTH } from '../props'
import Spacer from '../../core/spacer'
import Hidden from '../../core/hidden'
import IconButton from '../../core/iconButton'
import Drawer from '../../core/drawer'
import { useActionForItem, useExistActionForItem } from '../hooks'
import { useMediaQuery } from 'react-responsive'

const PCMenu = ({ node, push, paths = [], artboardSize }: ComponentProps) => {
  const componentSet = node as ComponentSet
  const action = useActionForItem(push, paths)
  const existAction = useExistActionForItem(paths)

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
                  <ListItem data-existlink={existAction(section.fields.text)} onClick={() => action(section.fields.text)}>
                    <ListItemText style={isLargeDevice ? { fontSize: '14px' } : { fontSize: '12px' }}>{section.fields.text.value}</ListItemText>
                  </ListItem>
                  <Spacer layout="vertical" size="l" />
                </React.Fragment>
              )
            }

            if (section.fields.imageURL) {
              return (
                <React.Fragment key={index}>
                  <ListItem data-existlink={existAction(section.fields.imageURL)} onClick={() => action(section.fields.imageURL)}>
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

const Header = ({ node, push, paths = [], artboardSize = 'desktop' }: ComponentProps) => {
  const componentSet = node as ComponentSet
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const action = useActionForItem(push, paths)
  const existAction = useExistActionForItem(paths)

  const useIsLargeDevice = () => {
    const isLargeDevice = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' || artboardSize === 'desktop' ? true : false) : isLargeDevice
  }

  const isLargeDevice = useIsLargeDevice()

  return (
    <Root>
      <Hidden smUp={false} artboardSize={artboardSize}>
        <PCMenu node={node} push={push} paths={paths} artboardSize={artboardSize} />
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
                        data-existlink={existAction(section.fields.text)}
                        onClick={() => {
                          action(section.fields.text)
                          if (existAction(section.fields.text)) {
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
                        data-existlink={existAction(section.fields.imageURL)}
                        onClick={() => {
                          action(section.fields.imageURL)
                          if (existAction(section.fields.imageURL)) {
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
