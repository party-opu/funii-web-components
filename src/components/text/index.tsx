import React, { useCallback } from 'react'
import styled from 'styled-components'
import { ComponentProps, Text as TextNode } from '../props'

const Text = ({ node, push, paths = [] }: ComponentProps) => {
  const textNode = node as TextNode

  const onClick = useCallback(
    (text: TextNode) => {
      const linkType = text.linkType
      const internalLink = text.internalLink
      const externalLink = text.externalLink

      if (push && linkType === 'external' && externalLink) {
        push(false, externalLink)
        return
      }

      if (push && linkType === 'internal' && internalLink && paths.includes(internalLink)) {
        push(true, internalLink)
        return
      }
    },
    [paths, push]
  )
  const onCheckExistLink = useCallback(
    (text: TextNode) => {
      const linkType = text.linkType
      const internalLink = text.internalLink
      const externalLink = text.externalLink

      if (linkType === 'external' && externalLink) {
        return true
      }

      if (linkType === 'internal' && internalLink && paths.includes(internalLink)) {
        return true
      }

      return false
    },
    [paths]
  )

  return (
    <React.Fragment>
      <Wrapper>
        <BaseText data-existlink={onCheckExistLink(textNode)} style={textNode.style ? { ...textNode.style } : {}} onClick={() => onClick(textNode)}>
          {textNode.value}
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
