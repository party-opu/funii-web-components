import React from 'react'
import styled from 'styled-components'
import { ComponentProps } from '../props'
import { useRouting, useExistLink } from '../hooks'

const Text = ({ sections, push, paths = [] }: ComponentProps) => {
  const onClick = useRouting(push)
  const onCheckExistLink = useExistLink()

  return (
    <React.Fragment>
      {sections.map((section, index) => (
        <Wrapper key={`text-${index}`}>
          <BaseText
            data-existlink={onCheckExistLink(section.fields.text, paths)}
            style={section.fields.text.style ? { ...section.fields.text.style } : {}}
            onClick={() => onClick(section.fields.text, paths)}
          >
            {section.fields.text.value}
          </BaseText>
        </Wrapper>
      ))}
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`

const BaseText = styled.p`
  width: 100%;
  font-size: 18px;
  line-height: 1.5;
  color: ${(props) => props.theme.foregrounds.primary};
  white-space: pre-wrap;

  &[data-existlink='true'] {
    text-decoration: underline;
    cursor: pointer;
  }
`

BaseText.defaultProps = {
  theme: {
    foregrounds: {
      primary: '#404040',
    },
  },
}

export default Text
