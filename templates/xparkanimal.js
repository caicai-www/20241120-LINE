export default () => {
  return {
    type: 'bubble',
    size: 'mega',
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: 'https://www.xpark.com.tw/media/202312/20231213034925A85U.jpg',
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '4:3',
          gravity: 'top'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'box',
              layout: 'horizontal',
              contents: [],
              position: 'absolute',
              offsetBottom: '0px',
              offsetStart: '0px',
              offsetEnd: '0px',
              paddingAll: '20px'
            }
          ],
          position: 'absolute',
          width: '100%',
          height: '40%',
          offsetBottom: '0px',
          background: {
            type: 'linearGradient',
            angle: '0deg',
            startColor: '#17538c99',
            endColor: '#17538c00'
          }
        },
        {
          type: 'text',
          text: '［ 栗翅鷹 ］',
          position: 'absolute',
          color: '#ffffff',
          weight: 'bold',
          style: 'normal',
          offsetBottom: 'xxl'
        }
      ],
      paddingAll: '0px'
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '棲息在稀疏的林地、半沙漠地區和沼澤區，具有極佳的視力，通常獨居但具有群體獵食的特殊習性。',
          wrap: true,
          margin: 'none',
          style: 'normal',
          offsetTop: 'none',
          size: 'xs',
          color: '#1968b1'
        }
      ],
      width: '100%',
      height: '90px'
    }
  }
}
