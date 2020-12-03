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

const Service = ({ sections, push }: ComponentProps) => {
  const onClick = useRouting(push)

  return (
    <GroupContainer>
      <GroupInner>
        <GroupTitle>サービス</GroupTitle>
        <Spacer size="xl" />
        <ResponsiveList>
          {sections.map((section, index) => (
            <ResponsiveListItem key={`service-${index}`}>
              <ServiceRoot>
                <Image src={section.fields.imageURL.value} onClick={() => onClick(section.fields.imageURL)} />
                <Spacer />
                <ServiceBody>
                  <ServiceTitleText onClick={() => onClick(section.fields.title)}>{section.fields.title.value}</ServiceTitleText>
                  <Spacer />
                  <ServiceDetailText onClick={() => onClick(section.fields.description)}>{section.fields.description.value}</ServiceDetailText>
                </ServiceBody>
              </ServiceRoot>
            </ResponsiveListItem>
          ))}
        </ResponsiveList>
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

  @media (min-width: 400px) {
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
