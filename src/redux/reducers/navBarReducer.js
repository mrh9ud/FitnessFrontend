import {CLEAR_MENU_OPTIONS, SET_MENU_OPTIONS} from "../actions/actionType";

function navBarReducer(state=[], action) {
  switch(action.type) {
    case SET_MENU_OPTIONS:
      return action.payload
    case CLEAR_MENU_OPTIONS:
      return []
    default:
      return []
  }
}

export default navBarReducer