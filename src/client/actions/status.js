import actions from '../actions-list'

export default (payload) => ({
  type: actions.LOADING,
  payload,
})
