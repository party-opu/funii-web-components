import React from 'react'
import { WrappedComponentProps } from './props'
import Carousel from './carousel'
import Mission from './mission'
import Service from './service'
import Company from './company'
import Member from './member'
import Contact from './contact'

const Component = ({ type, sections, preview = false }: WrappedComponentProps) => {
  switch (type) {
    case 'carousel': {
      return <Carousel sections={sections} preview={preview} />
    }
    case 'mission': {
      return <Mission sections={sections} preview={preview} />
    }
    case 'service': {
      return <Service sections={sections} preview={preview} />
    }
    case 'company': {
      return <Company sections={sections} preview={preview} />
    }
    case 'member': {
      return <Member sections={sections} preview={preview} />
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
