import styled from 'styled-components'

const GroupTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => props.theme.foregrounds.primary};

  @media (min-width: 400px) {
    font-size: 24px;
  }
`

GroupTitle.defaultProps = {
  theme: {
    foregrounds: {
      primary: '#404040',
    },
  },
}

export default GroupTitle
