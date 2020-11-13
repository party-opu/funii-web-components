import React from 'react'
import styled from 'styled-components'

type ButtonSize = 's' | 'm' | 'l' | 'xl'

type FilledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: ButtonSize
  color?: string // html color code
  text?: string
  textColor?: string // html color code
}

const getButtonSizeHandle = (size: ButtonSize) => {
  switch (size) {
    case 's':
      return { paddingX: 12, paddingY: 6, fontSize: 9 }
    case 'm':
      return { paddingX: 12, paddingY: 6, fontSize: 12 }
    case 'l':
      return { paddingX: 18, paddingY: 12, fontSize: 18 }
    case 'xl':
      return { paddingX: 24, paddingY: 12, fontSize: 24 }
  }
}

const FilledButton: React.FC<FilledButtonProps> = ({ color, size = 'm', text, textColor, children, ...rest }) => {
  const { paddingX, paddingY, fontSize } = getButtonSizeHandle(size)
  return (
    <BaseButton color={color} paddingX={paddingX} paddingY={paddingY} {...rest}>
      {text && (
        <Text color={textColor} size={fontSize}>
          {text}
        </Text>
      )}
      {children}
    </BaseButton>
  )
}

const BaseButton = styled.button<{ color?: string; paddingX: number; paddingY: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 999px;
  padding-top: ${(props) => props.paddingY}px;
  padding-bottom: ${(props) => props.paddingY}px;
  padding-right: ${(props) => props.paddingX}px;
  padding-left: ${(props) => props.paddingX}px;
  background-color: ${(props) => props.color ?? props.theme.tints.primary.main};
  border: none;
  outline: none;
  cursor: pointer;
`

BaseButton.defaultProps = {
  theme: {
    tints: {
      primary: {
        main: '#F69A56',
      },
    },
  },
}

const Text = styled.p<{ size: number; color?: string }>`
  color: ${(props) => props.color ?? props.theme.foregrounds.onTintPrimary};
  font-size: ${(props) => props.size ?? 12}px;
`

Text.defaultProps = {
  theme: {
    foregrounds: {
      onTintPrimary: '#ffffff',
    },
  },
}

export default FilledButton
