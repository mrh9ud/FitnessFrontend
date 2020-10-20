import { LOADING, LOGIN, LOG_OUT_USER } from './actionType'
import * as encryptor from '../../encryption/SecureStore.js'

const ipPort = "http://10.0.0.128:3000"
const userLoginUrl = `${ipPort}/api/v1/login`
const tokenVerificationUrl = `${ipPort}/api/v1/profile`
const fetchHeaders = { "Content-Type": "application/json", "Accept": "application/json" }
const userCreationUrl = `${ipPort}/api/v1/users`

function loading() { return { type: LOADING } }

function loginUser(data) { return { type: LOGIN, payload: data } }

function logOutUser() { return { type: LOG_OUT_USER } }

function verifyUserData(userObj) {
    return dispatch => {
        const userConfigObj = {
            method: "POST",
            headers: fetchHeaders,
            body: JSON.stringify(userObj)
        }
        dispatch(loading())
        fetch(userLoginUrl, userConfigObj).then(res => res.json())
        .then(data => {
            if (!data.error) {
                if (encryptor.isSecureStorageAvailable()) {
                    encryptor.setCredentials(data.jwt)
                    dispatch(loginUser(data.user))
                } else {
                    alert("Cannot store credentials on device")
                }
            } else {
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
        .then(data => { return data })
        .then(data => dispatch(loginUser(data)))
            .catch(error => alert("testing"))
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
                    if (encryptor.isSecureStorageAvailable()) {
                        encryptor.setCredentials(data.jwt)
                        dispatch(loginUser(data.currentUser))
                    } else {
                        alert('Cannot store credentials on this device')
                    }
                } else {
                    alert(data.message.message)
                }
            })
            .catch(error => console.log(error.messages))
    }
}

function updateUser(userData) {
    return dispatch => {
        const userConfigObj = {
            method: "PATCH",
            headers: fetchHeaders,
            body: JSON.stringify({user: userData})
        }
        dispatch(loading())
        fetch(userCreationUrl, userConfigObj).then(resp => resp.json())
          .then(data => {
              console.log("error")
          })
    }
}

export { verifyUserData, verifyToken, createNewUser, logOutUser }