import 'dotenv/config'
import linebot from 'linebot'
import commandUSD from './commands/usd.js'
import commandJPY from './commands/jpy.js'
import commandFE from './commands/fe.js'
import commandQR from './commands/qr.js'
import commandTWGod from './commands/twgod.js'
import commandZOOMap from './commands/zoo_map.js'
import commandZOOTW from './commands/tw.js'
import commandZOOKid from './commands/kids.js'
import commandZooRainForest from './commands/rainforest.js'
import commandZooAfrica from './commands/africa.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// 當bot收到訊息後,執行function
// 如果訊息是文字就執行下面訊息
// 如果不是文字就return
// 觸發查詢的指令 usd
bot.on('message', event => {
  if (event.message.type === 'text') {
    if (event.message.text === 'usd'
    ) {
      commandUSD(event)
    }
    if (event.message.text === 'jpy') {
      commandJPY(event)
    } else if (event.message.text === 'fe') {
      commandFE(event)
    } else if (event.message.text === 'qr') {
      commandQR(event)
    } else if (event.message.text === 'zoo') {
      commandZOOMap(event)
    } else if (event.message.text === '台灣動物區') {
      commandZOOTW(event)
    } else if (event.message.text === '兒童動物區') {
      commandZOOKid(event)
    } else if (event.message.text === '熱帶雨林區') {
      commandZooRainForest(event)
    } else if (event.message.text === '非洲動物區') {
      commandZooAfrica(event)
    }
  } else if (event.message.type === 'location') {
    commandTWGod(event)
  }
})

bot.on('postback', event => {
  event.reply('據說是postback啦 data內容是:' + event.postback.data)
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('康達姆機器人啟動')
})
