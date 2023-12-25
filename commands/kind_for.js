// import axios from 'axios'
import * as cheerio from 'cheerio'
import villagersTemplate from '../templates/villagers.js'

export default async (data, id, replies) => {
  try {
    // const { data } = await axios.post('https://animalcrossing.soopoolleaf.com/tw/acnh/animalsearch/load_data.php', {
    //   // Payload
    //   Category: '',
    //   Category_Per: '',
    //   Category_B: '',
    //   Hobby: '',
    //   Sub_type: '',
    //   Greetings_type: '',
    //   Sociability: '',
    //   BGM: '',
    //   toptop: '',
    //   Umbrella: '',
    //   Style_1: '',
    //   Style_2: '',
    //   Color_1: '',
    //   Color_2: '',
    //   Wallpaper: '',
    //   Flooring: '',
    //   Search: '',
    //   Initial_phrase: '',
    //   Favorite_saying: '',
    //   OnlyNew: false,
    //   page: 1,
    //   pageLimit: 500
    // }, {
    //   headers: {
    //     // indicate the media type of the resource
    //     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    //     // 騙對方發請求的是瀏覽器
    //     'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36'
    //   }
    // })

    for (const villager of data.data) {
      let $ = cheerio.load(villager.Kind)
      if (id === $('a').text()) {
        const 種類 = $('a').text()
        console.log(種類)
        $ = cheerio.load(villager.名字)
        const 名字 = $('a').text()
        $ = cheerio.load(villager.性格)
        let 性格 = $('a').text()
        if (性格 === '运动') {
          性格 = '運動'
        } else if (性格 === '悠闲') {
          性格 = '悠閒'
        } else if (性格 === '元气') {
          性格 = '元氣'
        } else if (性格 === '自恋') {
          性格 = '自戀'
        }
        $ = cheerio.load(villager.性别)
        let 性別 = $('span').text()
        if ($('span').text() === '♂♂') {
          性別 = '雄'
        } else 性別 = '母'
        $ = cheerio.load(villager.生日)
        const 生日 = $('a').text()
        $ = cheerio.load(villager.初始口頭禪 || '')
        const 口頭禪 = $('span').text() || '無'
        $ = cheerio.load(villager.樣式 || '')
        const 樣式 = $('span').text()
        $ = cheerio.load(villager.樣式2 || '')
        const 樣式2 = $('span').text()
        const 樣式3 = `${樣式}/${樣式2}`
        $ = cheerio.load(villager.顏色 || '')
        let 顏色 = $('span').text()
        $ = cheerio.load(villager.顏色2 || '')
        let 顏色2 = $('span').text()
        const 顏色3 = `${顏色 = (顏色 === '紅') ? '紅色' : 顏色}/${顏色2 = (顏色2 === '紅') ? '紅色' : 顏色2}`
        const Img = villager.Img

        const template = villagersTemplate()
        template.hero.url = Img
        template.body.contents[0].text = 名字
        template.body.contents[1].contents[0].contents[0].contents[1].text = 性格
        template.body.contents[1].contents[0].contents[1].contents[1].text = `"${口頭禪}"`
        template.body.contents[1].contents[1].contents[0].contents[1].text = 性別
        template.body.contents[1].contents[1].contents[1].contents[1].text = 生日
        template.body.contents[1].contents[4].contents[1].text = 顏色3
        template.body.contents[1].contents[5].contents[1].text = 樣式3

        replies.push(template)
      }
    }
  } catch (error) {
    console.log(error)
  }
}
