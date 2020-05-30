import React, { useEffect, Component } from 'react';
import { connect } from 'react-redux';
import HakerNews from './shared/context/haker-news-context';
import Table from './shared/components/news-story';
import Actions from '../actions';
import { filterNews } from '../../helpers/utils';
import Preloader from './PreLoader';

const App = props => {
  const {
    hackerNews: { hits },
    upVote,
    hideNews,
    fetchNews,
    location,
    loadingState
  } = props;

  useEffect(() => {
    window.scrollTo(0, 0);
    const query = location.search;
    fetchNews(location.search);
  }, [location]);

  return (
    <div>
      <Preloader source={loadingState}>
        <HakerNews.Provider value={{ upVote, hits, hideNews }}>
          <Table />
        </HakerNews.Provider>
      </Preloader>
    </div>
  )
}


const mapStateToProps = (state) => ({
  hackerNews: filterNews(state.news),
  loadingState: state.loading
})

export default {
  component: connect(mapStateToProps, Actions)(App),
};
