import axios from 'axios'
import * as cheerio from 'cheerio'
import villagersTemplate from '../templates/villagers.js'
import fs from 'node:fs'

export default async (event) => {
  try {
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

    console.log(data)
    const $ = cheerio.load(data)

    const template = villagersTemplate()
    template.hero.url = $()
  } catch (error) {
    console.log(error)
  }
}

if (process.env.DEBUG === 'true') {
  const template = villagersTemplate()
  fs.writeFileSync('./dump./villagers.json', JSON.stringify(template, replacer, 2))
}

function replacer (key, value) {
  if (key === '性格') {
    if (value === '运动') {
      return '運動'
    }
    if (value === '悠闲') {
      return '悠閒'
    }
    if (value === '元气') {
      return '元氣'
    }
  }
}
