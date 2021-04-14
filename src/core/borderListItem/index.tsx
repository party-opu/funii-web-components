import React from 'react'
import styled from 'styled-components'
import { TABLET_MIN_WIDTH, ArtboardSize } from '../../components/props'
import { useMediaQuery } from 'react-responsive'

type BorderListItemProps = {
  label?: string
  value?: string
  onClickLabel?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
  onClickValue?: (event: React.MouseEvent<HTMLParagraphElement, MouseEvent>) => void
  existLabelLink?: boolean
  existValueLink?: boolean
  artboardSize: ArtboardSize
}

const BorderListItem: React.FC<BorderListItemProps> = ({
  label,
  value,
  children,
  onClickLabel,
  onClickValue,
  existLabelLink = false,
  existValueLink = false,
  artboardSize,
}) => {
  const useIsLargeDevice = () => {
    const isLargeDevice = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' || artboardSize === 'desktop' ? true : false) : isLargeDevice
  }

  const isLargeDevice = useIsLargeDevice()

  return (
    <ListItem>
      <Inner>
        {label && (
          <LabelWrapper>
            <LabelText style={isLargeDevice ? { fontSize: '18px' } : { fontSize: '16px' }} data-existlink={existLabelLink} onClick={onClickLabel}>
              {label}
            </LabelText>
          </LabelWrapper>
        )}
        {value && (
          <ValueText style={isLargeDevice ? { fontSize: '18px' } : { fontSize: '16px' }} data-existlink={existValueLink} onClick={onClickValue}>
            {value}
          </ValueText>
        )}
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

  &[data-existlink='true'] {
    cursor: pointer;
  }
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

  &[data-existlink='true'] {
    cursor: pointer;
  }
`

ValueText.defaultProps = {
  theme: {
    foregrounds: {
      primary: '#404040',
    },
  },
}

export default BorderListItem
