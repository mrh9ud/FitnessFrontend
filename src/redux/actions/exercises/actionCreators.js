import { ip } from '../../../helpers/ipPort'
import { loading, loadingComplete, fetchHeaders } from '../../../helpers/Functions'
import { SET_EXERCISES, SET_MORE_EXERCISES, CLEAR_EXERCISES, ADD_WORKOUT, SET_EXERCISE, RESET_PAGE_NUM, LOADING_EXTRA_DATA, LOADING_EXTRA_DATA_COMPLETE, INCREASE_PAGE_NUM, ADD_POTENTIAL_EXERCISE, REMOVE_POTENTIAL_EXERCISE, CLEAR_ALL_POTENTIAL_EXERCISES } from '../actionType'

const exerciseQueryUrl = `${ip}/api/v1/exercise_query`
const workoutCreationUrl = `${ip}/api/v1/create_own_workout`

function setExercises(data) { return { type: SET_EXERCISES, payload: data } }

function setMoreExercises(data) { return { type: SET_MORE_EXERCISES , payload: data } }

function clearExercises() { return { type: CLEAR_EXERCISES } }

function setExercise(data) { return { type: SET_EXERCISE, payload: data } }

function addPotentialExercise(data) { return { type: ADD_POTENTIAL_EXERCISE, payload: data } }

function clearAllPotentialExercises() { return { type: CLEAR_ALL_POTENTIAL_EXERCISES } }

function removePotentialExercise(data) { return { type: REMOVE_POTENTIAL_EXERCISE, payload: data} }

function increasePageNum() { return { type: INCREASE_PAGE_NUM } }

function resetPageNum() { return { type: RESET_PAGE_NUM } }

function loadingExtraData() { return { type: LOADING_EXTRA_DATA } }

function loadingExtraDataComplete() { return { type: LOADING_EXTRA_DATA_COMPLETE } }

function addWorkoutToUser(data) { return { type: ADD_WORKOUT, payload: data } }

function createOwnWorkout(exercises, currentUser, workoutName) {
  debugger
  return dispatch => {
    const createWorkoutConfigObj = {
      method: "POST",
      headers: fetchHeaders,
      body: JSON.stringify({workout: { exercises, user: currentUser, name: workoutName } })
    }
    dispatch(loading())
    fetch(workoutCreationUrl, createWorkoutConfigObj).then(resp => resp.json())
      .then(data => {
        if (!data.error) {
          dispatch(addWorkoutToUser(data))
          dispatch(clearAllPotentialExercises)
          dispatch(loadingComplete())
        } else {
          dispatch(loadingComplete())
          alert(data.message)
        }
      })
      .catch(() => alert("Error Creating Workout"))
    }
}

function queryExercises(muscleGroups, focus, searchQuery, difficulty, pageNum, newQuery) {
  const exerciseQueryConfigObj = {
    method: "POST",
    headers: fetchHeaders,
    body: JSON.stringify({ exercise: {difficulty: difficulty, muscle_groups: muscleGroups, focus: focus, search_query: searchQuery, page_num: pageNum } })
  }
  return dispatch => {
    if (newQuery) {
      dispatch(loading())
      dispatch(resetPageNum())
      dispatch(clearExercises())
    } else {
      dispatch(loadingExtraData())
      dispatch(increasePageNum())
    }
    fetch(exerciseQueryUrl, exerciseQueryConfigObj).then(resp => resp.json())
      .then(data => {
        dispatch(setExercises(data.exercises))
        dispatch(setMoreExercises(data.more_exercises))
        if (newQuery)
          dispatch(loadingComplete())
        else
          dispatch(loadingExtraDataComplete())
      })
      .catch(() => alert("Exercise Query Fetch Error"))
  }
}

export { queryExercises, removePotentialExercise, createOwnWorkout, clearAllPotentialExercises, setExercise, addPotentialExercise }