import React from 'react'
import styled from 'styled-components'
import { TABLET_MIN_WIDTH, ArtboardSize } from '../../components/props'
import { useMediaQuery } from 'react-responsive'

type BorderListItemProps = {
  label?: string
  value?: string
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
  artboardSize: ArtboardSize
}

const BorderListItem: React.FC<BorderListItemProps> = ({ label, value, children, onClick, artboardSize }) => {
  const useIsLargeDevice = () => {
    const isLargeDevice = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' || artboardSize === 'desktop' ? true : false) : isLargeDevice
  }

  const isLargeDevice = useIsLargeDevice()

  return (
    <ListItem onClick={onClick}>
      <Inner>
        {label && (
          <LabelWrapper>
            <LabelText style={isLargeDevice ? { fontSize: '18px' } : { fontSize: '16px' }}>{label}</LabelText>
          </LabelWrapper>
        )}
        {value && <ValueText style={isLargeDevice ? { fontSize: '18px' } : { fontSize: '16px' }}>{value}</ValueText>}
        {children}
      </Inner>
    </ListItem>
  )
}

const ListItem = styled.li`
  width: 100%;
`

const Inner = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 12px;
`

const LabelWrapper = styled.div`
  min-width: 50px;
  padding-right: 24px;
`

const LabelText = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.secondary};
  white-space: pre-wrap;
`

LabelText.defaultProps = {
  theme: {
    foregrounds: {
      secondary: '#696969',
    },
  },
}

const ValueText = styled.p`
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.primary};
  white-space: pre-wrap;
`

ValueText.defaultProps = {
  theme: {
    foregrounds: {
      primary: '#404040',
    },
  },
}

export default BorderListItem
