import axios from 'axios'
import fs from 'node:fs'
import { distance } from '../utils/distance.js'
import template from '../templates/twgod.js'

export default async event => {
  try {
    const { data } = await axios.get('https://taiwangods.moi.gov.tw/Control/SearchDataViewer.ashx?t=landscape')
    const gods = data
      .map(god => {
        god.distance = distance(god.L_MapY, god.L_MapX, event.message.latitude, event.message.longitude, 'K')
        return god
      })
      .sort((a, b) => {
        return a.distance - b.distance
      })
      .slice(0, 3)
      // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/map
      // map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。
      .map(god => {
        const t = template()
        t.hero.url = god.L_sImg
        t.body.contents[0].text = god.LL_Title
        t.footer.contents[0].action.uri = 'https://taiwangods.moi.gov.tw/html/landscape/1_0011.aspx?i=' + god.L_ID
        return t
      })

    const result = await event.reply({
      type: 'flex',
      altText: '宗教百景',
      contents: {
        type: 'carousel',
        contents: gods
      }
    })
    console.log(result)

    if (process.env.DEBUG === 'true' && result.message) {
      fs.writeFileSync('./dump/twgod.json', JSON.stringify(gods, null, 2))
    }
  } catch (error) {
    console.log(error)
  }
}
