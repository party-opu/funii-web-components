import { Node } from '@party-opu/funii-assist-types'

export const header: Node = {
  id: '1',
  label: 'ヘッダー',
  order: 10,
  type: 'header',
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2FcomponentSets%2Fheader%2FthumbnailURL%2Fheader%402x.png?alt=media&token=429b4699-546c-423b-8886-2e67f7cfe7f8',
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
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2Ffooter%402x.png?alt=media&token=b44924fe-9251-4bc0-b5d4-47f3fc846191',
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
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2FcomponentSets%2Fcarousel%2FthumbnailURL%2Fcarousel%402x.png?alt=media&token=bb919f0f-3f14-422c-b195-8653ff3e64da',
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
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2FcomponentSets%2Fmission%2FthumbnailURL%2Fmission%402x.png?alt=media&token=ac0f3139-d870-447f-9d85-e19256a49e2f',
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
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2FcomponentSets%2Fservice%2FthumbnailURL%2Fservice%402x.png?alt=media&token=38ef56b2-87d9-4e6b-ae61-b154ab806734',
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
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2FcomponentSets%2Ftable%2FthumbnailURL%2Ftable%402x.png?alt=media&token=5174cb55-a277-4591-a8e9-637f19188bfd',
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
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2FcomponentSets%2Fmember%2FthumbnailURL%2Fmember%402x.png?alt=media&token=a7ee47da-a095-4a18-9260-355977ea64a1',
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
  nodeTreeType: 'unit',
  thumbnailURL:
    'https://firebasestorage.googleapis.com/v0/b/funii-assist-dev.appspot.com/o/templates%2FcomponentSets%2Fcontact%2FthumbnailURL%2Fcontact%402x.png?alt=media&token=0ee652d7-2bc3-4a06-99fc-c8137a273132',
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
