import '@babel/polyfill'
import { applyMiddleware, createStore } from 'redux'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'
import reducers from './reducers'
import { renderRoutes } from 'react-router-config'
import thunk from 'redux-thunk'

const state = window.__PRELOADED_STATE__

delete window.__PRELOADED_STATE__

const store = createStore(reducers, state, applyMiddleware(thunk))

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <>{renderRoutes(Routes)}</>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
)
