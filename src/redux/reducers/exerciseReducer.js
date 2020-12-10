import { SET_EXERCISE } from '../actions/actionType'

const exerciseReducer = (state={}, action) => {
  switch(action.type) {
    case SET_EXERCISE:
      return { ...state, ...action.payload }
    default:
      return state 
  }
}

export default exerciseReducer