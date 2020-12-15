import React, { useState } from 'react'
import styled from 'styled-components'
import { BiMenu } from 'react-icons/bi'
import Spacer from '../../core/spacer'
import Hidden from '../../core/hidden'
import IconButton from '../../core/iconButton'
import Drawer from '../../core/drawer'
import { ComponentProps } from '../props'
import { useRouting, useExistLink } from '../hooks'

const PCMenu = ({ sections, push, paths = [] }: ComponentProps) => {
  const onClick = useRouting(push)
  const onCheckExistLink = useExistLink()

  return (
    <Nav>
      <ListWrapper>
        <List>
          {sections.map((section, index) => {
            if (section.fields.text) {
              return (
                <React.Fragment key={index}>
                  <ListItem data-existlink={onCheckExistLink(section.fields.text, paths)} onClick={() => onClick(section.fields.text, paths)}>
                    <ListItemText>{section.fields.text.value}</ListItemText>
                  </ListItem>
                  <Spacer layout="vertical" size="l" />
                </React.Fragment>
              )
            }

            if (section.fields.imageURL) {
              return (
                <React.Fragment key={index}>
                  <ListItem data-existlink={onCheckExistLink(section.fields.imageURL, paths)} onClick={() => onClick(section.fields.imageURL, paths)}>
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

const Header = ({ sections, push, paths = [] }: ComponentProps) => {
  const [openDrawer, setOpenDrawer] = useState<boolean>(false)
  const onClick = useRouting(push)
  const onCheckExistLink = useExistLink()

  return (
    <Root>
      <Hidden smUp={false}>
        <PCMenu sections={sections} push={push} paths={paths} />
      </Hidden>
      <Hidden smUp={true}>
        <SMMenu onOpen={() => setOpenDrawer(true)} />
        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <DrawerInner>
            <List>
              {sections.map((section, index) => {
                if (section.fields.text) {
                  return (
                    <React.Fragment key={index}>
                      <ListItem
                        data-existlink={onCheckExistLink(section.fields.text, paths)}
                        onClick={() => {
                          if (onCheckExistLink(section.fields.text, paths)) {
                            onClick(section.fields.text, paths)
                            setOpenDrawer(false)
                          }
                        }}
                      >
                        <ListItemText>{section.fields.text.value}</ListItemText>
                      </ListItem>
                      <Spacer size="l" />
                    </React.Fragment>
                  )
                }

                if (section.fields.imageURL) {
                  return (
                    <React.Fragment key={index}>
                      <ListItem
                        data-existlink={onCheckExistLink(section.fields.imageURL, paths)}
                        onClick={() => {
                          if (onCheckExistLink(section.fields.imageURL, paths)) {
                            onClick(section.fields.imageURL, paths)
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
  flex-direction: column;
  width: 100%;
  list-style-type: none;

  @media (min-width: 400px) {
    justify-content: start;
    flex-direction: row;
    align-items: center;
  }
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
  font-size: 14px;
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

const ListItemImage = styled.img`
  height: 40px;

  @media (min-width: 400px) {
    height: 40px;
  }
`

export default Header
