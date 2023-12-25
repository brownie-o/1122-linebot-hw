import 'dotenv/config'
import linebot from 'linebot'
import villagers from './commands/villagers.js'
// import kind from './commands/kind.js'
import aquaticAnimals from './commands/aquaticAnimals.js'

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

  // const animal = ['鴨子', '食蟻獸', '狗', '兔子', '馬', '公牛', '青蛙', '狼', '河馬', '袋鼠', '熊', '無尾熊', '小熊', '猩猩', '犀牛', '猴子', '小鹿', '大象', '章魚', '鴕鳥', '老虎', '鳥', '雞', '貓', '老鼠', '倉鼠', '綿羊', '豬', '企鵝', '母牛', '山羊', '獅子', '松鼠', '鵰', '鱷魚']

  if (event.message.type === 'text') {
    if (event.message.text.includes('種族')) {
      event.reply({
        type: 'text',
        text: '正在以種族查詢',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '水生動物',
                label: '水生動物'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '小型陸上動物',
                label: '小型陸上動物'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '大型陸上動物',
                label: '大型陸上動物'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '飛行動物',
                label: '飛行動物'
              }
            }
          ]
        }
      })
    } else if (event.message.text.includes('水生動物')) {
      event.reply({
        type: 'text',
        text: '正在查詢水生動物',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '鸭',
                label: '鴨子'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '青蛙',
                label: '青蛙'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '章鱼',
                label: '章魚'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '河马',
                label: '河馬'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '企鹅',
                label: '企鵝'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '鳄鱼',
                label: '鱷魚'
              }
            }
          ]
        }
      })
    } else if (
      event.message.text.trim() === '鸭' ||
      event.message.text.trim() === '青蛙' ||
      event.message.text.trim() === '章鱼' ||
      event.message.text.trim() === '河马' ||
      event.message.text.trim() === '企鹅' ||
      event.message.text.trim() === '鳄鱼'
    ) {
      aquaticAnimals(event)
    } else if (event.message.text.includes('飛行動物')) {
      event.reply({
        type: 'text',
        text: '正在查詢飛行動物',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '鴨子',
                label: '鴨子'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '青蛙',
                label: '青蛙'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '章魚',
                label: '章魚'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '河馬',
                label: '河馬'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '企鵝',
                label: '企鵝'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '鳄鱼',
                label: '鳄鱼'
              }
            }
          ]
        }
      })
    } else {
      villagers(event)
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
