import { useCallback, useEffect, useState } from 'react'
import { Text, Image, Button, FieldItem, Action } from '@party-opu/funii-assist-types'

type ActionHandler = (action: Action) => Promise<void> | void

export const useActionForItem = (
  paths: string[],
  internalLinkActionHandler: ActionHandler = () => console.info('internalLink-action'),
  externalLinkActionHandler: ActionHandler = () => console.info('externalLink-action'),
  apiActionHandler: ActionHandler = () => console.info('api-action')
) => {
  const action = useCallback(
    async (item: FieldItem) => {
      for (let i = 0; i < item.actions.length; i++) {
        const action = item.actions[i]
        if (action.type === 'internalLink') {
          if (paths.includes(action.value)) {
            await internalLinkActionHandler(action)
          }
        } else if (action.type === 'externalLink') {
          if (action.value) {
            await externalLinkActionHandler(action)
          }
        } else if (action.type === 'api') {
          if (action.endpoint) {
            await apiActionHandler(action)
          }
        }
      }
    },
    [apiActionHandler, externalLinkActionHandler, internalLinkActionHandler, paths]
  )

  return action
}

export const useExistActionForItem = (paths: string[]) => {
  const exist = useCallback(
    (item: FieldItem) => {
      let _exist = false
      item.actions.forEach((action) => {
        if (action.type === 'internalLink') {
          if (paths.includes(action.value)) {
            _exist = true
          }
        } else if (action.type === 'externalLink') {
          if (action.value) {
            _exist = true
          }
        } else if (action.type === 'api') {
          if (action.endpoint) {
            _exist = true
          }
        }
      })
      return _exist
    },
    [paths]
  )

  return exist
}

export const useAction = (
  node: Text | Image | Button,
  paths: string[],
  internalLinkActionHandler: ActionHandler = () => console.info('internalLink-action'),
  externalLinkActionHandler: ActionHandler = () => console.info('externalLink-action'),
  apiActionHandler: ActionHandler = () => console.info('api-action')
) => {
  const action = useCallback(async () => {
    for (let i = 0; i < node.actions.length; i++) {
      const action = node.actions[i]
      if (action.type === 'internalLink') {
        if (paths.includes(action.value)) {
          await internalLinkActionHandler(action)
        }
      } else if (action.type === 'externalLink') {
        if (action.value) {
          await externalLinkActionHandler(action)
        }
      } else if (action.type === 'api') {
        if (action.endpoint) {
          await apiActionHandler(action)
        }
      }
    }
  }, [apiActionHandler, externalLinkActionHandler, internalLinkActionHandler, node.actions, paths])

  return action
}

export const useExistAction = (node: Text | Image | Button, paths: string[]) => {
  const [exist, setExist] = useState<boolean>(false)

  useEffect(() => {
    node.actions.forEach((action) => {
      if (action.type === 'internalLink') {
        if (paths.includes(action.value)) {
          setExist(true)
        }
      } else if (action.type === 'externalLink') {
        if (action.value) {
          setExist(true)
        }
      } else if (action.type === 'api') {
        if (action.endpoint) {
          setExist(true)
        }
      }
    })
  }, [node, paths])

  return exist
}
