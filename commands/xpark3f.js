import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/xpark.js'
import fs from 'node:fs'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.xpark.com.tw/floor2')
    const $ = cheerio.load(data)

    const courses = []
    $('.floor_desc_wrap').each(function () {
      const t = template()
      const img = new URL($(this).find('.banner').css('background-image').slice(4, -1), 'https://www.xpark.com.tw/').href
      const name = $(this).find('.c_blue').text().trim()
      const action = $(this).find('.c_blue').text().trim()
      t.body.contents[1].contents[1].action.text = action
      t.body.contents[1].contents[0].contents[0].text = name
      t.body.contents[0].url = img
      courses.push(t)
    })

    const result = await event.reply({
      type: 'flex',
      altText: '3F介紹',
      contents: {
        type: 'carousel',
        contents: courses
      }
    })
    console.log(result)

    if (process.env.DEBUG === 'true' && result.message) {
      fs.writeFileSync('./dump/xpark.json', JSON.stringify(courses, null, 2))
    }
  } catch (error) {
    console.error(error)
  }
}
