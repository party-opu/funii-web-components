import { useCallback } from 'react'
import { FieldItem } from './props'

export const useRouting = (push?: (internal: boolean, href: string) => void) => {
  const onClick = useCallback(
    (fieldItem: FieldItem) => {
      const internalLink = fieldItem.internalLink
      const externalLink = fieldItem.externalLink
      if (push && internalLink) {
        push(true, internalLink)
        return
      }
      if (push && externalLink) {
        push(false, externalLink)
        return
      }
    },
    [push]
  )

  return onClick
}

export const useExistLink = () => {
  const exist = useCallback((fieldItem: FieldItem) => {
    const internalLink = fieldItem.internalLink
    const externalLink = fieldItem.externalLink
    if (internalLink || externalLink) {
      return true
    } else {
      false
    }
  }, [])

  return exist
}
