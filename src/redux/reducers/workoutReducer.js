import { ADD_WORKOUT, CLEAR_USER_WORKOUTS, UPDATE_WORKOUT_NAME, SET_USER_WORKOUTS } from "../actions/actionType";

function workoutReducer(state = [], action) {
    switch(action.type) {
        case ADD_WORKOUT:
            return [...state, action.payload]
        case SET_USER_WORKOUTS:
            return [...state, ...action.payload]
        case UPDATE_WORKOUT_NAME:
            const updatedWorkouts = [
                ...state, state.map(workout => {
                    if (workout.id === action.payload.id) {
                        workout.name = action.payload.name
                    }
                })
            ]
            return updatedWorkouts
        case CLEAR_USER_WORKOUTS:
            return []
        default:
            return state
    }
}

export default workoutReducer