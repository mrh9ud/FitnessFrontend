import { ADD_WORKOUT, SET_NEXT_POTENTIAL_EXERCISE, SET_EXERCISE_STAT, REMOVE_WORKOUT, SWAP_EXERCISE, UPDATE_WORKOUT_NAME, LOADING_COMPLETE, LOADING, CREATE_POTENTIAL_WORKOUT, CLEAR_WORKOUT_QUESTION_RESPONSES, CLEAR_POTENTIAL_WORKOUT, SET_WORKOUT_QUESTION_RESPONSES } from '../actionType'
import { ip } from '../../../helpers/ipPort'
import { loading, loadingComplete, fetchHeaders } from '../../../helpers/Functions'
import * as RootNavigation from '../../../navigators/main/RootNavigation'

const potentialWorkoutCreationUrl = `${ip}/api/v1/generate_potential_workout`
const workoutCreationUrl = `${ip}/api/v1/workouts`
const workoutNameUpdateUrl = `${ip}/api/v1/workouts/`
const swapWorkoutExerciseUrl = `${ip}/api/v1/swap_workout_exercise`
const deleteWorkoutUrl = `${ip}/api/v1/workouts/`
const workoutCompletedUrl = `${ip}/api/v1/complete_workout`

function removeWorkout(data) { return { type: REMOVE_WORKOUT, payload: data } }

function swapExercise(data) { return { type: SWAP_EXERCISE, payload: data } }

function updateWorkoutName(data) { return { type: UPDATE_WORKOUT_NAME, payload: data } }

function clearPotentialWorkout() { return { type: CLEAR_POTENTIAL_WORKOUT } }

function createPotentialWorkout(data) { return { type: CREATE_POTENTIAL_WORKOUT, payload: data } }

function setNextPotentialExercise(exercise, index) { return { type: SET_NEXT_POTENTIAL_EXERCISE, payload: { exercise, index } } }

function setWorkoutQuestionResponses(data) { return { type: SET_WORKOUT_QUESTION_RESPONSES, payload: data } }

function addWorkoutToUser(data) { return { type: ADD_WORKOUT, payload: data } }

function clearWorkoutQuestionResponses() { return { type: CLEAR_WORKOUT_QUESTION_RESPONSES } }

function setExerciseStat(data) { return { type: SET_EXERCISE_STAT, payload: data } }

function submitWorkoutQuestionnaire(answersObj, userObj) {
    return dispatch => {
        const answersConfigObj = {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify({ workout: answersObj, id: userObj.id})
        }
        dispatch(loading())
        return fetch(potentialWorkoutCreationUrl, answersConfigObj).then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    dispatch(createPotentialWorkout(data))
                    dispatch(setWorkoutQuestionResponses(answersObj))
                    dispatch(loadingComplete())
                } else {
                    alert(data.message)
                    dispatch(loadingComplete())
                }
            })
            .catch(error => alert(error))
    }
}

function createNewWorkout(currentExercises, workoutQuestionResponses, currentUser) {
    return dispatch => {
        const workoutExercisesConfigObj = {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify({ exercises: currentExercises, workout: workoutQuestionResponses, user: currentUser })
        }
        dispatch(loading())
        fetch(workoutCreationUrl, workoutExercisesConfigObj).then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    dispatch(clearPotentialWorkout())
                    dispatch(clearWorkoutQuestionResponses())
                    dispatch(addWorkoutToUser(data))
                    RootNavigation.navigate("My Workouts", { screen: "Workout", params: { workoutId: data.id } })
                    dispatch(loadingComplete())
                } else {
                    alert(data.message)
                    dispatch(loadingComplete())
                }
            })
            .catch(error => alert(error))
    }
}

function changeWorkoutName(id, workoutName) {
    return dispatch => {
        const editWorkoutNameConfigObj = {
            method: "PATCH",
            headers: fetchHeaders,
            body: JSON.stringify({ workout: { ...workoutName, id } })
        }
        dispatch(loading())
        fetch(`${workoutNameUpdateUrl}${id}`, editWorkoutNameConfigObj).then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    dispatch(updateWorkoutName(data))
                    dispatch(loadingComplete())
                } else {
                    alert(data.message)
                    dispatch(loadingComplete())
                }
            })
            .catch(error => alert(error))
    }
}

function swapWorkoutExercise(workoutId, exerciseId) {
    return dispatch => {
        const swapWorkoutExerciseConfigObj = {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify({ workout: { id: workoutId, exerciseId } })
        }
        dispatch(loading())
        fetch(swapWorkoutExerciseUrl, swapWorkoutExerciseConfigObj).then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    dispatch(swapExercise(data))
                    dispatch(loadingComplete())
                } else {
                    alert(data.message)
                    dispatch(loadingComplete())
                }
            })
            .catch(error => alert(error))
    }
}

function deleteWorkout(workoutId) {
    return dispatch => {
        const deleteWorkoutConfigObj = {
            method: "DELETE",
            headers: fetchHeaders      
        }
        dispatch(loading())
        fetch(`${deleteWorkoutUrl}${workoutId}`, deleteWorkoutConfigObj)
            .then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    const integerId  = parseInt(data.id, 10)
                    dispatch(removeWorkout(integerId))
                    dispatch(loadingComplete())
                } else {
                    alert(data.message)
                    dispatch(loadingComplete())
                }
            })
            .catch(error => alert(error))
    }
}

function submitCompletedWorkout(workoutId, workoutExercises) {
  return dispatch => {
    const completedWorkoutConfigObj = {
      method: "POST",
      headers: fetchHeaders,
      body: JSON.stringify(
        { 
        workout: { 
          id: workoutId, 
          exercises: workoutExercises } 
        })
    }
  dispatch(loading())
  fetch(workoutCompletedUrl, completedWorkoutConfigObj)
    .then(resp => resp.json())
    .then(data => {
      if (!data.error) {
        dispatch(removeWorkout(workoutId))
        RootNavigation.navigate("My Workouts")
        dispatch(loadingComplete())
      } else {
        alert(data.message)
        dispatch(loadingComplete())
      }
    })
    .catch(error => alert(error))
  }
}

export { submitWorkoutQuestionnaire, submitCompletedWorkout, setExerciseStat, deleteWorkout, swapWorkoutExercise, createNewWorkout, changeWorkoutName, setNextPotentialExercise }