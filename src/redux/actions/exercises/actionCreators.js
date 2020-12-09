import { ip } from '../../../helpers/ipPort'
import { loading, loadingComplete, fetchHeaders } from '../../../helpers/Functions'
import { SET_EXERCISES, CLEAR_EXERCISES } from '../actionType'

const exerciseQueryUrl = `${ip}/api/v1/exercise_query`

function setExercises(data) { return { type: SET_EXERCISES, payload: data } }

function clearExercises() { return { type: CLEAR_EXERCISES } }

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

export { queryExercises }
