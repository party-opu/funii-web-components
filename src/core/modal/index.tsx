import React, { useState } from 'react'
import styled from 'styled-components'

type Props = {
  open?: boolean
  onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({ open = true, onClose, children }) => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false)

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      setIsMouseDown(true)
    }
  }

  const onMouseUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isMouseDown) {
      onClose && onClose(e)
    }
    setIsMouseDown(false)
  }

  if (!open) {
    return null
  }

  return (
    <Overlay onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
      <div>{children}</div>
    </Overlay>
  )
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  animation: fadeon 0.3s ease 0s;
  > * {
    width: 100%;
    height: 100%;
    max-width: 480px;
    max-height: 480px;
    margin: auto;
    animation: scaleon 0.25s ease-out 0s;
    background-color: ${(props) => props.theme.backgrounds.secondary};
    border-radius: 10px;
  }
`

Overlay.defaultProps = {
  theme: {
    backgrounds: {
      secondary: '#ffffff',
    },
  },
}

export default Modal
