import axios from 'axios'

export default async event => {
  try {
    const { data } = await axios.get('https://tw.rter.info/capi.php')
    // 查詢
    const result = await event.reply(`美金日幣${data.USDJPY.Exrate.toString()}`)
    console.log(result)
  } catch (error) {
    console.error(error)
  }
}
