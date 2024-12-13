import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/kids.js'
import fs from 'node:fs'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.zoo.gov.taipei/News_Content.aspx?n=27AD3418659070A4&sms=589C9E9F5E8CEAE4&s=1DA5145322B0A53E')
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
      courses.push(t)
    })

    const result = await event.reply({
      type: 'flex',
      altText: '鳥園',
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
