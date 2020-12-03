import React from 'react'
import styled from 'styled-components'
import { ComponentProps } from '../props'
import { useRouting, useExistLink } from '../hooks'

const Image = ({ sections, push }: ComponentProps) => {
  const onClick = useRouting(push)
  const onCheckExistLink = useExistLink()

  return (
    <React.Fragment>
      {sections.map((section, index) => (
        <Wrapper key={`text-${index}`}>
          <BaseImage
            src={section.fields.imageURL.value}
            data-existlink={onCheckExistLink(section.fields.imageURL)}
            style={section.fields.imageURL.style ? { ...section.fields.imageURL.style } : {}}
            onClick={() => onClick(section.fields.imageURL)}
          ></BaseImage>
        </Wrapper>
      ))}
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const BaseImage = styled.img`
  width: 100%;
  height: auto;

  &[data-existlink='true'] {
    cursor: pointer;
  }
`

export default Image
