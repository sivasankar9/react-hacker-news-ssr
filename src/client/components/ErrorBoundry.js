import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
    })
  }

  render() {
    const { state } = this
    const { children, errorMsg } = this.props

    if (state.errorInfo) {
      return (
        <>
          <h2>Friendly Error Message.</h2>
          <p>{errorMsg}</p>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            <br />
            {state.error && state.error.toString()}
            {state.errorInfo.componentStack}
          </details>
        </>
      )
    }
    return children
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  errorMsg: PropTypes.string.isRequired,
}

ErrorBoundary.defaultProps = {
  errorMsg: '',
}
const mapStateToProps = (state) => ({
  errorMsg: state.error,
})

export default connect(mapStateToProps)(ErrorBoundary)
