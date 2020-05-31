import './style.scss';
import HideLink from '../hide-link'
import { Link } from 'react-router-dom';
import NewsText from '../news-details-text'
import React from 'react'
import Upvote from '../up-vote'
import Votes from '../vote'

const isoToDateFormatConvertor = (isoDate)=>{
  const date = new Date(isoDate).toISOString().substring(0, 10);

  return date;
}

const extractHostname = (url)=>{
  var hostname;

if(url==null) return '';


  if (url.indexOf("//") > -1) {
      hostname = url.split('/')[2];
    }
    else {
    hostname = url.split('/')[0];
  }
  hostname = hostname.split(':')[0];
  hostname = hostname.split('?')[0];

  return hostname;
}
const Article = (props) => <article className="news-story-item-wrapper">
  <ul className='news-story-line-item'>
    {props.children}
  </ul>
</article>

const Author = ({ newsAuthor }) => <li className='author-title'>{newsAuthor}</li>

const ElapsedText = ({ time }) => <li className='elapsed-time'> {isoToDateFormatConvertor(time)} ago</li>

const CommentCount = ({ count }) => <li className='comment-count'>{count}</li>

const NavLink = ({ url }) => <li className="nav-url-link"><Link to={'/search?tags=front_page'}>{extractHostname(url)}</Link></li>


const NewsLineItem = ({ story }) => {
  const { author, created_at, title, points, num_comments, objectID, url } = story

  return (
    <Article>
      <CommentCount count={num_comments} />
      <Votes count={points} />
      <Upvote objectID={objectID} />
      <NewsText newsTitle={title} />
      <NavLink url={url}></NavLink>
      {/* <Author newsAuthor={author} /> */}
      <ElapsedText time={created_at} />
      <Author newsAuthor={author} />
      <HideLink objectID={objectID} />
    </Article>
  )
}


export default NewsLineItem;
