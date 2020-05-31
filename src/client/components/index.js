import React, { useEffect } from 'react'
import Actions from '../actions'
import HakerNews from './shared/context/haker-news-context'
import { Helmet } from 'react-helmet'
import Preloader from './PreLoader'
import PropTypes from 'prop-types'
import Table from './shared/components/news-story'
import { connect } from 'react-redux'
import { filterNews } from '../../helpers/utils'

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
  hackerNews: PropTypes.arrayOf(PropTypes.shape({
    hits: PropTypes.array,
    page: PropTypes.number,
    hitsPerPage: PropTypes.number,
    nbHits: PropTypes.number,
    nbPages: PropTypes.number,
    exhaustiveNbHits: PropTypes.boolean,
    query: PropTypes.string,
    params: PropTypes.string,
    processingTimeMS: PropTypes.number,
  })),
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
