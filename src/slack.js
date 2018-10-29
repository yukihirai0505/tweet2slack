/* eslint-disable no-undef */
import { getProperty } from './props'

export function getSlackAppStore() {
  if (!this.store) {
    this.store = SlackApp.create(getProperty('SLACK_ACCESS_TOKEN'))
  }
  return this.store
}

export const notifySlack = link =>
  getSlackAppStore().postMessage('#general', link, {
    icon_url: 'https://help.twitter.com/content/dam/help-twitter/twitter-logo.png',
    username: 'Twitter bot'
  })
