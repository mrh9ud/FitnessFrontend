import { ip } from '../../../helpers/ipPort'
import { loading, loadingComplete, fetchHeaders } from '../../../helpers/Functions'
import { SET_EXERCISES, CLEAR_EXERCISES } from '../actionType'

const exercisesUrl = `${ip}/api/v1/exercises`
const exerciseQueryUrl = `${ip}/api/v1/exercise_query`

function setExercises(data) { return { type: SET_EXERCISES, payload: data } }

function clearExercises() { return { type: CLEAR_EXERCISES } }

function fetchExercises() {
  return dispatch => {
    dispatch(loading())
    fetch(exercisesUrl).then(resp => resp.json())
      .then(data => {
        dispatch(setExercises(data.exercises))
        dispatch(loadingComplete())
      })
      .catch(() => {
        dispatch(loadingComplete())
        alert("Exercise Fetch Error")
      })
  }
}

function queryExercises(muscleGroups, focus, searchQuery, difficulty) {
  const exerciseQueryConfigObj = {
    method: "POST",
    headers: fetchHeaders,
    body: JSON.stringify({difficulty: difficulty, muscle_groups: muscleGroups, focus: focus, search_query: searchQuery })
  }
  console.log(muscleGroups, focus, searchQuery, difficulty)
  return dispatch => {
    dispatch(loading())
    dispatch(clearExercises())
    fetch(exerciseQueryUrl, exerciseQueryConfigObj).then(resp => resp.json())
      .then(data => {
        console.log(data)
        dispatch(setExercises(data.exercises))
        dispatch(loadingComplete())
      })
      .catch(() => alert("Exercise Query Fetch Error"))
  }
}

export { fetchExercises, queryExercises }