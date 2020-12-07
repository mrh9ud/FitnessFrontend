import { SET_MUSCLE_CATEGORIES } from "../actions/actionType"

function muscleCategoriesReducer(state=null, action) {
  switch(action.type) {
    case SET_MUSCLE_CATEGORIES:
      return action.payload
    default:
      return state
  }
}

export default muscleCategoriesReducer