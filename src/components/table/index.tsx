import React from 'react'
import styled from 'styled-components'
import { ComponentSet } from '@party-opu/funii-assist-types'
import { ComponentProps } from '../props'
import { useActionForItem } from '../hooks'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'
import BorderList from '../../core/borderList'
import BorderListItem from '../../core/borderListItem'

const Table = ({ node, internalLinkActionHandler, externalLinkActionHandler, apiActionHandler, paths = [], artboardSize = 'desktop' }: ComponentProps) => {
  const componentSet = node as ComponentSet
  const action = useActionForItem(paths, internalLinkActionHandler, externalLinkActionHandler, apiActionHandler)

  return (
    <GroupContainer>
      <GroupInner>
        <Spacer size="m" />
        {componentSet.sections.map((section, index) => (
          <BorderList key={`table-item-${index}`}>
            <BorderListItem
              label={section.fields.label.value}
              value={section.fields.value.value}
              artboardSize={artboardSize}
              onClick={() => action(section.fields.value)}
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
