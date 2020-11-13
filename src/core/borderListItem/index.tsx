import React from 'react'
import styled from 'styled-components'

type BorderListItemProps = {
  label?: string
  value?: string
}

const BorderListItem: React.FC<BorderListItemProps> = ({ label, value, children }) => {
  return (
    <ListItem>
      <Inner>
        {label && (
          <LabelWrapper>
            <LabelText>{label}</LabelText>
          </LabelWrapper>
        )}
        {value && <ValueText>{value}</ValueText>}
        {children}
      </Inner>
      <Border />
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
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.secondary};
  white-space: pre-wrap;

  @media (min-width: 400px) {
    font-size: 18px;
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
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.primary};
  white-space: pre-wrap;

  @media (min-width: 400px) {
    font-size: 18px;
  }
`

ValueText.defaultProps = {
  theme: {
    foregrounds: {
      primary: '#404040',
    },
  },
}

const Border = styled.div`
  width: 100%;
  border-style: solid;
  border-bottom-color: ${(props) => props.color ?? props.theme.foregrounds.separator};
  border-bottom-width: 1px;
`

Border.defaultProps = {
  theme: {
    foregrounds: {
      separator: '#d5d5d5',
    },
  },
}

export default BorderListItem
