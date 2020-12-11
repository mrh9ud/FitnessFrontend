import { CLEAR_EXERCISES, SET_EXERCISES } from '../actions/actionType'

const exercisesReducer = (state=[], action) => {
  switch(action.type) {
    case SET_EXERCISES:
      return [ ...state, ...action.payload ]
    case CLEAR_EXERCISES:
      return []
    default:
      return state
  }
}

export default exercisesReducer