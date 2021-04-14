import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { ComponentSet } from '@party-opu/funii-assist-types'
import { ComponentProps, TABLET_MIN_WIDTH } from '../props'
import { useCallableActions, useExistValidActions } from '../hooks'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'
import ResponsiveList from '../../core/responsiveList'
import ResponsiveListItem from '../../core/responsiveListItem'
import Avatar from '../../core/avatar'

const Member = ({ node, actionHandler, paths = [], artboardSize = 'desktop' }: ComponentProps) => {
  const componentSet = node as ComponentSet

  const onCall = useCallableActions(actionHandler)
  const exist = useExistValidActions(paths)

  const useIsLargeDevice = () => {
    const isLargeDevice = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' || artboardSize === 'desktop' ? true : false) : isLargeDevice
  }

  const isLargeDevice = useIsLargeDevice()

  return (
    <GroupContainer>
      <GroupInner>
        <Spacer size="m" />
        <ResponsiveList artboardSize={artboardSize}>
          {componentSet.sections.map((section, index) => (
            <ResponsiveListItem key={`service-${index}`} artboardSize={artboardSize}>
              <MemberRoot>
                <Avatar
                  uri={section.fields.imageURL ? section.fields.imageURL.value : undefined}
                  size="l"
                  existLink={exist(section.fields.imageURL.actions)}
                  onClick={() => onCall(section.fields.imageURL.actions)}
                />
                <Spacer />
                <MemberBody>
                  <MemberNameText
                    style={isLargeDevice ? { fontSize: '24x' } : { fontSize: '20px' }}
                    data-existlink={exist(section.fields.name.actions)}
                    onClick={() => onCall(section.fields.name.actions)}
                  >
                    {section.fields.name.value}
                  </MemberNameText>
                  <Spacer size="s" />
                  <MemberPositionText data-existlink={exist(section.fields.role.actions)} onClick={() => onCall(section.fields.role.actions)}>
                    {section.fields.role.value}
                  </MemberPositionText>
                  <Spacer />
                  <MemberProfileText data-existlink={exist(section.fields.description.actions)} onClick={() => onCall(section.fields.description.actions)}>
                    {section.fields.description.value}
                  </MemberProfileText>
                </MemberBody>
              </MemberRoot>
            </ResponsiveListItem>
          ))}
        </ResponsiveList>
        <Spacer size="m" />
      </GroupInner>
    </GroupContainer>
  )
}

const MemberRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const MemberBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px;
`

const MemberNameText = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.primary};
  white-space: pre-wrap;

  &[data-existlink='true'] {
    cursor: pointer;
  }
`

MemberNameText.defaultProps = {
  theme: {
    foregrounds: {
      primary: '#404040',
    },
  },
}

const MemberPositionText = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.foregrounds.secondary};
  white-space: pre-wrap;

  &[data-existlink='true'] {
    cursor: pointer;
  }
`

MemberPositionText.defaultProps = {
  theme: {
    foregrounds: {
      secondary: '#696969',
    },
  },
}

const MemberProfileText = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.foregrounds.secondary};
  line-height: 1.8;
  white-space: pre-wrap;

  &[data-existlink='true'] {
    cursor: pointer;
  }
`

MemberProfileText.defaultProps = {
  theme: {
    foregrounds: {
      secondary: '#696969',
    },
  },
}

export default Member
