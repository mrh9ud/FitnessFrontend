import { CREATE_POTENTIAL_WORKOUT, CLEAR_POTENTIAL_WORKOUT, GET_NEXT_POTENTIAL_EXERCISE, GET_PREVIOUS_POTENTIAL_EXERCISE } from '../actions/actionType'

const potentialWorkoutReducer = (state=[], action) => {
  switch (action.type) {
    case CREATE_POTENTIAL_WORKOUT:
      return action.payload
    case CLEAR_POTENTIAL_WORKOUT:
      return []
    case GET_NEXT_POTENTIAL_EXERCISE:
      const current_exercise = state.current_exercises.find(exercise => exercise.id === action.payload)
      const updated_current_exercises = state.current_exercises.filter(exercise => exercise.id !== current_exercise.id)
      const already_cycled_exercises = [...state, {
        ...state.already_cycled_exercises, current_exercise}
      ]
      const new_current_exercises = state.potential_exercises.find(exercise => {
        if (!state.current_exercises.includes(exercise) && !state.already_cycled_exercises.includes(exercise)) {
          const new_updated_exercises = [...updated_current_exercises, exercise]
          return new_updated_exercises
        } else {
          const next_exercise = already_cycled_exercises.slice(0, 1)[0]
          already_cycled_exercises = []
          const new_updated_exercises = [...updated_current_exercises, next_exercise]
          return new_updated_exercises
        }
      })
      return new_current_exercises
    case GET_PREVIOUS_POTENTIAL_EXERCISE:
    return state
    default:
      return state
  }
}

export default potentialWorkoutReducer