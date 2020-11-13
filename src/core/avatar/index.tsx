import React from 'react'
import styled from 'styled-components'

const noThumbnailURL = 'https://www.drnitinborse.com/wp-content/uploads/2018/02/user-icon.png'

type AvatarSize = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

type AvatarProps = React.HTMLAttributes<HTMLImageElement> & {
  uri?: string
  size?: AvatarSize
}

const getAvatarSizeHandle = (size: AvatarSize) => {
  switch (size) {
    case 'xxs':
      return 12
    case 'xs':
      return 24
    case 's':
      return 30
    case 'm':
      return 40
    case 'l':
      return 80
    case 'xl':
      return 100
    case 'xxl':
      return 120
  }
}

const Avatar = ({ size = 'm', uri, ...rest }: AvatarProps) => {
  return <BaseAvatar size={getAvatarSizeHandle(size)} src={uri ?? noThumbnailURL} {...rest} />
}

const BaseAvatar = styled.img<{ size: number }>`
  object-fit: cover;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  border-radius: ${(props) => props.size / 2}px;
`

export default Avatar
