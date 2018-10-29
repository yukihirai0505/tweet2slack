## tweet2slack

Notify tweets searched by some keywords to Slack channel.

This project uses Google Apps Script(clasp).

Setup `Google Apps Script Project ID` in `.clasp.json`

```
{
  "scriptId": "<< Google Apps Script Project ID >>",
  "rootDir": "dist"
}
```

And also keywords `src/const.js`

```
export const keywords = ['word1', 'word2']
```

You can change Slack channel to notify message. `src/slack.js`

`#general` to `#your-channel`

```
  getSlackAppStore().postMessage('#general', link, {
    icon_url: 'https://help.twitter.com/content/dam/help-twitter/twitter-logo.png',
    username: 'Twitter bot'
  })
```

## Get Started

```
$ clasp login
$ yarn
```

## Deploy

```
$ yarn deploy
```

After deploy, plz setup trigger to start `notify` function every 10 minutes.

## Reference

- [Search Tweets API](https://developer.twitter.com/en/docs/tweets/search/api-reference/get-search-tweets.html)
- [apps-script-starter](https://github.com/labnol/apps-script-starter)
- [clasp](https://github.com/google/clasp)
