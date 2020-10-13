import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer"

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingReducer
})

export default rootReducer