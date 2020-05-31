import React, { useContext } from 'react'
import HakerNewscontext from '../../context/haker-news-context'
import PropTypes from 'prop-types'
import './style.scss'

const Upvote = ({ objectID }) => {
  const Consumer = useContext(HakerNewscontext)

  return (
    <div>
      <p
        className="votearrow"
        onClick={() => {
          return Consumer.upVote({ objectID })
        }}
      ></p>
    </div>
  )
}
;(Upvote.display = 'Upvote'),
  (Upvote.propTypes = {
    objectID: PropTypes.string,
  })

Upvote.defaultProps = {
  objectID: '',
}

export default Upvote
