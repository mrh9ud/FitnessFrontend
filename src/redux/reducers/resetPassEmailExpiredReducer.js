import { RESET_PASSWORD_PERIOD_EXPIRED, PASSWORD_RESET_EMAIL_RESENT } from '../actions/actionType'

const resetPassEmailExpiredReducer = (state=null, action) => {
    switch(action.type) {
        case RESET_PASSWORD_PERIOD_EXPIRED:
            return action.payload
        case PASSWORD_RESET_EMAIL_RESENT:
            return null
        default:
            return state
    }
}

export default resetPassEmailExpiredReducer