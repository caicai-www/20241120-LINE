import axios from 'axios'
import * as cheerio from 'cheerio';

(async () => {
  try {
    const { data } = await axios.get('https://www.xpark.com.tw/floor4')
    const $ = cheerio.load(data)
    const courses = []
    $('.f_tit .c_blue').each(function () {
      courses.push($(this).text().trim())
    })
    console.log(courses)
  } catch (error) {
    console.log(error)
  }
})()
