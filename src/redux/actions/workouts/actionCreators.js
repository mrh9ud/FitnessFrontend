import {CREATE_NEW_WORKOUT, LOADING} from '../actionType'

const ipPort = "http://10.0.0.128:3000"
const workoutCreationUrl = `${ipPort}/api/v1/workouts`
const fetchHeaders = { "Content-Type": "application/json", "Accept": "application/json" }

function loading() { return { type: LOADING } }

function createNewWorkout(data) { return { type: CREATE_NEW_WORKOUT, payload: data }}

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
                dispatch(createNewWorkout(data))
            })
            .catch(error => alert(error))
    }
}

export { submitWorkoutQuestionnaire }