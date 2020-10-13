import { LOADING, LOGIN } from '../actions/actionType'

const loadingReducer = (state=false, action) => {
    switch (action.type) {
      case LOADING:
        return true
      case LOGIN:
        return false
      default:
        return state
    }
  }

export default loadingReducer