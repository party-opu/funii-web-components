import React, { useCallback } from 'react'
import styled from 'styled-components'
import { ComponentProps, Image as ImageNode, DESKTOP_MIN_WIDTH, MOBILE_MIN_WIDTH, TABLET_MIN_WIDTH } from '../props'
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
      <MediaQuery minWidth={DESKTOP_MIN_WIDTH}>
        <Wrapper style={imageNode.containerStyle ?? {}}>
          <BaseImage src={imageNode.imageURL} data-existlink={onCheckExistLink(imageNode)} style={imageNode.style ?? {}} onClick={() => onClick(imageNode)} />
        </Wrapper>
      </MediaQuery>

      <MediaQuery minWidth={TABLET_MIN_WIDTH} maxWidth={DESKTOP_MIN_WIDTH - 1}>
        <Wrapper style={imageNode.containerStyleTb ?? {}}>
          <BaseImage
            src={imageNode.imageURL}
            data-existlink={onCheckExistLink(imageNode)}
            style={imageNode?.styleTb ?? {}}
            onClick={() => onClick(imageNode)}
          />
        </Wrapper>
      </MediaQuery>

      <MediaQuery minWidth={MOBILE_MIN_WIDTH}>
        <Wrapper style={imageNode.containerStyleMb ?? {}}>
          <BaseImage src={imageNode.imageURL} data-existlink={onCheckExistLink(imageNode)} style={imageNode.styleMb ?? {}} onClick={() => onClick(imageNode)} />
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
