import React from 'react'
import styled from 'styled-components'
import { ComponentProps, ComponentSet, TABLET_MIN_WIDTH } from '../props'
import { useRouting } from '../hooks'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'
import ResponsiveList from '../../core/responsiveList'
import ResponsiveListItem from '../../core/responsiveListItem'
import { useMediaQuery } from 'react-responsive'

const Service = ({ node, push, paths = [], artboardSize }: ComponentProps) => {
  const componentSet = node as ComponentSet
  const onClick = useRouting(push)

  const useIsTablet = () => {
    const isTablet = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' ? true : false) : isTablet
  }

  const isTablet = useIsTablet()
  console.log('isTablet', isTablet)

  return (
    <GroupContainer>
      <GroupInner>
        <Spacer size="m" />
        <ResponsiveList artboardSize={artboardSize!}>
          {componentSet.sections.map((section, index) => (
            <ResponsiveListItem key={`service-${index}`} artboardSize={artboardSize!}>
              <ServiceRoot>
                <Image src={section.fields.imageURL.value} onClick={() => onClick(section.fields.imageURL, paths)} />
                <Spacer />
                <ServiceBody>
                  <ServiceTitleText style={isTablet ? { fontSize: '24px' } : { fontSize: '20px' }} onClick={() => onClick(section.fields.title, paths)}>
                    {section.fields.title.value}
                  </ServiceTitleText>
                  <Spacer />
                  <ServiceDetailText onClick={() => onClick(section.fields.description, paths)}>{section.fields.description.value}</ServiceDetailText>
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
