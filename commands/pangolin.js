import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/kids.js'
import fs from 'node:fs'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.zoo.gov.taipei/News_Content.aspx?n=0E2F1BDD15CF608D&sms=4B48AE9F06DCAA6F&s=A0E78E5E74C0C58A')
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

    const result = await event.reply({
      type: 'flex',
      altText: '熱帶雨林室內館(穿山甲館)',
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
