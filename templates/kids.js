export default () => {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      spacing: 'none',
      action: {
        type: 'message',
        label: 'action',
        text: 'hello'
      },
      contents: [
        {
          type: 'image',
          url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
          aspectRatio: '1:1',
          size: 'full',
          aspectMode: 'cover',
          margin: 'none',
          align: 'center',
          gravity: 'top',
          flex: 1,
          position: 'relative'
        },
        {
          type: 'text',
          text: 'a_name_ch',
          size: 'xl',
          weight: 'bold',
          position: 'absolute',
          offsetBottom: '30%',
          offsetStart: '30%',
          color: '#ffffff'
        },
        {
          type: 'button',
          action: {
            type: 'message',
            label: '詳細資訊',
            text: 'hello'
          },
          position: 'absolute',
          offsetBottom: '5%',
          color: '#4f7c46',
          style: 'primary',
          offsetEnd: '5%'
        }
      ],
      margin: 'none',
      paddingAll: 'none',
      paddingTop: 'none',
      paddingBottom: 'none',
      paddingStart: 'none',
      paddingEnd: 'none'
    }
  }
}
