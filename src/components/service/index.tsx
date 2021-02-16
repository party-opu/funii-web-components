import React from 'react'
import styled from 'styled-components'
import { ComponentProps, ComponentSet, DESKTOP_MIN_WIDTH } from '../props'
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

  const useIsDesktop = () => {
    const isDesktop = useMediaQuery({ minWidth: DESKTOP_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'desktop' ? true : false) : isDesktop
  }

  const isDesktop = useIsDesktop()

  return (
    <GroupContainer>
      <GroupInner>
        <Spacer size="m" />
        <ResponsiveList is-desktop={isDesktop}>
          {componentSet.sections.map((section, index) => (
            <ResponsiveListItem key={`service-${index}`} is-desktop={isDesktop}>
              <ServiceRoot>
                <Image src={section.fields.imageURL.value} onClick={() => onClick(section.fields.imageURL, paths)} />
                <Spacer />
                <ServiceBody>
                  <ServiceTitleText is-desktop={isDesktop} onClick={() => onClick(section.fields.title, paths)}>
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
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.primary};
  white-space: pre-wrap;

  &[is-desktop='false'] {
    font-size: 24px;
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
`

ServiceDetailText.defaultProps = {
  theme: {
    foregrounds: {
      secondary: '#696969',
    },
  },
}

export default Service
