import axios from 'axios'
// import * as cheerio from 'cheerio'

const main = async () => {
  try {
    const { data } = await axios.post('https://animalcrossing.soopoolleaf.com/tw/acnh/animalsearch/load_data.php', {
      // Payload: view parsed
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
      pageLimit: 50
    }, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    })
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

main()
