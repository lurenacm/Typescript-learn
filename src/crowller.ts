// ts 中引入 js 的代码 ts 会无法识别 这样就需要一个文件 来实现 js 翻译成 ts 可以识别的代码 这样的文件一般是 .d.ts 结尾
// ts -> .d.ts 翻译文件 -> js

import superagent from 'superagent'
import cheerio from 'cheerio'

class Crowller {
    private secret: any
    private url = 'https://www.dashengpan.com/search?keyword=python%E7%88%AC%E8%99%AB&size=3'
    constructor() {
        // console.log('constructor')
         this.getRowHTML()
    }

   async getRowHTML() {
      const result = await superagent.get(this.url)
      this.getPanData(result.text)
    }

    getPanData(html: string) {
      const $ = cheerio.load(html)
      const panItem = $('.resource-info')
      panItem.map((index, element) => {
        const title = $(element).find('.resource-title').find('a').text()
        const desc = $(element).find('.detail-item-wrap').text()
        console.log(title)
        console.log('\n' )
        console.log(desc)
        console.log('\n' )
      })

      // PanUrl.map((index, element) => {
      //   // console.log($(element).find('a').attr('href'))
      //   console.log($(element).find('a').text())
      // })
    }
}

const crowller = new Crowller()