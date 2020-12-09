import { SET_MUSCLE_CATEGORIES } from "../actions/actionType"

function muscleCategoriesReducer(state=[], action) {
  switch(action.type) {
    case SET_MUSCLE_CATEGORIES:
      return [ ...state, action.payload ]
    default:
      return state
  }
}

export default muscleCategoriesReducer