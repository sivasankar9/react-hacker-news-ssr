import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

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

PreLoader.propTypes = {}

PreLoader.defaultProps = {}

export default PreLoader
