import { getTwitterService } from './twitter'
import { keywords } from './const'
import { notifySlack } from './slack'

global.notify = () => {
  const urls = []
  const twitterService = getTwitterService()
  keywords.forEach(keyword => {
    const res = twitterService.fetch(
      encodeURIComponent(
        `https://api.twitter.com/1.1/search/tweets.json?q=${keyword} exclude:retweets&lang=ja&result_type=recent&count=100`
      )
    )
    const { statuses: tweets } = JSON.parse(res)

    tweets.forEach(tweet => {
      const diff = Math.abs(new Date() - new Date(tweet.created_at))
      const minutes = Math.floor(diff / 1000 / 60)
      if (minutes < 10) {
        const url = `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`
        if (urls.filter(e => e === url).length === 0) {
          urls.push(url)
          notifySlack(url)
        }
      }
    })
  })
}
