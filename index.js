import 'dotenv/config'
import linebot from 'linebot'
import villagers from './commands/villagers.js'
// import kind from './commands/kind.js'
import kindVillagers from './commands/kindVillagers.js'

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
    if (event.message.text.includes('說明')) {
      event.reply({
        type: 'text',
        text:
`您可以在狸端機入口站👾查找島民的個人資訊。

查詢方式: 
直接輸入島民的 "姓名" 即可！`
      })
    } else if (event.message.text.includes('種族')) {
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
                text: '鸟',
                label: '鳥'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '鸡',
                label: '雞'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '鹰',
                label: '老鷹'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '鸭',
                label: '鴨子'
              }
            }
          ]
        }
      })
    } else if (event.message.text.includes('小型陸上動物')) {
      event.reply({
        type: 'text',
        text: '正在查詢小型陸上動物',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '狗',
                label: '狗'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '猫',
                label: '貓'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '兔子',
                label: '兔子'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '考拉',
                label: '無尾熊'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '小熊',
                label: '小熊'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '猴',
                label: '猴子'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '老鼠',
                label: '老鼠'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '仓鼠',
                label: '倉鼠'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '松鼠',
                label: '松鼠'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '鹿',
                label: '小鹿'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '山羊',
                label: '山羊'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '羊',
                label: '綿羊'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '猪',
                label: '豬'
              }
            }
          ]
        }
      })
    } else if (event.message.text.includes('大型陸上動物')) {
      event.reply({
        type: 'text',
        text: '正在查詢大型陸上動物',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '食蚁兽',
                label: '食蟻獸'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '马',
                label: '馬'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '公牛',
                label: '公牛'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '牛',
                label: '母牛'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '狼',
                label: '狼'
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
                text: '袋鼠',
                label: '袋鼠'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '熊',
                label: '熊'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '大猩猩',
                label: '猩猩'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '犀牛',
                label: '犀牛'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '象',
                label: '大象'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '鸵鸟',
                label: '鴕鳥'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '虎',
                label: '老虎'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '狮子',
                label: '獅子'
              }
            }
          ]
        }
      })
    } else if (event.message.text.trim() === '鸭') {
      event.reply({
        type: 'text',
        text: '正在以種族查詢',
        quickReply: {
          items: [
            {
              type: 'action',
              // 幫quick reply 訊息加icon
              // "imageUrl": "https://example.com/tempura.png",
              action: {
                type: 'message',
                text: '雄鴨鴨',
                label: '雄鴨鴨'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '母鴨鴨',
                label: '母鴨鴨'
              }
            }
          ]
        }
      })
    } else if (event.message.text.trim() === '企鹅') {
      event.reply({
        type: 'text',
        text: '正在以種族查詢',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '雄企鵝',
                label: '雄企鵝'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '母企鵝',
                label: '母企鵝'
              }
            }
          ]
        }
      })
    } else if (event.message.text.trim() === '青蛙') {
      event.reply({
        type: 'text',
        text: '正在以種族查詢',
        quickReply: {
          items: [
            {
              type: 'action',
              action: {
                type: 'message',
                text: '前半年生日青蛙',
                label: '前半年生日青蛙'
              }
            },
            {
              type: 'action',
              action: {
                type: 'message',
                text: '後半年生日青蛙',
                label: '後半年生日青蛙'
              }
            }
          ]
        }
      })
    } else if (
      // 12+
      event.message.text.trim() === '母鴨鴨' ||
      event.message.text.trim() === '雄鴨鴨' ||
      event.message.text.trim() === '雄企鵝' ||
      event.message.text.trim() === '母企鵝'
      // event.message.text.trim() === ('鸭' || '鴨子') ||
      // event.message.text.trim() === ('企鹅' || '企鵝')
    ) {
      // 要改: 用種族&性別來分類
      kindVillagers(event)
    } else if (
      // 12+
      event.message.text.trim() === '前半年生日青蛙' ||
      event.message.text.trim() === '後半年生日青蛙'
      // event.message.text.trim() === '青蛙' ||
    ) {
      // 要改: 用種族&生日來分類
      kindVillagers(event)
    } else if (
      // 12-
      event.message.text.trim() === '章鱼' ||
      event.message.text.trim() === '河马' ||
      event.message.text.trim() === '鳄鱼'
      // event.message.text.trim() === ('章鱼' || '章魚') ||
      // event.message.text.trim() === ('河马' || '河馬') ||
      // event.message.text.trim() === ('鳄鱼' || '鱷魚')
    ) {
      kindVillagers(event)
    } else {
      villagers(event)
    }
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人啟動')
})
