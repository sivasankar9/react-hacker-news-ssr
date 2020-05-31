import { applyMiddleware, createStore } from 'redux'
import reducers from '../client/reducers'
import thunk from 'redux-thunk'

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk))

  return store
}
