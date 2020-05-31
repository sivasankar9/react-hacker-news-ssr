import React, { useContext } from 'react'
import HakerNewscontext from '../../context/haker-news-context'
import PropTypes from 'prop-types'

const HideItem = ({ objectID }) => {
  const Consumer = useContext(HakerNewscontext)

  return (
      <li className = 'hide-link'
        onClick={() => {
          return Consumer.hideNews({ objectID })
        }}
      >
        [Hide]
      </li>
  )
}

HideItem.display = 'HideItem';

HideItem.propTypes = {
  objectID: PropTypes.string.isRequired
}


export default HideItem;
