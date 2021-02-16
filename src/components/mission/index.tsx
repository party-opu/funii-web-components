import React from 'react'
import styled from 'styled-components'
import { ComponentProps, ComponentSet, TABLET_MIN_WIDTH } from '../props'
import { useRouting } from '../hooks'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'
import { useMediaQuery } from 'react-responsive'

const Mission = ({ node, push, paths = [], artboardSize }: ComponentProps) => {
  const componentSet = node as ComponentSet
  const onClick = useRouting(push)

  const useIsTablet = () => {
    const isTablet = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' ? true : false) : isTablet
  }

  const isTablet = useIsTablet()

  return (
    <GroupContainer>
      <GroupInner>
        <Spacer size="m" />
        {componentSet.sections.map((section, index) => (
          <React.Fragment key={`mission-${index}`}>
            <MissionText style={isTablet ? { fontSize: '36px' } : { fontSize: '24px' }} onClick={() => onClick(section.fields.title, paths)}>
              {section.fields.title.value}
            </MissionText>
            <Spacer size="xl" />
            <MissionDetailText is-tablet={isTablet} onClick={() => onClick(section.fields.description, paths)}>
              {section.fields.description.value}
            </MissionDetailText>
          </React.Fragment>
        ))}
        <Spacer size="m" />
      </GroupInner>
    </GroupContainer>
  )
}

const MissionText = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.primary};
  white-space: pre-wrap;
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

  // &[is-tablet='false'] {
  //   font-size: 18px;
  // }
`

MissionDetailText.defaultProps = {
  theme: {
    foregrounds: {
      secondary: '#696969',
    },
  },
}

export default Mission
