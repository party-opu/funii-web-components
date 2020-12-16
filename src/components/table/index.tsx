import React from 'react'
import styled from 'styled-components'
import { ComponentProps } from '../props'
import { useRouting } from '../hooks'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'
import BorderList from '../../core/borderList'
import BorderListItem from '../../core/borderListItem'

const Table = ({ sections, push, paths = [] }: ComponentProps) => {
  const onClick = useRouting(push)

  return (
    <GroupContainer>
      <GroupInner>
        <Spacer size="m" />
        {sections.map((section, index) => (
          <BorderList key={`table-item-${index}`}>
            <BorderListItem label={section.fields.label.value} value={section.fields.value.value} onClick={() => onClick(section.fields.value, paths)} />
          </BorderList>
        ))}
        {sections.length > 0 && <Border />}
        <Spacer size="m" />
      </GroupInner>
    </GroupContainer>
  )
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

export default Table
