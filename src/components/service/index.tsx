import React from 'react'
import styled from 'styled-components'
import { ComponentProps, ComponentSet, TABLET_MIN_WIDTH } from '../props'
import { useActionForItem } from '../hooks'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'
import ResponsiveList from '../../core/responsiveList'
import ResponsiveListItem from '../../core/responsiveListItem'
import { useMediaQuery } from 'react-responsive'

const Service = ({ node, push, paths = [], artboardSize = 'desktop' }: ComponentProps) => {
  const componentSet = node as ComponentSet
  const action = useActionForItem(push, paths)

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
                <Image src={section.fields.imageURL.value} onClick={() => action(section.fields.imageURL)} />
                <Spacer />
                <ServiceBody>
                  <ServiceTitleText style={isLargeDevice ? { fontSize: '24px' } : { fontSize: '20px' }} onClick={() => action(section.fields.title)}>
                    {section.fields.title.value}
                  </ServiceTitleText>
                  <Spacer />
                  <ServiceDetailText onClick={() => action(section.fields.description)}>{section.fields.description.value}</ServiceDetailText>
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
`

ServiceDetailText.defaultProps = {
  theme: {
    foregrounds: {
      secondary: '#696969',
    },
  },
}

export default Service
