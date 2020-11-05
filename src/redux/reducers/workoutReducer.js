import { ADD_WORKOUT } from "../actions/actionType";

function workoutReducer(state = [], action) {
    switch(action.type) {
        case ADD_WORKOUT:
            return [...state, action.payload]
        default:
            return state
    }
}

export default workoutReducer