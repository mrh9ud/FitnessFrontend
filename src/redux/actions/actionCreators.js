import { LOADING, LOGIN } from './actionType'
import { Alert } from 'react-native'
import * as encryptor from '../../encryption/SecureStore.js'

const userLoginUrl = "http://10.0.0.68:3000/api/v1/login"

function loading() { return { type: LOADING } }

function loginUser(data) { return { type: LOGIN, payload: data } }

function verifyUserData(userObj) {
    return dispatch => {
        const userConfigObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json'
            },
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
                    Alert.alert("Cannot store credentials on device")
                }
            } else {
                Alert.alert(data.message)
        }})
        .catch(error => console.log(error.messages))
    }
}

export { verifyUserData }