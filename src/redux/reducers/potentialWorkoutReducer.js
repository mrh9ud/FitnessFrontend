import {
  CLEAR_POTENTIAL_WORKOUT,
  CREATE_POTENTIAL_WORKOUT,
  SET_NEXT_POTENTIAL_EXERCISE
} from '../actions/actionType'

const potentialWorkoutReducer = (state={}, action) => {
  switch (action.type) {
    case CREATE_POTENTIAL_WORKOUT:
      return action.payload
    case CLEAR_POTENTIAL_WORKOUT:
      return {}
    case SET_NEXT_POTENTIAL_EXERCISE:
      let current_exercises = [...state.current_exercises]
      current_exercises[action.payload.index] = action.payload.exercise
      return {...state, current_exercises: current_exercises}
    default:
      return state
  }
}

export default potentialWorkoutReducer