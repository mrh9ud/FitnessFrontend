import { combineReducers } from "redux";
import userReducer from "./userReducer";
import loadingReducer from "./loadingReducer"
import workoutReducer from "./workoutReducer"
import resettingPasswordReducer from "./resettingPasswordReducer"
import resetPassEmailExpiredReducer from "./resetPassEmailExpiredReducer"
import potentialWorkoutReducer from './potentialWorkoutReducer'
import workoutQuestionReducer from './workoutQuestionReducer'
import emailConfirmationReducer from './emailConfirmationReducer'
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  currentUser: userReducer,
  loading: loadingReducer,
  workouts: workoutReducer,
  passwordResetting: resettingPasswordReducer,
  resetPassEmailExpired: resetPassEmailExpiredReducer,
  workoutPending: potentialWorkoutReducer,
  workoutQuestionResponses: workoutQuestionReducer,
  emailPending: emailConfirmationReducer,
  error: errorReducer
})

export default rootReducer