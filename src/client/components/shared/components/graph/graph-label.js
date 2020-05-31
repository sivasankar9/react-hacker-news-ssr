import React from 'react'

export default (props) => {
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
