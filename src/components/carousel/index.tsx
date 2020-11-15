import React from 'react'
import ReactCarousel from 'react-multi-carousel'
import styled from 'styled-components'
import { ComponentProps } from '../props'

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

const Carousel = ({ sections }: ComponentProps) => {
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
      {sections.map((section, index) => (
        <Image key={index} draggable={false} src={section.fields.imageURL.value} alt={section.fields.imageURL.label} />
      ))}
    </ReactCarousel>
  )
}

const Image = styled.img`
  object-fit: cover;
  width: 100%;
`

export default Carousel
