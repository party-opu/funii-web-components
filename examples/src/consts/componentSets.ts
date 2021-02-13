import { Node } from '../../../src/components/props'

export const header: Node = {
  id: '1',
  label: 'ヘッダー',
  order: 10,
  type: 'header',
  sections: [
    {
      fields: {
        imageURL: {
          label: 'イメージ',
          order: 10,
          type: 'image',
          value: 'https://www.nintendo.co.jp/switch/ampna/material/img/common/logo_footer.png',
          actions: [],
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
          actions: [],
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
          actions: [],
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
          actions: [],
        },
      },
    },
  ],
}

export const footer: Node = {
  id: '1',
  label: 'フッター',
  order: 10,
  type: 'footer',
  sections: [
    {
      fields: {
        text: {
          label: 'テキスト',
          order: 10,
          type: 'text',
          value: 'ホーム',
          actions: [],
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
          actions: [],
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
          actions: [],
        },
      },
    },
  ],
}

export const carousel: Node = {
  id: '1',
  label: 'カルーセル',
  order: 10,
  type: 'carousel',
  sections: [
    {
      fields: {
        imageURL: {
          label: '画像',
          order: 10,
          type: 'image',
          value: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/mv.jpg',
          actions: [],
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
          actions: [],
        },
      },
    },
  ],
}

export const mission: Node = {
  id: '1',
  label: 'ミッション',
  order: 10,
  type: 'mission',
  sections: [
    {
      fields: {
        title: {
          label: 'タイトル',
          order: 10,
          type: 'text',
          value: '素敵な出会いを紡ぐ',
          actions: [],
        },
        description: {
          label: '詳細',
          order: 10,
          type: 'text',
          value:
            '生きている間に何人の人と出会えるだろうか？\n人との出会いは未知数で何が起きるかわからない。\nfuniiは起こりうる未知数を増やすことで、素敵な出会いで溢れる世界を作ります。',
          actions: [],
        },
      },
    },
  ],
}

export const service: Node = {
  id: '1',
  label: 'サービス',
  order: 10,
  type: 'service',
  sections: [
    {
      fields: {
        imageURL: {
          label: '画像',
          order: 10,
          type: 'text',
          value: 'https://www.nintendo.co.jp/switch/ampna/material/img/top/bg_pikmin.jpg',
          actions: [],
        },
        title: {
          label: 'タイトル',
          order: 20,
          type: 'text',
          value: 'モリミン３',
          actions: [],
        },
        description: {
          label: '詳細',
          order: 30,
          type: 'text',
          value:
            '生きている間に何人の人と出会えるだろうか？\n人との出会いは未知数で何が起きるかわからない。\nfuniiは起こりうる未知数を増やすことで、素敵な出会いで溢れる世界を作ります。',
          actions: [],
        },
      },
    },
  ],
}

export const table: Node = {
  id: '1',
  label: 'テーブル',
  order: 10,
  type: 'table',
  sections: [
    {
      fields: {
        label: {
          label: 'ラベル',
          order: 10,
          type: 'text',
          value: '会社名',
          actions: [],
        },
        value: {
          label: 'バリュー',
          order: 10,
          type: 'text',
          value: 'funii inc',
          actions: [],
        },
      },
    },
    {
      fields: {
        label: {
          label: 'ラベル',
          order: 10,
          type: 'text',
          value: '代表者',
          actions: [],
        },
        value: {
          label: 'バリュー',
          order: 10,
          type: 'text',
          value: '栗野　耕作',
          actions: [],
        },
      },
    },
    {
      fields: {
        label: {
          label: 'ラベル',
          order: 10,
          type: 'text',
          value: '設立',
          actions: [],
        },
        value: {
          label: 'バリュー',
          order: 10,
          type: 'text',
          value: '2020年10月1日',
          actions: [],
        },
      },
    },
  ],
}

export const member: Node = {
  id: '1',
  label: 'メンバー',
  order: 10,
  type: 'member',
  sections: [
    {
      fields: {
        imageURL: {
          label: '画像',
          order: 10,
          type: 'image',
          value: 'https://www.nintendo.co.jp/switch/ampna/material/img/prologue/img_chara2.png',
          actions: [],
        },
        name: {
          label: '名前',
          order: 20,
          type: 'text',
          value: 'ジョン',
          actions: [],
        },
        role: {
          label: '肩書き',
          order: 30,
          type: 'text',
          value: 'Fonder CEO',
          actions: [],
        },
        description: {
          label: 'プロフィール',
          order: 40,
          type: 'text',
          value: '2020年に東京へ上京し、株式会社モリミンを設立する。',
          actions: [],
        },
      },
    },
  ],
}

export const contact: Node = {
  id: '1',
  label: 'お問い合わせ',
  order: 10,
  type: 'contact',
  sections: [
    {
      fields: {
        label: {
          label: 'ラベル',
          order: 10,
          type: 'text',
          value: '会社',
          actions: [],
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
          actions: [],
        },
      },
    },
  ],
}

export const space: Node = {
  id: '1',
  label: 'スペース',
  order: 10,
  type: 'space',
  sections: [
    {
      fields: {
        text: {
          label: 'スペース',
          order: 10,
          type: 'text',
          value: '',
          actions: [],
        },
      },
    },
  ],
}
