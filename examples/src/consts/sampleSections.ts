import { Section } from '../../../src/components/props'

export const textSections: Section[] = [
  {
    fields: {
      text: {
        label: 'テキスト',
        order: 10,
        type: 'text',
        value: 'hello world',
        internalLink: null,
        externalLink: null,
      },
    },
  },
]

export const textSections2: Section[] = [
  {
    fields: {
      text: {
        label: 'テキスト',
        order: 10,
        type: 'text',
        value: 'link text',
        internalLink: null,
        externalLink: 'https://iganin.hatenablog.com/entry/2019/12/12/084419',
      },
    },
  },
]

export const textSections3: Section[] = [
  {
    fields: {
      text: {
        label: 'テキスト',
        order: 10,
        type: 'text',
        value: 'styling text',
        internalLink: null,
        externalLink: null,
        style: {
          fontSize: 24,
          fontWeight: 'bold',
          color: 'green',
        },
      },
    },
  },
]

export const imageSections: Section[] = [
  {
    fields: {
      imageURL: {
        label: '画像',
        order: 10,
        type: 'image',
        value: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/mv.jpg',
        internalLink: null,
        externalLink: null,
      },
    },
  },
]

export const imageSections2: Section[] = [
  {
    fields: {
      imageURL: {
        label: '画像',
        order: 10,
        type: 'image',
        value: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/mv.jpg',
        internalLink: null,
        externalLink: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/mv.jpg',
        style: {
          width: 300,
          height: 300,
          borderRadius: 150,
        },
      },
    },
  },
]

export const carouselSections: Section[] = [
  {
    fields: {
      imageURL: {
        label: '画像',
        order: 10,
        type: 'image',
        value: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/mv.jpg',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      imageURL: {
        label: '画像',
        order: 10,
        type: 'image',
        value: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/bg_pikmin.jpg',
        internalLink: null,
        externalLink: null,
      },
    },
  },
]

export const missionSections: Section[] = [
  {
    fields: {
      title: {
        label: 'タイトル',
        order: 10,
        type: 'text',
        value: '素敵な出会いを紡ぐ',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: '詳細',
        order: 10,
        type: 'text',
        value:
          '生きている間に何人の人と出会えるだろうか？\n人との出会いは未知数で何が起きるかわからない。\nfuniiは起こりうる未知数を増やすことで、素敵な出会いで溢れる世界を作ります。',
        internalLink: null,
        externalLink: null,
      },
    },
  },
]

export const serviceSections: Section[] = [
  {
    fields: {
      imageURL: {
        label: '画像',
        order: 10,
        type: 'text',
        value: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/bg_pikmin.jpg',
        internalLink: null,
        externalLink: null,
      },
      title: {
        label: 'タイトル',
        order: 20,
        type: 'text',
        value: 'モリミン３',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: '詳細',
        order: 30,
        type: 'text',
        value:
          '生きている間に何人の人と出会えるだろうか？\n人との出会いは未知数で何が起きるかわからない。\nfuniiは起こりうる未知数を増やすことで、素敵な出会いで溢れる世界を作ります。',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      imageURL: {
        label: '画像',
        order: 10,
        type: 'text',
        value: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/bg_pikmin.jpg',
        internalLink: null,
        externalLink: null,
      },
      title: {
        label: 'タイトル',
        order: 20,
        type: 'text',
        value: 'モリミン３',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: '詳細',
        order: 30,
        type: 'text',
        value:
          '生きている間に何人の人と出会えるだろうか？\n人との出会いは未知数で何が起きるかわからない。\nfuniiは起こりうる未知数を増やすことで、素敵な出会いで溢れる世界を作ります。',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      imageURL: {
        label: '画像',
        order: 10,
        type: 'text',
        value: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/bg_pikmin.jpg',
        internalLink: null,
        externalLink: null,
      },
      title: {
        label: 'タイトル',
        order: 20,
        type: 'text',
        value: 'モリミン３',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: '詳細',
        order: 30,
        type: 'text',
        value:
          '生きている間に何人の人と出会えるだろうか？\n人との出会いは未知数で何が起きるかわからない。\nfuniiは起こりうる未知数を増やすことで、素敵な出会いで溢れる世界を作ります。',
        internalLink: null,
        externalLink: null,
      },
    },
  },
]

export const companySections: Section[] = [
  {
    fields: {
      title: {
        label: '会社名',
        order: 10,
        type: 'text',
        value: 'funii inc',
        internalLink: null,
        externalLink: null,
      },
      ceoName: {
        label: '代表者',
        order: 20,
        type: 'text',
        value: '栗野　耕作',
        internalLink: null,
        externalLink: null,
      },
      foundationDate: {
        label: '設　立',
        order: 30,
        type: 'text',
        value: '2020年10月1日',
        internalLink: null,
        externalLink: null,
      },
      address: {
        label: '住　所',
        order: 40,
        type: 'text',
        value: '〒103-0026 東京都中央区日本橋兜町18-5 日本橋兜町ビル 2F',
        internalLink: null,
        externalLink: null,
      },
    },
  },
]

export const memberSections: Section[] = [
  {
    fields: {
      imageURL: {
        label: '画像',
        order: 10,
        type: 'image',
        value: 'https://www.nintendo.co.jp/switch/ampna/material/img/prologue/img_chara2.png',
        internalLink: null,
        externalLink: null,
      },
      name: {
        label: '名前',
        order: 20,
        type: 'text',
        value: 'ジョン',
        internalLink: null,
        externalLink: null,
      },
      role: {
        label: '肩書き',
        order: 30,
        type: 'text',
        value: 'Fonder CEO',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: 'プロフィール',
        order: 40,
        type: 'text',
        value: '2020年に東京へ上京し、株式会社モリミンを設立する。',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      imageURL: {
        label: '画像',
        order: 10,
        type: 'image',
        value: 'https://material-ui.com/static/images/avatar/1.jpg',
        internalLink: null,
        externalLink: null,
      },
      name: {
        label: '名前',
        order: 20,
        type: 'text',
        value: 'ジョン',
        internalLink: null,
        externalLink: null,
      },
      role: {
        label: '肩書き',
        order: 30,
        type: 'text',
        value: 'Fonder CEO',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: 'プロフィール',
        order: 40,
        type: 'text',
        value: '2020年に東京へ上京し、株式会社モリミンを設立する。',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      imageURL: {
        label: '画像',
        order: 10,
        type: 'image',
        value: 'https://material-ui.com/static/images/avatar/1.jpg',
        internalLink: null,
        externalLink: null,
      },
      name: {
        label: '名前',
        order: 20,
        type: 'text',
        value: 'ジョン',
        internalLink: null,
        externalLink: null,
      },
      role: {
        label: '肩書き',
        order: 30,
        type: 'text',
        value: 'Fonder CEO',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: 'プロフィール',
        order: 40,
        type: 'text',
        value: '2020年に東京へ上京し、株式会社モリミンを設立する。',
        internalLink: null,
        externalLink: null,
      },
    },
  },
]
