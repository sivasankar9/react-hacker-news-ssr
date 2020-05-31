import { combineReducers } from 'redux'
import hackerNews from './hacker-news'
import error from './error'
import status from './status'

export default combineReducers({
  news: hackerNews,
  loading: status,
  error,
})
