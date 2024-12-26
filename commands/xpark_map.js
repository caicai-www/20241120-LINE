export default async event => {
  event.reply({
    type: 'text',
    text: '你要查哪個區域',
    quickReply: {
      items: [
        {
          type: 'action',
          action: {
            type: 'message',

            text: '1F',
            label: '1F'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '2F',
            label: '2F'
          }
        },
        {
          type: 'action',
          action: {
            type: 'message',
            text: '3F',
            label: '3F'
          }
        }
      ]
    }
  })
}
