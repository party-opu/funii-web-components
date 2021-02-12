import React, { useCallback } from 'react'
import styled from 'styled-components'
import { ComponentProps, Image as ImageNode } from '../props'
import MediaQuery from 'react-responsive'

const Image = ({ node, push, paths = [] }: ComponentProps) => {
  const imageNode = node as ImageNode

  // FIXME: useRoutingをリファクタリングして、それを利用するようにしたい。
  const onClick = useCallback(
    (image: ImageNode) => {
      const linkType = image.linkType
      const internalLink = image.internalLink
      const externalLink = image.externalLink

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

  // FIXME: useExistLinkをリファクタリングして、それを利用するようにしたい。
  const onCheckExistLink = useCallback(
    (image: ImageNode) => {
      const linkType = image.linkType
      const internalLink = image.internalLink
      const externalLink = image.externalLink

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
      <MediaQuery query="(min-width: 768px)">
        <Wrapper style={imageNode.containerStyle ? { ...imageNode.containerStyle } : {}}>
          <BaseImage
            src={imageNode.imageURL}
            data-existlink={onCheckExistLink(imageNode)}
            style={imageNode.style ? { ...imageNode.style } : {}}
            onClick={() => onClick(imageNode)}
          />
        </Wrapper>
      </MediaQuery>
      <MediaQuery query="(max-width: 768px)">
        <Wrapper style={imageNode.containerStyleTb ? { ...imageNode.containerStyle } : {}}>
          <BaseImage
            src={imageNode.imageURL}
            data-existlink={onCheckExistLink(imageNode)}
            style={imageNode.style ? { ...imageNode.style } : {}}
            onClick={() => onClick(imageNode)}
          />
        </Wrapper>
      </MediaQuery>

      <MediaQuery query="(max-width: 500px)">
        <Wrapper style={imageNode.containerStyleMb ? { ...imageNode.containerStyle } : {}}>
          <BaseImage
            src={imageNode.imageURL}
            data-existlink={onCheckExistLink(imageNode)}
            style={imageNode.style ? { ...imageNode.style } : {}}
            onClick={() => onClick(imageNode)}
          />
        </Wrapper>
      </MediaQuery>
    </React.Fragment>
  )
}

const Wrapper = styled.div`
  width: 100%;
`

const BaseImage = styled.img`
  &[data-existlink='true'] {
    cursor: pointer;
  }
`

export default Image
