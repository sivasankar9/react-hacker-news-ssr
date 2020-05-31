import PropTypes from 'prop-types'
import React from 'react'

const Spinner = () => (
  <>
    <h3>Loading.........</h3>
  </>
)

const PreLoader = (props) => {
  const { status } = props.source

  return (
    <section>
      {status === 'LOADED' ? <>{props.children}</> : <Spinner />}
    </section>
  )
}

PreLoader.propTypes = {
  children: PropTypes.element.isRequired,
  source: PropTypes.objectOf(
    PropTypes.string.isRequired
  )
}

export default PreLoader
