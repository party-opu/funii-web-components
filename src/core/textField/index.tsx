import React, { useState, useMemo, useCallback } from 'react'
import styled from 'styled-components'

type TextFieldProps = {
  disabled?: boolean
  value?: string
  onChangeText?: (text: string) => void
  multiple?: boolean
  rows?: number
}

const TextField = ({ value, onChangeText, disabled = false, multiple = false, rows = 1 }: TextFieldProps) => {
  const [defaultValue, setDefaultValue] = useState<string>()

  const _value = useMemo(() => {
    if (value) {
      return value
    }
    return defaultValue
  }, [defaultValue, value])

  const _onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
      if (onChangeText) {
        onChangeText(e.target.value)
      }

      setDefaultValue(e.target.value)
    },
    [onChangeText]
  )

  if (multiple) {
    return <BaseTextArea value={_value} onChange={_onChange} rows={rows} disabled={disabled} />
  }

  return <BaseTextInput value={_value} onChange={_onChange} disabled={disabled} />
}

const BaseTextInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgrounds.secondary};
  font-size: 16px;
  color: ${(props) => props.theme.foregrounds.secondary};
  outline-style: none;
  line-height: 1.5;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.theme.foregrounds.separator};

  :focus {
    border-color: ${(props) => props.theme.tints.secondary.main};
  }
`

BaseTextInput.defaultProps = {
  theme: {
    tints: {
      secondary: {
        main: '#15AEB1',
      },
    },
    foregrounds: {
      separator: '#d5d5d5',
    },
    backgrounds: {
      secondary: '#ffffff',
    },
  },
}

const BaseTextArea = styled.textarea`
  box-sizing: border-box;
  resize: none;
  width: 100%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.backgrounds.secondary};
  font-size: 16px;
  color: ${(props) => props.theme.foregrounds.secondary};
  outline-style: none;
  line-height: 1.5;
  padding-right: 12px;
  padding-left: 12px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.theme.foregrounds.separator};

  :focus {
    border-color: ${(props) => props.theme.tints.secondary.main};
  }
`

BaseTextArea.defaultProps = {
  theme: {
    tints: {
      secondary: {
        main: '#15AEB1',
      },
    },
    foregrounds: {
      separator: '#d5d5d5',
    },
    backgrounds: {
      secondary: '#ffffff',
    },
  },
}

export default TextField
