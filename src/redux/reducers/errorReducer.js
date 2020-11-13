import { LOGIN_ERROR, CLEAR_LOGIN_ERROR, RESET_PASSWORD_FORM_ERROR, CLEAR_RESET_PASSWORD_FORM_ERROR } from '../actions/actionType'

function errorReducer(
  state= {
    login: false,
    resetPasswordForm: false
  }, action
  ) {
  switch(action.type) {
    case LOGIN_ERROR:
      return { ...state, login: true }
    case CLEAR_LOGIN_ERROR:
      return { ...state, login: false }
    case RESET_PASSWORD_FORM_ERROR:
      return { ...state, resetPasswordForm: true }
    case CLEAR_RESET_PASSWORD_FORM_ERROR:
      return { ...state, resetPasswordForm: false }
    default:
      return state
  }
}

export default errorReducer