import styled from 'styled-components'

const ResponsiveListItem = styled.div`
  flex: 1;
  padding-right: 18px;
  padding-left: 18px;
  padding-bottom: 60px;

  &[is-desktop='false'] {
    padding-bottom: 0px;
  }
`

export default ResponsiveListItem
