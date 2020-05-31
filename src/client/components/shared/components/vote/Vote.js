import PropTypes from 'prop-types';
import React from 'react';

const Vote = ({ count }) => {
  return <li className="vote-count">{count}</li>
};

(Vote.display = 'Upvote'),
  (Vote.propTypes = {
    count: PropTypes.string,
  })

  Vote.defaultProps = {
  objectID: '',
}
export default Vote;
