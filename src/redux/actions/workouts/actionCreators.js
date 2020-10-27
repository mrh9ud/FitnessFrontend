import { LOADING } from '../actionType'

const ipPort = "http://10.0.0.68:3000"
const workoutCreationUrl = `${ipPort}/api/v1/workouts`
const fetchHeaders = { "Content-Type": "application/json", "Accept": "application/json" }

function loading() { return { type: LOADING } }

function submitWorkoutQuestionnaire(answersObj, userObj) {
    return dispatch => {
        const answersConfigObj = {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify(answersObj)
        }
        dispatch(loading())
        fetch(workoutCreationUrl, answersConfigObj).then(resp => resp.json())
            .then(data => console.log(data))
            .catch(error => alert(error))
    }
}

export { submitWorkoutQuestionnaire }