import { ADD_WORKOUT, CLEAR_USER_WORKOUTS, SET_USER_WORKOUTS } from "../actions/actionType";

function workoutReducer(state = [], action) {
    switch(action.type) {
        case ADD_WORKOUT:
            return [...state, action.payload]
        case SET_USER_WORKOUTS:
            return [...state, ...action.payload]
        case CLEAR_USER_WORKOUTS:
            return []
        default:
            return state
    }
}

export default workoutReducer