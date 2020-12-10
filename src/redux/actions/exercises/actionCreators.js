import { ip } from '../../../helpers/ipPort'
import { loading, loadingComplete, fetchHeaders } from '../../../helpers/Functions'
import { SET_EXERCISES, CLEAR_EXERCISES, SET_EXERCISE, ADD_POTENTIAL_EXERCISE, REMOVE_POTENTIAL_EXERCISE, CLEAR_ALL_POTENTIAL_EXERCISES } from '../actionType'

const exerciseQueryUrl = `${ip}/api/v1/exercise_query`

function setExercises(data) { return { type: SET_EXERCISES, payload: data } }

function clearExercises() { return { type: CLEAR_EXERCISES } }

function setExercise(data) { return { type: SET_EXERCISE, payload: data } }

function addPotentialExercise(data) { return { type: ADD_POTENTIAL_EXERCISE, payload: data } }

function clearAllPotentialExercises() { return { type: CLEAR_ALL_POTENTIAL_EXERCISES } }

function removePotentialExercise(data) { return { type: REMOVE_POTENTIAL_EXERCISE, payload: data} }

clearAllPotentialExercises, removePotentialExercise

function queryExercises(muscleGroups, focus, searchQuery, difficulty) {
  const exerciseQueryConfigObj = {
    method: "POST",
    headers: fetchHeaders,
    body: JSON.stringify({ exercise: {difficulty: difficulty, muscle_groups: muscleGroups, focus: focus, search_query: searchQuery } })
  }
  return dispatch => {
    dispatch(loading())
    dispatch(clearExercises())
    fetch(exerciseQueryUrl, exerciseQueryConfigObj).then(resp => resp.json())
      .then(data => {
        dispatch(setExercises(data.exercises))
        dispatch(loadingComplete())
      })
      .catch(() => alert("Exercise Query Fetch Error"))
  }
}

export { queryExercises, removePotentialExercise, clearAllPotentialExercises, setExercise, addPotentialExercise }