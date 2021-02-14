import React from 'react'
import styled from 'styled-components'
import { ComponentProps, Button as ButtonNode, DESKTOP_MIN_WIDTH, TABLET_MIN_WIDTH } from '../props'
import { useRouting, useExistLink } from '../hooks'
import { useMediaQuery } from 'react-responsive'

const Button = ({ node, push, paths = [], artboardSize }: ComponentProps) => {
  const bt = node as ButtonNode
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
  console.log('isDesktop', isDesktop)

  return (
    <React.Fragment>
      <Wrapper style={bt.styleMode === 'common' ? bt.containerStyle : isDesktop ? bt.containerStyle : isTablet ? bt.containerStyleTb : bt.containerStyleMb}>
        <BaseButton
          data-existlink={onCheckExistLink(bt, paths)}
          style={bt.styleMode === 'common' ? bt.style : isDesktop ? bt.style : isTablet ? bt.styleTb : bt.styleMb}
          onClick={() => onClick(bt, paths)}
        >
          <BaseText style={bt.styleMode === 'common' ? bt.textStyle : isDesktop ? bt.textStyle : isTablet ? bt.textStyleTb : bt.textStyleMb}>
            {bt.value}
          </BaseText>
        </BaseButton>
      </Wrapper>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  width: 100%;
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
