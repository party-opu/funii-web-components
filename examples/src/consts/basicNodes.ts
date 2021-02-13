import { Node } from '../../../src/components/props'

export const text: Node = {
  id: '1',
  label: 'テキスト',
  order: 10,
  type: 'text',
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
  type: 'text',
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
    },
  ],
}

export const text3: Node = {
  id: '1',
  label: 'テキスト',
  order: 10,
  type: 'text',
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
    },
  ],
}

export const space: Node = {
  id: '1',
  label: 'スペース',
  order: 15,
  type: 'space',
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
