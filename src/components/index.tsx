import React, { useCallback } from 'react'
import { Frame as FrameNode } from '@party-opu/funii-assist-types'
import { ComponentProps } from './props'
import Frame, { FrameItemWrapper } from './frame'
import Text from './text'
import Image from './image'
import Space from './space'
import Button from './button'
import Carousel from './carousel'
import Header from './header'
import Footer from './footer'
import Mission from './mission'
import Service from './service'
import Table from './table'
import Member from './member'
import Contact from './contact'

const Component = ({
  node,
  internalLinkActionHandler,
  externalLinkActionHandler,
  apiActionHandler,
  paths,
  preview = false,
  onSend,
  artboardSize,
}: ComponentProps) => {
  const NodeTree = useCallback(
    ({ node, internalLinkActionHandler, externalLinkActionHandler, apiActionHandler, paths, preview, onSend, artboardSize }: ComponentProps) => {
      switch (node.type) {
        // Layouts
        // -----------------------------
        case 'frame': {
          const frame = node as FrameNode
          return (
            <Frame node={frame} artboardSize={artboardSize}>
              {frame.children.map((childNode) => {
                return (
                  <FrameItemWrapper key={childNode.id}>
                    <NodeTree
                      node={childNode}
                      internalLinkActionHandler={internalLinkActionHandler}
                      externalLinkActionHandler={externalLinkActionHandler}
                      apiActionHandler={apiActionHandler}
                      paths={paths}
                      preview={preview}
                      onSend={onSend}
                      artboardSize={artboardSize}
                    />
                  </FrameItemWrapper>
                )
              })}
            </Frame>
          )
        }

        // BasicNodes
        // -----------------------------
        case 'text': {
          return (
            <Text
              node={node}
              internalLinkActionHandler={internalLinkActionHandler}
              externalLinkActionHandler={externalLinkActionHandler}
              apiActionHandler={apiActionHandler}
              paths={paths}
              preview={preview}
              artboardSize={artboardSize}
            />
          )
        }
        case 'image': {
          return (
            <Image
              node={node}
              internalLinkActionHandler={internalLinkActionHandler}
              externalLinkActionHandler={externalLinkActionHandler}
              apiActionHandler={apiActionHandler}
              paths={paths}
              preview={preview}
              artboardSize={artboardSize}
            />
          )
        }
        case 'space': {
          return <Space node={node} preview={preview} artboardSize={artboardSize} />
        }
        case 'button': {
          return (
            <Button
              node={node}
              internalLinkActionHandler={internalLinkActionHandler}
              externalLinkActionHandler={externalLinkActionHandler}
              apiActionHandler={apiActionHandler}
              paths={paths}
              preview={preview}
              artboardSize={artboardSize}
            />
          )
        }

        // ComponentSets
        // -----------------------------
        case 'header': {
          return (
            <Header
              node={node}
              internalLinkActionHandler={internalLinkActionHandler}
              externalLinkActionHandler={externalLinkActionHandler}
              apiActionHandler={apiActionHandler}
              paths={paths}
              preview={preview}
              artboardSize={artboardSize}
            />
          )
        }
        case 'footer': {
          return (
            <Footer
              node={node}
              internalLinkActionHandler={internalLinkActionHandler}
              externalLinkActionHandler={externalLinkActionHandler}
              apiActionHandler={apiActionHandler}
              paths={paths}
              preview={preview}
              artboardSize={artboardSize}
            />
          )
        }
        case 'carousel': {
          return (
            <Carousel
              node={node}
              internalLinkActionHandler={internalLinkActionHandler}
              externalLinkActionHandler={externalLinkActionHandler}
              apiActionHandler={apiActionHandler}
              paths={paths}
              preview={preview}
            />
          )
        }
        case 'mission': {
          return (
            <Mission
              node={node}
              internalLinkActionHandler={internalLinkActionHandler}
              externalLinkActionHandler={externalLinkActionHandler}
              apiActionHandler={apiActionHandler}
              paths={paths}
              preview={preview}
              artboardSize={artboardSize}
            />
          )
        }
        case 'service': {
          return (
            <Service
              node={node}
              internalLinkActionHandler={internalLinkActionHandler}
              externalLinkActionHandler={externalLinkActionHandler}
              apiActionHandler={apiActionHandler}
              paths={paths}
              preview={preview}
              artboardSize={artboardSize}
            />
          )
        }
        case 'table': {
          return (
            <Table
              node={node}
              internalLinkActionHandler={internalLinkActionHandler}
              externalLinkActionHandler={externalLinkActionHandler}
              apiActionHandler={apiActionHandler}
              paths={paths}
              preview={preview}
              artboardSize={artboardSize}
            />
          )
        }
        case 'member': {
          return (
            <Member
              node={node}
              internalLinkActionHandler={internalLinkActionHandler}
              externalLinkActionHandler={externalLinkActionHandler}
              apiActionHandler={apiActionHandler}
              paths={paths}
              preview={preview}
              artboardSize={artboardSize}
            />
          )
        }
        case 'contact': {
          return <Contact node={node} preview={preview} onSend={onSend} artboardSize={artboardSize} />
        }
        default: {
          return null
        }
      }
    },
    []
  )

  return (
    <NodeTree
      node={node}
      internalLinkActionHandler={internalLinkActionHandler}
      externalLinkActionHandler={externalLinkActionHandler}
      apiActionHandler={apiActionHandler}
      paths={paths}
      preview={preview}
      onSend={onSend}
      artboardSize={artboardSize}
    />
  )
}

export default Component
