export default async event => {
  event.reply({
    type: 'text',
    text: '你要查哪個園區',
    quickReply: {
      items: [
        {
          type: 'action',
          imageUrl: '',
          action: {
            type: 'message',

            text: '兒童動物區',
            label: '兒童動物區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '台灣動物區',
            label: '台灣動物區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '大貓熊館',
            label: '大貓熊館'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '穿山甲館',
            label: '穿山甲館'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '熱帶雨林區',
            label: '熱帶雨林區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '沙漠動物區',
            label: '沙漠動物區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '澳洲動物區',
            label: '澳洲動物區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '非洲動物區',
            label: '非洲動物區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '溫帶動物區',
            label: '溫帶動物區'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '兩棲爬蟲動物館',
            label: '兩棲爬蟲動物館'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '鳥園',
            label: '鳥園'
          }
        }
      ]
    }
  })
}
