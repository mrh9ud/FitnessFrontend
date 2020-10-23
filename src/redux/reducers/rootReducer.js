import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer"
import workoutReducer from "./workoutReducer"
import resettingPasswordReducer from "./resettingPasswordReducer"

const rootReducer = combineReducers({
  currentUser: userReducer,
  loading: loadingReducer,
  workouts: workoutReducer,
  passwordResetting: resettingPasswordReducer
})

export default rootReducer