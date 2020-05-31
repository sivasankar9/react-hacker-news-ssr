import './style.scss';
import React, { useContext } from 'react'
import Graph from '../graph'
import HakerNewscontext from '../../context/haker-news-context'
import Header from '../header'
import LineItem from '../news-line-item'
import { Link } from 'react-router-dom'
import Table from '../Table'

const BuildLinteItems = () => {
  const Consumer = useContext(HakerNewscontext)

  return Consumer.hits.map((item) => {
    return <LineItem key={item.objectID} story={item} />
  })
}

const NewsStory = () => <Table>
  <Header />
  <section>
    <BuildLinteItems />
  </section>
  <section className='nav-pre-next'>
    <Link to={'/search?tags=front_page'} className='prev'>Previous</Link> |{' '}
    <Link to={`/search?query=page${2}`} className='next'>Next</Link>{' '}
  </section>
  <Graph />
</Table>

NewsStory.display = 'NewsStory'

export default NewsStory;
