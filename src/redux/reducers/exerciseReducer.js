import { CLEAR_EXERCISES, SET_EXERCISES } from '../actions/actionType'

const exerciseReducer = (state=[], action) => {
  switch(action.type) {
    case SET_EXERCISES:
      return action.payload
    case CLEAR_EXERCISES:
      return []
    default:
      return state
  }
}

export default exerciseReducer