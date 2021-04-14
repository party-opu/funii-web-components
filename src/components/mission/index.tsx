import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { ComponentSet } from '@party-opu/funii-assist-types'
import { ComponentProps, TABLET_MIN_WIDTH } from '../props'
import { useCallableActions, useExistValidActions } from '../hooks'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'

const Mission = ({ node, actionHandler, paths = [], artboardSize }: ComponentProps) => {
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
        {componentSet.sections.map((section, index) => (
          <React.Fragment key={`mission-${index}`}>
            <MissionText
              style={isLargeDevice ? { fontSize: '36px' } : { fontSize: '24px' }}
              data-existlink={exist(section.fields.title.actions)}
              onClick={() => onCall(section.fields.title.actions)}
            >
              {section.fields.title.value}
            </MissionText>
            <Spacer size="xl" />
            <MissionDetailText
              is-tablet={isLargeDevice}
              data-existlink={exist(section.fields.description.actions)}
              onClick={() => onCall(section.fields.description.actions)}
            >
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

  &[data-existlink='true'] {
    cursor: pointer;
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

  &[data-existlink='true'] {
    cursor: pointer;
  }

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
