import { CREATE_NEW_WORKOUT } from "../actions/actionType";

function workoutReducer(state = [], action) {
    switch(action.type) {
        case CREATE_NEW_WORKOUT:
            return [...state, action.payload]
        default:
            return state
    }
}

export default workoutReducer