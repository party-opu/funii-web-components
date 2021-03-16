import { useCallback, useEffect, useState } from 'react'
import { Text, Image, Button, FieldItem } from './props'

type Push = (url: string) => Promise<void> | void

export const useActionForItem = (push: Push = (url) => console.info(url), paths: string[]) => {
  const action = useCallback(
    async (item: FieldItem) => {
      // MEMO: 直列に処理させるための、for文を使用している。
      for (let i = 0; i < item.actions.length; i++) {
        const action = item.actions[i]
        if (action.type === 'internalLink') {
          if (paths.includes(action.value)) {
            await push(action.value)
          }
        } else if (action.type === 'externalLink') {
          if (action.value) {
            window.open(action.value, '_blank')
          }
        } else if (action.type === 'api') {
          if (action.endpoint) {
            console.info('fetch api', action)
          }
        }
      }
    },
    [paths, push]
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

export const useAction = (node: Text | Image | Button, push: Push = (url) => console.info(url), paths: string[]) => {
  const action = useCallback(async () => {
    for (let i = 0; i < node.actions.length; i++) {
      const action = node.actions[i]
      if (action.type === 'internalLink') {
        if (paths.includes(action.value)) {
          await push(action.value)
        }
      } else if (action.type === 'externalLink') {
        if (action.value) {
          window.open(action.value, '_blank')
        }
      } else if (action.type === 'api') {
        if (action.endpoint) {
          console.info('fetch api', action)
        }
      }
    }
  }, [node, paths, push])

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
