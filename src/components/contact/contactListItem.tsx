import React from 'react'
import styled from 'styled-components'
import TextField from '../../core/textField'
import Spacer from '../../core/spacer'
import { DESKTOP_MIN_WIDTH, ArtboardSize } from '../props'
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
  const useIsDesktop = () => {
    const isDesktop = useMediaQuery({ minWidth: DESKTOP_MIN_WIDTH })
    return artboardSize ? (artboardSize === 'desktop' ? true : false) : isDesktop
  }

  const isDesktop = useIsDesktop()

  return (
    <ListItem>
      <Inner is-desktop={isDesktop}>
        <LabelWrapper is-desktop={isDesktop}>
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
  flex-direction: column;
  width: 100%;
  padding: 12px;

  &[is-desktop='false'] {
    flex-direction: row;
    align-items: center;
  }
`

const LabelWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 12px;

  &[is-desktop='false'] {
    width: 260px;
    padding-right: 36px;
    padding-bottom: 0px;
  }
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
