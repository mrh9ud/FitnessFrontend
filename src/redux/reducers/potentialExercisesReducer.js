import { ADD_POTENTIAL_EXERCISE, INCREASE_PAGE_NUM, RESET_PAGE_NUM, REMOVE_POTENTIAL_EXERCISE, CLEAR_ALL_POTENTIAL_EXERCISES } from "../actions/actionType";

const initialState = {
  exercises: [],
  pageNum: 0
}

const potentialExercisesReducer = (state=initialState, action) => {
  switch(action.type) {
    case ADD_POTENTIAL_EXERCISE:
      return { ...state, exercises: [ ...state.exercises, action.payload ] }
    case REMOVE_POTENTIAL_EXERCISE:
      return { ...state, exercises: [ ...state.exercises.filter(exercise => exercise.id !== action.payload) ] }
    case CLEAR_ALL_POTENTIAL_EXERCISES:
      return initialState
    case INCREASE_PAGE_NUM:
      return { ...state, pageNum: state.pageNum += 1 }
    case RESET_PAGE_NUM:
      return { ...state, pageNum: 0}
    default:
      return state
  }
}

export default potentialExercisesReducer