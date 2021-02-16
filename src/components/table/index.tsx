import React from 'react'
import styled from 'styled-components'
import { ComponentProps, ComponentSet } from '../props'
import { useRouting } from '../hooks'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'
import BorderList from '../../core/borderList'
import BorderListItem from '../../core/borderListItem'

const Table = ({ node, push, paths = [], artboardSize }: ComponentProps) => {
  const componentSet = node as ComponentSet
  const onClick = useRouting(push)

  return (
    <GroupContainer>
      <GroupInner>
        <Spacer size="m" />
        {componentSet.sections.map((section, index) => (
          <BorderList key={`table-item-${index}`}>
            <BorderListItem
              label={section.fields.label.value}
              value={section.fields.value.value}
              artboardSize={artboardSize!}
              onClick={() => onClick(section.fields.value, paths)}
            />
          </BorderList>
        ))}
        {componentSet.sections.length > 0 && <Border />}
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
