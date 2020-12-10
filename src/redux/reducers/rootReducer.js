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
import navBarReducer from "./navBarReducer";
import exercisesReducer from "./exercisesReducer";
import exerciseReducer from "./exerciseReducer"
import potentialExercisesReducer from "./potentialExercisesReducer";

const rootReducer = combineReducers({
  currentUser: userReducer,
  loading: loadingReducer,
  workouts: workoutReducer,
  passwordResetting: resettingPasswordReducer,
  resetPassEmailExpired: resetPassEmailExpiredReducer,
  workoutPending: potentialWorkoutReducer,
  workoutQuestionResponses: workoutQuestionReducer,
  emailPending: emailConfirmationReducer,
  error: errorReducer,
  navBarMenuOptions: navBarReducer,
  exercises: exercisesReducer,
  exercise: exerciseReducer,
  potentialExercises: potentialExercisesReducer
})

export default rootReducer