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

const Service = ({ node, actionHandler, paths = [], artboardSize = 'desktop' }: ComponentProps) => {
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
              <ServiceRoot>
                <Image
                  src={section.fields.imageURL.value}
                  data-existlink={exist(section.fields.imageURL.actions)}
                  onClick={() => onCall(section.fields.imageURL.actions)}
                />
                <Spacer />
                <ServiceBody>
                  <ServiceTitleText
                    style={isLargeDevice ? { fontSize: '24px' } : { fontSize: '20px' }}
                    data-existlink={exist(section.fields.title.actions)}
                    onClick={() => onCall(section.fields.title.actions)}
                  >
                    {section.fields.title.value}
                  </ServiceTitleText>
                  <Spacer />
                  <ServiceDetailText data-existlink={exist(section.fields.description.actions)} onClick={() => onCall(section.fields.description.actions)}>
                    {section.fields.description.value}
                  </ServiceDetailText>
                </ServiceBody>
              </ServiceRoot>
            </ResponsiveListItem>
          ))}
        </ResponsiveList>
        <Spacer size="m" />
      </GroupInner>
    </GroupContainer>
  )
}

const ServiceRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  border-radius: 20px;

  &[data-existlink='true'] {
    cursor: pointer;
  }
`

const ServiceBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px;
`

const ServiceTitleText = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.primary};
  white-space: pre-wrap;

  &[data-existlink='true'] {
    cursor: pointer;
  }
`

ServiceTitleText.defaultProps = {
  theme: {
    foregrounds: {
      primary: '#404040',
    },
  },
}

const ServiceDetailText = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.foregrounds.secondary};
  line-height: 1.8;
  white-space: pre-wrap;

  &[data-existlink='true'] {
    cursor: pointer;
  }
`

ServiceDetailText.defaultProps = {
  theme: {
    foregrounds: {
      secondary: '#696969',
    },
  },
}

export default Service
