import React from 'react'
import styled from 'styled-components'

type BorderListItemProps = {
  label?: string
  value?: string
  onClick?: (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => void
}

const BorderListItem: React.FC<BorderListItemProps> = ({ label, value, children, onClick }) => {
  return (
    <ListItem onClick={onClick}>
      <Inner>
        {label && (
          <LabelWrapper>
            <LabelText>{label}</LabelText>
          </LabelWrapper>
        )}
        {value && <ValueText>{value}</ValueText>}
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

export default BorderListItem
