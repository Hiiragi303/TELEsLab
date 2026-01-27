  /**
   * Small description of your action
   * @title The title displayed in the flow editor
   * @category Custom
   * @author Your_Name
   */
  const post = async () => {
    const axios = require('axios')

    // 送りたい値
    const tag = event.payload.tag // 例: "車"
    const sortKey = event.payload.sortKey // 例: "合計", "成長性"
    const labName = event.payload.labName // 例: "アメリカゼミ", "チャイナゼミ"

    const data = {
      tag: tag,
      sortKey: sortKey,
      labName: labName
    }

    // Webdisへ保存（latestのdataに入れる）
    const url = 'http://webdis:7379/hset/latest/data/' + encodeURIComponent(JSON.stringify(data))

    try {
      const res = await axios.get(url) // WebdisはGETでOK
      console.log('saved to webdis:', res.data)
    } catch (e) {
      console.error('webdis save failed:', e.message)
    }

    event.payload.tag = null
    event.payload.sortKey = null
    event.payload.labName = null
  }

  return post()