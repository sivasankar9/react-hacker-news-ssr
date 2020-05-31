import './style.scss';
import { getHostName, isoToDateFormatConvertor } from '../../../../../helpers/utils';
import HideLink from '../hide-link'
import { Link } from 'react-router-dom';
import NewsText from '../news-details-text'
import PropTypes from 'prop-types'
import React from 'react'
import Upvote from '../up-vote'
import Votes from '../vote'

const Article = (props) => <article className="news-story-item-wrapper">
  <ul className='news-story-line-item'>
    {props.children}
  </ul>
</article>

const Author = ({ newsAuthor }) => <li className='author-title'>{newsAuthor}</li>

const ElapsedText = ({ time }) => <li className='elapsed-time'> {isoToDateFormatConvertor(time)} ago</li>

const CommentCount = ({ count }) => <li className='comment-count'>{count?count:'-'}</li>

const Linkage = ({ hostName }) => <li className="nav-url-link"><Link to={'/search?tags=front_page'}>{`(${hostName})`}</Link></li>

const NavLink = ({ url }) => {
  const hostUrl = getHostName(url);

  return hostUrl ? <Linkage hostName={url} /> : null;
}

const NewsLineItem = ({ story }) => {
  const { author, created_at, title, points, num_comments, objectID, url } = story

  return (
    <Article>
      <CommentCount count={num_comments} />
      <Votes count={points} />
      <Upvote objectID={objectID} />
      <span className="news-details">
        <NewsText newsTitle={title} />
        <NavLink url={url}></NavLink>
        <Author newsAuthor={author} />
        <ElapsedText time={created_at} />
        <HideLink objectID={objectID} />
      </span>
    </Article>
  )
}

Author.propTypes = {
  newsAuthor: PropTypes.string.isRequired
}
ElapsedText.propTypes = {
  time: PropTypes.string.isRequired
}
CommentCount.propTypes = {
  count: PropTypes.string.isRequired
}
Linkage.propTypes = {
  hostName: PropTypes.string.isRequired
}
NavLink.propTypes = {
  url: PropTypes.string.isRequired
}
NewsLineItem.propTypes = {
  story: PropTypes.shape({
    author:PropTypes.string.isRequired,
    created_at:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    points:PropTypes.string.isRequired,
    num_comments:PropTypes.string.isRequired,
    objectID:PropTypes.string.isRequired,
    url:PropTypes.string.isRequired,
  }
  )
}
Article.propTypes = {
  children: PropTypes.element.isRequired
}

export default NewsLineItem;

