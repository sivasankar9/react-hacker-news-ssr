import PropTypes from 'prop-types'
import React from 'react'

const GraphLabel = (props) => {
  const { x, y, label } = props

  return (
    <text
      x={x}
      y={y}
      dy={-4}
      fontSize="17"
      fontWeight="600"
      fontFamily="sans-serif"
      textAnchor="middle"
    >
      {label}
    </text>
  )
}

GraphLabel.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired
}

GraphLabel.display = 'GraphLabel';

export default GraphLabel
