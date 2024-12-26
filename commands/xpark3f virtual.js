import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/xparkanimal.js'
import fs from 'node:fs'

export default async (event) => {
  try {
    const { data } = await axios.get('https://www.xpark.com.tw/floor2')
    const $ = cheerio.load(data)

    const courses = []
    $('#f6 .floor_box').each(function () {
      const t = template()
      const img = new URL($(this).find('img').attr('src'), 'https://www.xpark.com.tw/').href
      const name = $(this).find('.name').text().trim()
      const info = $(this).find('p').text().trim()
      console.log(info)
      t.body.contents[0].url = img
      t.body.contents[2].text = name
      t.footer.contents[0].text = info
      courses.push(t)
    })

    const result = await event.reply({
      type: 'flex',
      altText: '虛實互動',
      contents: {
        type: 'carousel',
        contents: courses
      }
    })

    if (process.env.DEBUG === 'true' && result.message) {
      fs.writeFileSync('./dump/xpark.json', JSON.stringify(courses, null, 2))
    }
  } catch (error) {
    console.error(error)
  }
}
