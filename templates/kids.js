export default () => {
  return {
    type: 'bubble',
    body: {
      type: 'box',
      layout: 'vertical',
      spacing: 'none',
      // action: {
      //   type: 'message',
      //   label: 'action',
      //   text: 'hello'
      // },
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
          type: 'box',
          layout: 'vertical',
          contents: [],
          position: 'absolute',
          background: {
            type: 'linearGradient',
            angle: '0deg',
            endColor: '#00000000',
            startColor: '#00000099'
          },
          width: '100%',
          height: '40%',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px'
        },
        {
          type: 'text',
          text: 'a_name_ch',
          size: 'xl',
          weight: 'bold',
          position: 'absolute',
          align: 'center',
          offsetStart: 'xxl',
          offsetBottom: '25%',
          offsetEnd: 'xs',
          color: '#ffffff'
        },
        {
          type: 'button',
          action: {
            type: 'uri',
            uri: 'https://www.zoo.gov.taipei/Default.aspx',
            label: '詳細資訊'
          },
          position: 'absolute',
          offsetBottom: '5%',
          color: '#72c261',
          style: 'primary',
          offsetEnd: '30%'
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
