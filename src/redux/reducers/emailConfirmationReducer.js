import { EMAIL_PENDING, EMAIL_SENT } from '../actions/actionType'

const emailConfirmationReducer = (state=false, action) => {
    switch (action.type) {
        case EMAIL_PENDING:
            return true
        case EMAIL_SENT:
            return false
        default:
            return state
    }
}

export default emailConfirmationReducer