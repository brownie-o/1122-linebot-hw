import axios from 'axios'
import * as cheerio from 'cheerio'
import villagersTemplate from '../templates/villagers.js'
import fs from 'node:fs'

const main = async (event) => {
  try {
    const id = event.message.text()
    // id 會是 名字，性格，生日(月份?)，種類(Kind)
    const { data } = await axios.post('https://animalcrossing.soopoolleaf.com/tw/acnh/animalsearch/load_data.php', {
      // Payload
      Category: '',
      Category_Per: '',
      Category_B: '',
      Hobby: '',
      Sub_type: '',
      Greetings_type: '',
      Sociability: '',
      BGM: '',
      toptop: '',
      Umbrella: '',
      Style_1: '',
      Style_2: '',
      Color_1: '',
      Color_2: '',
      Wallpaper: '',
      Flooring: '',
      Search: '',
      Initial_phrase: '',
      Favorite_saying: '',
      OnlyNew: false,
      page: 1,
      pageLimit: 500
    }, {
      headers: {
        // indicate the media type of the resource
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        // 騙對方發請求的是瀏覽器
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
      }
    })

    for (const villager of data.data) {
      let $ = cheerio.load(villager.名字)
      if (id === $('a').text()) {
        const 名字 = $('a').text()
      }
    }

    for (const villager of data.data) {
      // console.log(villager.性格)
      let $ = cheerio.load(villager.名字)
      const 名字 = $('a').text()
      $ = cheerio.load(villager.性格)
      const 性格 = $('a').text()
      $ = cheerio.load(villager.性别)
      const 性別 = $('span').text()
      $ = cheerio.load(villager.生日)
      const 生日 = $('a').text()
      // 有些沒口頭禪的npc 就要用 || ''
      $ = cheerio.load(villager.初始口頭禪 || '')
      const 口頭禪 = $('span').text()
      $ = cheerio.load(villager.樣式 || '')
      const 樣式 = $('span').text()
      $ = cheerio.load(villager.樣式2 || '')
      const 樣式2 = $('span').text()
      const 樣式3 = `${樣式}/${樣式2}`
      $ = cheerio.load(villager.顏色 || '')
      const 顏色 = $('span').text()
      $ = cheerio.load(villager.顏色2 || '')
      const 顏色2 = $('span').text()
      const 顏色3 = `${顏色}/${顏色2}`
      const Img = villager.Img
      $ = cheerio.load(villager.Kind)
      const 種類 = $('a').text()
      console.log(種類)

      const template = villagersTemplate()
      template.hero.url = Img
      template.body.contents[0].text = 名字
      template.body.contents[1].contents[0].contents[1].text = 性格
      template.body.contents[1].contents[1].contents[1].text = 口頭禪
      template.body.contents[1].contents[2].contents[1].text = 性別
      template.body.contents[1].contents[3].contents[1].text = 生日
      template.body.contents[1].contents[6].contents[1].text = 顏色3
      template.body.contents[1].contents[7].contents[1].text = 樣式3

      if (process.env.DEBUG === 'true') {
        fs.writeFileSync('./dump/villagers.json', JSON.stringify(template, null, 2))
      }

      // function replacer (key, value) {
      //   if (key === '性格') {
      //     if (value === '运动') {
      //       return '運動'
      //     }
      //     if (value === '悠闲') {
      //       return '悠閒'
      //     }
      //     if (value === '元气') {
      //       return '元氣'
      //     }
      //   }
      // }
    }
  } catch (error) {
    console.log(error)
  }
}

main()
