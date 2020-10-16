import { LOGIN, LOG_OUT_USER } from '../actions/actionType'

function userReducer(state = null, action) {
  switch(action.type) {
    case LOGIN:
      return action.payload
    case LOG_OUT_USER:
      return null
    default:
      return state
  }
}

export default userReducer