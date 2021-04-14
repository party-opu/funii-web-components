import React from 'react'
import styled from 'styled-components'
import { Button as ButtonNode } from '@party-opu/funii-assist-types'
import { ComponentProps, DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from '../props'
import { useCallableActions, useExistValidActions } from '../hooks'
import { useMediaQuery } from 'react-responsive'

const Button = ({ node, actionHandler, paths = [], artboardSize }: ComponentProps) => {
  const button = node as ButtonNode

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
      <Wrapper style={button.styleMode === 'common' || isDesktop ? button.containerStyle : isTablet ? button.containerStyleTb : button.containerStyleMb}>
        <BaseButton
          data-existlink={exist(button.actions)}
          style={button.styleMode === 'common' ? button.style : isDesktop ? button.style : isTablet ? button.styleTb : button.styleMb}
          onClick={() => onCall(button.actions)}
        >
          <BaseText
            style={button.styleMode === 'common' ? button.textStyle : isDesktop ? button.textStyle : isTablet ? button.textStyleTb : button.textStyleMb}
          >
            {button.value}
          </BaseText>
        </BaseButton>
      </Wrapper>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  width: 100%;
  overflow: hidden;
`

const BaseButton = styled.div`
  &[data-existlink='true'] {
    cursor: pointer;
  }
`
const BaseText = styled.p`
  white-space: pre-wrap;
`

export default Button
