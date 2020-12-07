import { LOADING, LOADING_COMPLETE } from '../redux/actions/actionType'

const focusHelper = (workout) => {
  let focus = []
  let focusIcons = []
  if (workout.strength) {
    focus.push("Strength")
    focusIcons.push("weight")
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

function loading() { return { type: LOADING } }

function loadingComplete() { return { type: LOADING_COMPLETE } }

const fetchHeaders = { "Content-Type": "application/json", "Accept": "application/json" }

export { focusHelper, loading, loadingComplete, fetchHeaders }