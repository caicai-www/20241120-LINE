import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/kids.js'
import fs from 'node:fs'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.zoo.gov.taipei/News_Content.aspx?n=27AD3418659070A4&sms=589C9E9F5E8CEAE4&s=34EC5D80A78F1AE7')
    const $ = cheerio.load(data)
    const courses = []
    $('.area-essay .image-column3').each(function () {
      const t = template()
      const img = $(this).find('.image').css('background-image').slice(4, -1)
      const name = $(this).find('h4').text()
      const url = $(this).attr('href')
      t.body.contents[0].url = img
      t.body.contents[2].text = name
      t.body.contents[3].action.uri = url
      // console.log(url)
      courses.push(t)
    })
    // console.log('cour: ' + courses)

    const result = await event.reply({
      type: 'flex',
      // 機器人回覆的預覽文字
      altText: '熱帶雨林區',
      contents: {
        type: 'carousel',
        contents: courses
      }
    })
    console.log(result)

    if (process.env.DEBUG === 'true' && result.message) {
      // 要import 'node:fs'
      fs.writeFileSync('./dump/fe.json', JSON.stringify(courses, null, 2))
    }
  } catch (error) {
    console.error(error)
  }
}
