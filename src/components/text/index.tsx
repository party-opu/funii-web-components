import React from 'react'
import styled from 'styled-components'
import { useMediaQuery } from 'react-responsive'
import { Text as TextNode } from '@party-opu/funii-assist-types'
import { ComponentProps, DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from '../props'
import { useCallableActions, useExistValidActions } from '../hooks'

const Text = ({ node, actionHandler, paths = [], artboardSize }: ComponentProps) => {
  const text = node as TextNode

  const onCall = useCallableActions(actionHandler)
  const exist = useExistValidActions(paths)

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
          data-existlink={exist(text.actions)}
          style={text.styleMode === 'common' ? text.style : isDesktop ? text.style : isTablet ? text.styleTb : text.styleMb}
          onClick={() => onCall(text.actions)}
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
