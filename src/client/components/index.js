import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Table from './shared/components/news-story'
import Actions from '../actions'
import { filterNews } from '../../helpers/utils'
import HakerNews from './shared/context/haker-news-context'
import Preloader from './PreLoader'

const App = (props) => {
  const {
    hackerNews: { hits },
    upVote,
    hideNews,
    fetchNews,
    location,
    loadingState,
  } = props

  useEffect(() => {
    window.scrollTo(0, 0)
    const query = location.search

    fetchNews(query)
  }, [location])

  const head = () => {
    return (
      <Helmet key={Math.random()}>
        <title>Daily News by Siva</title>
        <meta property="News:title" content="Hacker Daily News - siva sankar" />
        <meta
          name="description"
          content="Breaking news,latest articles, popular articles from most popular news websites of the world"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://hacker-news-srr.herokuapp.com/" />
      </Helmet>
    )
  }

  return (
    <Preloader source={loadingState}>
      {head()}
      <HakerNews.Provider value={{ upVote, hits, hideNews }}>
        <Table />
      </HakerNews.Provider>
    </Preloader>
  )
}

App.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.any),
  hackerNews: PropTypes.arrayOf(PropTypes.any),
  fetchNews: PropTypes.func.isRequired,
  hideNews: PropTypes.func.isRequired,
  upVote: PropTypes.func.isRequired,
  loadingState: PropTypes.string,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
}

App.defaultProps = {
  hits: [],
  hackerNews: [],
  fetchNews: () => { },
  hideNews: () => { },
  upVote: () => { },
  loadingState: PropTypes.string,
  location: PropTypes.shape({
    search: PropTypes.string,
  }),
}

const mapStateToProps = (state) => ({
  hackerNews: filterNews(state.news),
  loadingState: state.loading,
})

export default {
  component: connect(mapStateToProps, Actions)(App),
}
