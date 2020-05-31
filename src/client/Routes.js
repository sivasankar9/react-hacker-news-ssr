import App from './App'
import HomePage from './components'
import NotFoundPage from './components/NotFoundPage'

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
      },
      {
        ...NotFoundPage,
      },
    ],
  },
]
