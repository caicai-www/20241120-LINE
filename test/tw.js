import axios from 'axios'
import * as cheerio from 'cheerio';

(async () => {
  try {
    const { data } = await axios.get('https://www.zoo.gov.taipei/News_Content.aspx?n=27AD3418659070A4&sms=589C9E9F5E8CEAE4&s=A28758B750F6384F')
    const $ = cheerio.load(data)
    $('.area-essay .image-column3').each(function () {
      const url = $(this).attr('href')
      console.log(url)
    })
  } catch (error) {
    console.log(error)
  }
})()
