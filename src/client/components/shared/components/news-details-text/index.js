import PropTypes from 'prop-types'
import React from 'react'

const NewsTittle =({ newsTitle }) =>{
  return newsTitle?<li className="news-title">{newsTitle}</li>:null
}

NewsTittle.propTypes = {
  newsTitle: PropTypes.string.isRequired
}

export default NewsTittle;
