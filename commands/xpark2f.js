import axios from 'axios'
import * as cheerio from 'cheerio'
import template from '../templates/xpark.js'
import fs from 'node:fs'

export default async (event) => {
  try {
    const [data2, data1] = await Promise.all([
      axios.get('https://www.xpark.com.tw/floor1'),
      axios.get('https://www.xpark.com.tw/floor3')
    ])

    // 使用 cheerio 解析兩個網頁的內容
    const $ = cheerio.load(data2.data)
    const $$ = cheerio.load(data1.data)

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

    $$('.floor_desc_wrap').each(function () {
      const t = template()
      const img = new URL($$(this).find('.banner').css('background-image').slice(4, -1), 'https://www.xpark.com.tw/').href
      const name = $$(this).find('.c_blue').text().trim()
      const action = $$(this).find('.c_blue').text().trim()
      console.log(name)
      t.body.contents[1].contents[1].action.text = action
      t.body.contents[1].contents[0].contents[0].text = name
      t.body.contents[0].url = img
      courses.push(t)
    })

    const result = await event.reply({
      type: 'flex',
      altText: '2F介紹',
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
