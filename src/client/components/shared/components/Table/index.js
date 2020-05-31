import PropTypes from 'prop-types'
import React from 'react'

const Table = (props) => <>{props.children}</>

Table.propTypes = {
  children: PropTypes.element.isRequired
}

export default Table
