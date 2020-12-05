import React from 'react'
import { WrappedComponentProps } from './props'
import Text from './text'
import Image from './image'
import Carousel from './carousel'
import Mission from './mission'
import Service from './service'
import Company from './company'
import Member from './member'
import Contact from './contact'

const Component = ({ type, sections, push, paths, preview = false }: WrappedComponentProps) => {
  switch (type) {
    case 'text': {
      return <Text sections={sections} push={push} paths={paths} preview={preview} />
    }
    case 'image': {
      return <Image sections={sections} push={push} paths={paths} preview={preview} />
    }
    case 'carousel': {
      return <Carousel sections={sections} push={push} paths={paths} preview={preview} />
    }
    case 'mission': {
      return <Mission sections={sections} push={push} paths={paths} preview={preview} />
    }
    case 'service': {
      return <Service sections={sections} push={push} paths={paths} preview={preview} />
    }
    case 'company': {
      return <Company sections={sections} push={push} paths={paths} preview={preview} />
    }
    case 'member': {
      return <Member sections={sections} push={push} paths={paths} preview={preview} />
    }
    case 'contact': {
      return <Contact preview={preview} />
    }
    default: {
      return null
    }
  }
}

export default Component
