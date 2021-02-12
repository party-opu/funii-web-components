import React, { useCallback } from 'react'
import { ComponentProps, Frame as FrameNode } from './props'
import Frame, { FrameItemWrapper } from './frame'
import Text from './text'
import Image from './image'
import Carousel from './carousel'
import Header from './header'
import Footer from './footer'
import Mission from './mission'
import Service from './service'
import Table from './table'
import Member from './member'
import Contact from './contact'

const Component = ({ node, push, paths, preview = false, onSend }: ComponentProps) => {
  const NodeTree = useCallback(({ node, push, paths, preview, onSend }: ComponentProps) => {
    switch (node.type) {
      // Layouts
      // -----------------------------
      case 'frame': {
        const frame = node as FrameNode
        return (
          <Frame node={frame}>
            {frame.children.map((childNode) => {
              return (
                <FrameItemWrapper key={childNode.id}>
                  <NodeTree node={childNode} push={push} paths={paths} preview={preview} onSend={onSend} />
                </FrameItemWrapper>
              )
            })}
          </Frame>
        )
      }

      // BasicNodes
      // -----------------------------
      case 'text': {
        return <Text node={node} push={push} paths={paths} preview={preview} />
      }
      case 'image': {
        return <Image node={node} push={push} paths={paths} preview={preview} />
      }

      // ComponentSets
      // -----------------------------
      case 'header': {
        return <Header node={node} push={push} paths={paths} preview={preview} />
      }
      case 'footer': {
        return <Footer node={node} push={push} paths={paths} preview={preview} />
      }
      case 'carousel': {
        return <Carousel node={node} push={push} paths={paths} preview={preview} />
      }
      case 'mission': {
        return <Mission node={node} push={push} paths={paths} preview={preview} />
      }
      case 'service': {
        return <Service node={node} push={push} paths={paths} preview={preview} />
      }
      case 'table': {
        return <Table node={node} push={push} paths={paths} preview={preview} />
      }
      case 'member': {
        return <Member node={node} push={push} paths={paths} preview={preview} />
      }
      case 'contact': {
        return <Contact node={node} preview={preview} onSend={onSend} />
      }
      case 'space': {
        return <Text node={node} push={push} paths={paths} preview={preview} />
      }
      default: {
        return null
      }
    }
  }, [])

  return <NodeTree node={node} push={push} paths={paths} preview={preview} onSend={onSend} />
}

export default Component
