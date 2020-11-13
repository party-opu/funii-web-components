import React from 'react'
import { WrappedComponentProps } from './props'
import Carousel from './carousel'
import Mission from './mission'
import Service from './service'
import Company from './company'
import Member from './member'
import Contact from './contact'

const Component = ({ type, sections }: WrappedComponentProps) => {
  switch (type) {
    case 'carousel': {
      return <Carousel sections={sections} />
    }
    case 'mission': {
      return <Mission sections={sections} />
    }
    case 'service': {
      return <Service sections={sections} />
    }
    case 'company': {
      return <Company sections={sections} />
    }
    case 'member': {
      return <Member sections={sections} />
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
