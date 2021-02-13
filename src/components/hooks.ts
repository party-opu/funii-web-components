import { useCallback } from 'react'
import { Text, Image, FieldItem, LinkAction } from './props'

export const useRouting = (push?: (internal: boolean, href: string) => void) => {
  const onClick = useCallback(
    (node: FieldItem | Text | Image, paths: string[]) => {
      const action = node.actions.find((action) => action.trigger === 'click' && (action.type === 'externalLink' || action.type === 'internalLink'))
      if (!action) return

      const linkAction = action as LinkAction

      if (push && linkAction.type === 'externalLink' && linkAction.value) {
        push(false, linkAction.value)
        return
      }

      if (push && linkAction.type === 'internalLink' && linkAction.value && paths.includes(linkAction.value)) {
        push(true, linkAction.value)
        return
      }
    },
    [push]
  )

  return onClick
}

export const useExistLink = () => {
  const exist = useCallback((node: FieldItem | Text | Image, paths: string[]) => {
    const action = node.actions.find((action) => action.trigger === 'click' && (action.type === 'externalLink' || action.type === 'internalLink'))
    if (!action) {
      return false
    }

    const linkAction = action as LinkAction

    if (linkAction.type === 'externalLink' && linkAction.value) {
      return true
    }

    if (linkAction.type === 'internalLink' && linkAction.value && paths.includes(linkAction.value)) {
      return true
    }

    return false
  }, [])

  return exist
}
