import { SET_WORKOUT_QUESTION_RESPONSES, CLEAR_WORKOUT_QUESTION_RESPONSES } from '../actions/actionType'

const workoutQuestionReducer = (state=null, action) => {
  switch(action.type) {
    case SET_WORKOUT_QUESTION_RESPONSES:
      return action.payload
    case CLEAR_WORKOUT_QUESTION_RESPONSES:
      return null
    default:
      return state
  }
}

export default workoutQuestionReducer