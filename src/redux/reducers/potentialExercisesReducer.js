import { ADD_POTENTIAL_EXERCISE, REMOVE_POTENTIAL_EXERCISE, CLEAR_ALL_POTENTIAL_EXERCISES } from "../actions/actionType";

const potentialExercisesReducer = (state=[], action) => {
  switch(action.type) {
    case ADD_POTENTIAL_EXERCISE:
      return [ ...state, action.payload ]
    case REMOVE_POTENTIAL_EXERCISE:
      const filtered_exercises = state.filter(exercise => exercise.id !== action.payload)
    return filtered_exercises
    case CLEAR_ALL_POTENTIAL_EXERCISES:
      return []
    default:
      return state
  }
}

export default potentialExercisesReducer