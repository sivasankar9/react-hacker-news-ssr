import './styles.scss';
import React from 'react';

const Header = () => <header className='table-header'>
  <ul>
    <li className='comments-lable'>Comments</li>
    <li className='vote-lable'>Vote Count</li>
    <li className='upVote-lable'>UpVote</li>
    <li className='news-details'>News Details</li>
  </ul>
</header>;

Header.display = 'Header';

export default Header
