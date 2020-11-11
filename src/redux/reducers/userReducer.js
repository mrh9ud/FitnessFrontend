import { LOGIN, CLEAR_USER_DATA } from '../actions/actionType'

function userReducer(state = null, action) {
  switch(action.type) {
    case LOGIN:
      return action.payload
    case CLEAR_USER_DATA:
      return null
    default:
      return state
  }
}

export default userReducer