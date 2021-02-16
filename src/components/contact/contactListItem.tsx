import React from 'react'
import styled from 'styled-components'
import TextField from '../../core/textField'
import Spacer from '../../core/spacer'
import { TABLET_MIN_WIDTH, ArtboardSize } from '../props'
import { useMediaQuery } from 'react-responsive'

type ContractListItem = {
  label: string
  value: string
  onChangeText: (text: string) => void
  required?: boolean
  disabled?: boolean
  multiple?: boolean
  rows?: number
  artboardSize: ArtboardSize
}

const ContractListItem = ({ label, value, onChangeText, required = false, disabled = false, multiple = false, rows = 6, artboardSize }: ContractListItem) => {
  const useIsTablet = () => {
    const isTablet = useMediaQuery({ minWidth: TABLET_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'tablet' ? true : false) : isTablet
  }

  const isTablet = useIsTablet()

  return (
    <ListItem>
      <Inner style={isTablet ? { flexDirection: 'row', alignItems: 'center' } : { flexDirection: 'column' }}>
        <LabelWrapper style={isTablet ? { width: '260px', paddingRight: '36px', paddingBottom: '0px' } : { flexDirection: 'column' }}>
          <LabelText>{label}</LabelText>
          {required && (
            <React.Fragment>
              <Spacer layout="vertical" size="xs" />
              <RequiredText>必須</RequiredText>
            </React.Fragment>
          )}
        </LabelWrapper>
        <TextField value={value} onChangeText={onChangeText} multiple={multiple} rows={rows} disabled={disabled} />
      </Inner>
    </ListItem>
  )
}

const ListItem = styled.li`
  width: 100%;
`

const Inner = styled.div`
  display: flex;
  width: 100%;
  padding: 12px;
`

const LabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const LabelText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.secondary};
`

LabelText.defaultProps = {
  theme: {
    foregrounds: {
      secondary: '#696969',
    },
  },
}

const RequiredText = styled.p`
  font-size: 9px;
  font-weight: bold;
  color: ${(props) => props.theme.system.red};
`

RequiredText.defaultProps = {
  theme: {
    system: {
      red: 'red',
    },
  },
}

export default ContractListItem
