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
  linkType: 'internal',
  internalLink: null,
  externalLink: null,
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
  linkType: 'external',
  internalLink: null,
  externalLink: 'https://iganin.hatenablog.com/entry/2019/12/12/084419',
}

export const text3: Node = {
  id: '1',
  label: 'テキスト',
  order: 10,
  type: 'text',
  value: 'styling text',
  linkType: 'internal',
  internalLink: null,
  externalLink: null,
  styleMode: 'common',
  style: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
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
  containerStyle: {
    display: 'flex',
    justifyContent: 'center',
  },
  linkType: 'internal',
  internalLink: null,
  externalLink: null,
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
  containerStyle: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  linkType: 'external',
  internalLink: null,
  externalLink: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/mv.jpg',
}
