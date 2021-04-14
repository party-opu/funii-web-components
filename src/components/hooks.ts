import { useCallback } from 'react'
import { Action } from '@party-opu/funii-assist-types'
import { ActionHandler } from './props'

export const useCallableActions = (actionHandler: ActionHandler = (action) => console.info(`${action.type}-action`)) => {
  const onCall = useCallback(
    async (actions: Action[]) => {
      for (let i = 0; i < actions.length; i++) {
        const action = actions[i]
        await actionHandler(action)
      }
    },
    [actionHandler]
  )

  return onCall
}

export const useExistValidActions = (paths: string[]) => {
  const exist = useCallback(
    (actions: Action[]) => {
      let isExist = false
      actions.forEach((action) => {
        if (action.type === 'internalLink') {
          if (paths.includes(action.value)) {
            isExist = true
          }
        } else if (action.type === 'externalLink') {
          if (action.value) {
            isExist = true
          }
        } else if (action.type === 'api') {
          if (action.endpoint) {
            isExist = true
          }
        }
      })
      return isExist
    },
    [paths]
  )

  return exist
}
