import React from 'react'
import styled from 'styled-components'
import { ComponentProps } from '../props'
import { useRouting } from '../hooks'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'
import GroupTitle from '../../core/groupTitle'
import ResponsiveList from '../../core/responsiveList'
import ResponsiveListItem from '../../core/responsiveListItem'
import Avatar from '../../core/avatar'

const Member = ({ sections, push, paths = [] }: ComponentProps) => {
  const onClick = useRouting(push)

  return (
    <GroupContainer>
      <GroupInner>
        <GroupTitle>メンバー</GroupTitle>
        <Spacer size="xl" />
        <ResponsiveList>
          {sections.map((section, index) => (
            <ResponsiveListItem key={`service-${index}`}>
              <MemberRoot>
                <Avatar
                  uri={section.fields.imageURL ? section.fields.imageURL.value : undefined}
                  size="l"
                  onClick={() => onClick(section.fields.imageURL, paths)}
                />
                <Spacer />
                <MemberBody>
                  <MemberNameText onClick={() => onClick(section.fields.name, paths)}>{section.fields.name.value}</MemberNameText>
                  <Spacer size="s" />
                  <MemberPositionText onClick={() => onClick(section.fields.role, paths)}>{section.fields.role.value}</MemberPositionText>
                  <Spacer />
                  <MemberProfileText onClick={() => onClick(section.fields.description, paths)}>{section.fields.description.value}</MemberProfileText>
                </MemberBody>
              </MemberRoot>
            </ResponsiveListItem>
          ))}
        </ResponsiveList>
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
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.primary};
  white-space: pre-wrap;

  @media (min-width: 400px) {
    font-size: 24px;
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
`

MemberProfileText.defaultProps = {
  theme: {
    foregrounds: {
      secondary: '#696969',
    },
  },
}

export default Member
