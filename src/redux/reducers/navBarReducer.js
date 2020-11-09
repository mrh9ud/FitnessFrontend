import { SET_MENU_OPTIONS } from "../actions/actionType";

function navBarReducer(state=[], action) {
  switch(action.type) {
    case SET_MENU_OPTIONS:
      return action.payload
    default:
      return state
  }
}

export default navBarReducer