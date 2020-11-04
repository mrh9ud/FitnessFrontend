import {
  CLEAR_POTENTIAL_WORKOUT,
  CREATE_POTENTIAL_WORKOUT,
  GET_NEXT_POTENTIAL_EXERCISE,
  GET_PREVIOUS_POTENTIAL_EXERCISE
} from '../actions/actionType'

const potentialWorkoutReducer = (state={}, action) => {
  switch (action.type) {
    case CREATE_POTENTIAL_WORKOUT:
      return action.payload
    case CLEAR_POTENTIAL_WORKOUT:
      return {}
    case GET_NEXT_POTENTIAL_EXERCISE:
      // get current exercise
      const current_exercise = state.current_exercises.find(exercise => exercise.id === action.payload)
      let already_cycled_exercises = []
      if (state.already_cycled_exercises.length === 0)
        already_cycled_exercises = [...state.current_exercises]
      else
        already_cycled_exercises = [...state.already_cycled_exercises]
      if (already_cycled_exercises.length === state.potential_exercises.length)
        already_cycled_exercises = [...state.current_exercises]
      const next_exercise = state.potential_exercises.find(exercise => {
        for (let i = 0; i < already_cycled_exercises.length; i++) {
          if (already_cycled_exercises[i].id === exercise.id)
            break
          else if (i === already_cycled_exercises.length - 1)
            return exercise
        }
      })
      const updated_already_cycled_exercises = [...already_cycled_exercises, next_exercise]
      // update current exercises
      let updated_current_exercises = [...state.current_exercises]
      const cur_exercise_index = state.current_exercises.indexOf(current_exercise)
      updated_current_exercises[cur_exercise_index] = next_exercise
      return {
        ...state,
        current_exercises: [...updated_current_exercises],
        already_cycled_exercises: [...updated_already_cycled_exercises]
      }
    case GET_PREVIOUS_POTENTIAL_EXERCISE:
      return state
    default:
      return state
  }
}

export default potentialWorkoutReducer