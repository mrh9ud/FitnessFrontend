import { LOADING, LOADING_COMPLETE } from '../redux/actions/actionType'
import { CommonActions } from "@react-navigation/native"

const focusHelper = (workout) => {
  let focus = []
  let focusIcons = []
  if (workout.strength) {
    focus.push("Strength")
    focusIcons.push("dumbbell")
  }
  if (workout.cardio) {
    focus.push("Cardio")
    focusIcons.push("shoe-print")
  }
  if (workout.flexibility) {
    focus.push("Flexibility")
    focusIcons.push("star-three-points")
  }
  return { focus: focus.join(", "), icons: focusIcons }
}

const sanitizeFocus = focus => {
  switch(focus) {
    case "str_cardio":
      return "strength/cardio"
    case "str_flex":
      return "strength/flexibility"
    default:
      return focus
  }
}

const workoutFocus = workout => {
  if (workout.strength && workout.cardio) {
      return "Strength and Cardio Mix"
  } else if (workout.strength) {
      return "Strength"
  }
  return "Cardio"
}

const resetStackHistory = (name, navigation) => {
  navigation.dispatch({
    ...CommonActions.reset({
      index: 0,
      routes: [{ name }]
    })
  });
}

const keyExtractor = item => item.id.toString()

const includesPotentialExercise = (potentialExercises, exerciseId) => potentialExercises.some(potentialExercise => potentialExercise.id === exerciseId ? true : false)

function loading() { return { type: LOADING } }

function loadingComplete() { return { type: LOADING_COMPLETE } }

const fetchHeaders = { "Content-Type": "application/json", "Accept": "application/json" }

const exerciseFocus = [{id: 1, focus: 'strength'}, {id: 2, focus: 'cardio'}, {id: 3, focus: 'flexibility'}]

const exerciseDifficulty = [{id: 1, name: 'beginner'}, {id: 2, name: 'intermediate'}, {id: 3, name: 'advanced'}, {id: 4, name: 'all'}]

const muscleGroupArray = [{id: 1, name: 'back'}, {id: 2, name: 'shoulders'}, {id: 3, name: 'chest'}, {id: 4, name: 'waist'}, {id: 5, name: 'legs'}, {id: 6, name: 'arms'}, {id: 7, name: "hips"}]

export { focusHelper, resetStackHistory, workoutFocus, keyExtractor, includesPotentialExercise, sanitizeFocus, loading, loadingComplete, exerciseFocus, exerciseDifficulty, muscleGroupArray, fetchHeaders }