import { Node } from '@party-opu/funii-assist-types'

export const text: Node = {
  id: '1',
  label: 'テキスト',
  order: 10,
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2Ftext%402x.png?alt=media&token=c653bd5e-6277-4d7f-8fef-7aeb7ffd7578',
  type: 'text',
  nodeTreeType: 'unit',
  value: 'hello world',
  styleMode: 'common',
  style: {
    color: '#404040',
    fontSize: 16,
  },
  styleTb: {
    color: '#404040',
    fontSize: 16,
  },
  styleMb: {
    color: '#404040',
    fontSize: 16,
  },
  actions: [],
}

export const text2: Node = {
  id: '1',
  label: 'テキスト',
  order: 10,
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2Ftext%402x.png?alt=media&token=c653bd5e-6277-4d7f-8fef-7aeb7ffd7578',
  type: 'text',
  nodeTreeType: 'unit',
  value: 'link text',
  styleMode: 'common',
  style: {
    color: '#404040',
    fontSize: 16,
  },
  styleTb: {
    color: '#404040',
    fontSize: 16,
  },
  styleMb: {
    color: '#404040',
    fontSize: 16,
  },
  actions: [
    {
      trigger: 'click',
      type: 'externalLink',
      value: 'https://iganin.hatenablog.com/entry/2019/12/12/084419',
      input: {
        variables: [],
      },
      output: {
        variables: [],
      },
    },
  ],
}

export const text3: Node = {
  id: '1',
  label: 'テキスト',
  order: 10,
  type: 'text',
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2Ftext%402x.png?alt=media&token=c653bd5e-6277-4d7f-8fef-7aeb7ffd7578',
  value: 'styling text',
  styleMode: 'common',
  style: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  styleTb: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  styleMb: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  actions: [],
}

export const image: Node = {
  id: '1',
  label: 'イメージ',
  order: 10,
  type: 'image',
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2Fimage%402x.png?alt=media&token=a99e979e-50a4-4171-a832-f41a791a5068',
  imageURL: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/mv.jpg',
  imageSizeType: 'percentage',
  styleMode: 'common',
  style: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    overflow: 'hidden',
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
  },
  styleMb: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    overflow: 'hidden',
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 100,
  },
  styleTb: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    overflow: 'hidden',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
  },
  containerStyleMb: {
    display: 'flex',
    justifyContent: 'center',
  },
  containerStyleTb: {
    display: 'flex',
    justifyContent: 'center',
  },
  actions: [],
}

export const image2: Node = {
  id: '1',
  label: 'イメージ',
  order: 10,
  type: 'image',
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2Fimage%402x.png?alt=media&token=a99e979e-50a4-4171-a832-f41a791a5068',
  imageURL: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/mv.jpg',
  imageSizeType: 'pixel',
  styleMode: 'common',
  style: {
    width: 300,
    height: 300,
    objectFit: 'cover',
    overflow: 'hidden',
    borderTopRightRadius: 150,
    borderTopLeftRadius: 150,
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
  },
  styleMb: {
    width: 300,
    height: 300,
    objectFit: 'cover',
    overflow: 'hidden',
    borderTopRightRadius: 150,
    borderTopLeftRadius: 150,
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
  },
  styleTb: {
    width: 300,
    height: 300,
    objectFit: 'cover',
    overflow: 'hidden',
    borderTopRightRadius: 150,
    borderTopLeftRadius: 150,
    borderBottomRightRadius: 150,
    borderBottomLeftRadius: 150,
  },
  containerStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  containerStyleMb: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  containerStyleTb: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  actions: [
    {
      trigger: 'click',
      type: 'externalLink',
      value: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/mv.jpg',
      input: {
        variables: [],
      },
      output: {
        variables: [],
      },
    },
  ],
}

export const space: Node = {
  id: '1',
  label: 'スペース',
  order: 15,
  type: 'space',
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2Fservice%402x.png?alt=media&token=c58c9c6b-9b74-4634-aecf-d227085c937f',
  styleMode: 'common',
  style: {
    width: 100,
    height: 100,
  },
  styleTb: {
    width: 100,
    height: 100,
  },
  styleMb: {
    width: 100,
    height: 100,
  },
}

export const button: Node = {
  id: '1',
  label: 'ボタン',
  order: 20,
  type: 'button',
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2Fbutton%402x.png?alt=media&token=e9ad4bb3-97e4-4277-9e72-cc7bd762889f',
  value: 'ボタン',
  buttonSizeType: 'pixel',
  styleMode: 'responsive',
  style: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    backgroundColor: '#FF973E',
    borderColor: '#696969',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  styleTb: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 100,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: 'blue',
    borderColor: 'green',
    borderWidth: 1,
    borderStyle: 'none',
  },
  styleMb: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'yellow',
    borderColor: 'green',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  textStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  textStyleTb: {
    fontSize: 14,
    fontWeight: 'normal',
    color: 'orange',
  },
  textStyleMb: {
    fontSize: 10,
    fontWeight: 'lighter',
    color: 'brown',
  },
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
  },
  containerStyleTb: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  containerStyleMb: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  actions: [
    {
      trigger: 'click',
      type: 'externalLink',
      value: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/mv.jpg',
      input: {
        variables: [],
      },
      output: {
        variables: [],
      },
    },
    {
      trigger: 'click',
      type: 'api',
      method: 'get',
      authorization: [],
      headers: [],
      endpoint: 'https://endpoint.jp',
      queryParams: [],
      input: {
        variables: [],
      },
      output: {
        variables: [],
      },
    },
  ],
}
