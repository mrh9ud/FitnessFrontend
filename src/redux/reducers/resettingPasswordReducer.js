import { RESET_PASSWORD, RESET_PASSWORD_COMPLETED } from "../actions/actionType"

const resettingPasswordReducer = (state=false, action) => {
    switch(action.type) {
        case RESET_PASSWORD:
            return true
        case RESET_PASSWORD_COMPLETED:
            return false
        default:
            return state
    }
}

export default resettingPasswordReducer