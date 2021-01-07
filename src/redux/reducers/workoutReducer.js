import { ADD_WORKOUT, CLEAR_USER_WORKOUTS, REMOVE_WORKOUT, SET_EXERCISE_STAT, SWAP_EXERCISE, UPDATE_WORKOUT_NAME, SET_USER_WORKOUTS } from "../actions/actionType";

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
    case SET_EXERCISE_STAT:
      const weightStatUpdated = []
      state.map(workout => {
        if (workout.id === action.payload.workoutId) {
          let exercisesUpdated = workout.exercises.map(exercise => {
            if (exercise.id === action.payload.exerciseId) {
              if (exercise.stats) {
                let newWeightStat = [...exercise.stats]
                newWeightStat[action.payload.setNum - 1] = { ...newWeightStat[action.payload.setNum - 1], [action.payload.key]: action.payload.value }

                return { ...exercise, stats: newWeightStat }
              } else {
                return { ...exercise, stats: [{ [action.payload.key]: action.payload.value }] }
              }
            }
            return exercise
          })
          let updatedWorkout = { ...workout, exercises: exercisesUpdated }
          weightStatUpdated.push(updatedWorkout)
        } else
          weightStatUpdated.push(workout)
      })
      return weightStatUpdated
    case CLEAR_USER_WORKOUTS:
      return []
    default:
      return state
  }
}

export default workoutReducer