import PropTypes from 'prop-types'
import React from 'react'

 const Vote = ({ count }) => <li className="vote-count">{count? count: 0}</li>

;(Vote.display = 'Vote'),
  (Vote.propTypes = {
    count: PropTypes.string,
  })

Vote.defaultProps = {
  count: 0,
}
 export default Vote;
