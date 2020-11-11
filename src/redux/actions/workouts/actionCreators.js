import { ADD_WORKOUT, SET_NEXT_POTENTIAL_EXERCISE, LOADING_COMPLETE, LOADING, CREATE_POTENTIAL_WORKOUT, CLEAR_WORKOUT_QUESTION_RESPONSES, CLEAR_POTENTIAL_WORKOUT, SET_WORKOUT_QUESTION_RESPONSES } from '../actionType'

const ipPort = "http://10.0.0.68:3000"
const potentialWorkoutCreationUrl = `${ipPort}/api/v1/generate_potential_workout`
const workoutCreationUrl = `${ipPort}/api/v1/workouts`

const fetchHeaders = { "Content-Type": "application/json", "Accept": "application/json" }

function loading() { return { type: LOADING } }

function loadingComplete() { return { type: LOADING_COMPLETE } }

function clearPotentialWorkout() { return { type: CLEAR_POTENTIAL_WORKOUT } }

function createPotentialWorkout(data) { return { type: CREATE_POTENTIAL_WORKOUT, payload: data } }

function setNextPotentialExercise(exercise, index) { return { type: SET_NEXT_POTENTIAL_EXERCISE, payload: { exercise, index } } }

function setWorkoutQuestionResponses(data) { return { type: SET_WORKOUT_QUESTION_RESPONSES, payload: data } }

function addWorkoutToUser(data) { return { type: ADD_WORKOUT, payload: data } }

function clearWorkoutQuestionResponses() { return { type: CLEAR_WORKOUT_QUESTION_RESPONSES } }

function submitWorkoutQuestionnaire(answersObj, userObj) {
    return dispatch => {
        const answersConfigObj = {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify({ workout: answersObj, id: userObj.id})
        }
        dispatch(loading())
        fetch(potentialWorkoutCreationUrl, answersConfigObj).then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    dispatch(createPotentialWorkout(data))
                    dispatch(setWorkoutQuestionResponses(answersObj))
                    dispatch(loadingComplete())
                } else {
                    dispatch(loadingComplete())
                    alert(data.message)
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
                    dispatch(loadingComplete())
                } else {
                    alert(data.message)
                }
            })
            .catch(error => alert(error))
    }
}

export { submitWorkoutQuestionnaire, createNewWorkout, setNextPotentialExercise }
