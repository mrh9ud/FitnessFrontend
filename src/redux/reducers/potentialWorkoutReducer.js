import { CREATE_POTENTIAL_WORKOUT, CLEAR_POTENTIAL_WORKOUT } from '../actions/actionType'

const potentialWorkoutReducer = (state=null, action) => {
  switch (action.type) {
    case CREATE_POTENTIAL_WORKOUT:
      return action.payload
    case CLEAR_POTENTIAL_WORKOUT:
      return null
    default:
      return state
  }
}

export default potentialWorkoutReducer