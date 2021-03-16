interface BaseAction {
  trigger: 'click'
  type: 'externalLink' | 'internalLink' | 'api'
}

// Link
// --------------------------------
interface LinkAction extends BaseAction {
  type: 'externalLink' | 'internalLink'
  value: string
}

// API
// --------------------------------
interface BaseAPIAction extends BaseAction {
  type: 'api'
  method: 'get' | 'post'
  endpoint: `http://${string}` | `https://${string}`
  authorization: string | null
  headers: {
    key: string
    value: string
  }[]
}

interface GetAPIAction extends BaseAPIAction {
  method: 'get'
  queryParams: {
    key: string
    value: string
  }[]
}

interface PostAPIAction extends BaseAPIAction {
  method: 'post'
  payloadType: 'form' | 'json' | 'xml' | 'row'
  data: {
    key: string
    value: string
  }[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: any
}

type APIAction = GetAPIAction | PostAPIAction

export type Action = LinkAction | APIAction
