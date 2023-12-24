import 'dotenv/config'
import linebot from 'linebot'
import villagers from './commands/villagers.js'
// import kind

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

// message = 收到訊息時
bot.on('message', event => {
  if (process.env.DEBUG === 'true') {
    console.log(event)
  }

  const animal = ['鴨子', '食蟻獸', '狗', '兔子', '馬', '公牛', '青蛙', '狼', '河馬', '袋鼠', '熊', '無尾熊', '小熊', '猩猩', '犀牛', '猴子', '小鹿', '大象', '章魚', '鴕鳥', '老虎', '鳥', '雞', '貓', '老鼠', '倉鼠', '綿羊', '豬', '企鵝', '母牛', '山羊', '獅子', '松鼠', '鵰', '鱷魚']

  if (event.message.type === 'text') {
    if (animal.includes(event.message.text)) {
      kind(event)
    } else {
      villagers(event)
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
