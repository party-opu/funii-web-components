import React from 'react'
import ReactCarousel from 'react-multi-carousel'
import styled from 'styled-components'
import { ComponentSet } from '@party-opu/funii-assist-types'
import { ComponentProps } from '../props'
import { useCallableActions, useExistValidActions } from '../hooks'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 400 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 400, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
}

const Carousel = ({ node, actionHandler, paths = [] }: ComponentProps) => {
  const componentSet = node as ComponentSet

  const onCall = useCallableActions(actionHandler)
  const exist = useExistValidActions(paths)

  return (
    <ReactCarousel
      swipeable={false}
      draggable={false}
      showDots={false}
      arrows={false}
      responsive={responsive}
      ssr={true}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      transitionDuration={500}
      containerClass="carousel-container"
      itemClass="image-item"
    >
      {componentSet.sections.map((section, index) => (
        <Image
          key={index}
          draggable={false}
          src={section.fields.imageURL.value}
          alt={section.fields.imageURL.label}
          data-existlink={exist(section.fields.imageURL.actions)}
          onClick={() => onCall(section.fields.imageURL.actions)}
        />
      ))}
    </ReactCarousel>
  )
}

const Image = styled.img`
  object-fit: cover;
  width: 100%;

  &[data-existlink='true'] {
    cursor: pointer;
  }
`

export default Carousel
