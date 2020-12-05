import React from 'react'
import { ComponentProps } from '../props'
import { useRouting } from '../hooks'
import Spacer from '../../core/spacer'
import GroupContainer from '../../core/groupContainer'
import GroupInner from '../../core/groupInner'
import GroupTitle from '../../core/groupTitle'
import BorderList from '../../core/borderList'
import BorderListItem from '../../core/borderListItem'

const Company = ({ sections, push, paths = [] }: ComponentProps) => {
  const onClick = useRouting(push)

  return (
    <GroupContainer>
      <GroupInner>
        <GroupTitle>会社概要</GroupTitle>
        <Spacer size="xl" />
        {sections.map((section, index) => (
          <BorderList key={`company-list-${index}`}>
            {Object.entries(section.fields).map(([, item], index) => (
              <BorderListItem key={`company-list-item-${index}`} label={item.label} value={item.value} onClick={() => onClick(item, paths)} />
            ))}
          </BorderList>
        ))}
      </GroupInner>
    </GroupContainer>
  )
}

export default Company
