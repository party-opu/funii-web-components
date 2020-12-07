import React from 'react'
import styled from 'styled-components'

type ButtonSize = 's' | 'm' | 'l' | 'xl'

type IconButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize
}

const getButtonSizeHandle = (size: ButtonSize) => {
  switch (size) {
    case 's':
      return { padding: 6 }
    case 'm':
      return { padding: 12 }
    case 'l':
      return { padding: 18 }
    case 'xl':
      return { padding: 24 }
  }
}

const IconButton: React.FC<IconButtonProps> = ({ color, size = 'm', children, ...rest }) => {
  const { padding } = getButtonSizeHandle(size)

  return (
    <Wrapper>
      <BaseButton color={color} padding={padding} {...rest}>
        {children}
      </BaseButton>
    </Wrapper>
  )
}

const BaseButton = styled.button<{ padding: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  padding: ${(props) => props.padding}px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

const Wrapper = styled.div`
  &:hover ${BaseButton} {
    background-color: rgba(0, 0, 0, 0.04);
  }
`

export default IconButton
