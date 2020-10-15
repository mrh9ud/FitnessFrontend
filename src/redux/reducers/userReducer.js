import { LOGIN } from '../actions/actionType'

function userReducer(state = null, action) {
  switch(action.type) {
    case LOGIN:
      return action.payload
    default:
      return state
  }
}

export default userReducer