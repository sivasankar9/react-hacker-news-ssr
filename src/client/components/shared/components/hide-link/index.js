import React, { useContext } from 'react'
import HakerNewscontext from '../../context/haker-news-context'

export default ({ objectID }) => {
  const Consumer = useContext(HakerNewscontext)
  return (
    <div>
      <p
        onClick={() => {
          return Consumer.hideNews({ objectID })
        }}
      >
        [Hide] {objectID}
      </p>
    </div>
  )
}
