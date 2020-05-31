import { combineReducers } from 'redux'
import error from './error'
import hackerNews from './hacker-news'
import status from './status'

export default combineReducers({
  news: hackerNews,
  loading: status,
  error,
})
