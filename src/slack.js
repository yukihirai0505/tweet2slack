/* eslint-disable no-undef */
import { getProperty } from './props'

export const notifySlack = link =>
  SlackApp.create(getProperty('SLACK_ACCESS_TOKEN')).postMessage('#general', link, {
    icon_url: 'https://help.twitter.com/content/dam/help-twitter/twitter-logo.png',
    username: 'Twitter bot'
  })
