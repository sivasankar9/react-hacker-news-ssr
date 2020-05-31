import HomePage from './components'
import NotFoundPage from './components/NotFoundPage'
import App from './App'

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
