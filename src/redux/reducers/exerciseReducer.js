import { SET_EXERCISE, CLEAR_EXERCISE } from '../actions/actionType'

const exerciseReducer = (state={}, action) => {
  switch(action.type) {
    case SET_EXERCISE:
      return { ...state, ...action.payload }
    case CLEAR_EXERCISE:
      return {}
    default:
      return state 
  }
}

export default exerciseReducer