import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://tw.rter.info/capi.php')
    // 查詢
    // line只能是文字 所以用toString轉成文字
    const result = await event.reply(data.USDTWD.Exrate.toString())
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
