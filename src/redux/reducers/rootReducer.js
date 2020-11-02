import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer"
import workoutReducer from "./workoutReducer"
import resettingPasswordReducer from "./resettingPasswordReducer"
import resetPassEmailExpiredReducer from "./resetPassEmailExpiredReducer"
import potentialWorkoutReducer from './potentialWorkoutReducer'

const rootReducer = combineReducers({
  currentUser: userReducer,
  loading: loadingReducer,
  workouts: workoutReducer,
  passwordResetting: resettingPasswordReducer,
  resetPassEmailExpired: resetPassEmailExpiredReducer,
  workoutPending: potentialWorkoutReducer
})

export default rootReducer