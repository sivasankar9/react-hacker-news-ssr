import React, { useContext } from 'react'
import HakerNewscontext from '../../context/haker-news-context'

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

export default HideItem;
