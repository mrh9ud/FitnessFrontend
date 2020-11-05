import { LOADING, LOGIN, LOADING_COMPLETE, LOG_OUT_USER, PASSWORD_RESET_EMAIL_RESENT, RESET_PASSWORD, RESET_PASSWORD_COMPLETED, RESET_PASSWORD_PERIOD_EXPIRED } from '../actionType'
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

function loadingComplete() { return { type: LOADING_COMPLETE } }

function loginUser(data) { return { type: LOGIN, payload: data } }

function logOutUser() { return { type: LOG_OUT_USER } }

function resetPassword() { return { type: RESET_PASSWORD } }

function resetPasswordPeriodExpired(data) { return { type: RESET_PASSWORD_PERIOD_EXPIRED, payload: data } }

function passwordResetEmailResent() { return { type: PASSWORD_RESET_EMAIL_RESENT } }

function resetPasswordCompleted() { return { type: RESET_PASSWORD_COMPLETED } }

function verifyUserData(userObj) {
    return dispatch => {
        const userConfigObj = {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify(userObj)
        }
        dispatch(loading())
        return fetch(userLoginUrl, userConfigObj).then(res => res.json())
        .then((data) => {
            if (!data.error) {
                if (encryptor.isSecureStorageAvailable()) {
                    if (data.user.resetting_password) {
                        dispatch(loginUser(data.user))
                        dispatch(resetPassword())
                        dispatch(loadingComplete())
                        return 'PASSWORD_RESET'
                    } else {
                        encryptor.setCredentials(data.jwt)
                        dispatch(loginUser(data.user))
                        return 'SUCCESS'
                    }
                } else {
                    alert("Cannot store credentials on your device. Update your device to continue.")
                    return false
                }
            } else {
                alert(data.message)
                return false
        }})
        .catch(error => alert(error))
    }
}

function verifyToken(token) {
    // encryptor.deleteCredentials()
    return dispatch =>  {
        dispatch(loading())
            return fetch(tokenVerificationUrl, {
            method: "GET",
            headers: {
                "Authentication": token
            }
        }).then(res => res.json())
        .then(data => { return data })
        .then(data => {
            dispatch(loginUser(data))
            dispatch(loadingComplete())
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
                    alert(data.message)
                } else {
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
                  dispatch(loginUser(data))
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
                        dispatch(passwordResetEmailResent())
                        alert(data.message)
                    } else {
                        alert("Cannot store credentials on your device. Update your device to continue.")
                    }
                } else {
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
                    return 'EXPIRED'
                } else if (!data.error) {
                    if (encryptor.isSecureStorageAvailable()) {
                        encryptor.setCredentials(data.jwt)
                        dispatch(resetPasswordCompleted())
                        dispatch(loginUser(data.user))
                        dispatch(loadingComplete())
                    } else {
                        alert("Cannot store credentials on your device. Update your device to continue.")
                    }
                } else {
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
                    alert(data.message)
                } else {
                    alert(data.message)
                }
            })
            .catch(error => alert(error))
    }
}

export { verifyUserData, verifyToken, createNewUser, logOutUser, updateUser, verifyEmailUsername, createNewPassword, changePassword }