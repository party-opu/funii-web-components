import React from 'react'
import styled from 'styled-components'
import { Section } from '../../entities/sectionGroup'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'
import GroupTitle from '../../core/groupTitle'

export type MissionProps = {
  sections: Section[]
}

const Mission = ({ sections }: MissionProps) => {
  return (
    <GroupContainer>
      <GroupInner>
        <GroupTitle>ミッション</GroupTitle>
        <Spacer size="xl" />
        {sections.map((section, index) => (
          <React.Fragment key={`mission-${index}`}>
            <MissionText>{section.fields.title.value}</MissionText>
            <Spacer size="xl" />
            <MissionDetailText>{section.fields.description.value}</MissionDetailText>
          </React.Fragment>
        ))}
      </GroupInner>
    </GroupContainer>
  )
}

const MissionText = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.primary};
  white-space: pre-wrap;

  @media (min-width: 400px) {
    font-size: 36px;
  }
`

MissionText.defaultProps = {
  theme: {
    foregrounds: {
      primary: '#404040',
    },
  },
}

const MissionDetailText = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.foregrounds.secondary};
  white-space: pre-wrap;

  @media (min-width: 400px) {
    font-size: 18px;
  }
`

MissionDetailText.defaultProps = {
  theme: {
    foregrounds: {
      secondary: '#696969',
    },
  },
}

export default Mission
