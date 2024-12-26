export default () => {
  return {
    type: 'bubble',
    size: 'giga',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: 'https://www.xpark.com.tw//media/202312/20231213033446L8LD.jpg',
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '16:9',
          gravity: 'top'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'text',
                  text: 'area',
                  size: 'xl',
                  color: '#ffffff',
                  weight: 'bold'
                }
              ],
              spacing: 'none',
              position: 'absolute',
              paddingStart: 'xxl',
              margin: 'none'
            },
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'box',
                  layout: 'baseline',
                  contents: [
                    {
                      type: 'text',
                      text: '查看本區的動物',
                      color: '#ffffff',
                      flex: 0
                    }
                  ],
                  spacing: 'sm',
                  paddingEnd: 'xxl',
                  paddingStart: 'xxl',
                  paddingTop: 'md',
                  paddingBottom: 'md'
                }
              ],
              borderWidth: '1px',
              cornerRadius: '4px',
              spacing: 'sm',
              borderColor: '#ffffff',
              height: '40px',
              justifyContent: 'center',
              alignItems: 'center',
              action: {
                type: 'message',
                label: 'action',
                text: 'hello'
              },
              position: 'absolute',
              offsetBottom: '5%',
              offsetStart: '10%',
              offsetEnd: '45%'
            }
          ],
          position: 'absolute',
          offsetBottom: '0px',
          offsetStart: '0px',
          offsetEnd: '0px',
          background: {
            type: 'linearGradient',
            angle: '0deg',
            startColor: '#17538c99',
            endColor: '#17538c00'
          },
          paddingAll: '20px',
          paddingTop: '18px',
          borderWidth: 'none',
          margin: 'none',
          height: '45%'
        }
      ],
      paddingAll: '0px'
    }
  }
}
