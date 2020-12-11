import { SET_MORE_EXERCISES } from '../actions/actionType'

const moreExercisesReducer = (state=true, action) => {
  switch(action.type) {
    case SET_MORE_EXERCISES:
      return action.payload
    default:
      return state
  }
}

export default moreExercisesReducer
