import { Section } from '../../../src/components/props'

export const textSections: Section[] = [
  {
    fields: {
      text: {
        label: 'テキスト',
        order: 10,
        type: 'text',
        value: 'hello world',
        linkType: 'internal',
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
        linkType: 'external',
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
        linkType: 'internal',
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
        linkType: 'internal',
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
        linkType: 'external',
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

export const headerSections: Section[] = [
  {
    fields: {
      imageURL: {
        label: 'イメージ',
        order: 10,
        type: 'image',
        value: 'https://www.nintendo.co.jp/switch/ampna/material/img/common/logo_footer.png',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      text: {
        label: 'テキスト',
        order: 10,
        type: 'text',
        value: 'ホーム',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      text: {
        label: 'テキスト',
        order: 10,
        type: 'text',
        value: 'サービス',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      text: {
        label: 'テキスト',
        order: 10,
        type: 'text',
        value: '会社概要',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
    },
  },
]

export const footerSections: Section[] = [
  {
    fields: {
      text: {
        label: 'テキスト',
        order: 10,
        type: 'text',
        value: 'ホーム',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      text: {
        label: 'テキスト',
        order: 10,
        type: 'text',
        value: 'サービス',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      text: {
        label: 'テキスト',
        order: 10,
        type: 'text',
        value: '会社概要',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
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
        linkType: 'internal',
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
        linkType: 'internal',
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
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: '詳細',
        order: 10,
        type: 'text',
        value:
          '生きている間に何人の人と出会えるだろうか？\n人との出会いは未知数で何が起きるかわからない。\nfuniiは起こりうる未知数を増やすことで、素敵な出会いで溢れる世界を作ります。',
        linkType: 'internal',
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
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      title: {
        label: 'タイトル',
        order: 20,
        type: 'text',
        value: 'モリミン３',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: '詳細',
        order: 30,
        type: 'text',
        value:
          '生きている間に何人の人と出会えるだろうか？\n人との出会いは未知数で何が起きるかわからない。\nfuniiは起こりうる未知数を増やすことで、素敵な出会いで溢れる世界を作ります。',
        linkType: 'internal',
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
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      title: {
        label: 'タイトル',
        order: 20,
        type: 'text',
        value: 'モリミン３',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: '詳細',
        order: 30,
        type: 'text',
        value:
          '生きている間に何人の人と出会えるだろうか？\n人との出会いは未知数で何が起きるかわからない。\nfuniiは起こりうる未知数を増やすことで、素敵な出会いで溢れる世界を作ります。',
        linkType: 'internal',
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
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      title: {
        label: 'タイトル',
        order: 20,
        type: 'text',
        value: 'モリミン３',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: '詳細',
        order: 30,
        type: 'text',
        value:
          '生きている間に何人の人と出会えるだろうか？\n人との出会いは未知数で何が起きるかわからない。\nfuniiは起こりうる未知数を増やすことで、素敵な出会いで溢れる世界を作ります。',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
    },
  },
]

export const tableSections: Section[] = [
  {
    fields: {
      label: {
        label: '会社名',
        order: 10,
        type: 'text',
        value: 'funii inc',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      label: {
        label: '代表者',
        order: 10,
        type: 'text',
        value: '栗野　耕作',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      label: {
        label: '設立',
        order: 10,
        type: 'text',
        value: '2020年10月1日',
        linkType: 'internal',
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
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      name: {
        label: '名前',
        order: 20,
        type: 'text',
        value: 'ジョン',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      role: {
        label: '肩書き',
        order: 30,
        type: 'text',
        value: 'Fonder CEO',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: 'プロフィール',
        order: 40,
        type: 'text',
        value: '2020年に東京へ上京し、株式会社モリミンを設立する。',
        linkType: 'internal',
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
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      name: {
        label: '名前',
        order: 20,
        type: 'text',
        value: 'ジョン',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      role: {
        label: '肩書き',
        order: 30,
        type: 'text',
        value: 'Fonder CEO',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: 'プロフィール',
        order: 40,
        type: 'text',
        value: '2020年に東京へ上京し、株式会社モリミンを設立する。',
        linkType: 'internal',
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
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      name: {
        label: '名前',
        order: 20,
        type: 'text',
        value: 'ジョン',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      role: {
        label: '肩書き',
        order: 30,
        type: 'text',
        value: 'Fonder CEO',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
      description: {
        label: 'プロフィール',
        order: 40,
        type: 'text',
        value: '2020年に東京へ上京し、株式会社モリミンを設立する。',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
    },
  },
]

export const contactSections: Section[] = [
  {
    fields: {
      label: {
        label: 'ラベル',
        order: 10,
        type: 'text',
        value: '会社',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
    },
  },
  {
    fields: {
      label: {
        label: 'ラベル',
        order: 10,
        type: 'text',
        value: '所属',
        linkType: 'internal',
        internalLink: null,
        externalLink: null,
      },
    },
  },
]
