import React from 'react'
import styled from 'styled-components'
import { ComponentProps, Text as TextNode, DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from '../props'
import { useRouting, useExistLink } from '../hooks'
import { useMediaQuery } from 'react-responsive'

const Text = ({ node, push, paths = [], artboardSize }: ComponentProps) => {
  const text = node as TextNode
  const onClick = useRouting(push)
  const onCheckExistLink = useExistLink()

  const useIsDesktop = () => {
    const isDesktop = useMediaQuery({ minWidth: DESKTOP_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'desktop' ? true : false) : isDesktop
  }
  const useIsTablet = () => {
    const isTablet = useMediaQuery({ minWidth: TABLET_MIN_WIDTH, maxWidth: DESKTOP_MIN_WIDTH - 1 })
    return artboardSize ? (artboardSize === 'tablet' ? true : false) : isTablet
  }

  const isDesktop = useIsDesktop()
  const isTablet = useIsTablet()

  return (
    <React.Fragment>
      <Wrapper>
        <BaseText
          data-existlink={onCheckExistLink(text, paths)}
          style={text.styleMode === 'common' ? text.style : isDesktop ? text.style : isTablet ? text.styleTb : text.styleMb}
          onClick={() => onClick(text, paths)}
        >
          {text.value}
        </BaseText>
      </Wrapper>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`

const BaseText = styled.p`
  width: 100%;
  white-space: pre-wrap;

  &[data-existlink='true'] {
    text-decoration: underline;
    cursor: pointer;
  }
`

export default Text
