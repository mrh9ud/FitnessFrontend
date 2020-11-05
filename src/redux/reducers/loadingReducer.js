import { LOADING, LOGIN, LOADING_COMPLETE } from '../actions/actionType'

const loadingReducer = (state=false, action) => {
    switch (action.type) {
      case LOADING:
        return true
      case LOADING_COMPLETE:
        return false
      case LOGIN:
        return false
      default:
        return state
    }
  }

export default loadingReducer