import { LOADING, LOGIN_ERROR, SET_USER_WORKOUTS, CLEAR_WORKOUT_QUESTION_RESPONSES, CLEAR_POTENTIAL_WORKOUT, CLEAR_USER_WORKOUTS, CLEAR_LOGIN_ERROR, RESET_PASSWORD_FORM_ERROR, CLEAR_RESET_PASSWORD_FORM_ERROR, LOGIN, EMAIL_SENT, EMAIL_PENDING, LOADING_COMPLETE, CLEAR_USER_DATA, PASSWORD_RESET_EMAIL_RESENT, RESET_PASSWORD, RESET_PASSWORD_COMPLETED, RESET_PASSWORD_PERIOD_EXPIRED } from '../actionType'
import * as encryptor from '../../../encryption/SecureStore.js'

const ipPort = "http://10.0.0.68:3000"
const fetchHeaders = { "Content-Type": "application/json", "Accept": "application/json" }
const userLoginUrl = `${ipPort}/api/v1/login`
const tokenVerificationUrl = `${ipPort}/api/v1/profile`
const userCreationUrl = `${ipPort}/api/v1/users`
const userUpdateUrl = `${ipPort}/api/v1/users/`
const verifyUserEmailUsernameUrl = `${ipPort}/api/v1/verify_email_username`
const createNewPasswordUrl = `${ipPort}/api/v1/reset_password`
const changePasswordUrl = `${ipPort}/api/v1/change_password`

function loading() { return { type: LOADING } }

function loginError() { return { type: LOGIN_ERROR } }

function clearUserWorkouts() { return { type: CLEAR_USER_WORKOUTS } }

function setUserWorkouts(data) { return { type: SET_USER_WORKOUTS, payload: data } }

function clearPotentialWorkout() { return { type: CLEAR_POTENTIAL_WORKOUT } }

function clearWorkoutQuestionResponses() { return { type: CLEAR_WORKOUT_QUESTION_RESPONSES } }

function resetPasswordFormError() { return { type: RESET_PASSWORD_FORM_ERROR } }

function clearResetPasswordFormError() { return { type: CLEAR_RESET_PASSWORD_FORM_ERROR } }

function clearLoginError() { return { type: CLEAR_LOGIN_ERROR } }

function loadingComplete() { return { type: LOADING_COMPLETE } }

function emailPending() { return { type: EMAIL_PENDING } }

function emailSent() {  return { type: EMAIL_SENT } }

function loginUser(data) { return { type: LOGIN, payload: data } }

function resetPassword() { return { type: RESET_PASSWORD } }

function resetPasswordPeriodExpired(data) { return { type: RESET_PASSWORD_PERIOD_EXPIRED, payload: data } }

function passwordResetEmailResent() { return { type: PASSWORD_RESET_EMAIL_RESENT } }

function resetPasswordCompleted() { return { type: RESET_PASSWORD_COMPLETED } }

function clearUserData() { return { type: CLEAR_USER_DATA } }

function logOutUser() { 
    return dispatch => {
        encryptor.deleteCredentials()
        dispatch(clearPotentialWorkout())
        dispatch(clearWorkoutQuestionResponses())
        dispatch(clearUserWorkouts())
        dispatch(clearUserData())
    }
}

function verifyUserData(userObj) {
    return dispatch => {
        const userConfigObj = {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify(userObj)
        }
        dispatch(loading())
        fetch(userLoginUrl, userConfigObj).then(res => res.json())
        .then((data) => {
            if (!data.error) {
                if (encryptor.isSecureStorageAvailable()) {
                    if (data.user.resetting_password) {
                        dispatch(loadingComplete())
                        dispatch(resetPassword())
                    } else {
                        dispatch(loadingComplete())
                        encryptor.setCredentials(data.jwt)
                        dispatch(loginUser(data.user))
                        dispatch(setUserWorkouts(data.workouts))
                    }
                } else {
                    alert("Cannot store credentials on your device. Update your device to continue.")
                }
            } else {
                dispatch(loginError())
                alert(data.message)
        }})
        .catch(error => alert(error))
    }
}

function verifyToken(token) {
    return dispatch =>  {
        dispatch(loading())
            return fetch(tokenVerificationUrl, {
            method: "GET",
            headers: {
                "Authentication": token
            }
        }).then(res => res.json())
        .then(data => {
            dispatch(setUserWorkouts(data.workouts))
            dispatch(loginUser(data.user))
            return data
        })
        .catch(error => alert(error))
    }
}

function createNewUser(userData) {
    return dispatch => {
        const userConfigObj = {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify({ user: userData })
        }
        dispatch(loading())
        fetch(userCreationUrl, userConfigObj).then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    dispatch(emailPending())
                    alert(data.message)
                } else {
                    dispatch(loadingComplete())
                    alert(data.message.message)
                }
            })
            .catch(error => alert(error))
    }
}

function updateUser(userData, userId) {
    return dispatch => {
        const userConfigObj = {
            method: "PATCH",
            headers: fetchHeaders,
            body: JSON.stringify({ user: userData })
        }
        dispatch(loading())
        fetch(`${userUpdateUrl}${userId}`, userConfigObj).then(resp => resp.json())
          .then(data => {
              if (!data.error) {
                  dispatch(loginUser(data.user))
                  dispatch(setUserWorkouts(data.workouts))
                  dispatch(loadingComplete())
                  alert("Information Updated Successfully")
                } else {
                  alert(data.message.message) 
              }
          })
          .catch(error => alert(error))
        }
}

function verifyEmailUsername(userData) {
    return dispatch => {
        const userConfigObj = {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify({ user: userData})
        }
        dispatch(loading())
        fetch(verifyUserEmailUsernameUrl, userConfigObj).then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    if (encryptor.isSecureStorageAvailable()) {
                        dispatch(emailPending())
                        dispatch(passwordResetEmailResent())
                        alert(data.message)
                    } else {
                        alert("Cannot store credentials on your device. Update your device to continue.")
                    }
                } else {
                    dispatch(loginError())
                    alert(data.message)
                }
            })
            .catch(error => alert(error))
    }
}

function createNewPassword(userData) {
    return dispatch => {
        const userConfigObj = {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify({ user: userData })
        }
        dispatch(loading())
        return fetch(createNewPasswordUrl, userConfigObj).then(resp => resp.json())
            .then( data => {
                if (data.expired) {
                    dispatch(resetPasswordPeriodExpired(data))
                } else if (!data.error) {
                    if (encryptor.isSecureStorageAvailable()) {
                        encryptor.setCredentials(data.jwt)
                        dispatch(resetPasswordCompleted())
                        dispatch(loginUser(data.user))
                        dispatch(setUserWorkouts(data.workouts))
                    } else {
                        alert("Cannot store credentials on your device. Update your device to continue.")
                    }
                } else {
                    dispatch(resetPasswordFormError())
                    alert(data.message)
                }
            })
            .catch(error => alert(error))
    }
}

function changePassword(userData, userId) {
    return dispatch => {
        const userConfigObj = {
            method: "PATCH",
            headers: fetchHeaders,
            body: JSON.stringify({ user: {...userData, id: userId }})
        }
        dispatch(loading())
        fetch(changePasswordUrl, userConfigObj).then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    dispatch(loadingComplete())
                    alert(data.message)
                } else {
                    alert(data.message)
                }
            })
            .catch(error => alert(error))
    }
}

export { verifyUserData, resetPasswordCompleted, clearLoginError, clearResetPasswordFormError, emailSent, verifyToken, createNewUser, logOutUser, updateUser, verifyEmailUsername, createNewPassword, changePassword, loadingComplete }