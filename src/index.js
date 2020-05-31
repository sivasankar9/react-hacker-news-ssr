import '@babel/polyfill'
import Routes from './client/Routes'
import compression from 'compression'
import createStore from './store/createStore'
import express from 'express'
import { matchRoutes } from 'react-router-config'
import renderer from './helpers/renderer'

const app = express()

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false
  return compression.filter(req, res)
}

app.use(
  compression({
    level: 2,
    filter: shouldCompress,
  })
)

const port = process.env.PORT || 3000

app.use(express.static('public'))

app.get('*', (req, res) => {
  const params = req.params[0].split('/')
  const id = params[2]
  const store = createStore()
  const routes = matchRoutes(Routes, req.path)
  const promises = routes
    .map(({ route }) => {
      return route.loadData ? route.loadData(store, id) : null
    })
    .map((promise) => {
      if (promise) {
        return new Promise((resolve) => {
          promise.then(resolve).catch(resolve)
        })
      }
      return null
    })

  Promise.all(promises).then(() => {
    const context = {}
    const content = renderer(req, store, context)

    if (context.notFound) {
      res.status(404)
    }

    res.send(content)
  })
})

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Listening on port: ${port}`)
})
