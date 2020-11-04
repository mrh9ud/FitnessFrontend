import { CREATE_NEW_WORKOUT, LOADING, CREATE_POTENTIAL_WORKOUT, CLEAR_POTENTIAL_WORKOUT, GET_NEXT_POTENTIAL_EXERCISE, GET_PREVIOUS_POTENTIAL_EXERCISE } from '../actionType'

const ipPort = "http://10.0.0.68:3000"
const workoutCreationUrl = `${ipPort}/api/v1/generate_potential_workout`
const fetchHeaders = { "Content-Type": "application/json", "Accept": "application/json" }

function loading() { return { type: LOADING } }

function createNewWorkout(data) { return { type: CREATE_NEW_WORKOUT, payload: data }}

function clearPotentialWorkout() { return { type: CLEAR_POTENTIAL_WORKOUT } }

function createPotentialWorkout(data) { return { type: CREATE_POTENTIAL_WORKOUT, payload: data } }

function getNextPotentialExercise(exerciseId) { return { type: GET_NEXT_POTENTIAL_EXERCISE, payload: exerciseId } }

function getPreviousPotentialExercise(exerciseId) { return { type: GET_PREVIOUS_POTENTIAL_EXERCISE, payload: exerciseId } }

function submitWorkoutQuestionnaire(answersObj, userObj) {
    return dispatch => {
        const answersConfigObj = {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify({ workout: answersObj, id: userObj.id})
        }
        dispatch(loading())
        fetch(workoutCreationUrl, answersConfigObj).then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    console.log(data)
                    dispatch(createPotentialWorkout(data))
                } else {
                    alert(data.message)
                }
            })
            .catch(error => alert(error))
    }
}


export { submitWorkoutQuestionnaire, getNextPotentialExercise, getPreviousPotentialExercise }