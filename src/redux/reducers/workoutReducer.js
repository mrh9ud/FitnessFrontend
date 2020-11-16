import { ADD_WORKOUT, CLEAR_USER_WORKOUTS, REMOVE_WORKOUT, SWAP_EXERCISE, UPDATE_WORKOUT_NAME, SET_USER_WORKOUTS } from "../actions/actionType";

function workoutReducer(state = [], action) {
  switch(action.type) {
    case ADD_WORKOUT:
      return [...state, action.payload]
    case SET_USER_WORKOUTS:
      return [...state, ...action.payload]
    case UPDATE_WORKOUT_NAME:
      const updatedWorkouts = state.map(workout => {
          if (workout.id === action.payload.id) {
            workout.name = action.payload.name
          }
          return workout
        })
      return updatedWorkouts
    case SWAP_EXERCISE:
      const workoutExerciseSwapped = 
        state.map(workout => {
          if (workout.id === action.payload.workout_id) {
            let workoutExercises = workout.exercises.map(exercise => {
              if (exercise.id === action.payload.old_exercise_id) {
                return action.payload.exercise
              }
              return exercise
            })
            return { ...workout, exercises: workoutExercises }
          }
          return workout
        })
      return workoutExerciseSwapped
    case REMOVE_WORKOUT:
      const oneWorkoutFewer = state.filter(workout => workout.id !== action.payload)
      return oneWorkoutFewer
    case CLEAR_USER_WORKOUTS:
      return []
    default:
      return state
  }
}

export default workoutReducer