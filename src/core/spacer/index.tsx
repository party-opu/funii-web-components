import React from 'react'
import styled from 'styled-components'

type SpaceSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

type SpacerProps = React.HTMLAttributes<HTMLDivElement> & {
  layout?: 'horizontal' | 'vertical'
  size?: SpaceSize
}

const getSpaceSizeHandle = (size: SpaceSize) => {
  switch (size) {
    case 'xxs':
      return 3
    case 'xs':
      return 6
    case 's':
      return 12
    case 'm':
      return 24
    case 'l':
      return 36
    case 'xl':
      return 48
    case 'xxl':
      return 60
  }
}

const Spacer = ({ layout = 'horizontal', size = 'm', ...rest }: SpacerProps) => {
  return <BaseSpacer data-layout={layout} size={getSpaceSizeHandle(size)} {...rest} />
}

const BaseSpacer = styled.div<{ 'data-layout': 'horizontal' | 'vertical'; size: number }>`
  &[data-layout='horizontal'] {
    padding-bottom: ${(props) => props.size}px;
  }

  &[data-layout='vertical'] {
    padding-right: ${(props) => props.size}px;
  }
`

export default Spacer
