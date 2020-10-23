import { LOADING, LOGIN, RESET_PASSWORD } from '../actions/actionType'

const loadingReducer = (state=false, action) => {
    switch (action.type) {
      case LOADING:
        return true
      case LOGIN:
        return false
      case RESET_PASSWORD:
        return false
      default:
        return state
    }
  }

export default loadingReducer