const initialState = {
  status: 'IDLE',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'IDLE':
    case 'LOADING':
    case 'LOADED':
      return action.payload
    default:
      return state
  }
}
