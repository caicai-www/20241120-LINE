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
import commandZooPangolin from './commands/pangolin.js'
import commandZooDesert from './commands/desert.js'
import commandZooAus from './commands/australia.js'
import commandZooTemperate from './commands/temperate.js'
import commandZooBird from './commands/bird.js'
import commandZooAmphibians from './commands/amphibians.js'
import commandZooPenguin from './commands/penguin.js'
import commandXparkMap from './commands/xpark_map.js'
import commandXpark1F from './commands/xpark1f.js'
import commandXpark2F from './commands/xpark2f.js'
import commandXpark3F from './commands/xpark3f.js'
import commandXpark1Ffun from './commands/xpark1f av8dfun.js'
import commandXpark1FInterval from './commands/xpark1f interval.js'
import commandXpark1FJungle from './commands/xpark1f jungle.js'
import commandXpark1FOut from './commands/xpark1f out.js'
import commandXpark1FCafe from './commands/xpark1f cafe.js'
import commandXpark1FFun from './commands/xpark1f fun.js'
import commandXpark2FFormosa from './commands/xpark2f formosa.js'
import commandXpark2FJelly from './commands/xpark2f jellyfish.js'
import commandXpark2FPenguin from './commands/xpark2f penguin.js'
import commandXpark3FCoral from './commands/xpark3f coral.js'
import commandXpark3FOcean from './commands/xpark3f ocean.js'
import commandXpark3FRainforest from './commands/xpark3f rainforest.js'
import commandXpark3FCold from './commands/xpark3f cold.js'
import commandXpark3FDeepsea from './commands/xpark3f deepsea.js'
import commandXpark3FVirtual from './commands/xpark3f virtual.js'

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
    } else if (event.message.text === '穿山甲館') {
      commandZooPangolin(event)
    } else if (event.message.text === '沙漠動物區') {
      commandZooDesert(event)
    } else if (event.message.text === '澳洲動物區') {
      commandZooAus(event)
    } else if (event.message.text === '溫帶動物區') {
      commandZooTemperate(event)
    } else if (event.message.text === '鳥園') {
      commandZooBird(event)
    } else if (event.message.text === '兩棲爬蟲動物館') {
      commandZooAmphibians(event)
    } else if (event.message.text === '企鵝館') {
      commandZooPenguin(event)
    } else if (event.message.text === 'xpark') {
      commandXparkMap(event)
    } else if (event.message.text === '1F') {
      commandXpark1F(event)
    } else if (event.message.text === '2F') {
      commandXpark2F(event)
    } else if (event.message.text === '3F') {
      commandXpark3F(event)
    } else if (event.message.text === '與眾同樂') {
      commandXpark1Ffun(event)
    } else if (event.message.text === '潮間戲灘') {
      commandXpark1FInterval(event)
    } else if (event.message.text === '漫步叢林') {
      commandXpark1FJungle(event)
    } else if (event.message.text === '世外桃源') {
      commandXpark1FOut(event)
    } else if (event.message.text === 'Xcafe') {
      commandXpark1FCafe(event)
    } else if (event.message.text === 'Xfun') {
      commandXpark1FFun(event)
    } else if (event.message.text === '福爾摩沙') {
      commandXpark2FFormosa(event)
    } else if (event.message.text === '癒見水母') {
      commandXpark2FJelly(event)
    } else if (event.message.text === '企鵝奇遇') {
      commandXpark2FPenguin(event)
    } else if (event.message.text === '珊瑚潛行') {
      commandXpark3FCoral(event)
    } else if (event.message.text === '暖海生機') {
      commandXpark3FOcean(event)
    } else if (event.message.text === '雨林探險') {
      commandXpark3FRainforest(event)
    } else if (event.message.text === '寒帶行凍') {
      commandXpark3FCold(event)
    } else if (event.message.text === '深海尋秘') {
      commandXpark3FDeepsea(event)
    } else if (event.message.text === '虛實互動') {
      commandXpark3FVirtual(event)
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
