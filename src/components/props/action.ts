// utils
// --------------------------------
// MEMO: アウトプットとしてリストを結合することで固定値と変数を織り交ぜた文字列も扱えるようにする。
type FlexibleString = {
  type: 'text' | 'variable'
  value: string
}[]

type Variable = {
  key: string
  value: string
}

interface BaseAction {
  trigger: 'click'
  type: 'externalLink' | 'internalLink' | 'api'
  input: {
    variables: Variable[]
  }
  output: {
    variables: Variable[]
  }
}

// LinkAction
// --------------------------------
interface LinkAction extends BaseAction {
  type: 'externalLink' | 'internalLink'
  value: string // FlexibleStringに変えたい。
}

// APIAction
// --------------------------------
interface BaseAPIAction extends BaseAction {
  type: 'api'
  method: 'get' | 'post'
  endpoint: `http://${string}` | `https://${string}`
  authorization: FlexibleString
  headers: {
    key: string
    value: FlexibleString
  }[]
}

interface GetAPIAction extends BaseAPIAction {
  method: 'get'
  queryParams: {
    key: string
    value: FlexibleString
  }[]
}

interface PostAPIAction extends BaseAPIAction {
  method: 'post'
  payloadType: 'form' | 'json' | 'xml' | 'row'
  data: {
    key: string
    value: FlexibleString
  }[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  file: any
}

type APIAction = GetAPIAction | PostAPIAction

export type Action = LinkAction | APIAction
