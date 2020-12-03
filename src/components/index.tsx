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

// eslint-disable-next-line @typescript-eslint/no-empty-function
const Component = ({ type, sections, push }: WrappedComponentProps) => {
  switch (type) {
    case 'text': {
      return <Text sections={sections} push={push} />
    }
    case 'image': {
      return <Image sections={sections} push={push} />
    }
    case 'carousel': {
      return <Carousel sections={sections} push={push} />
    }
    case 'mission': {
      return <Mission sections={sections} push={push} />
    }
    case 'service': {
      return <Service sections={sections} push={push} />
    }
    case 'company': {
      return <Company sections={sections} push={push} />
    }
    case 'member': {
      return <Member sections={sections} push={push} />
    }
    case 'contact': {
      return <Contact />
    }
    default: {
      return null
    }
  }
}

export default Component
