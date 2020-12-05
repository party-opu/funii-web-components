import { useCallback } from 'react'
import { FieldItem } from './props'

export const useRouting = (push?: (internal: boolean, href: string) => void) => {
  const onClick = useCallback(
    (fieldItem: FieldItem, paths: string[]) => {
      const linkType = fieldItem.linkType
      const internalLink = fieldItem.internalLink
      const externalLink = fieldItem.externalLink

      if (push && linkType === 'external' && externalLink) {
        push(true, externalLink)
        return
      }

      if (push && linkType === 'internal' && internalLink && paths.includes(internalLink)) {
        push(true, internalLink)
        return
      }
    },
    [push]
  )

  return onClick
}

export const useExistLink = () => {
  const exist = useCallback((fieldItem: FieldItem, paths: string[]) => {
    const linkType = fieldItem.linkType
    const internalLink = fieldItem.internalLink
    const externalLink = fieldItem.externalLink

    if (linkType === 'external' && externalLink) {
      return true
    }

    if (linkType === 'internal' && internalLink && paths.includes(internalLink)) {
      return true
    }

    return false
  }, [])

  return exist
}
