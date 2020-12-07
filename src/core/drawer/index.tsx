import React from 'react'
import styled from 'styled-components'

type DrawerProps = {
  open?: boolean
  onClose?: () => void
}

const Drawer: React.FC<DrawerProps> = ({ open = true, onClose, children }) => {
  return (
    <React.Fragment>
      <BaseDrawer onClick={(e) => e.stopPropagation()} data-open={open}>
        {children}
      </BaseDrawer>
      <Overlay onClick={onClose} data-open={open} />
    </React.Fragment>
  )
}

const Overlay = styled.div<{ 'data-open': boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  display: none;

  &[data-open='true'] {
    display: block;
  }
`

const BaseDrawer = styled.div<{ 'data-open': boolean }>`
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  max-width: 90%;
  height: 100%;
  background: #fff;
  z-index: 1200;
  transition: all 0.3s ease-in-out 0s;
  transform: translateX(-100%);

  &[data-open='true'] {
    transform: translateX(0);
  }
`

export default Drawer
