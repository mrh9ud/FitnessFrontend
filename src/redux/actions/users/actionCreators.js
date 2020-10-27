import { LOADING, LOGIN, LOG_OUT_USER, RESET_PASSWORD, RESET_PASSWORD_COMPLETED } from '../actionType'
import * as encryptor from '../../../encryption/SecureStore.js'

const ipPort = "http://10.0.0.128:3000"
const fetchHeaders = { "Content-Type": "application/json", "Accept": "application/json" }
const userLoginUrl = `${ipPort}/api/v1/login`
const tokenVerificationUrl = `${ipPort}/api/v1/profile`
const userCreationUrl = `${ipPort}/api/v1/users`
const userUpdateUrl = `${ipPort}/api/v1/users/`
const verifyUserEmailUsernameUrl = `${ipPort}/api/v1/verify_email_username`
const createNewPasswordUrl = `${ipPort}/api/v1/reset_password`

function loading() { return { type: LOADING } }

function loginUser(data) { return { type: LOGIN, payload: data } }

function logOutUser() { return { type: LOG_OUT_USER } }

function resetPassword() { return { type: RESET_PASSWORD } }

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
    return dispatch =>  {
        dispatch(loading())
            return fetch(tokenVerificationUrl, {
            method: "GET",
            headers: {
                "Authentication": token
            }
        }).then(res => res.json())
        .then(data => { return data })
        .then(data => dispatch(loginUser(data)))
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
        fetch(createNewPasswordUrl, userConfigObj).then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    if (encryptor.isSecureStorageAvailable()) {
                        encryptor.setCredentials(data.jwt)
                        dispatch(resetPasswordCompleted())
                        dispatch(loginUser(data.user))
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

export { verifyUserData, verifyToken, createNewUser, logOutUser, updateUser, verifyEmailUsername, createNewPassword }